"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { HeroShader } from "@/components/ui/hero-section-with-smooth-bg-shader";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface SectionMeta {
  id: string;
  label: string;
}

const SECTIONS: SectionMeta[] = [
  { id: "contexto", label: "Contexto" },
  { id: "usuarios", label: "Usuários" },
  { id: "papel", label: "Meu papel" },
  { id: "processo", label: "Processo" },
  { id: "decisoes", label: "Decisões" },
  { id: "telas", label: "Telas" },
  { id: "resultado", label: "Resultado" },
  { id: "reflexao", label: "Reflexão" },
];

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span
      style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
      className="text-xs font-medium tracking-widest uppercase mb-3 block"
    >
      {text}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(28px, 5vw, 36px)",
        lineHeight: 1.15,
      }}
      className="mb-6"
    >
      {children}
    </h2>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{
        background: "var(--light)",
        borderLeft: "3px solid var(--accent)",
      }}
      className="pl-5 py-4 pr-5 rounded-r-lg my-6 text-base italic"
    >
      {children}
    </blockquote>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function CaseBigData() {
  const [activeSection, setActiveSection] = useState<string>("contexto");
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* Scroll-reveal + active sidebar tracking */
  useEffect(() => {
    // Reveal animation
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // Active section tracking
    const sectionEls = SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sectionEls.forEach((el) => observerRef.current!.observe(el));

    return () => {
      revealObserver.disconnect();
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div
      style={{ background: "var(--background)", color: "var(--foreground)" }}
      className="min-h-screen"
    >
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO with shader background ── */}
      <HeroShader
        colors={["#d4c5a9", "#f0ede8", "#c8b89a", "#e8dfd0", "#b8a88a", "#e0ddd8"]}
        distortion={0.35}
        swirl={0.5}
        speed={0.3}
        veilOpacity="bg-white/55"
        className="!min-h-[auto]"
      >
      <section className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pt-16 sm:pt-20 pb-12 sm:pb-16">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-8"
        >
          <Link
            href="/#projetos"
            style={{ color: "var(--muted-foreground)" }}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            ← Voltar ao portfólio
          </Link>
        </motion.div>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[
            { label: "Case study", dark: true },
            { label: "Produto público", dark: false },
            { label: "Data-driven", dark: false },
            { label: "UX Research", dark: false },
            { label: "2021 – 2023", dark: false },
          ].map(({ label, dark }) => (
            <span
              key={label}
              style={
                dark
                  ? { background: "var(--foreground)", color: "var(--background)" }
                  : { background: "var(--light)", color: "var(--foreground)", border: "1px solid var(--border)" }
              }
              className="text-xs font-medium px-3 py-1 rounded-full tracking-wide"
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem,7vw,4.5rem)", lineHeight: 1.05, letterSpacing: "-1.5px" }}
          className="mb-6"
        >
          BigData{" "}
          <em style={{ color: "var(--muted-foreground)" }}>Fortaleza</em>
        </motion.h1>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.35 }}
          style={{ color: "var(--muted-foreground)", maxWidth: "640px" }}
          className="text-lg leading-relaxed mb-12"
        >
          Como ajudei a materializar uma plataforma de tomada de decisão baseada
          em dados para gestores públicos de Fortaleza — traduzindo complexidade
          em clareza.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.5 }}
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(8px)",
            borderRadius: "12px",
          }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {[
            { value: "4", label: "secretarias atendidas" },
            { value: "~30", label: "pessoas no time" },
            { value: "18 meses", label: "de projeto" },
            { value: "3 frentes", label: "de design" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className={`px-4 sm:px-6 py-4 sm:py-5 ${
                i % 2 === 1 ? "border-l border-border" : ""
              } ${i >= 2 ? "border-t border-border md:border-t-0" : ""} ${
                i >= 2 ? "md:border-l md:border-border" : ""
              }`}
            >
              <p
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-2xl sm:text-3xl mb-1"
              >
                {value}
              </p>
              <p style={{ color: "var(--muted-foreground)" }} className="text-sm">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
      </HeroShader>

      {/* ── BODY: sidebar + content ── */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pb-16 sm:pb-24">
        <div className="flex gap-10 lg:gap-16 items-start">

          {/* SIDEBAR */}
          <aside
            className="hidden lg:block flex-shrink-0 sticky top-20 self-start"
            style={{ width: "200px" }}
          >
            <p
              style={{ color: "var(--muted-foreground)" }}
              className="text-xs font-medium tracking-widest uppercase mb-4"
            >
              Nesta página
            </p>
            <nav className="flex flex-col gap-1">
              {SECTIONS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  style={
                    activeSection === id
                      ? {
                          borderLeft: "2px solid var(--accent)",
                          color: "var(--foreground)",
                          paddingLeft: "10px",
                        }
                      : {
                          borderLeft: "2px solid transparent",
                          color: "var(--muted-foreground)",
                          paddingLeft: "10px",
                        }
                  }
                  className="text-sm py-1 transition-colors hover:opacity-80"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* CONTENT */}
          <main className="flex-1 min-w-0 space-y-20">

            {/* ── Section 1: Contexto ── */}
            <section id="contexto" className="reveal">
              <SectionLabel text="01 · Contexto" />
              <SectionTitle>Dados existiam. Clareza, não.</SectionTitle>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                <p>
                  A Prefeitura de Fortaleza acumulava volumes expressivos de dados
                  operacionais em saúde, educação, planejamento urbano e assistência
                  social — mas esses dados viviam dispersos em planilhas, sistemas
                  legados e relatórios PDF que chegavam com semanas de atraso. Gestores
                  tomavam decisões importantes baseados em informações desatualizadas
                  ou simplesmente no instinto.
                </p>
                <p>
                  O projeto BigData Fortaleza surgiu como uma iniciativa da Secretaria
                  de Planejamento para centralizar, cruzar e visualizar esses dados em
                  uma plataforma única — acessível, segura e significativa para cada
                  perfil de gestor.
                </p>
              </div>
              <HighlightBox>
                "O objetivo não era mostrar dados — era permitir que gestores públicos
                vissem o que precisavam ver, no momento em que precisavam, para agir
                melhor."
              </HighlightBox>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                O time era composto por cerca de 30 pessoas entre desenvolvedores,
                analistas de dados, especialistas em políticas públicas e designers.
                Trabalhamos em ciclos ágeis com entregas contínuas para quatro
                secretarias ao longo de dezoito meses.
              </p>
            </section>

            {/* ── Section 2: Usuários ── */}
            <section id="usuarios" className="reveal">
              <SectionLabel text="02 · Usuários" />
              <SectionTitle>Quem precisava tomar decisões</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "📚",
                    name: "Secretaria de Educação",
                    desc: "Gestores que acompanham indicadores de matrícula, evasão, desempenho escolar e alocação de vagas por regional.",
                  },
                  {
                    icon: "🏥",
                    name: "Secretaria de Saúde",
                    desc: "Coordenadores de atenção básica e vigilância epidemiológica que monitoram cobertura vacinal, atendimentos e surtos.",
                  },
                  {
                    icon: "👶",
                    name: "Primeira Infância",
                    desc: "Equipes da política municipal de 0 a 6 anos, cruzando dados de creches, NIS e acompanhamento do Bolsa Família.",
                  },
                  {
                    icon: "🏙️",
                    name: "Secretaria de Planejamento",
                    desc: "Técnicos e secretários que precisam de visão consolidada para elaborar LOA, PPA e prestação de contas.",
                  },
                ].map(({ icon, name, desc }) => (
                  <div
                    key={name}
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--light)",
                      borderRadius: "var(--radius)",
                    }}
                    className="p-5"
                  >
                    <span className="text-2xl mb-3 block">{icon}</span>
                    <h3 className="font-medium mb-2 text-sm">{name}</h3>
                    <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 3: Meu papel ── */}
            <section id="papel" className="reveal">
              <SectionLabel text="03 · Meu papel" />
              <SectionTitle>Da requisito à realidade</SectionTitle>
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
                <p>
                  Entrei no projeto como designer referência para as frentes de
                  Educação e Primeira Infância, mas ao longo dos meses passei a
                  contribuir na construção do design system compartilhado e nas
                  diretrizes de arquitetura de informação que guiavam todas as
                  secretarias.
                </p>
                <p>
                  Minha atuação cruzou três grandes frentes: entender os usuários e
                  seus contextos reais de trabalho, estruturar a lógica de navegação
                  e hierarquia dos painéis, e garantir que a interface refletisse
                  tanto a identidade institucional quanto os princípios de
                  acessibilidade e clareza visual.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: "◎",
                    title: "UX Research",
                    desc: "Entrevistas, shadowing e testes com gestores reais para entender os fluxos de decisão.",
                  },
                  {
                    icon: "◈",
                    title: "Arquitetura",
                    desc: "Estrutura de navegação, hierarquia de informação e sistema de permissões por perfil.",
                  },
                  {
                    icon: "⬡",
                    title: "UI Design",
                    desc: "Componentes, identidade visual, sistema de cores para dados e prototipagem de alta fidelidade.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                    }}
                    className="p-5"
                  >
                    <span
                      style={{ color: "var(--accent)", fontFamily: "var(--font-serif)" }}
                      className="text-2xl block mb-3"
                    >
                      {icon}
                    </span>
                    <h3 className="font-medium mb-2 text-sm">{title}</h3>
                    <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 4: Processo ── */}
            <section id="processo" className="reveal">
              <SectionLabel text="04 · Processo" />
              <SectionTitle>Como chegamos às soluções</SectionTitle>
              <div className="space-y-4">
                {[
                  {
                    n: "01",
                    title: "Imersão",
                    desc: "Realizamos entrevistas em profundidade com gestores de cada secretaria, mapeando seus fluxos de trabalho, as perguntas que precisavam responder com dados e os momentos de frustração com os sistemas existentes. Incluímos também sessões de shadowing para observar como as equipes efetivamente consultavam informações no dia a dia.",
                  },
                  {
                    n: "02",
                    title: "Análise de sistemas existentes",
                    desc: "Auditamos os sistemas legados em uso — planilhas, dashboards desatualizados e portais de BI — mapeando lacunas, redundâncias e padrões de uso involuntário. Isso nos deu um mapa claro do que deveria ser preservado, melhorado ou descartado.",
                  },
                  {
                    n: "03",
                    title: "Design e prototipação",
                    desc: "Construímos wireframes de baixa fidelidade para validar arquitetura e fluxos com os stakeholders antes de investir em pixels. Depois, protótipos interativos de alta fidelidade no Figma — com dados reais sempre que possível — permitiram discussões muito mais concretas com gestores e devs.",
                  },
                  {
                    n: "04",
                    title: "Testes de usabilidade",
                    desc: "Conduzimos rodadas de teste com perfis representativos de cada secretaria, combinando testes moderados presenciais e sessões remotas. Os insights moldaram ajustes críticos de nomenclatura, hierarquia e densidade de informação antes do lançamento.",
                  },
                ].map(({ n, title, desc }) => (
                  <div
                    key={n}
                    style={{ borderLeft: "2px solid var(--border)" }}
                    className="pl-5 py-1"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                        className="text-xs font-semibold tracking-widest"
                      >
                        {n}
                      </span>
                      <h3 className="font-medium text-base">{title}</h3>
                    </div>
                    <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 5: Decisões ── */}
            <section id="decisoes" className="reveal">
              <SectionLabel text="05 · Decisões de design" />
              <SectionTitle>O que decidimos e por quê</SectionTitle>
              <div className="space-y-4">
                {[
                  {
                    tag: "Customização",
                    title: "Painel customizável por perfil de gestão",
                    desc: "Cada secretaria tinha prioridades radicalmente diferentes. Em vez de forçar um dashboard único, criamos painéis configuráveis com widgets fixos (core) e opcionais — permitindo que cada gestão priorizasse os indicadores mais relevantes para sua realidade sem perder a consistência da plataforma.",
                  },
                  {
                    tag: "Acesso",
                    title: "Sistema de perfis e permissões granular",
                    desc: "A sensibilidade dos dados públicos exigiu uma arquitetura de permissões bem pensada: secretário, coordenador, técnico e observador tinham visões e ações distintas. Desenhamos o fluxo de onboarding e as telas de gestão de acesso para que o administrador municipal pudesse operar sem depender de TI.",
                  },
                  {
                    tag: "Visualização",
                    title: "Visualizações geoespaciais como linguagem central",
                    desc: "Mapas não eram um extra — eram a linguagem nativa dos gestores de Fortaleza, que pensam em termos de regionais, bairros e equipamentos urbanos. Integramos mapas interativos como elemento primário de navegação, permitindo filtrar dados geográficos antes de detalhar indicadores.",
                  },
                  {
                    tag: "Identidade",
                    title: "Identidade visual institucional mas acessível",
                    desc: "A plataforma precisava ser reconhecida como produto da Prefeitura, mas sem a rigidez visual que costuma comprometer legibilidade. Criamos um sistema de cores que respeitava a paleta institucional e ainda assim passava em WCAG AA para todos os estados de dados — incluindo mapas de calor.",
                  },
                ].map(({ tag, title, desc }) => (
                  <div
                    key={tag}
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                    }}
                    className="p-6"
                  >
                    <span
                      style={{
                        background: "var(--light)",
                        color: "var(--muted-foreground)",
                        borderRadius: "100px",
                        fontSize: "11px",
                      }}
                      className="px-2.5 py-0.5 font-medium tracking-wide uppercase inline-block mb-3"
                    >
                      {tag}
                    </span>
                    <h3 className="font-medium text-base mb-2">{title}</h3>
                    <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 6: Telas ── */}
            <section id="telas" className="reveal">
              <SectionLabel text="06 · Interfaces" />
              <SectionTitle>Como ficou na prática</SectionTitle>
              <div className="space-y-8">
                {[
                  {
                    url: "bigdata.fortaleza.ce.gov.br/login",
                    src: "/images/tela-login.webp",
                    caption: "Tela de Login — autenticação com perfil de acesso institucional.",
                  },
                  {
                    url: "bigdata.fortaleza.ce.gov.br/painel",
                    src: "/images/painel-monitoramento.webp",
                    caption: "Painel de Monitoramento — visão consolidada dos principais indicadores da secretaria.",
                  },
                  {
                    url: "bigdata.fortaleza.ce.gov.br/permissoes",
                    src: "/images/funcionalidades-permitidas.webp",
                    caption: "Funcionalidades Permitidas — controle granular de acesso por perfil de usuário.",
                  },
                ].map(({ url, src, caption }) => (
                  <figure key={src}>
                    {/* Browser chrome */}
                    <div
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        overflow: "hidden",
                      }}
                    >
                      {/* Title bar */}
                      <div
                        style={{
                          background: "var(--light)",
                          borderBottom: "1px solid var(--border)",
                        }}
                        className="flex items-center gap-3 px-4 py-2.5"
                      >
                        {/* Traffic lights */}
                        <div className="flex gap-1.5">
                          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                            <span
                              key={c}
                              style={{ background: c, width: 10, height: 10, borderRadius: "50%", display: "inline-block" }}
                            />
                          ))}
                        </div>
                        {/* URL bar */}
                        <div
                          style={{
                            background: "var(--background)",
                            border: "1px solid var(--border)",
                            borderRadius: "100px",
                            color: "var(--muted-foreground)",
                            fontSize: "11px",
                          }}
                          className="flex-1 max-w-sm mx-auto px-3 py-1 text-center truncate"
                        >
                          {url}
                        </div>
                      </div>
                      {/* Screenshot viewport */}
                      <div className="relative w-full overflow-hidden" style={{ maxHeight: "520px" }}>
                        <Image
                          src={src}
                          alt={caption}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover object-top"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                    <figcaption
                      style={{ color: "var(--muted-foreground)" }}
                      className="text-sm mt-3 text-center"
                    >
                      {caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* ── Section 7: Resultado ── */}
            <section id="resultado" className="reveal">
              <SectionLabel text="07 · Resultado" />
              <SectionTitle>O que conquistamos</SectionTitle>

              {/* SUS Score box */}
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  background: "var(--light)",
                }}
                className="p-6 mb-6 flex items-center gap-6"
              >
                <div className="text-center flex-shrink-0">
                  <p
                    style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}
                    className="text-5xl leading-none"
                  >
                    78
                  </p>
                  <p style={{ color: "var(--muted-foreground)" }} className="text-xs mt-1 font-medium tracking-wide uppercase">
                    SUS Score
                  </p>
                </div>
                <div
                  style={{ borderLeft: "1px solid var(--border)" }}
                  className="pl-6"
                >
                  <p className="font-medium text-sm mb-1">Usabilidade avaliada como "Boa"</p>
                  <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                    Pontuação obtida em rodadas de teste com gestores das quatro secretarias,
                    acima da média de sistemas de governo comparáveis (tipicamente 65–70).
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                <p>
                  Ao final do projeto, os gestores relataram consistentemente que
                  passaram a confiar mais nas informações que apresentavam em reuniões
                  e prestações de contas — não porque os dados eram novos, mas porque
                  finalmente estavam organizados de um jeito que fazia sentido para
                  quem precisava usá-los. A redução de tempo para montar relatórios
                  semanais foi um dos benefícios mais citados espontaneamente.
                </p>
                <p>
                  A plataforma foi adotada pelas quatro secretarias previstas no escopo
                  e o modelo de design system construído durante o projeto tornou-se
                  referência para outros projetos digitais da Prefeitura. A arquitetura
                  de permissões foi reaproveitada em ao menos dois sistemas posteriores
                  sem alterações estruturais.
                </p>
              </div>
            </section>

            {/* ── Section 8: Reflexão ── */}
            <section id="reflexao" className="reveal">
              <SectionLabel text="08 · Reflexão" />
              <SectionTitle>O que eu faria diferente hoje</SectionTitle>

              <div
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                  borderRadius: "var(--radius)",
                }}
                className="p-8"
              >
                <span
                  style={{ fontFamily: "var(--font-serif)", color: "var(--accent)", fontSize: "4rem", lineHeight: 1 }}
                  className="block mb-4 select-none"
                >
                  "
                </span>
                <blockquote
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-xl leading-relaxed mb-6"
                >
                  Investiria muito mais tempo em workshops colaborativos com as equipes
                  das secretarias antes de qualquer wireframe. Aprendemos sobre o
                  contexto real de uso principalmente por meio de entrevistas — mas
                  sessões conjuntas de mapeamento de processo teriam nos poupado
                  retrabalho e criado muito mais senso de pertencimento com a plataforma
                  entre as pessoas que precisavam adotá-la.
                </blockquote>
                <p style={{ color: "rgba(250,250,248,0.55)" }} className="text-sm">
                  Érika de Sousa Alves, 2024 — olhando para trás depois de dois anos
                </p>
              </div>

              <div className="space-y-4 mt-6 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                <p>
                  Também revisitaria a estratégia de onboarding: lançamos com
                  documentação e treinamentos síncronos, mas a rotatividade de pessoal
                  no setor público é alta — precisávamos de guias contextuais na própria
                  plataforma para que novos gestores conseguissem se orientar sem
                  depender de ninguém do time.
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* ── BOTTOM NAV ── */}
      <div
        style={{ borderTop: "1px solid var(--border)" }}
        className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <Link
          href="/#projetos"
          style={{ color: "var(--muted-foreground)" }}
          className="text-sm flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          ← Todos os projetos
        </Link>
        <Link
          href="/case-dell"
          style={{ color: "var(--foreground)" }}
          className="text-sm font-medium flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          Próximo case: Troubleshooting com IA — Dell →
        </Link>
      </div>
    </div>
  );
}
