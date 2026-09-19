import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { canonicalUrl } from "@/lib/site-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us – Web Store Extensions",
    description:
      "Web Store Extensions is a platform built for browser extension developers to list, promote, buy, and sell browser extensions.",
    alternates: { canonical: await canonicalUrl("/about") },
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-[50vh] bg-zinc-50">
      <section className="relative overflow-hidden border-b border-zinc-200/90 bg-gradient-to-b from-white via-zinc-50 to-zinc-100/80">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700/90">About Us</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            About Web Store Extensions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700 sm:text-xl">
            Web Store Extensions is a platform built for browser extension developers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-6 text-base leading-relaxed text-zinc-700 sm:text-lg">
            <p>
              We created it to give developers a place to{" "}
              <strong className="font-semibold text-zinc-950">list, promote, buy, and sell browser extensions</strong>.
            </p>

            <p>
              Developers can list their extensions for free, even if they are not looking to sell them. A listing gives
              an extension another place to be discovered and can help it reach more users.
            </p>

            <p>
              If you want to sell an extension, you can also use the platform to connect with potential buyers.
            </p>

            <div className="rounded-xl border border-orange-100 bg-orange-50/60 p-4 sm:p-5">
              <p className="text-base text-zinc-900 sm:text-lg">
                Our goal is simple:{" "}
                <strong className="font-bold text-orange-950">
                  help browser extensions get discovered, used, and sold.
                </strong>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-orange-600 hover:to-orange-700"
            >
              List your extension free
            </Link>
            <Link
              href="/sell"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              Sell an extension
            </Link>
          </div>
        </div>

        {/* Team Image */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="relative h-64 w-full bg-zinc-100 sm:h-80 lg:h-96">
            <Image
              src="/our-team.webp?v=1"
              alt="Our team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>
    </div>
  );
}
