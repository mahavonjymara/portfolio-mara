"use client";
import { projects } from "@/lib/data";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
export default function Projects() {
  const title = useScrollAnimation();
  return (
    <section id="projects" style={{ padding:"5.5rem 2.5rem", background:"transparent" }}>
      <div ref={title.ref} style={{ opacity: title.visible ? 1 : 0, transform: title.visible ? "translateY(0)" : "translateY(40px)", transition:"all 0.7s ease" }}>
        <div style={{ fontSize:"0.7rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"#d4a853", fontWeight:700, marginBottom:"0.6rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ width:20, height:2, background:"#d4a853", borderRadius:2, display:"inline-block" }} />
          Portfolio
        </div>
        <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.5rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", lineHeight:1.15, color:"var(--text)" }}>
          Mes <span style={{ color:"#d4a853" }}>projets</span>
        </h2>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1.5rem" }}>
        {projects.map((project, i) => {
          const card = useScrollAnimation();
          return (
            <div key={project.name} ref={card.ref}
              style={{ opacity: card.visible ? 1 : 0, transform: card.visible ? "translateY(0)" : "translateY(60px)", transition:"all 0.65s ease " + (i * 0.15) + "s", background:"rgba(255,255,255,0.6)", border:"1px solid rgba(255,255,255,0.85)", borderRadius:18, padding:"2rem", boxShadow:"0 4px 24px rgba(10,22,40,0.08)", backdropFilter:"blur(12px)", position:"relative" as const, overflow:"hidden" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="#d4a853"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(212,168,83,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.85)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(10,22,40,0.08)"; }}>
              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"1rem" }}>
                <div style={{ width:46, height:46, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", background:"rgba(212,168,83,0.15)", border:"1px solid rgba(212,168,83,0.3)" }}>{project.icon}</div>
                <span style={{ fontSize:"0.65rem", padding:"0.3rem 0.75rem", borderRadius:20, background:"rgba(13,27,75,0.1)", color:"#0d1b4b", border:"1px solid rgba(13,27,75,0.2)", letterSpacing:"0.05em", textTransform:"uppercase" as const, fontWeight:700 }}>{project.badge}</span>
              </div>
              <div style={{ fontFamily:"var(--font-syne)", fontWeight:700, fontSize:"1.05rem", marginBottom:"0.5rem", color:"var(--text)" }}>{project.name}</div>
              <p style={{ fontSize:"0.88rem", color:"var(--text2)", lineHeight:1.75 }}>{project.desc}</p>
              <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"0.4rem", marginTop:"1.2rem" }}>
                {project.stack.map((tech) => (
                  <span key={tech} style={{ fontSize:"0.65rem", padding:"0.28rem 0.65rem", borderRadius:6, background:"rgba(212,168,83,0.15)", color:"#7a5500", border:"1px solid rgba(212,168,83,0.35)", fontWeight:600 }}>{tech}</span>
                ))}
              </div>
              <div style={{ display:"flex", gap:"0.8rem", marginTop:"1.5rem" }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ fontSize:"0.8rem", textDecoration:"none", padding:"0.42rem 1rem", borderRadius:8, border:"1px solid rgba(10,22,40,0.2)", color:"var(--text2)", background:"rgba(255,255,255,0.5)", transition:"all 0.2s" }}>GitHub</a>
                <a href={project.demo} target="_blank" rel="noreferrer" style={{ fontSize:"0.8rem", textDecoration:"none", padding:"0.42rem 1rem", borderRadius:8, border:"1px solid rgba(212,168,83,0.4)", color:"#d4a853", background:"rgba(212,168,83,0.08)", transition:"all 0.2s" }}>Demo</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
