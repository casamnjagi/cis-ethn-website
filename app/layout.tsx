import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIS-ETHN | Cultural Information System",
  description:
    "AI-Powered Cultural Information System for Embu and Tharaka Nithi communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#f7f4ed] text-[#17251d]">
        {/* =====================================================
            SITE HEADER
        ====================================================== */}

        <header className="sticky top-0 z-50 border-b border-[#d9d2c2] bg-[#f7f4ed]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
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

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">

              <Link
                href="/"
                className="transition hover:text-[#a25b28]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition hover:text-[#a25b28]"
              >
                About
              </Link>

              <Link
                href="/heritage"
                className="transition hover:text-[#a25b28]"
              >
                Heritage
              </Link>

              <Link
                href="/language"
                className="transition hover:text-[#a25b28]"
              >
                Language
              </Link>

              <Link
                href="/research"
                className="transition hover:text-[#a25b28]"
              >
                Research
              </Link>

              <Link
                href="/chatbot"
                className="transition hover:text-[#a25b28]"
              >
                AI Chatbot
              </Link>

            </nav>

            {/* =================================================
                EXPLORE BUTTON
            ================================================== */}

            <Link
              href="/chatbot"
              className="rounded-full bg-[#a25b28] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#87491f]"
            >
              Ask Kiembu AI
            </Link>

          </div>

          {/* ===================================================
              MOBILE NAVIGATION
          ==================================================== */}

          <div className="border-t border-[#d9d2c2] bg-[#f7f4ed] lg:hidden">

            <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3">

              <Link
                href="/"
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#e8e1d3] hover:text-[#a25b28]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#e8e1d3] hover:text-[#a25b28]"
              >
                About
              </Link>

              <Link
                href="/heritage"
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#e8e1d3] hover:text-[#a25b28]"
              >
                Heritage
              </Link>

              <Link
                href="/language"
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#e8e1d3] hover:text-[#a25b28]"
              >
                Language
              </Link>

              <Link
                href="/research"
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#e8e1d3] hover:text-[#a25b28]"
              >
                Research
              </Link>

              <Link
                href="/chatbot"
                className="whitespace-nowrap rounded-full bg-[#173f2a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#102c1e]"
              >
                AI Chatbot
              </Link>

            </nav>

          </div>
        </header>

        {/* =====================================================
            MAIN PAGE CONTENT
        ====================================================== */}

        <main className="min-h-[calc(100vh-80px)]">
          {children}
        </main>

        {/* =====================================================
            GLOBAL FOOTER
        ====================================================== */}

        <footer className="bg-[#102c1e] text-white">

          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

              {/* -----------------------------------------------
                  ABOUT
              ------------------------------------------------ */}

              <div className="lg:col-span-2">

                <div className="text-2xl font-bold">
                  CIS-ETHN
                </div>

                <p className="mt-4 max-w-xl leading-7 text-[#b9c8be]">
                  AI-Powered Cultural Information System for
                  Embu and Tharaka Nithi.
                </p>

                <p className="mt-4 text-sm leading-6 text-[#91a499]">
                  A research initiative focused on cultural
                  heritage, indigenous language preservation,
                  digital knowledge and responsible technology.
                </p>

              </div>

              {/* -----------------------------------------------
                  EXPLORE
              ------------------------------------------------ */}

              <div>

                <h3 className="font-semibold text-[#d7a44b]">
                  Explore
                </h3>

                <div className="mt-4 space-y-3 text-sm text-[#b9c8be]">

                  <Link
                    href="/"
                    className="block transition hover:text-white"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="block transition hover:text-white"
                  >
                    About
                  </Link>

                  <Link
                    href="/heritage"
                    className="block transition hover:text-white"
                  >
                    Cultural Heritage
                  </Link>

                  <Link
                    href="/language"
                    className="block transition hover:text-white"
                  >
                    Language
                  </Link>

                  <Link
                    href="/research"
                    className="block transition hover:text-white"
                  >
                    Research
                  </Link>

                  <Link
                    href="/chatbot"
                    className="block transition hover:text-white"
                  >
                    Kiembu AI Chatbot
                  </Link>

                </div>

              </div>

              {/* -----------------------------------------------
                  PROJECT
              ------------------------------------------------ */}

              <div>

                <h3 className="font-semibold text-[#d7a44b]">
                  Project
                </h3>

                <div className="mt-4 space-y-3 text-sm text-[#b9c8be]">

                  <div>
                    NRF Sponsored Research
                  </div>

                  <div>
                    Embu & Tharaka Nithi
                  </div>

                  <div>
                    Kenya
                  </div>

                  <div>
                    Digital Cultural Heritage
                  </div>

                  <div>
                    Indigenous Language Technology
                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                COPYRIGHT
            ================================================== */}

            <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[#82948a]">

              © {new Date().getFullYear()} CIS-ETHN.
              Cultural Information System for Embu and
              Tharaka Nithi.

            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}