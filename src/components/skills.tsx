"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "◐",
    name: "Discovery & Estratégia",
    description: "Problem framing, hipóteses e decisão orientada a evidências.",
    tools: ["Opp. Solution Tree", "RICE", "OKRs"],
  },
  {
    icon: "◎",
    name: "UX Research",
    description:
      "Entrevistas, testes de usabilidade e análise de dados qualitativos.",
    tools: ["Maze", "Hotjar", "Surveys"],
  },
  {
    icon: "◈",
    name: "Métricas de Produto",
    description:
      "Funil de produto, retenção, ativação e análise de comportamento.",
    tools: ["Amplitude", "GA4", "Mixpanel"],
  },
  {
    icon: "⬡",
    name: "Product Design",
    description: "Wireframes, prototipação e fluxos centrados em resultado.",
    tools: ["Figma", "FigJam", "Figma AI"],
  },
  {
    icon: "◇",
    name: "Facilitação & Produto",
    description:
      "Design Sprints, workshops e alinhamento com times de produto.",
    tools: ["Miro", "FigJam", "Notion"],
  },
  {
    icon: "◉",
    name: "Domínios de negócio",
    description:
      "Interesse e conhecimento em produtos financeiros e decisão do usuário.",
    tools: ["Fintech", "Gov Digital", "Enterprise"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
} as const;

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="border-b border-border py-16 px-6 sm:py-20 sm:px-8 md:py-24 md:px-12"
    >
      {/* Section header */}
      <h2
        className="font-bold mb-8 sm:mb-10 text-foreground"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 40px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
      >
        Habilidades &amp; ferramentas
      </h2>

      {/* Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            className="group bg-white rounded-2xl border border-border/50 p-7 transition-all duration-300 hover:shadow-lg"
            style={{ transition: "box-shadow 300ms, transform 300ms" }}
            whileHover={{ y: -2 }}
          >
            {/* Icon */}
            <div
              className="text-2xl mb-4 select-none leading-none"
              style={{ color: "#c8b89a" }}
              aria-hidden="true"
            >
              {skill.icon}
            </div>

            {/* Name */}
            <p
              className="text-[15px] font-medium text-foreground mb-2"
            >
              {skill.name}
            </p>

            {/* Description */}
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
              {skill.description}
            </p>

            {/* Tool pills */}
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
