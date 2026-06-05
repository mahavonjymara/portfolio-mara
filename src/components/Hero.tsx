"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
export default function Hero() {
  const { t, lang } = useLang();
  const hero = useScrollAnimation(0.1);
  const roles = {
    fr: ["Developpeur Full Stack JS","Developpeur React & Next.js","Architecte Node.js & API","Developpeur React Native"],
    en: ["Full Stack JS Developer","React & Next.js Developer","Node.js & API Builder","React Native Developer"],
  };
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[lang][roleIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < current.length) { timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60); }
    else if (!deleting && displayed.length === current.length) { timeout = setTimeout(() => setDeleting(true), 2000); }
    else if (deleting && displayed.length > 0) { timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35); }
    else { setDeleting(false); setRoleIndex((i) => (i + 1) % roles[lang].length); }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex, lang]);
  return (
    <section id="hero" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"88vh", padding:"4rem 2.5rem", gap:"3rem", alignItems:"center", background:"var(--bg)", transition:"background 0.5s" }}>
      <div ref={hero.ref} style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(40px)", transition:"all 0.8s ease" }}>
        <h1 style={{ fontFamily:"var(--font-syne)", fontSize:"3.2rem", fontWeight:800, lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:"0.8rem" }}>
          <span style={{ background:"linear-gradient(135deg, #6450dc 0%, #a855f7 50%, #3b82f6 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            MARA Mahavonjy
          </span>
        </h1>
        <div style={{ fontFamily:"var(--font-syne)", fontSize:"1.1rem", fontWeight:700, marginBottom:"1.5rem", minHeight:"1.8rem", background:"linear-gradient(135deg,#a855f7,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
          {displayed}
          <span style={{ display:"inline-block", width:2, height:"1.1em", background:"#a855f7", marginLeft:2, verticalAlign:"middle", animation:"blink 1s step-end infinite", WebkitTextFillColor:"initial" }} />
          <style>{"@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}"}</style>
        </div>
        <p className="hero-desc" style={{ fontSize:"1rem", color:"var(--text2)", lineHeight:1.9, maxWidth:440, marginBottom:"2.5rem", fontWeight:300 }}>{t.hero.desc}</p>
        <div className="hero-cta" style={{ display:"flex", gap:"1rem", flexWrap:"wrap" as const }}>
          <a href="#projects">
            <button style={{ background:"linear-gradient(135deg,#6450dc,#a855f7)", color:"#fff", padding:"0.85rem 2.2rem", borderRadius:50, fontSize:"0.9rem", fontWeight:700, cursor:"pointer", border:"none", letterSpacing:"0.03em", boxShadow:"0 4px 20px rgba(100,80,220,0.35)", transition:"all 0.25s" }}>{t.hero.cta1} →</button>
          </a>
          <a href="/CV_MARA_Mahavonjy.pdf" download="CV_MARA_Mahavonjy.pdf">
            <button style={{ background:"transparent", color:"var(--text)", padding:"0.85rem 2.2rem", borderRadius:50, fontSize:"0.9rem", fontWeight:600, cursor:"pointer", border:"2px solid rgba(100,80,220,0.3)", transition:"all 0.25s" }}>{t.hero.cta2}</button>
          </a>
        </div>
      </div>

      <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
        <div style={{ position:"relative", width:340, height:340 }}>

          {/* Anneau extérieur clair */}
          <div style={{ position:"absolute", inset:-16, borderRadius:"50%", border:"2px solid rgba(100,80,220,0.12)", background:"rgba(100,80,220,0.04)" }} />

          {/* Anneau principal dégradé */}
          <div style={{ position:"absolute", inset:-6, borderRadius:"50%", padding:3, background:"linear-gradient(135deg,#6450dc,#a855f7,#3b82f6,rgba(100,80,220,0.2))" }}>
            <div style={{ width:"100%", height:"100%", borderRadius:"50%", background:"var(--bg)" }} />
          </div>

          {/* Photo */}
          <div style={{ position:"absolute", inset:0, borderRadius:"50%", overflow:"hidden", border:"4px solid var(--bg)", boxShadow:"0 8px 40px rgba(100,80,220,0.2)" }}>
            <Image src="/avatar.jpg" alt="MARA Mahavonjy" fill style={{ objectFit:"cover", objectPosition:"center top" }} priority />
          </div>

          {/* Badge Disponible en bas à droite */}
          <div style={{ position:"absolute", bottom:10, right:-20, display:"flex", alignItems:"center", gap:"0.45rem", background:"linear-gradient(135deg,#6450dc,#a855f7)", borderRadius:30, padding:"0.5rem 1.2rem", boxShadow:"0 4px 20px rgba(100,80,220,0.45)", zIndex:10 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 8px #4ade80", flexShrink:0, animation:"pulse 2s ease-in-out infinite" }} />
            <span style={{ fontSize:"0.82rem", fontWeight:700, color:"#fff", letterSpacing:"0.04em" }}>Disponible</span>
          </div>
          <style>{"@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(0.85)}}"}</style>
        </div>
      </div>
    </section>
  );
}
