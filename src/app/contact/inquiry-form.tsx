"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { contact } from "@/content/site-content";

type FormState = { name: string; email: string; subject: string; message: string };
const INITIAL_STATE: FormState = { name: "", email: "", subject: "", message: "" };

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.subject) errors.subject = "Please choose a subject.";
  if (!values.message.trim() || values.message.trim().length < 10)
    errors.message = "Please enter at least 10 characters.";
  return errors;
}

export function InquiryForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-mint-500/30 bg-mint-500/10 p-6 text-center">
        <Icon name="check" className="mx-auto h-10 w-10 text-mint-600" />
        <p className="mt-3 font-display text-lg text-ink">Message received</p>
        <p className="mt-2 text-sm text-ink-soft">{contact.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="rounded-md bg-rose-500/10 px-4 py-3 text-sm text-rose-600">{contact.body}</p>

      <Field label="Full Name" id="contact-name" error={errors.name}>
        <input
          id="contact-name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={inputClass(!!errors.name)}
        />
      </Field>

      <Field label="Email Address" id="contact-email" error={errors.email}>
        <input
          id="contact-email"
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={inputClass(!!errors.email)}
        />
      </Field>

      <Field label="Subject" id="contact-subject" error={errors.subject}>
        <select
          id="contact-subject"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={inputClass(!!errors.subject)}
        >
          <option value="">Select a subject</option>
          {contact.subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" id="contact-message" error={errors.message}>
        <textarea
          id="contact-message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={inputClass(!!errors.message)}
        />
      </Field>

      <Button type="submit" variant="accent" className="w-full justify-center sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `mt-1 w-full rounded-sm border bg-surface px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-400 ${
    hasError ? "border-state-error" : "border-ink/15"
  }`;
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-state-error">
          {error}
        </p>
      )}
    </div>
  );
}
