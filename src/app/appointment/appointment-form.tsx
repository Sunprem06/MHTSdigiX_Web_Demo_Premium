"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { appointment } from "@/content/site-content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  department: string;
  visitType: string;
  preferredTime: string;
  reason: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  department: "",
  visitType: "",
  preferredTime: "",
  reason: "",
};

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^[\d\s+()-]{7,}$/.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.department) errors.department = "Please choose a department.";
  if (!values.visitType) errors.visitType = "Please choose a visit type.";
  return errors;
}

export function AppointmentForm() {
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
    setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-mint-500/30 bg-mint-500/10 p-6 text-center">
        <Icon name="check" className="mx-auto h-10 w-10 text-mint-600" />
        <p className="mt-3 font-display text-lg text-ink">Request received</p>
        <p className="mt-2 text-sm text-ink-soft">{appointment.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="rounded-md bg-rose-500/10 px-4 py-3 text-sm text-rose-600">{appointment.body}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" id="apt-name" error={errors.name}>
          <input
            id="apt-name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-describedby={errors.name ? "apt-name-error" : undefined}
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Phone Number" id="apt-phone" error={errors.phone}>
          <input
            id="apt-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-describedby={errors.phone ? "apt-phone-error" : undefined}
            className={inputClass(!!errors.phone)}
          />
        </Field>
      </div>

      <Field label="Email Address" id="apt-email" error={errors.email}>
        <input
          id="apt-email"
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-describedby={errors.email ? "apt-email-error" : undefined}
          className={inputClass(!!errors.email)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Department" id="apt-department" error={errors.department}>
          <select
            id="apt-department"
            value={values.department}
            onChange={(e) => update("department", e.target.value)}
            aria-describedby={errors.department ? "apt-department-error" : undefined}
            className={inputClass(!!errors.department)}
          >
            <option value="">Select a department</option>
            {appointment.departmentOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Visit Type" id="apt-visit-type" error={errors.visitType}>
          <select
            id="apt-visit-type"
            value={values.visitType}
            onChange={(e) => update("visitType", e.target.value)}
            aria-describedby={errors.visitType ? "apt-visit-type-error" : undefined}
            className={inputClass(!!errors.visitType)}
          >
            <option value="">Select visit type</option>
            {appointment.visitTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Preferred Time" id="apt-time">
        <select
          id="apt-time"
          value={values.preferredTime}
          onChange={(e) => update("preferredTime", e.target.value)}
          className={inputClass(false)}
        >
          <option value="">No preference</option>
          {appointment.preferredTimeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Reason for Visit (optional)" id="apt-reason">
        <textarea
          id="apt-reason"
          rows={3}
          value={values.reason}
          onChange={(e) => update("reason", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <Button type="submit" variant="accent" className="w-full justify-center sm:w-auto">
        {status === "submitting" ? "Submitting…" : "Request Appointment"}
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
