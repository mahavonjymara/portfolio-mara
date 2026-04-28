"use client";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [dark, setDark] = useState(true);
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
    document.documentElement.classList.toggle("light", dark);
  };
  const links = [
    { label: "A propos", href: "#hero" },
    { label: "Competences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav style={{ position:"sticky", top:0, zIndex:100, background:"var(--bg)", borderBottom:"1px solid var(--border)", backdropFilter:"blur(10px)", boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.2)" : "none" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 1.5rem" }}>
        <div style={{ fontFamily:"var(--font-syne)", fontWeight:800, fontSize:"1.1rem", background:"linear-gradient(135deg, var(--accent), var(--accent2))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>mara.dev</div>
        {!isMobile ? (
          <div style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize:"0.85rem", color:"var(--text2)", textDecoration:"none", letterSpacing:"0.05em", textTransform:"uppercase", fontWeight:500 }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text2)")}>{l.label}</a>
            ))}
            <button onClick={toggleTheme} style={{ background:"var(--card)", border:"1px solid var(--border)", color:"var(--text2)", padding:"0.4rem 0.9rem", borderRadius:"20px", fontSize:"0.8rem", cursor:"pointer" }}>
              {dark ? "Dark" : "Light"}
            </button>
          </div>
        ) : (
          <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
            <button onClick={toggleTheme} style={{ background:"var(--card)", border:"1px solid var(--border)", color:"var(--text2)", padding:"0.4rem 0.8rem", borderRadius:"20px", fontSize:"0.75rem", cursor:"pointer" }}>
              {dark ? "Dark" : "Light"}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background:"var(--card)", border:"1px solid var(--border)", color:"var(--text)", width:40, height:40, borderRadius:8, fontSize:"1.2rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </div>
      {isMobile && menuOpen && (
        <div style={{ background:"var(--bg2)", borderTop:"1px solid var(--border)", padding:"0.5rem 0" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display:"block", fontSize:"0.95rem", color:"var(--text2)", textDecoration:"none", textTransform:"uppercase", fontWeight:500, padding:"1rem 1.5rem", borderBottom:"1px solid var(--border)", letterSpacing:"0.05em" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text2)")}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
