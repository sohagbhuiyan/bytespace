"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

const authLinks = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <nav className="container-page relative flex h-20 items-center justify-between md:h-[120px]">
      
        <Link href="/" className="flex items-center" aria-label="ByteSpace home">
          <Image
            src="/images/logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            preload
            className="h-8 w-auto md:h-[37px]"
          />
        </Link>

     
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {links.map((l, i) => (
            <li key={l.label}>
              <Link
                href={l.href}
                aria-current={i === 0 ? "page" : undefined}
                className={`text-base text-shuttle-50 transition-colors hover:text-lime ${
                  i === 0 ? "leading-[1.2] font-medium" : "leading-[1.6]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

    
        <div className="hidden items-center gap-6 md:flex">
          {authLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-base leading-6 text-shuttle-50 transition-colors hover:text-lime">
              {l.label}
            </Link>
          ))}
          <CartButton />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <CartButton />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1/2 left-0 h-0.5 w-5 bg-white transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                  open ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full origin-top bg-brand/95 backdrop-blur transition-all duration-200 md:hidden ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 text-white">
          {[...links, ...authLinks].map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base hover:bg-white/10"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function CartButton() {
  return (
    <button type="button" aria-label="Cart" className="transition-opacity hover:opacity-80">
      <Image src="/icons/bag.svg" alt="" width={24} height={24} />
    </button>
  );
}
