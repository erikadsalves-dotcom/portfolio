"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tipo: "",
    mensagem: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted", formData);
  }

  const inputBase =
    "w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm focus:border-white/30 focus:outline-none transition-colors duration-200 placeholder:text-white/20";

  const labelBase = "text-[10px] uppercase tracking-[0.09em] text-white/35 mb-1.5 block";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  } as const;

  return (
    <section
      id="contato"
      className="w-full py-16 px-6 sm:py-20 md:py-24"
      style={{ backgroundColor: "#0f0f0f" }}
      ref={sectionRef}
    >
      <motion.div
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: "600px" }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Title */}
        <motion.h2
          className="font-serif text-center text-white leading-tight mb-5"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            letterSpacing: "-1px",
          }}
          variants={itemVariants}
        >
          Vamos resolver um problema{" "}
          <em style={{ color: "#c8b89a", fontStyle: "italic" }}>juntos?</em>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white/45 text-sm leading-relaxed text-center max-w-md mb-12"
          variants={itemVariants}
        >
          Aberta a projetos freelance, PJ remoto e oportunidades CLT — especialmente
          em produto, fintech e ambientes internacionais.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4"
          variants={itemVariants}
        >
          {/* Row: Nome + Email */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <div className="flex flex-col">
              <label htmlFor="nome" className={labelBase}>
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                className={inputBase}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className={labelBase}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={inputBase}
                required
              />
            </div>
          </motion.div>

          {/* Tipo de projeto */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <label htmlFor="tipo" className={labelBase}>
              Tipo de projeto
            </label>
            <select
              id="tipo"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className={`${inputBase} appearance-none`}
              required
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="ux-research">UX Research</option>
              <option value="product-design">Product Design</option>
              <option value="design-system">Design System</option>
              <option value="consultoria">Consultoria</option>
              <option value="oportunidade-clt">Oportunidade CLT</option>
              <option value="outro">Outro</option>
            </select>
          </motion.div>

          {/* Mensagem */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <label htmlFor="mensagem" className={labelBase}>
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Conte um pouco sobre o projeto ou oportunidade…"
              value={formData.mensagem}
              onChange={handleChange}
              className={`${inputBase} resize-none`}
              style={{ minHeight: "120px" }}
              required
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full bg-white text-foreground text-sm font-semibold rounded-full py-4 hover:bg-white/90 transition-colors duration-200 mt-2"
            variants={itemVariants}
          >
            Enviar mensagem
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          className="flex gap-7 justify-center mt-12"
          variants={itemVariants}
        >
          <a
            href="https://linkedin.com/in/erikadsalves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-200"
            style={{ fontSize: "13px" }}
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net/erikadsalves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-200"
            style={{ fontSize: "13px" }}
          >
            Behance
          </a>
          <a
            href="https://dribbble.com/erikadsalves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-200"
            style={{ fontSize: "13px" }}
          >
            Dribbble
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
