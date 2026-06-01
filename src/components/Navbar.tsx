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
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark", !dark);
  };
  const links = [
    { label: t.nav.about, href: "#hero", icon: "🏠" },
    { label: t.nav.skills, href: "#skills", icon: "💻" },
    { label: t.nav.projects, href: "#projects", icon: "💼" },
    { label: t.nav.contact, href: "#contact", icon: "✉️" },
  ];
  const navBg = dark ? "rgba(13,27,75,0.85)" : "rgba(135,206,235,0.75)";
  const linkColor = dark ? "#c8d0e0" : "#0a1628";
  const btnStyle = { display:"flex", alignItems:"center", justifyContent:"center", width:36, height:36, borderRadius:"50%", fontSize:"1.1rem", cursor:"pointer", border:"1.5px solid rgba(212,168,83,0.4)", background:"rgba(212,168,83,0.12)", transition:"all 0.2s" };
  return (
    <>
      <nav style={{ position:"sticky" as const, top:0, zIndex:100, background:navBg, borderBottom:"1px solid rgba(212,168,83,0.3)", backdropFilter:"blur(20px)", boxShadow: scrolled ? "0 4px 24px rgba(10,22,40,0.1)" : "none", transition:"all 0.3s" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 1.5rem" }}>
          <div style={{ fontFamily:"var(--font-syne)", fontWeight:800, fontSize:"1.15rem", color:"#d4a853", letterSpacing:"-0.02em" }}>mara.dev</div>
          {!isMobile ? (
            <div style={{ display:"flex", gap:"1.5rem", alignItems:"center" }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} style={{ fontSize:"0.82rem", color:linkColor, textDecoration:"none", letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600, transition:"color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color="#d4a853")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color=linkColor)}>{l.label}</a>
              ))}
              <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                style={{ background:"rgba(212,168,83,0.15)", color:"#d4a853", padding:"0.38rem 0.9rem", borderRadius:20, fontSize:"0.78rem", cursor:"pointer", border:"1.5px solid rgba(212,168,83,0.4)", fontWeight:700 }}>
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <button onClick={toggleTheme} title={dark ? "Mode clair" : "Mode sombre"}
                style={{ ...btnStyle, fontSize:"1.2rem" }}>
                {dark ? "☀️" : "🌙"}
              </button>
            </div>
          ) : (
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
              <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                style={{ background:"rgba(212,168,83,0.15)", color:"#d4a853", padding:"0.35rem 0.7rem", borderRadius:16, fontSize:"0.75rem", cursor:"pointer", border:"1.5px solid rgba(212,168,83,0.4)", fontWeight:700 }}>
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <button onClick={toggleTheme} title={dark ? "Mode clair" : "Mode sombre"}
                style={{ ...btnStyle }}>
                {dark ? "☀️" : "🌙"}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)}
                style={{ background:"rgba(212,168,83,0.15)", border:"1.5px solid rgba(212,168,83,0.4)", color: dark ? "#f5f0e8" : "#0d1b4b", width:40, height:40, borderRadius:10, fontSize:"1.1rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700 }}>
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          )}
        </div>
      </nav>
      {isMobile && menuOpen && (
        <div onClick={() => setMenuOpen(false)}
          style={{ position:"fixed" as const, top:0, left:0, right:0, bottom:0, zIndex:999, background:"rgba(5,12,30,0.75)", backdropFilter:"blur(10px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem" }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background: dark ? "rgba(20,32,80,0.98)" : "rgba(60,90,160,0.95)", borderRadius:24, padding:"1.5rem", width:"100%", maxWidth:300, boxShadow:"0 24px 64px rgba(0,0,0,0.5)", border:"1px solid rgba(212,168,83,0.25)", backdropFilter:"blur(20px)" }}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"0.9rem 1rem", borderRadius:14, marginBottom: i < links.length - 1 ? "0.4rem" : 0, textDecoration:"none", background:"transparent", border:"1px solid transparent", transition:"all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background="rgba(212,168,83,0.18)"; e.currentTarget.style.borderColor="rgba(212,168,83,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor="transparent"; }}>
                <div style={{ width:42, height:42, borderRadius:12, background:"rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", border:"1px solid rgba(255,255,255,0.12)", flexShrink:0 }}>
                  {l.icon}
                </div>
                <span style={{ fontSize:"1.05rem", fontWeight:700, color:"#fff", fontFamily:"var(--font-syne)", letterSpacing:"0.02em" }}>{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
