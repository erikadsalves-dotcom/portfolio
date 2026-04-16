"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "4+", numericValue: 4, suffix: "+", label: "anos de mercado" },
  { value: "3", numericValue: 3, suffix: "", label: "setores de atuação" },
  { value: "2", numericValue: 2, suffix: "", label: "idiomas de trabalho" },
];

const processItems = [
  {
    number: "01",
    title: "Entender o problema real",
    description: "Questionar o que foi pedido antes de propor qualquer solução.",
  },
  {
    number: "02",
    title: "Discovery com usuários",
    description:
      "Entrevistas, observação e análise de comportamento para embasar decisões.",
  },
  {
    number: "03",
    title: "Hipóteses e priorização",
    description:
      "Definir o que construir primeiro com base em impacto e evidências.",
  },
  {
    number: "04",
    title: "Medir e iterar",
    description: "Validar com usuários reais e medir impacto no produto.",
  },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 40;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 px-6 sm:py-20 sm:px-8 md:py-24 md:px-12 border-b border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Title */}
          <h2
            className="font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            Produto é sobre{" "}
            <em
              className="italic not-italic"
              style={{ fontStyle: "italic", opacity: 0.7 }}
            >
              decisão
            </em>
            , não só tela.
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-5 mt-8">
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Sou Product Designer com experiência em projetos complexos nos
              setores público e privado, atuando na construção de produtos
              digitais voltados à tomada de decisão baseada em dados.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Ao longo da minha trajetória, tenho participado desde a descoberta
              do problema até a definição de soluções — conduzindo pesquisas,
              testes de usabilidade e estruturando fluxos que tornam jornadas
              complexas mais claras e eficientes.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Atualmente aprofundo minha atuação em métricas de produto e
              estratégia, com experiência em contextos internacionais e interesse
              especial em produtos financeiros.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-10 border-t border-border pt-8 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="font-serif text-foreground leading-none"
                  style={{ fontSize: "clamp(28px, 5vw, 38px)" }}
                >
                  <AnimatedCounter
                    target={stat.numericValue}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </span>
                <span className="text-[12px] text-muted-foreground leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Process list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col"
        >
          {processItems.map((item, index) => (
            <div
              key={item.number}
              className={`flex gap-5 py-5 ${
                index < processItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Number */}
              <span
                className="font-serif min-w-6 shrink-0 pt-0.5"
                style={{ fontSize: "11px", color: "#c8b89a" }}
              >
                {item.number}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <span className="font-medium text-[14px] text-foreground leading-snug">
                  {item.title}
                </span>
                <span className="text-[13px] text-muted-foreground leading-relaxed">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
