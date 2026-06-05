"use client";
import React from "react";
import {
  SiReact, SiNextdotjs, SiLaravel, SiSpringboot,
  SiHtml5, SiCss, SiTailwindcss,
  SiJavascript, SiTypescript, SiPython, SiPhp, SiNodedotjs, SiExpress,
  SiMysql, SiPostgresql, SiSqlite, SiMongodb,
  SiGit, SiGithub, SiDocker,
  SiWindows11, SiLinux, SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { skills, TechItem } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

function FlagFR() {
  return (
    <svg viewBox="0 0 24 18" width="28" height="21" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="18" fill="#002395"/>
      <rect x="8" width="8" height="18" fill="#ffffff"/>
      <rect x="16" width="8" height="18" fill="#ed2939"/>
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 36" width="28" height="21" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" fill="#012169"/>
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 V36 M0,18 H60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 V36 M0,18 H60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}

const techIcons: Record<string, { icon: React.ReactElement; color: string; bg: string }> = {
  "React.js":    { icon: <SiReact size={22}/>,        color:"#61dafb", bg:"#e8f9fd" },
  "Next.js":     { icon: <SiNextdotjs size={22}/>,    color:"#000000", bg:"#f0f0f0" },
  "Laravel":     { icon: <SiLaravel size={22}/>,      color:"#ff2d20", bg:"#fdecea" },
  "Spring":      { icon: <SiSpringboot size={22}/>,   color:"#6db33f", bg:"#edf7e6" },
  "HTML5":       { icon: <SiHtml5 size={22}/>,        color:"#e34f26", bg:"#fdecea" },
  "CSS3":        { icon: <SiCss size={22}/>,          color:"#1572b6", bg:"#e8f0fb" },
  "Tailwind":    { icon: <SiTailwindcss size={22}/>,  color:"#06b6d4", bg:"#e8f9fd" },
  "JavaScript":  { icon: <SiJavascript size={22}/>,   color:"#f7df1e", bg:"#fdfbe6" },
  "TypeScript":  { icon: <SiTypescript size={22}/>,   color:"#3178c6", bg:"#e8f0fb" },
  "Python":      { icon: <SiPython size={22}/>,       color:"#3572a5", bg:"#e8f0f8" },
  "Java":        { icon: <FaJava size={22}/>,         color:"#b07219", bg:"#f8f0e3" },
  "PHP":         { icon: <SiPhp size={22}/>,          color:"#777bb4", bg:"#eeeef8" },
  "Node.js":     { icon: <SiNodedotjs size={22}/>,    color:"#339933", bg:"#eaf5e8" },
  "Express":     { icon: <SiExpress size={22}/>,      color:"#000000", bg:"#f0f0f0" },
  "MySQL":       { icon: <SiMysql size={22}/>,        color:"#00758f", bg:"#e8f4f8" },
  "PostgreSQL":  { icon: <SiPostgresql size={22}/>,   color:"#336791", bg:"#e8eef5" },
  "SQLite":      { icon: <SiSqlite size={22}/>,       color:"#003b57", bg:"#e0eaf0" },
  "MongoDB":     { icon: <SiMongodb size={22}/>,      color:"#4db33d", bg:"#eaf5e8" },
  "Git":         { icon: <SiGit size={22}/>,          color:"#f05032", bg:"#fdecea" },
  "GitHub":      { icon: <SiGithub size={22}/>,       color:"#24292e", bg:"#f0f0f0" },
  "Docker":      { icon: <SiDocker size={22}/>,       color:"#2496ed", bg:"#e8f4fd" },
  "Windows":     { icon: <SiWindows11 size={22}/>,    color:"#0078d4", bg:"#e8f2fd" },
  "Linux":       { icon: <SiLinux size={22}/>,        color:"#e95420", bg:"#fdecea" },
  "Figma":       { icon: <SiFigma size={22}/>,        color:"#f24e1e", bg:"#fdecea" },
  "MERISE":      { icon: <span style={{ fontSize:"0.7rem", fontWeight:800, color:"#8b5cf6" }}>MR</span>,  color:"#8b5cf6", bg:"#f0ebff" },
  "UML":         { icon: <span style={{ fontSize:"0.7rem", fontWeight:800, color:"#0ea5e9" }}>UML</span>, color:"#0ea5e9", bg:"#e8f4fd" },
};

function TechBadge({ name }: { name: string }) {
  const tech = techIcons[name];
  if (!tech) return null;
  const { icon, color, bg } = tech;
  return (
    <div title={name} style={{ display:"flex", flexDirection:"column" as const, alignItems:"center", gap:"0.35rem" }}>
      <div style={{ width:48, height:48, borderRadius:12, background:bg, border:"1.5px solid " + color + "35", display:"flex", alignItems:"center", justifyContent:"center", color:color, boxShadow:"0 2px 8px " + color + "20", transition:"transform 0.2s, box-shadow 0.2s" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform="scale(1.12)"; e.currentTarget.style.boxShadow="0 6px 20px " + color + "40"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 2px 8px " + color + "20"; }}>
        {icon}
      </div>
      <span style={{ fontSize:"0.58rem", color:"var(--text3)", fontWeight:600, textAlign:"center" as const, maxWidth:52 }}>{name}</span>
    </div>
  );
}

function LangBadge({ name, color, flag }: TechItem) {
  const levelMap: Record<string, number> = { "Francais": 75, "Anglais": 72 };
  const level = levelMap[name] || 70;
  return (
    <div style={{ display:"flex", flexDirection:"column" as const, gap:"0.5rem", width:"100%" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
        <div style={{ width:52, height:38, borderRadius:8, overflow:"hidden", border:"1.5px solid " + color + "40", boxShadow:"0 2px 8px rgba(0,0,0,0.12)", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
          {flag === "FR" ? <FlagFR /> : <FlagGB />}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.3rem" }}>
            <span style={{ fontSize:"0.85rem", fontWeight:700, color:"var(--text)", fontFamily:"var(--font-syne)" }}>{name}</span>
            <span style={{ fontSize:"0.7rem", fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#6450dc,#a855f7)", padding:"0.2rem 0.6rem", borderRadius:6 }}>B2</span>
          </div>
          <div style={{ height:4, background:"var(--bg3)", borderRadius:3, overflow:"hidden" }}>
            <div style={{ height:"100%", width: level + "%", background:"linear-gradient(90deg,#6450dc,#a855f7)", borderRadius:3 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  const title = useScrollAnimation();
  return (
    <section id="skills" style={{ padding:"5.5rem 2.5rem", background:"var(--bg2)", transition:"background 0.5s" }}>
      <div ref={title.ref} style={{ opacity: title.visible ? 1 : 0, transform: title.visible ? "translateY(0)" : "translateY(40px)", transition:"all 0.7s ease" }}>
        <div style={{ fontSize:"0.7rem", letterSpacing:"0.25em", textTransform:"uppercase", background:"linear-gradient(135deg,#6450dc,#a855f7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontWeight:700, marginBottom:"0.6rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ width:20, height:2, background:"linear-gradient(135deg,#6450dc,#a855f7)", borderRadius:2, display:"inline-block" }} />
          {t.skills.tag}
        </div>
        <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.5rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", lineHeight:1.15, color:"var(--text)" }}>
          {t.skills.title} <span style={{ background:"linear-gradient(135deg,#6450dc,#a855f7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{t.skills.highlight}</span>
        </h2>
      </div>
      <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"1.5rem" }}>
        {skills.map((skill, i) => {
          const card = useScrollAnimation();
          const isLang = skill.name === "Langues";
          return (
            <div key={skill.name} ref={card.ref}
              style={{ opacity: card.visible ? 1 : 0, transform: card.visible ? "translateY(0)" : "translateY(50px)", transition:"opacity 0.6s ease " + (i * 0.1) + "s, transform 0.6s ease " + (i * 0.1) + "s, border-color 0.2s, box-shadow 0.2s", background:"var(--card)", border:"1px solid var(--border)", borderRadius:18, padding:"1.8rem 1.5rem", boxShadow:"var(--shadow)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="#6450dc"; e.currentTarget.style.boxShadow="0 16px 48px rgba(100,80,220,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.boxShadow="var(--shadow)"; }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"1rem" }}>
                <span style={{ fontSize:"1.5rem" }}>{skill.icon}</span>
                <div style={{ fontFamily:"var(--font-syne)", fontWeight:700, fontSize:"0.95rem", color:"var(--text)" }}>{skill.name}</div>
              </div>
              {!isLang && (
                <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", fontSize:"0.75rem", color:"var(--text3)", marginBottom:"1rem" }}>
                  <div style={{ flex:1, height:3, background:"var(--bg3)", borderRadius:2, overflow:"hidden" }}>
                    <div style={{ height:"100%", width: card.visible ? skill.level + "%" : "0%", borderRadius:2, background:"linear-gradient(90deg,#6450dc,#a855f7)", transition:"width 1s ease " + (i * 0.1 + 0.3) + "s" }} />
                  </div>
                  <span>{skill.label}</span>
                </div>
              )}
              {isLang && skill.techs ? (
                <div style={{ display:"flex", flexDirection:"column" as const, gap:"1rem" }}>
                  {skill.techs.map((tech) => (
                    <LangBadge key={tech.name} {...tech} />
                  ))}
                </div>
              ) : skill.techs ? (
                <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"0.8rem", marginTop:"0.5rem" }}>
                  {skill.techs.map((tech) => (
                    <TechBadge key={tech.name} name={tech.name} />
                  ))}
                </div>
              ) : (
                <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"0.4rem" }}>
                  {skill.tags.map((tag) => (
                    <span key={tag} style={{ fontSize:"0.65rem", padding:"0.28rem 0.65rem", borderRadius:6, background:"rgba(100,80,220,0.1)", color:"#a855f7", border:"1px solid rgba(100,80,220,0.25)", fontWeight:600 }}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
