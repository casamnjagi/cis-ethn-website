"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Heritage",
    href: "/heritage",
  },
  {
    label: "Language & AI",
    href: "/language",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Kiembu AI",
    href: "/chatbot",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9d2c2] bg-[#f7f4ed]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173f2a] text-lg font-bold text-white">
            C
          </div>

          <div>
            <div className="text-xl font-bold tracking-tight text-[#173f2a]">
              CIS-ETHN
            </div>

            <div className="hidden text-[10px] uppercase tracking-[0.18em] text-[#6b756e] sm:block">
              Cultural Information System
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex">

          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "font-semibold text-[#a25b28]"
                    : "text-[#17251d] hover:text-[#a25b28]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

        </nav>

        {/* AI BUTTON */}
        <Link
          href="/chatbot"
          className="rounded-full bg-[#a25b28] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#87491f]"
        >
          Ask Kiembu AI
        </Link>

      </div>
    </header>
  );
}