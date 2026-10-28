# Decap CMS OAuth provider (GitHub backend) for Premium

Replaces Netlify Identity + Git Gateway, which only works on Netlify's own
infrastructure, with Decap's GitHub backend so `/admin` can log in directly
against GitHub from anywhere the site is hosted (Hostinger included). See
`MEMORY.md` (2026-10-29) in the project root.

## One-time setup

1. **Create a GitHub OAuth App**
   GitHub -> Settings -> Developer settings -> OAuth Apps -> New OAuth App
   - Application name: `Beacon Ridge CMS (Premium)`
   - Homepage URL: `https://demo.premium.mhtsdigixr.com`
   - Authorization callback URL: `https://cms-auth.premium.mhtsdigixr.com/callback`
     (use whatever domain you bind the Worker to in step 3 — must end in `/callback`)
   - Save, then generate a **Client Secret**. Keep both the Client ID and
     Client Secret — you'll need them in step 2.

2. **Deploy this Worker**
   ```bash
   cd cms-oauth-worker
   npx wrangler login
   npx wrangler secret put GITHUB_CLIENT_ID
   npx wrangler secret put GITHUB_CLIENT_SECRET
   npx wrangler deploy
   ```

3. **Bind a custom domain** to the deployed Worker
   Cloudflare dashboard -> Workers & Pages -> `beacon-ridge-cms-oauth` ->
   Settings -> Triggers -> Custom Domains -> Add `cms-auth.premium.mhtsdigixr.com`
   (DNS for `mhtsdigixr.com` is already on Cloudflare, so this is a few clicks,
   no separate DNS record needed).

4. **Point config.yml at it** — already set in `../public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: Sunprem06/MHTSdigiX_Web_Demo_Premium
     branch: main
     base_url: https://cms-auth.premium.mhtsdigixr.com
     auth_endpoint: auth
   ```
   If you bind a different Worker domain, update `base_url` to match and the
   OAuth App's callback URL to `<that domain>/callback`.

5. **Collaborator access** — anyone who needs to log into `/admin` must be a
   collaborator (or org member with repo access) on
   `Sunprem06/MHTSdigiX_Web_Demo_Premium`, since the GitHub backend authorizes
   against real repo permissions, not a separate user list like Netlify
   Identity had.

## Verifying it works

Visit `https://demo.premium.mhtsdigixr.com/admin/`, click "Login with GitHub".
You should get a GitHub authorize popup, then land back in the CMS UI signed
in. A publish from the CMS commits directly to the `main` branch (editorial
workflow is still configured — it opens a draft via a GitHub branch instead
of a Netlify deploy preview).
