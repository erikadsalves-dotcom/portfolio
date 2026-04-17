"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// ─── Mockup browser with auto-rotating screenshots ───────────────────────────
// width/height match each source file so next/image preserves the natural
// aspect ratio and can serve correctly-sized WebP variants.

const mockupImages = [
  { src: "/images/painel-monitoramento.webp", width: 1400, height: 7286 },
  { src: "/images/tela-login.webp", width: 1400, height: 995 },
  { src: "/images/funcionalidades-permitidas.webp", width: 1400, height: 1946 },
];

function MockupBrowser() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);

  // Auto-cycle through screenshots; pauses while hovered so viewers
  // can scroll through a full page without being yanked away.
  // Depends on `current` so the timer restarts whenever the active
  // screenshot changes — including manual clicks on the stepper.
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mockupImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused, current]);

  // Reset scroll to top whenever the active screenshot changes.
  useEffect(() => {
    screenRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="macbook-scale">
        <div className="device device-macbook-pro device-spacegray">
          <div className="device-frame">
            <div
              ref={screenRef}
              className="device-screen mockup-screen-scroll relative bg-white"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {mockupImages.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={`BigData Fortaleza — tela ${i + 1}`}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 768px) 90vw, 600px"
                  className="block h-auto w-full"
                  style={{ display: i === current ? "block" : "none" }}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
          <div className="device-stripe" />
          <div className="device-header" />
          <div className="device-sensors" />
          <div className="device-btns" />
          <div className="device-power" />
        </div>
      </div>

      {/* Stepper: active pill expands, inactives stay small.
          Clickable to jump to a specific screen. */}
      <div className="flex items-center gap-1.5">
        {mockupImages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ver tela ${i + 1} de ${mockupImages.length}`}
            aria-current={i === current ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrent(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-foreground/70"
                : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Tag pills ────────────────────────────────────────────────────────────────

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-foreground/15 px-3 py-1 text-[11px] tracking-[0.04em] text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24"
    >
      {/* Section header */}
      <motion.div
        className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          variants={headerVariants}
          className="font-bold text-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Projetos selecionados
        </motion.h2>
        <motion.div variants={headerVariants}>
          <Link
            href="/projetos"
            className="text-[13px] tracking-[0.04em] text-muted-foreground no-underline transition-colors duration-200 hover:text-foreground"
          >
            Ver todos →
          </Link>
        </motion.div>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* ── Card 1: BigData Fortaleza (featured, spans 2 cols) ── */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2"
        >
          <Link
            href="/case-bigdata"
            className="group block no-underline"
          >
            <div
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border transition-all duration-300 md:grid-cols-2"
              style={{
                background: "#fbf7ee",
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "scale(1.01)";
                el.style.boxShadow = "0 12px 40px 0 rgba(0,0,0,0.13)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "0 2px 12px 0 rgba(0,0,0,0.06)";
              }}
            >
              {/* Left: text content */}
              <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                <div className="flex flex-col gap-5">
                  <TagList items={["Data-driven", "Setor público", "Dashboard"]} />
                  <div>
                    <h3
                      className="mb-3 font-bold text-foreground"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "26px",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                      }}
                    >
                      BigData Fortaleza
                    </h3>
                    <p className="text-[14px] leading-relaxed tracking-[0.01em] text-muted-foreground">
                      Produto digital voltado à tomada de decisão baseada em dados
                      para gestores públicos. Conduzi pesquisas com usuários e
                      stakeholders para traduzir dados complexos em experiências
                      acessíveis e estratégicas.
                    </p>
                  </div>
                </div>
                <span className="text-[13px] tracking-[0.04em] text-foreground transition-opacity duration-200 group-hover:opacity-60">
                  Ver case completo →
                </span>
              </div>

              {/* Right: mockup browser */}
              <div className="flex items-center justify-center bg-[#ece2d0] p-6 md:p-8">
                <div className="w-full">
                  <MockupBrowser />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ── Card 2: Troubleshooting com IA — Dell ── */}
        <motion.div variants={itemVariants}>
          <div
            className="flex h-full cursor-default flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-border p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #e5decc 0%, #cfc3a8 100%)",
            }}
          >
            <div className="flex flex-col gap-5">
              <TagList items={["IA", "Enterprise", "Internacional"]} />
              <div>
                <h3
                  className="mb-3 font-bold text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "26px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  Troubleshooting com IA — Dell
                </h3>
                <p className="text-[14px] leading-relaxed tracking-[0.01em] text-muted-foreground">
                  Projeto internacional de diagnóstico assistido por inteligência
                  artificial para suporte técnico enterprise — desenhando fluxos
                  que reduzem o tempo de resolução de chamados críticos em escala
                  global.
                </p>
              </div>
            </div>
            <span className="text-[13px] tracking-[0.04em] text-muted-foreground">
              Em breve →
            </span>
          </div>
        </motion.div>

        {/* ── Card 3: Produto para administração federal ── */}
        <motion.div variants={itemVariants}>
          <div
            className="flex h-full cursor-default flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-border p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #ecdfcf 0%, #d6bfa4 100%)",
            }}
          >
            <div className="flex flex-col gap-5">
              <TagList items={["Gov Federal", "Sistemas complexos"]} />
              <div>
                <h3
                  className="mb-3 font-bold text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "26px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  Produto para administração federal
                </h3>
                <p className="text-[14px] leading-relaxed tracking-[0.01em] text-muted-foreground">
                  Sistema de gestão para órgão federal abrangendo fluxos complexos
                  de processos administrativos e múltiplos perfis de acesso em
                  ambiente regulado.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13px] tracking-[0.04em] text-muted-foreground">
                Em breve →
              </span>
              <span className="text-[11px] tracking-[0.06em] text-accent-foreground">
                Detalhes sob NDA
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
