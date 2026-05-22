"use client";
import { useState, useEffect } from "react";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      onClick={scrollTop}
      style={{
        position:"fixed", bottom:"2rem", right:"2rem", zIndex:999,
        width:48, height:48, borderRadius:"50%",
        background:"#d4a853", color:"#0d1b4b",
        border:"none", cursor:"pointer",
        fontSize:"1.3rem", fontWeight:700,
        boxShadow:"0 4px 20px rgba(212,168,83,0.5)",
        display:"flex", alignItems:"center", justifyContent:"center",
        transition:"all 0.3s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(212,168,83,0.6)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(212,168,83,0.5)"; }}
      title="Retour en haut"
    >
      ↑
    </button>
  );
}
