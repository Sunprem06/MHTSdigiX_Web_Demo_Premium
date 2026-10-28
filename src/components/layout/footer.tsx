import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icons";
import { brand, nav, footerNav, footer } from "@/content/site-content";

const SOCIAL_ICON: Record<string, IconName> = {
  Facebook: "facebook",
  Instagram: "instagram",
  LinkedIn: "linkedin",
  YouTube: "youtube",
};

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface-dim">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-lg text-harbor-600">
              <Icon name="cross" className="h-5 w-5 text-rose-500" />
              {brand.shortName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{footer.about}</p>
            <div className="mt-4 flex gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink/10 text-ink-soft hover:border-harbor-500 hover:text-harbor-600"
                  title={`${s.label} (placeholder link)`}
                >
                  <Icon name={SOCIAL_ICON[s.label] ?? "mail"} label={s.label} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-sm font-semibold text-ink">Explore</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft hover:text-harbor-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-sm font-semibold text-ink">More</p>
            <ul className="mt-3 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft hover:text-harbor-600">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/appointment" className="text-sm text-ink-soft hover:text-harbor-600">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-sm font-semibold text-ink">Contact (placeholder)</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li className="flex items-start gap-2">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0" />
                {footer.contactPlaceholder.phone}
              </li>
              <li className="flex items-start gap-2">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
                {footer.contactPlaceholder.email}
              </li>
              <li className="flex items-start gap-2">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0" />
                {footer.contactPlaceholder.address}
              </li>
            </ul>
            <p className="mt-3 rounded-sm bg-rose-500/10 px-3 py-2 text-xs text-rose-600">
              {footer.contactPlaceholder.emergencyNote}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink-faint">
          <p>
            © {new Date().getFullYear()} {brand.name} — {brand.demoDisclosure}. {brand.demoNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
