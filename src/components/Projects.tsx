"use client";
import { projects } from "@/lib/data";
export default function Projects() {
  return (
    <section id="projects" style={{ padding:"5rem 2.5rem", background:"var(--bg)" }}>
      <div style={{ fontSize:"0.72rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--accent)", fontWeight:500, marginBottom:"0.8rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
        <span style={{ width:20, height:1, background:"var(--accent)", display:"inline-block" }} />
        Portfolio
      </div>
      <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.4rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", color:"var(--text)" }}>
        Mes <span style={{ background:"linear-gradient(135deg, var(--accent), var(--accent3))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>projets</span>
      </h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1.5rem" }}>
        {projects.map((project) => (
          <div key={project.name} style={{ background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:12, padding:"2rem", transition:"border-color 0.25s, transform 0.2s", cursor:"pointer" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.transform="translateY(-4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; }}>
            <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"1rem" }}>
              <div style={{ width:44, height:44, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", background:"var(--bg3)", border:"1px solid var(--border)" }}>{project.icon}</div>
              <span style={{ fontSize:"0.65rem", padding:"0.3rem 0.7rem", borderRadius:20, background:"rgba(124,106,247,0.15)", color:"var(--accent)", border:"1px solid rgba(124,106,247,0.3)", textTransform:"uppercase" }}>{project.badge}</span>
            </div>
            <div style={{ fontFamily:"var(--font-syne)", fontWeight:700, fontSize:"1.05rem", marginBottom:"0.5rem", color:"var(--text)" }}>{project.name}</div>
            <p style={{ fontSize:"0.88rem", color:"var(--text2)", lineHeight:1.7 }}>{project.desc}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginTop:"1.2rem" }}>
              {project.stack.map((tech) => (
                <span key={tech} style={{ fontSize:"0.65rem", padding:"0.25rem 0.55rem", borderRadius:4, background:"var(--bg3)", color:"var(--text3)", border:"1px solid var(--border)" }}>{tech}</span>
              ))}
            </div>
            <div style={{ display:"flex", gap:"0.8rem", marginTop:"1.5rem" }}>
              <a href={project.github} style={{ fontSize:"0.8rem", color:"var(--text2)", textDecoration:"none", padding:"0.4rem 0.9rem", border:"1px solid var(--border)", borderRadius:6 }}>GitHub</a>
              <a href={project.demo} style={{ fontSize:"0.8rem", color:"var(--accent)", textDecoration:"none", padding:"0.4rem 0.9rem", border:"1px solid rgba(124,106,247,0.3)", borderRadius:6, background:"rgba(124,106,247,0.08)" }}>Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
