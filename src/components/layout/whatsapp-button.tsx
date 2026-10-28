import { Icon } from "@/components/ui/icons";
import { contact } from "@/content/site-content";

export function WhatsAppButton() {
  const message = encodeURIComponent(contact.whatsappMessage);
  return (
    <a
      href={`https://wa.me/910000000000?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp us (placeholder number — concept demo)"
      className="fixed bottom-4 right-4 z-40 flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-mint-500 text-surface shadow-lift transition-transform duration-200 ease-editorial hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2"
    >
      <Icon name="whatsapp" label="Chat on WhatsApp (placeholder number)" className="h-6 w-6" />
    </a>
  );
}
