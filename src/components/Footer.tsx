"use client";
import { useLang } from "@/lib/LangContext";
export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ textAlign:"center", padding:"2rem", fontSize:"0.78rem", color:"var(--text3)", borderTop:"1px solid var(--border)", background:"var(--bg)", letterSpacing:"0.05em" }}>
      {t.footer} <span style={{ color:"#d4a853", fontWeight:600 }}>MARA Mahavonjy</span> · Full Stack JavaScript Developer · Antananarivo, Madagascar
    </footer>
  );
}
