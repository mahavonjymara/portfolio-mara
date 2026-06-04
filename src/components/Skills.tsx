"use client";
import React from "react";
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

function TechBadge({ name, color, bg, letter }: TechItem) {
  const svgIcons: Record<string, React.ReactElement> = {
    "Git": <svg viewBox="0 0 24 24" width="20" height="20" fill="#f05032"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.937-2.024L12.799 8.71v6.535a1.838 1.838 0 1 1-1.685-.05V8.664a1.838 1.838 0 0 1-.997-2.416L7.375 3.498 .452 10.93a1.55 1.55 0 0 0 0 2.187l10.48 10.478a1.55 1.55 0 0 0 2.186 0l10.428-10.428a1.55 1.55 0 0 0 0-2.237"/></svg>,
    "GitHub": <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
    "Docker": <svg viewBox="0 0 24 24" width="20" height="20" fill="#2496ed"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>,
    "Windows": <svg viewBox="0 0 24 24" width="20" height="20" fill="#0078d4"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>,
    "Linux": <svg viewBox="0 0 24 24" width="20" height="20" fill="#e95420"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.138.826-.37 1.755-.7.47-.17.98-.37 1.056-.62.532-.39.98-.81 1.61-.952.63-.14 1.26-.09 1.932.013.27.053.65.137 1.05.195.8.116 1.574.098 2.137-.149.56-.247.95-.666 1.21-1.253.057-.137.1-.283.133-.437.24-.41.257-.835.07-1.16-.19-.32-.58-.5-1.05-.61a2.8 2.8 0 0 0-.525-.069c-.32-.01-.67.03-1.01.03-.508 0-.923-.07-1.148-.35-.228-.28-.27-.7-.217-1.32.033-.4.13-.79.173-1.07.066-.395.07-.67-.027-.87-.32-.65-.91-.97-1.63-1.12-.72-.14-1.54-.1-2.31-.06-.42.02-.84.06-1.22.07-.44.01-.82-.01-1.07-.15-.26-.14-.34-.42-.33-.81.02-.4.14-.87.26-1.32.26-.99.57-1.96.57-2.88 0-.36-.04-.7-.15-1.01-.23-.65-.7-1.08-1.29-1.27-.6-.19-1.3-.16-1.96.01z"/></svg>,
    "MERISE": <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="2" y="8" width="8" height="8" rx="1" fill="#8b5cf6"/><rect x="14" y="8" width="8" height="8" rx="1" fill="#8b5cf6"/><line x1="10" y1="12" x2="14" y2="12" stroke="#8b5cf6" strokeWidth="2"/><circle cx="12" cy="4" r="2" fill="#8b5cf6"/><line x1="12" y1="6" x2="12" y2="8" stroke="#8b5cf6" strokeWidth="1.5"/></svg>,
    "UML": <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0ea5e9" strokeWidth="1.5"><rect x="1" y="6" width="7" height="5" rx="1"/><rect x="8.5" y="1" width="7" height="5" rx="1"/><rect x="8.5" y="11" width="7" height="5" rx="1"/><rect x="16" y="6" width="7" height="5" rx="1"/><line x1="8" y1="8.5" x2="8.5" y2="3.5"/><line x1="8" y1="8.5" x2="8.5" y2="13.5"/><line x1="15.5" y1="3.5" x2="16" y2="8.5"/><line x1="15.5" y1="13.5" x2="16" y2="8.5"/></svg>,
  };
  const icon = svgIcons[name];
  return (
    <div title={name} style={{ display:"flex", flexDirection:"column" as const, alignItems:"center", gap:"0.35rem" }}>
      <div style={{ width:46, height:46, borderRadius:12, background:bg, border:"1.5px solid " + color + "40", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px " + color + "20", transition:"transform 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform="scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform="scale(1)")}>
        {icon ? icon : <span style={{ fontSize:"0.68rem", fontWeight:800, color:color, fontFamily:"monospace" }}>{letter}</span>}
      </div>
      <span style={{ fontSize:"0.58rem", color:"var(--text3)", fontWeight:600, textAlign:"center" as const, maxWidth:50 }}>{name}</span>
    </div>
  );
}

function LangBadge({ name, color, bg, flag }: TechItem) {
  const levelMap: Record<string, number> = { "Francais": 75, "Anglais": 72 };
  const level = levelMap[name] || 70;
  return (
    <div style={{ display:"flex", flexDirection:"column" as const, gap:"0.5rem", width:"100%" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
        <div style={{ width:46, height:34, borderRadius:8, overflow:"hidden", border:"1.5px solid " + color + "40", boxShadow:"0 2px 8px rgba(0,0,0,0.1)", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
          {flag === "FR" ? <FlagFR /> : <FlagGB />}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.3rem" }}>
            <span style={{ fontSize:"0.85rem", fontWeight:700, color:"var(--text)", fontFamily:"var(--font-syne)" }}>{name}</span>
            <span style={{ fontSize:"0.7rem", fontWeight:700, color:color, background:bg, padding:"0.15rem 0.5rem", borderRadius:6, border:"1px solid " + color + "40" }}>B2</span>
          </div>
          <div style={{ height:4, background:"var(--bg3)", borderRadius:3, overflow:"hidden" }}>
            <div style={{ height:"100%", width: level + "%", background:"linear-gradient(90deg," + color + "," + color + "90)", borderRadius:3 }} />
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
              style={{
                opacity: card.visible ? 1 : 0,
                transform: card.visible ? "translateY(0)" : "translateY(50px)",
                transition:"opacity 0.6s ease " + (i * 0.1) + "s, transform 0.6s ease " + (i * 0.1) + "s, border-color 0.2s, box-shadow 0.2s",
                background:"var(--card)",
                border:"1px solid var(--border)",
                borderRadius:18,
                padding:"1.8rem 1.5rem",
                boxShadow:"var(--shadow)",
              }}
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
                    <TechBadge key={tech.name} {...tech} />
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
