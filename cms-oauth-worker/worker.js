/**
 * Decap CMS GitHub-backend OAuth provider, as a Cloudflare Worker.
 *
 * Why this exists: Premium's /admin (Decap CMS) used Netlify Identity + Git
 * Gateway, which only runs on Netlify's own infrastructure and cannot follow
 * the site to Hostinger. This Worker replaces it with Decap's GitHub backend
 * — /admin logs in straight against GitHub, independent of any host. See
 * MEMORY.md (2026-10-29) and public/admin/config.yml.
 *
 * Protocol implemented (the standard netlify-cms/decap-cms OAuth handshake):
 *   GET  /auth             -> redirect to GitHub's OAuth authorize screen
 *   GET  /callback?code=.. -> exchange the code for a token, postMessage it
 *                              back to the Decap CMS popup that opened us
 *
 * Required secrets (set with `wrangler secret put <NAME>`):
 *   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET — from a GitHub OAuth App whose
 *   "Authorization callback URL" is set to this Worker's /callback.
 */

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

function randomState() {
  return crypto.randomUUID();
}

function htmlResponse(body) {
  return new Response(body, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

async function handleAuth(request, env) {
  const url = new URL(request.url);
  const state = randomState();
  const redirectUri = `${url.origin}/callback`;

  const authorizeUrl = new URL(GITHUB_AUTHORIZE_URL);
  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const headers = new Headers({ Location: authorizeUrl.toString() });
  // Stash state in a short-lived cookie to check on /callback (basic CSRF guard).
  headers.append(
    "Set-Cookie",
    `decap_oauth_state=${state}; Max-Age=600; Path=/; HttpOnly; Secure; SameSite=Lax`
  );

  return new Response(null, { status: 302, headers });
}

function getCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? match[1] : null;
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = getCookie(request, "decap_oauth_state");

  if (!code) {
    return htmlResponse(renderError("Missing code from GitHub."));
  }
  if (!state || !expectedState || state !== expectedState) {
    return htmlResponse(renderError("State mismatch — please retry login."));
  }

  const tokenRes = await fetch(GITHUB_TOKEN_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenRes.ok || tokenData.error || !tokenData.access_token) {
    return htmlResponse(
      renderError(tokenData.error_description || "GitHub token exchange failed.")
    );
  }

  return htmlResponse(renderSuccess(tokenData.access_token));
}

function renderSuccess(token) {
  const payload = JSON.stringify({ token, provider: "github" });
  return `<!DOCTYPE html>
<html><head><title>Authorizing...</title></head>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:${payload.replace(/'/g, "\\'")}',
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`;
}

function renderError(message) {
  const safe = message.replace(/</g, "&lt;");
  return `<!DOCTYPE html>
<html><head><title>Authorization failed</title></head>
<body>
<p>GitHub authorization failed: ${safe}</p>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:error:${JSON.stringify({ message }).replace(/'/g, "\\'")}',
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") {
      return handleAuth(request, env);
    }
    if (url.pathname === "/callback") {
      return handleCallback(request, env);
    }
    return new Response("Decap CMS OAuth provider (Premium). Endpoints: /auth, /callback", {
      status: 200,
    });
  },
};
