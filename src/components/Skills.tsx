"use client";
import { skills } from "@/lib/data";
export default function Skills() {
  return (
    <section id="skills" style={{ padding:"5rem 2.5rem", background:"var(--bg2)" }}>
      <div style={{ fontSize:"0.72rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--accent)", fontWeight:500, marginBottom:"0.8rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
        <span style={{ width:20, height:1, background:"var(--accent)", display:"inline-block" }} />
        Expertise technique
      </div>
      <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.4rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", lineHeight:1.15, color:"var(--text)" }}>
        Mes <span style={{ background:"linear-gradient(135deg, var(--accent), var(--accent3))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>competences</span>
      </h2>
      <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:1, border:"1px solid var(--border)" }}>
        {skills.map((skill) => (
          <div key={skill.name} style={{ background:"var(--bg)", padding:"2rem 1.5rem", border:"1px solid transparent", transition:"border-color 0.2s, background 0.2s", cursor:"default" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.background="var(--bg2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor="transparent"; e.currentTarget.style.background="var(--bg)"; }}>
            <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{skill.icon}</div>
            <div style={{ fontFamily:"var(--font-syne)", fontWeight:700, fontSize:"1rem", marginBottom:"0.5rem", color:"var(--text)" }}>{skill.name}</div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", fontSize:"0.78rem", color:"var(--text3)" }}>
              <div style={{ flex:1, height:3, background:"var(--bg3)", borderRadius:2, overflow:"hidden" }}>
                <div style={{ height:"100%", width:skill.level + "%", borderRadius:2, background:"linear-gradient(90deg, var(--accent), var(--accent2))" }} />
              </div>
              <span>{skill.label}</span>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginTop:"0.8rem" }}>
              {skill.tags.map((tag) => (
                <span key={tag} style={{ fontSize:"0.65rem", padding:"0.25rem 0.55rem", borderRadius:4, background:"var(--bg3)", color:"var(--text3)", border:"1px solid var(--border)" }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
