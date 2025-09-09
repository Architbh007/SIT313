// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { getSession, clearSession } from "../lib/session";

export default function Home() {
  const nav = useNavigate();
  const session = getSession();
  if (!session) { nav("/login", { replace: true }); return null; }

  const card = { maxWidth: 520, margin: "24px auto", background:"#fff", border:"1px solid #d6e1ff", borderRadius:8, padding:18 };

  return (
    <div style={card}>
      <h2>Home (Protected)</h2>
      <p>Welcome, <strong>{session.firstName || session.email}</strong>!</p>
      <button
        onClick={() => { clearSession(); nav("/login"); }}
        style={{ marginTop:10, padding:"10px 12px", borderRadius:6, border:"1px solid #e5e7eb", cursor:"pointer" }}
      >
        Logout
      </button>
    </div>
  );
}
