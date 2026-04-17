import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Brands from "@/components/brands";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <div className="mx-auto max-w-[1400px]">
        <Projects />
        <Skills />
        <About />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
