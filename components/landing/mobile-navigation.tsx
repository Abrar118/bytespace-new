"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export type NavigationItem = {
  label: string;
  href: string;
};

export function MobileNavigation({
  items,
}: {
  items: readonly NavigationItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="grid size-11 place-items-center rounded-full border border-white/30 text-white"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-[72px] z-50 rounded-2xl bg-white p-4 text-ink shadow-2xl"
        >
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-xl px-4 py-3 font-medium hover:bg-surface"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <span className="px-4 py-2">Sign In</span>
            <span className="rounded-full bg-brand-lime px-5 py-2 font-semibold text-ink">
              Join Us
            </span>
          </div>
        </nav>
      )}
    </div>
  );
}
