"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Animated background layer */}
      <motion.div
        className="absolute inset-0"
        animate={
          scrolled
            ? {
                backgroundColor: "rgba(255,255,255,0.70)",
                backdropFilter: "blur(24px)",
                borderBottomWidth: "1px",
                borderBottomColor: "hsl(var(--border) / 0.5)",
              }
            : {
                backgroundColor: "rgba(255,255,255,0)",
                backdropFilter: "blur(0px)",
                borderBottomWidth: "1px",
                borderBottomColor: "rgba(255,255,255,0)",
              }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ borderBottomStyle: "solid" }}
        aria-hidden="true"
      />

      {/* Nav content */}
      <nav className="relative mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-6 sm:py-4 md:px-12">
        {/* Logo */}
        <Link href="/" aria-label="Voltar ao início">
          <motion.span
            className="font-serif text-[24px] tracking-[-0.3px] text-foreground"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Érika.
          </motion.span>
        </Link>

        {/* Nav links — desktop only */}
        <ul className="hidden list-none items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <motion.div
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={href}
                  className="relative text-[13px] tracking-[0.04em] no-underline transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                  style={{
                    color: scrolled
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--foreground) / 0.6)",
                    transition: "color 0.35s ease",
                  }}
                >
                  {label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

        {/* CTA button — always visible */}
        <Link href="#contato" aria-label="Entre em contato">
          <motion.span
            className="inline-flex cursor-pointer items-center rounded-full px-5 py-2 text-[13px] tracking-[0.04em] no-underline"
            animate={
              scrolled
                ? {
                    backgroundColor: "hsl(var(--foreground))",
                    color: "hsl(var(--background))",
                    borderColor: "transparent",
                  }
                : {
                    backgroundColor: "rgba(255,255,255,0.20)",
                    color: "hsl(var(--foreground))",
                    borderColor: "rgba(255,255,255,0.30)",
                  }
            }
            transition={{ duration: 0.35, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, opacity: 0.88 }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: "1px solid",
              WebkitBackdropFilter: scrolled ? "blur(0px)" : "blur(8px)",
            }}
          >
            Contato
          </motion.span>
        </Link>
      </nav>
    </header>
  );
}
