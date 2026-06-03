import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", background:"linear-gradient(135deg,#6450dc,#a855f7)", borderTop:"none" }}>
        {[
          { num:"6+", label:"Technologies" },
          { num:"3+", label:"Projets" },
          { num:"M1", label:"Niveau etudes" },
          { num:"Open", label:"Remote · Local" },
        ].map((s) => (
          <div key={s.label} style={{ padding:"1.8rem 2rem", textAlign:"center", borderRight:"1px solid rgba(255,255,255,0.15)" }}>
            <div style={{ fontFamily:"var(--font-syne)", fontSize:"2rem", fontWeight:800, color:"#fff", marginBottom:"0.2rem" }}>{s.num}</div>
            <div style={{ fontSize:"0.73rem", color:"rgba(255,255,255,0.7)", textTransform:"uppercase", letterSpacing:"0.12em" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
