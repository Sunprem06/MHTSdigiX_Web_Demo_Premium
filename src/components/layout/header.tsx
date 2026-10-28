"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { brand, nav, departments } from "@/content/site-content";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <GlassPanel variant="bar" className="w-full">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-3 lg:px-10">
          <Link href="/" className="flex items-center gap-2 font-display text-lg text-harbor-600">
            <Icon name="cross" className="h-6 w-6 text-rose-500" />
            {brand.shortName}
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            {nav.map((item) =>
              item.label === "Departments" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDeptOpen(true)}
                  onMouseLeave={() => setDeptOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 font-body text-sm text-ink-soft transition-colors hover:text-harbor-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-400 rounded-sm"
                    aria-expanded={deptOpen}
                    aria-controls="departments-dropdown"
                    onClick={() => setDeptOpen((open) => !open)}
                  >
                    Departments
                    <Icon name="chevron-down" className="h-4 w-4" />
                  </button>
                  {deptOpen && (
                    <GlassPanel
                      variant="dropdown"
                      id="departments-dropdown"
                      className="absolute left-1/2 top-full z-20 mt-2 w-72 -translate-x-1/2 p-3"
                    >
                      <ul className="grid gap-1">
                        {departments.departments.map((dept) => (
                          <li key={dept.slug}>
                            <Link
                              href={`/departments/${dept.slug}`}
                              className="block rounded-sm px-3 py-2 text-sm text-ink-soft hover:bg-harbor-500/10 hover:text-harbor-600"
                              onClick={() => setDeptOpen(false)}
                            >
                              {dept.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/departments"
                        className="mt-1 block rounded-sm px-3 py-2 text-sm font-semibold text-mint-600 hover:bg-mint-500/10"
                        onClick={() => setDeptOpen(false)}
                      >
                        View all departments →
                      </Link>
                    </GlassPanel>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm text-ink-soft transition-colors hover:text-harbor-600"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href="/appointment" variant="accent">
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-sm text-ink xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} label={mobileOpen ? "Close menu" : "Open menu"} />
          </button>
        </div>
      </GlassPanel>

      {mobileOpen && (
        <GlassPanel variant="dropdown" id="mobile-nav" className="xl:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-2.5 text-sm text-ink-soft hover:bg-harbor-500/10 hover:text-harbor-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/appointment" variant="accent" className="mt-2 w-full justify-center">
              Book Appointment
            </Button>
          </nav>
        </GlassPanel>
      )}
    </header>
  );
}
