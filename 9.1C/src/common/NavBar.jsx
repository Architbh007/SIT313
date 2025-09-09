import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthed, clearSession, getSession } from "../lib/session";

export default function NavBar() {
  const nav = useNavigate();
  const authed = isAuthed();
  const session = getSession();

  const S = {
    bar: { background: "#fff", borderBottom: "1px solid #eee" },
    inner: { maxWidth: 1000, margin: "0 auto", padding: "10px 16px",
      display: "flex", gap: 12, alignItems: "center" },
    brand: { fontWeight: 700, textDecoration: "none", color: "#111", marginRight: 8 },
    searchWrap: { flex: 1 },
    search: { width: "100%", padding: "8px 10px", border: "1px solid #e5e7eb", borderRadius: 6 },
    link: { color: "#111", textDecoration: "none", cursor: "pointer" }
  };

  return (
    <div style={S.bar}>
      <div style={S.inner}>
        <Link to="/" style={S.brand}>DEV@Deakin</Link>
        <div style={S.searchWrap}><input placeholder="Search..." style={S.search} /></div>

        {authed && (
          <>
            <span style={S.link} onClick={() => nav("/post")}>Post</span>
            <span style={S.link} onClick={() => nav("/home")}>Home</span>
            <span style={{ color:"#444" }}>Hi, {session?.firstName || session?.email}</span>
            <span
              style={{ ...S.link, color:"#d00" }}
              onClick={() => { clearSession(); nav("/login"); }}
            >
              Logout
            </span>
          </>
        )}

        {!authed && (
          <span style={S.link} onClick={() => nav("/login")}>Login</span>
        )}
      </div>
    </div>
  );
}
