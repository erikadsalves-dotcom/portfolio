"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroShader } from "@/components/ui/hero-section-with-smooth-bg-shader";

const WARM_COLORS = [
  "#d4c5a9",
  "#f0ede8",
  "#c8b89a",
  "#e8dfd0",
  "#b8a88a",
  "#e0ddd8",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const popIn = (delay: number) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <HeroShader
      colors={WARM_COLORS}
      distortion={0.35}
      swirl={0.5}
      speed={0.35}
      veilOpacity="bg-white/50"
      className="min-h-screen w-full"
    >
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-5 py-20 sm:px-6 sm:py-24">
        {/* ── Photo area with floating badges ── */}
        <div className="relative mb-8 flex items-center justify-center sm:mb-10">
          {/* Badge: experience */}
          <motion.div
            {...popIn(0.6)}
            className="absolute -left-4 -top-6 z-20 flex flex-col rounded-2xl bg-white/70 px-4 py-2.5 shadow-lg backdrop-blur-md"
            style={{ minWidth: "130px" }}
          >
            <span
              className="leading-none text-foreground"
              style={{ fontFamily: "var(--font-editorial)", fontSize: "26px" }}
            >
              4+
            </span>
            <span className="mt-0.5 text-[11px] tracking-wide text-foreground/60">
              anos de experiência
            </span>
          </motion.div>

          {/* Circular photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [-5, 5, -5] }}
            transition={{
              opacity: { duration: 0.6, ease: "easeOut", delay: 0 },
              y: { delay: 0, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-10 overflow-hidden rounded-full"
            style={{
              width: "clamp(140px, 18vw, 260px)",
              height: "clamp(140px, 18vw, 260px)",
              border: "3px solid rgba(255,255,255,0.5)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
            }}
          >
            <Image
              src="/images/foto-portfolio.webp"
              alt="Érika de Sousa Alves — Product Designer"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* Badge: available */}
          <motion.div
            {...popIn(0.75)}
            className="absolute -bottom-5 -right-6 z-20 flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-2.5 shadow-lg backdrop-blur-md"
          >
            <span
              className="h-2 w-2 flex-shrink-0 rounded-full"
              style={{
                background: "#4caf7d",
                boxShadow: "0 0 0 3px rgba(76,175,125,0.25)",
              }}
            />
            <span className="whitespace-nowrap text-xs text-foreground/80">
              Disponível para projetos
            </span>
          </motion.div>
        </div>

        {/* ── Tag ── */}
        <motion.span
          {...fadeUp(0.15)}
          className="mb-8 inline-block text-[11px] uppercase tracking-[0.25em] text-foreground/45"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Product Designer · Fortaleza, CE
        </motion.span>

        {/* ════════════════════════════════════════════
            CREATIVE MIXED-FONT TITLE
            "Do problema à decisão certa."
            ════════════════════════════════════════════ */}
        <div className="mb-8 text-center">
          {/* Line 1: "Do problema" — Syne bold, halftone dot-matrix */}
          <motion.div {...fadeUp(0.25)} className="overflow-hidden">
            <span
              className="text-halftone block font-bold uppercase leading-[0.85]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 8vw, 120px)",
                letterSpacing: "-0.02em",
              }}
            >
              Do problema
            </span>
          </motion.div>

          {/* Line 2: "à decisão" — Instrument Serif italic */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex items-baseline justify-center italic leading-[0.9] text-foreground"
            style={{
              fontFamily: "var(--font-editorial)",
              fontSize: "clamp(48px, 9vw, 130px)",
            }}
          >
            à decisão
          </motion.div>

          {/* Line 3: "certa." — Syne 800 solid, strong finish */}
          <motion.div {...fadeUp(0.55)} className="overflow-hidden">
            <span
              className="block font-extrabold uppercase leading-[0.85] text-foreground"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 8vw, 120px)",
                letterSpacing: "-0.02em",
              }}
            >
              certa.
            </span>
          </motion.div>
        </div>

        {/* ── Description ── */}
        <motion.p
          {...fadeUp(0.7)}
          className="mb-10 max-w-md text-center text-sm leading-relaxed text-foreground/50 sm:text-base"
        >
          Foco em discovery, métricas e estratégia — transformando complexidade
          em produtos digitais que funcionam de verdade.
        </motion.p>

        {/* ── Buttons ── */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projetos"
            className="rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background no-underline transition-opacity duration-200 hover:opacity-75"
          >
            Ver projetos
          </a>
          <a
            href="#sobre"
            className="rounded-full border border-foreground/25 bg-transparent px-8 py-4 text-sm font-medium text-foreground/70 no-underline transition-all duration-200 hover:border-foreground/50 hover:text-foreground"
          >
            Sobre mim →
          </a>
        </motion.div>
      </div>
    </HeroShader>
  );
}
