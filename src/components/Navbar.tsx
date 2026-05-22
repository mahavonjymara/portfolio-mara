"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LangContext";
export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleResize); };
  }, []);
  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark", !dark);
  };
  const links = [
    { label: t.nav.about, href: "#hero" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];
  const navBg = dark ? "rgba(13,27,75,0.85)" : "rgba(135,206,235,0.75)";
  const linkColor = dark ? "#c8d0e0" : "#0a1628";
  return (
    <nav style={{ position:"sticky" as const, top:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 2.5rem", background:navBg, borderBottom:"1px solid rgba(212,168,83,0.3)", backdropFilter:"blur(20px)", boxShadow: scrolled ? "0 4px 24px rgba(10,22,40,0.1)" : "none", transition:"all 0.3s" }}>
      <div style={{ fontFamily:"var(--font-syne)", fontWeight:800, fontSize:"1.15rem", color:"#d4a853", letterSpacing:"-0.02em" }}>mara.dev</div>
      {!isMobile ? (
        <div style={{ display:"flex", gap:"1.5rem", alignItems:"center" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize:"0.82rem", color:linkColor, textDecoration:"none", letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600, transition:"color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color="#d4a853")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color=linkColor)}>{l.label}</a>
          ))}
          <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{ background:"rgba(212,168,83,0.15)", color:"#d4a853", padding:"0.38rem 0.9rem", borderRadius:20, fontSize:"0.78rem", cursor:"pointer", border:"1.5px solid rgba(212,168,83,0.4)", fontFamily:"var(--font-dm-sans)", fontWeight:700, transition:"all 0.2s", letterSpacing:"0.05em" }}>
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button onClick={toggleTheme}
            style={{ background: dark ? "rgba(212,168,83,0.1)" : "#0d1b4b", color:"#d4a853", padding:"0.38rem 1rem", borderRadius:20, fontSize:"0.78rem", cursor:"pointer", border:"1.5px solid #d4a853", fontFamily:"var(--font-dm-sans)", fontWeight:600, transition:"all 0.2s" }}>
            {dark ? t.nav.light : t.nav.dark}
          </button>
        </div>
      ) : (
        <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
          <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{ background:"rgba(212,168,83,0.15)", color:"#d4a853", padding:"0.35rem 0.7rem", borderRadius:16, fontSize:"0.75rem", cursor:"pointer", border:"1.5px solid rgba(212,168,83,0.4)", fontWeight:700 }}>
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button onClick={toggleTheme}
            style={{ background: dark ? "rgba(212,168,83,0.1)" : "#0d1b4b", color:"#d4a853", padding:"0.35rem 0.7rem", borderRadius:16, fontSize:"0.72rem", cursor:"pointer", border:"1.5px solid #d4a853", fontWeight:600 }}>
            {dark ? "Clair" : "Sombre"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background:"rgba(212,168,83,0.15)", border:"1.5px solid rgba(212,168,83,0.4)", color: dark ? "#f5f0e8" : "#0d1b4b", width:40, height:40, borderRadius:10, fontSize:"1.1rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
            {menuOpen ? "X" : "="}
          </button>
        </div>
      )}
      {isMobile && menuOpen && (
        <div style={{ position:"absolute" as const, top:"100%", left:0, right:0, background: dark ? "rgba(13,27,75,0.97)" : "rgba(135,206,235,0.97)", borderTop:"1px solid rgba(212,168,83,0.3)", backdropFilter:"blur(20px)", padding:"0.5rem 0", zIndex:200 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display:"block", fontSize:"0.95rem", color: dark ? "#c8d0e0" : "#0a1628", textDecoration:"none", textTransform:"uppercase", fontWeight:600, padding:"1rem 1.5rem", borderBottom:"1px solid rgba(212,168,83,0.15)", letterSpacing:"0.06em" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color="#d4a853")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color= dark ? "#c8d0e0" : "#0a1628")}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
