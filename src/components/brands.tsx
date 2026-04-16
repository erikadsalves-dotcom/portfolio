"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Marcas com as quais já trabalhei.
 * Substitua `mark` por um <Image> quando tiver SVG/PNG real em /public/images/brands/
 */
const BRANDS = [
  { name: "Prefeitura de Fortaleza", mark: "Prefeitura de Fortaleza" },
  { name: "gov.br", mark: "gov.br" },
  { name: "Dell", mark: "DELL" },
  { name: "Universidade Federal do Ceará", mark: "UFC" },
  { name: "BigData Fortaleza", mark: "BigData Fortaleza" },
  { name: "Iracema Digital", mark: "Iracema Digital" },
];

// Duplicar a lista para criar o loop infinito sem corte
const LOOP = [...BRANDS, ...BRANDS];

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Marcas com as quais trabalhei"
      className="bg-background py-16 sm:py-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="mb-10 flex items-center justify-center gap-2 px-6 text-center sm:mb-12"
      >
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{
            background: "#4caf7d",
            boxShadow: "0 0 0 3px rgba(76,175,125,0.20)",
          }}
        />
        <p className="text-[13px] tracking-wide text-muted-foreground sm:text-sm">
          Tenho atuado como{" "}
          <span className="font-medium text-foreground">Product Designer</span>{" "}
          em projetos com
        </p>
      </motion.div>

      {/* Marquee — máscara nas bordas + loop infinito */}
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        }}
      >
        <div className="brands-marquee flex w-max items-center gap-16 sm:gap-20 md:gap-24">
          {LOOP.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex shrink-0 items-center justify-center"
              style={{ minWidth: "120px" }}
            >
              <span
                className="font-serif whitespace-nowrap text-foreground/55 transition-all duration-300 hover:text-foreground"
                style={{
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  letterSpacing: "-0.3px",
                }}
              >
                {brand.mark}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brands-marquee {
          animation: brands-scroll 38s linear infinite;
        }
        .group:hover .brands-marquee {
          animation-play-state: paused;
        }
        @keyframes brands-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .brands-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
