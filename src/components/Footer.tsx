"use client";
import { useLang } from "@/lib/LangContext";
export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ textAlign:"center", padding:"2rem", fontSize:"0.78rem", color:"var(--text3)", borderTop:"1px solid rgba(212,168,83,0.2)", background:"rgba(135,206,235,0.3)", letterSpacing:"0.05em", backdropFilter:"blur(10px)" }}>
      {t.footer} <span style={{ color:"#d4a853", fontWeight:600 }}>MARA Mahavonjy</span> · Full Stack JavaScript Developer · Antananarivo, Madagascar
    </footer>
  );
}
