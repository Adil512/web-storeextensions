"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/brand";
import { useState } from "react";
import AuthButtons from "@/components/auth-buttons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-black tracking-tight text-zinc-900">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-zinc-700 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <AuthButtons />

          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold md:hidden"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-sm font-medium text-zinc-700 sm:px-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 hover:bg-zinc-50"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
