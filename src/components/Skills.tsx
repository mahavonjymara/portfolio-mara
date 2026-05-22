"use client";
import { skills } from "@/lib/data";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
export default function Skills() {
  const title = useScrollAnimation();
  return (
    <section id="skills" style={{ padding:"5.5rem 2.5rem", background:"rgba(135,206,235,0.35)" }}>
      <div ref={title.ref} style={{ opacity: title.visible ? 1 : 0, transform: title.visible ? "translateY(0)" : "translateY(40px)", transition:"all 0.7s ease" }}>
        <div style={{ fontSize:"0.7rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"#d4a853", fontWeight:700, marginBottom:"0.6rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ width:20, height:2, background:"#d4a853", borderRadius:2, display:"inline-block" }} />
          Expertise technique
        </div>
        <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.5rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", lineHeight:1.15, color:"var(--text)" }}>
          Mes <span style={{ color:"#d4a853" }}>competences</span>
        </h2>
      </div>
      <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))", gap:"1.5rem" }}>
        {skills.map((skill, i) => {
          const card = useScrollAnimation();
          return (
            <div key={skill.name} ref={card.ref}
              style={{ opacity: card.visible ? 1 : 0, transform: card.visible ? "translateY(0)" : "translateY(50px)", transition:"all 0.6s ease " + (i * 0.1) + "s", background:"rgba(255,255,255,0.6)", border:"1px solid rgba(255,255,255,0.85)", borderRadius:18, padding:"2rem 1.5rem", boxShadow:"0 4px 24px rgba(10,22,40,0.08)", backdropFilter:"blur(12px)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="#d4a853"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(212,168,83,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.85)"; e.currentTarget.style.transform=card.visible?"translateY(0)":"translateY(50px)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(10,22,40,0.08)"; }}>
              <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{skill.icon}</div>
              <div style={{ fontFamily:"var(--font-syne)", fontWeight:700, fontSize:"1rem", marginBottom:"0.6rem", color:"var(--text)" }}>{skill.name}</div>
              <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", fontSize:"0.78rem", color:"var(--text3)", marginBottom:"0.8rem" }}>
                <div style={{ flex:1, height:3, background:"rgba(10,22,40,0.1)", borderRadius:2, overflow:"hidden" }}>
                  <div style={{ height:"100%", width: card.visible ? skill.level + "%" : "0%", borderRadius:2, background:"linear-gradient(90deg,#d4a853,#e8c27a)", transition:"width 1s ease " + (i * 0.1 + 0.3) + "s" }} />
                </div>
                <span>{skill.label}</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"0.4rem" }}>
                {skill.tags.map((tag) => (
                  <span key={tag} style={{ fontSize:"0.65rem", padding:"0.28rem 0.65rem", borderRadius:6, background:"rgba(212,168,83,0.15)", color:"#7a5500", border:"1px solid rgba(212,168,83,0.35)", fontWeight:600 }}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
