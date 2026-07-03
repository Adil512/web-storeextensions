"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type SessionUser = { id: string; email?: string };

function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function AuthButtons() {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const loadUser = async () => {
      const data = (await supabase.auth.getUser()).data;
      if (data.user) {
        setUser({ id: data.user.id, email: data.user.email });
      }
    };
    void loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event: unknown, session: { user?: SessionUser } | null) => {
      const sessionUser = session?.user;
      setUser(sessionUser ? { id: sessionUser.id, email: sessionUser.email } : null);
    });

    return () => listener.subscription.unsubscribe();
  }, [supabase.auth]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(t)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const handleSignOut = async () => {
    setOpen(false);
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={user ? "Account menu" : "Sign in menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
        onClick={() => setOpen((v) => !v)}
      >
        <ProfileIcon />
      </button>

      {open ? (
        <div
          className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] rounded-xl border border-zinc-200 bg-white py-1 shadow-lg shadow-zinc-900/5"
          role="menu"
        >
          {user ? (
            <>
              <Link
                href="/dashboard"
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
              <button
                type="button"
                role="menuitem"
                className="block w-full px-4 py-2.5 text-left text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => void handleSignOut()}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth"
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/auth"
                role="menuitem"
                className="block px-4 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 hover:text-orange-700"
                onClick={() => setOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
