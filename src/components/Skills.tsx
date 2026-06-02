"use client";
import { skills } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

function DbIcon({ name, color, bg, letter }: { name: string; color: string; bg: string; letter: string }) {
  return (
    <div title={name} style={{ display:"flex", flexDirection:"column" as const, alignItems:"center", gap:"0.3rem" }}>
      <div style={{ width:40, height:40, borderRadius:10, background:bg, border:"1px solid " + color + "40", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", fontWeight:800, color:color, fontFamily:"monospace", letterSpacing:"-0.5px" }}>
        {letter}
      </div>
      <span style={{ fontSize:"0.6rem", color:"var(--text3)", fontWeight:500 }}>{name}</span>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  const title = useScrollAnimation();
  return (
    <section id="skills" style={{ padding:"5.5rem 2.5rem", background:"var(--bg2)" }}>
      <div ref={title.ref} style={{ opacity: title.visible ? 1 : 0, transform: title.visible ? "translateY(0)" : "translateY(40px)", transition:"all 0.7s ease" }}>
        <div style={{ fontSize:"0.7rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"#d4a853", fontWeight:700, marginBottom:"0.6rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ width:20, height:2, background:"#d4a853", borderRadius:2, display:"inline-block" }} />
          {t.skills.tag}
        </div>
        <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.5rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", lineHeight:1.15, color:"var(--text)" }}>
          {t.skills.title} <span style={{ color:"#d4a853" }}>{t.skills.highlight}</span>
        </h2>
      </div>
      <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))", gap:"1.5rem" }}>
        {skills.map((skill, i) => {
          const card = useScrollAnimation();
          return (
            <div key={skill.name} ref={card.ref}
              style={{ opacity: card.visible ? 1 : 0, transform: card.visible ? "translateY(0)" : "translateY(50px)", transition:"all 0.6s ease " + (i * 0.1) + "s", background:"var(--card)", border:"1px solid var(--border)", borderRadius:18, padding:"2rem 1.5rem", boxShadow:"var(--shadow)", backdropFilter:"blur(12px)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="#d4a853"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(212,168,83,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="var(--shadow)"; }}>
              <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{skill.icon}</div>
              <div style={{ fontFamily:"var(--font-syne)", fontWeight:700, fontSize:"1rem", marginBottom:"0.6rem", color:"var(--text)" }}>{skill.name}</div>
              <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", fontSize:"0.78rem", color:"var(--text3)", marginBottom:"0.8rem" }}>
                <div style={{ flex:1, height:3, background:"var(--bg3)", borderRadius:2, overflow:"hidden" }}>
                  <div style={{ height:"100%", width: card.visible ? skill.level + "%" : "0%", borderRadius:2, background:"linear-gradient(90deg,#d4a853,#e8c27a)", transition:"width 1s ease " + (i * 0.1 + 0.3) + "s" }} />
                </div>
                <span>{skill.label}</span>
              </div>
              {"databases" in skill && skill.databases ? (
                <div style={{ display:"flex", gap:"0.8rem", marginTop:"0.8rem", flexWrap:"wrap" as const }}>
                  {skill.databases.map((db: { name: string; color: string; bg: string; letter: string }) => (
                    <DbIcon key={db.name} {...db} />
                  ))}
                </div>
              ) : (
                <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"0.4rem" }}>
                  {skill.tags.map((tag) => (
                    <span key={tag} style={{ fontSize:"0.65rem", padding:"0.28rem 0.65rem", borderRadius:6, background:"rgba(212,168,83,0.1)", color:"#d4a853", border:"1px solid rgba(212,168,83,0.25)", fontWeight:600 }}>{tag}</span>
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
