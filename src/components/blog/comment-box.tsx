"use client";

import { useEffect, useState, type FormEvent } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";

type Comment = { name: string; message: string; postedAt: string };

/**
 * Demo/local-only comment UI — see ARCHITECTURE.md "Why no database/backend".
 * Comments live in this tab's sessionStorage only; nothing is sent to a
 * server, and nothing posted here is visible to any other visitor.
 */
export function CommentBox({ slug }: { slug: string }) {
  const storageKey = `beacon-ridge-demo-comments:${slug}`;
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(storageKey);
      if (stored) setComments(JSON.parse(stored) as Comment[]);
    } catch {
      // sessionStorage unavailable (private mode, etc.) — comment box still works for this view.
    }
  }, [storageKey]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please fill in both your name and a comment.");
      return;
    }
    setError("");
    const next = [...comments, { name: name.trim(), message: message.trim(), postedAt: "Just now" }];
    setComments(next);
    setName("");
    setMessage("");
    try {
      window.sessionStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Ignore — the comment still renders for this page view even if persistence fails.
    }
  }

  return (
    <div className="mt-10">
      <h2 className="font-display text-xl text-ink">Comments</h2>
      <p className="mt-1 text-xs text-ink-faint">
        Demo comment box — visible only in this browser tab for this page view, not shared with
        other visitors or stored on a server.
      </p>

      <ul className="mt-6 space-y-4">
        {comments.map((comment, i) => (
          <li key={i}>
            <GlassPanel variant="card" className="p-4">
              <p className="font-display text-sm text-ink">{comment.name}</p>
              <p className="text-xs text-ink-faint">{comment.postedAt}</p>
              <p className="mt-2 text-sm text-ink-soft">{comment.message}</p>
            </GlassPanel>
          </li>
        ))}
        {comments.length === 0 && (
          <li className="text-sm text-ink-faint">No comments yet in this session — be the first.</li>
        )}
      </ul>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3" noValidate>
        <div>
          <label htmlFor="comment-name" className="block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="comment-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-describedby={error ? "comment-error" : undefined}
            className="mt-1 w-full rounded-sm border border-ink/15 bg-surface px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-400"
          />
        </div>
        <div>
          <label htmlFor="comment-message" className="block text-sm font-medium text-ink">
            Comment
          </label>
          <textarea
            id="comment-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            aria-describedby={error ? "comment-error" : undefined}
            className="mt-1 w-full rounded-sm border border-ink/15 bg-surface px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-400"
          />
        </div>
        {error && (
          <p id="comment-error" className="text-sm text-state-error">
            {error}
          </p>
        )}
        <Button type="submit" variant="secondary">
          Post Comment (demo only)
        </Button>
      </form>
    </div>
  );
}
