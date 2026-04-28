"use client";
import { useState } from "react";
import { contact } from "@/lib/data";
export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name:"", email:"", message:"" });
  };
  const contactLinks = [
    { icon:"GH", label:contact.github, href:"https://" + contact.github },
    { icon:"LI", label:contact.linkedin, href:"https://" + contact.linkedin },
    { icon:"EM", label:contact.email, href:"mailto:" + contact.email },
  ];
  const inputStyle = { width:"100%", background:"var(--bg)", border:"1px solid var(--border)", borderRadius:8, padding:"0.75rem 1rem", color:"var(--text)", fontSize:"0.9rem", outline:"none" };
  return (
    <section id="contact" style={{ padding:"5rem 2.5rem", background:"var(--bg2)" }}>
      <div style={{ fontSize:"0.72rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--accent)", fontWeight:500, marginBottom:"0.8rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
        <span style={{ width:20, height:1, background:"var(--accent)", display:"inline-block" }} />
        Contact
      </div>
      <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.4rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", color:"var(--text)" }}>
        Travaillons <span style={{ background:"linear-gradient(135deg, var(--accent), var(--accent3))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ensemble</span>
      </h2>
      <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start" }}>
        <div>
          <p style={{ color:"var(--text2)", lineHeight:1.85, fontSize:"1rem", fontWeight:300, marginBottom:"2rem" }}>
            Developpeur Full Stack JavaScript junior base a Antananarivo, disponible pour un stage ou une premiere experience en local ou remote international.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:"0.8rem" }}>
            {contactLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                style={{ display:"flex", alignItems:"center", gap:"0.8rem", color:"var(--text2)", fontSize:"0.9rem", textDecoration:"none", padding:"0.8rem 1.2rem", borderRadius:8, border:"1px solid var(--border)", background:"var(--card)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.color="var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text2)"; }}>
                <div style={{ width:32, height:32, borderRadius:6, background:"var(--bg3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", color:"var(--text3)" }}>{l.icon}</div>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          {(["name","email","message"] as const).map((field) => (
            <div key={field} style={{ marginBottom:"1.2rem" }}>
              <label style={{ display:"block", fontSize:"0.78rem", textTransform:"uppercase", letterSpacing:"0.12em", color:"var(--text3)", marginBottom:"0.5rem" }}>
                {field === "name" ? "Nom" : field === "email" ? "Email" : "Message"}
              </label>
              {field === "message" ? (
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message:e.target.value })} placeholder="Decrivez votre projet..." style={{ ...inputStyle, height:110, resize:"none" } as React.CSSProperties} />
              ) : (
                <input type={field === "email" ? "email" : "text"} value={form[field]} onChange={(e) => setForm({ ...form, [field]:e.target.value })} placeholder={field === "name" ? "Votre nom" : "votre@email.com"} style={inputStyle as React.CSSProperties} />
              )}
            </div>
          ))}
          <button onClick={handleSubmit} style={{ width:"100%", background: sent ? "var(--accent3)" : "var(--accent)", color: sent ? "#0a0a0f" : "#fff", padding:"0.85rem 2rem", borderRadius:8, fontSize:"0.9rem", fontWeight:500, cursor:"pointer", border:"none", transition:"all 0.3s" }}>
            {sent ? "Message envoye !" : "Envoyer le message"}
          </button>
        </div>
      </div>
    </section>
  );
}
