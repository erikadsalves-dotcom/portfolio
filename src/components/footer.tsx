export default function Footer() {
  return (
    <footer
      className="w-full border-t border-white/5"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <div
        className="mx-auto py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left"
        style={{ maxWidth: "1400px" }}
      >
        <span className="text-white/20" style={{ fontSize: "12px" }}>
          © 2026 Érika de Sousa Alves
        </span>
        <span className="text-white/20" style={{ fontSize: "12px" }}>
          Product Designer · Fortaleza, Brasil
        </span>
      </div>
    </footer>
  );
}
