"use client";
import { useState } from "react";
import { contact } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const title = useScrollAnimation();
  const left = useScrollAnimation();
  const right = useScrollAnimation();
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
  const inputStyle = { width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(212,168,83,0.2)", borderRadius:10, padding:"0.8rem 1rem", color:"#fff", fontFamily:"var(--font-dm-sans)", fontSize:"0.9rem", outline:"none", transition:"border-color 0.2s" };
  return (
    <section id="contact" style={{ padding:"5.5rem 2.5rem", background:"#0d1b4b" }}>
      <div ref={title.ref} style={{ opacity: title.visible ? 1 : 0, transform: title.visible ? "translateY(0)" : "translateY(40px)", transition:"all 0.7s ease" }}>
        <div style={{ fontSize:"0.7rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"#d4a853", fontWeight:700, marginBottom:"0.6rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ width:20, height:2, background:"#d4a853", borderRadius:2, display:"inline-block" }} />
          {t.contact.tag}
        </div>
        <h2 style={{ fontFamily:"var(--font-syne)", fontSize:"2.5rem", fontWeight:800, letterSpacing:"-0.02em", marginBottom:"3rem", color:"#fff" }}>
          {t.contact.title} <span style={{ color:"#d4a853" }}>{t.contact.highlight}</span>
        </h2>
      </div>
      <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start" }}>
        <div ref={left.ref} style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? "translateX(0)" : "translateX(-50px)", transition:"all 0.8s ease 0.2s" }}>
          <p style={{ color:"rgba(255,255,255,0.6)", lineHeight:1.9, fontSize:"1rem", fontWeight:300, marginBottom:"2rem" }}>{t.contact.desc}</p>
          <div style={{ display:"flex", flexDirection:"column" as const, gap:"0.8rem" }}>
            {contactLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                style={{ display:"flex", alignItems:"center", gap:"0.8rem", color:"rgba(255,255,255,0.6)", fontSize:"0.9rem", textDecoration:"none", padding:"0.9rem 1.2rem", borderRadius:12, border:"1px solid rgba(212,168,83,0.2)", background:"rgba(212,168,83,0.05)", transition:"all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="#d4a853"; e.currentTarget.style.color="#d4a853"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(212,168,83,0.2)"; e.currentTarget.style.color="rgba(255,255,255,0.6)"; }}>
                <div style={{ width:34, height:34, borderRadius:8, background:"rgba(212,168,83,0.12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.78rem", color:"#d4a853", fontWeight:700, border:"1px solid rgba(212,168,83,0.25)", flexShrink:0 }}>{l.icon}</div>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div ref={right.ref} style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? "translateX(0)" : "translateX(50px)", transition:"all 0.8s ease 0.3s" }}>
          {(["name","email","message"] as const).map((field) => (
            <div key={field} style={{ marginBottom:"1.2rem" }}>
              <label style={{ display:"block", fontSize:"0.72rem", textTransform:"uppercase" as const, letterSpacing:"0.16em", color:"rgba(255,255,255,0.4)", marginBottom:"0.5rem", fontWeight:600 }}>
                {field === "name" ? t.contact.name : field === "email" ? t.contact.email : t.contact.message}
              </label>
              {field === "message" ? (
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message:e.target.value })} placeholder={t.contact.messagePh} style={{ ...inputStyle, height:110, resize:"none" } as React.CSSProperties}
                  onFocus={(e) => (e.target.style.borderColor="#d4a853")} onBlur={(e) => (e.target.style.borderColor="rgba(212,168,83,0.2)")} />
              ) : (
                <input type={field === "email" ? "email" : "text"} value={form[field]} onChange={(e) => setForm({ ...form, [field]:e.target.value })}
                  placeholder={field === "name" ? t.contact.namePh : t.contact.emailPh} style={inputStyle as React.CSSProperties}
                  onFocus={(e) => (e.target.style.borderColor="#d4a853")} onBlur={(e) => (e.target.style.borderColor="rgba(212,168,83,0.2)")} />
              )}
            </div>
          ))}
          <button onClick={handleSubmit} style={{ width:"100%", background: sent ? "#0d9e75" : "#d4a853", color: sent ? "#fff" : "#0d1b4b", padding:"0.85rem 2rem", borderRadius:10, fontSize:"0.9rem", fontWeight:700, cursor:"pointer", border:"none", transition:"all 0.3s", letterSpacing:"0.03em" }}>
            {sent ? t.contact.sent : t.contact.send}
          </button>
        </div>
      </div>
    </section>
  );
}
