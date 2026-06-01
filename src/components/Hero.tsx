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
        <div style={{ fontSize:"0.72rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#d4a853", fontWeight:700, marginBottom:"1.2rem", display:"flex", alignItems:"center", gap:"0.6rem" }}>
          <span style={{ width:28, height:2, background:"#d4a853", borderRadius:2, display:"inline-block" }} />
          {t.hero.available}
        </div>
        <h1 style={{ fontFamily:"var(--font-syne)", fontSize:"3.8rem", fontWeight:800, lineHeight:1.05, letterSpacing:"-0.03em", marginBottom:"0.8rem" }}>
          <span style={{ color:"var(--text)" }}>MARA</span><br />
          <span style={{ color:"#d4a853" }}>Mahavonjy</span>
        </h1>
        <div style={{ fontFamily:"var(--font-syne)", fontSize:"1.1rem", fontWeight:700, color:"var(--text3)", marginBottom:"1.5rem", minHeight:"1.8rem" }}>
          {displayed}
          <span style={{ display:"inline-block", width:2, height:"1.1em", background:"#d4a853", marginLeft:2, verticalAlign:"middle", animation:"blink 1s step-end infinite" }} />
          <style>{"@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}"}</style>
        </div>
        <p className="hero-desc" style={{ fontSize:"1rem", color:"var(--text2)", lineHeight:1.9, maxWidth:440, marginBottom:"2.5rem", fontWeight:300 }}>{t.hero.desc}</p>
        <div className="hero-cta" style={{ display:"flex", gap:"1rem", flexWrap:"wrap" as const }}>
          <a href="#projects">
            <button style={{ background:"#d4a853", color:"#0d1b4b", padding:"0.85rem 2.2rem", borderRadius:12, fontSize:"0.9rem", fontWeight:700, cursor:"pointer", border:"none", letterSpacing:"0.03em", boxShadow:"0 4px 20px rgba(212,168,83,0.4)", transition:"all 0.25s" }}>{t.hero.cta1}</button>
          </a>
          <a href="/CV_MARA_Mahavonjy.pdf" download="CV_MARA_Mahavonjy.pdf">
            <button style={{ background:"transparent", color:"var(--text)", padding:"0.85rem 2.2rem", borderRadius:12, fontSize:"0.9rem", fontWeight:600, cursor:"pointer", border:"2px solid var(--text)", transition:"all 0.25s" }}>{t.hero.cta2}</button>
          </a>
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
        <div className="avatar-wrap" style={{ position:"relative", width:360, height:360 }}>
          <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"2px solid rgba(212,168,83,0.5)", animation:"spin 20s linear infinite" }}>
            <div style={{ position:"absolute", top:-6, left:"50%", transform:"translateX(-50%)", width:12, height:12, borderRadius:"50%", background:"#d4a853", boxShadow:"0 0 16px rgba(212,168,83,0.8)" }} />
          </div>
          <div style={{ position:"absolute", inset:10, borderRadius:"50%", border:"1px dashed rgba(212,168,83,0.25)", animation:"spin 30s linear infinite reverse" }} />
          <style>{"@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"}</style>
          <div style={{ position:"absolute", inset:22, borderRadius:"50%", overflow:"hidden", border:"3px solid #d4a853", boxShadow:"0 0 0 8px rgba(212,168,83,0.08),0 8px 40px rgba(10,22,40,0.15)", background:"var(--bg2)" }}>
            <Image src="/avatar.jpg" alt="MARA Mahavonjy" fill style={{ objectFit:"cover" }} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
