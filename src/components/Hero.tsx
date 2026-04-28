"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const roles = [
  "Full Stack JS Developer",
  "React & Next.js Developer",
  "Node.js & API Builder",
  "React Native Developer",
];
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);
  const badges = [
    { color:"#7c6af7", text:"React & Next.js", top:"10%", right:"-8%", left:"auto", bottom:"auto" },
    { color:"#6af7c8", text:"Node.js - API REST", top:"auto", right:"auto", left:"-10%", bottom:"22%" },
    { color:"#f76a8a", text:"React Native", top:"auto", right:"4%", left:"auto", bottom:"6%" },
  ];
  return (
    <section id="hero" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"88vh", padding:"4rem 2.5rem", gap:"3rem", alignItems:"center" }}>
      <div>
        <div style={{ fontSize:"0.75rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--accent3)", fontWeight:500, marginBottom:"1.2rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ width:24, height:1, background:"var(--accent3)", display:"inline-block" }} />
          Disponible - Open to work
        </div>
        <h1 style={{ fontFamily:"var(--font-syne)", fontSize:"3.6rem", fontWeight:800, lineHeight:1.05, letterSpacing:"-0.03em", marginBottom:"1rem" }}>
          <span style={{ color:"var(--text)" }}>MARA</span><br />
          <span style={{ background:"linear-gradient(135deg, var(--accent), var(--accent2))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Mahavonjy</span>
        </h1>
        <div style={{ fontFamily:"var(--font-syne)", fontSize:"1.2rem", fontWeight:700, color:"var(--text2)", marginBottom:"1.5rem", minHeight:"2rem" }}>
          {displayed}
          <span style={{ display:"inline-block", width:2, height:"1.2em", background:"var(--accent)", marginLeft:2, verticalAlign:"middle", animation:"blink 1s step-end infinite" }} />
          <style>{"@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }"}</style>
        </div>
        <p style={{ fontSize:"1rem", color:"var(--text2)", lineHeight:1.85, maxWidth:440, marginBottom:"2.5rem", fontWeight:300 }}>
          Je concois des applications web et mobile modernes du front au back avec React, Next.js, Node.js et React Native. Base a Antananarivo, disponible en remote.
        </p>
        <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
          <a href="#projects">
            <button style={{ background:"var(--accent)", color:"#fff", padding:"0.8rem 2rem", borderRadius:8, fontSize:"0.9rem", fontWeight:500, cursor:"pointer", border:"none", letterSpacing:"0.02em" }}>Voir mes projets</button>
          </a>
          <button style={{ background:"transparent", color:"var(--text)", padding:"0.8rem 2rem", borderRadius:8, fontSize:"0.9rem", fontWeight:500, cursor:"pointer", border:"1px solid var(--border)" }}>Telecharger CV</button>
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
        <div style={{ position:"relative", width:340, height:340 }}>
          <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1.5px solid var(--border)", animation:"spin 18s linear infinite" }}>
            <div style={{ position:"absolute", top:-4, left:"50%", transform:"translateX(-50%)", width:8, height:8, borderRadius:"50%", background:"var(--accent)" }} />
          </div>
          <style>{"@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} } @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} } @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }"}</style>
          <div style={{ position:"absolute", inset:20, borderRadius:"50%", overflow:"hidden", border:"3px solid var(--accent)", background:"var(--bg3)" }}>
            <Image src="/avatar.jpg" alt="MARA Mahavonjy" fill style={{ objectFit:"cover" }} priority />
          </div>
          {badges.map((b, i) => (
            <div key={i} style={{ position:"absolute", top:b.top, right:b.right, left:b.left, bottom:b.bottom, background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:10, padding:"0.5rem 0.8rem", fontSize:"0.72rem", color:"var(--text2)", display:"flex", alignItems:"center", gap:"0.4rem", whiteSpace:"nowrap", animation:"float" + (i % 2) + " " + (4 + i) + "s ease-in-out infinite" }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:b.color, flexShrink:0 }} />
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
