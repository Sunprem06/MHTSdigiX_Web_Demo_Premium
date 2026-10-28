import { Icon } from "@/components/ui/icons";

/**
 * Shared non-medical-advice / fictional-content disclosure banner — see
 * RULES.md "Healthcare-specific honesty rules". Used on every page that
 * discusses symptoms, conditions, pricing, staff, or anything else that
 * could otherwise be mistaken for a real claim.
 */
export function DisclaimerBanner({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-rose-500/30 bg-rose-500/5 px-4 py-3 text-sm text-ink-soft">
      <Icon name="siren" className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
      <p>{text}</p>
    </div>
  );
}
