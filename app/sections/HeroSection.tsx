"use client"

import React from 'react'
import { Code2, Download, ChevronDown, Sparkles } from '../components/Icons'
import { personalInfo, heroContent } from '../data/portfolioData'

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="logo-wrap">
          <Code2 size={48} color="#3b82f6" />
          <div className="sparkles"><Sparkles size={14} color="#1a1a2e" /></div>
        </div>

        <h1 className="hero-name">{personalInfo.fullName.toUpperCase()}</h1>

        <p className="hero-role">FULL-STACK DEVELOPER</p>

        <p className="hero-tagline">{heroContent.tagline}</p>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            <ChevronDown size={16} />
            {heroContent.ctaPrimary}
          </a>
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn btn-yellow">
            <Download size={16} />
            {heroContent.ctaSecondary}
          </a>
        </div>

        <div className="open-to">
          <div className="dot" />
          <span>{personalInfo.openTo}</span>
        </div>
      </div>

      <style jsx>{`
        .hero-section { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:80px 24px; background:linear-gradient(180deg,#f8fafc 0%, #eef2ff 60%); position:relative; overflow:hidden }
        .hero-section::before { content:''; position:absolute; width:420px; height:420px; border-radius:50%; right:-120px; top:-100px; background:radial-gradient(circle at 30% 30%, rgba(59,130,246,0.12), transparent 40%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.08), transparent 30%); filter:blur(30px); z-index:0 }
        .container { position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px }
        .logo-wrap { width:140px;height:140px;margin:0 auto 20px;background:linear-gradient(135deg,#0f172a,#111827);border-radius:20px;border:3px solid rgba(26,26,46,0.9);box-shadow:12px 12px 0 rgba(26,26,46,0.06);display:flex;align-items:center;justify-content:center;position:relative; transform:translateY(0); animation:float 6s ease-in-out infinite }
        .sparkles { position:absolute; top:-10px; right:-10px; width:30px;height:30px;background:#fef3c7;display:flex;align-items:center;justify-content:center;border-radius:8px;border:2px solid rgba(26,26,46,0.9) }
        @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
        .hero-name { position:relative; display:inline-block; z-index:2; font-family:var(--font-pixel); font-size:clamp(1.6rem,5vw,3rem); color:var(--text-primary); margin:8px 0 6px; line-height:1.05; text-shadow:0 4px 18px rgba(15,23,42,0.06); padding:6px 18px; border-radius:14px }
        .hero-name::before { content:''; position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:calc(100% + 36px); height:72%; background:radial-gradient(circle at 40% 40%, rgba(59,130,246,0.16), rgba(168,85,247,0.08)); filter:blur(20px); border-radius:16px; z-index:1; opacity:0.95 }
        .hero-role { font-family:var(--font-mono); font-size:0.85rem; font-weight:700; color:var(--accent-blue); margin-bottom:8px; text-transform:uppercase; letter-spacing:2px }
        .hero-tagline { font-size:1.05rem; color:var(--text-secondary); max-width:720px; margin:0 auto 20px; line-height:1.7; text-align:center }
        .hero-ctas { display:flex; gap:14px; justify-content:center; flex-wrap:wrap }
        .btn { display:inline-flex; align-items:center; gap:8px; padding:10px 18px; border-radius:4px; text-decoration:none; font-weight:700 }
        .btn-primary { background:#1f2937; color:#fff; border:2px solid rgba(255,255,255,0.04); box-shadow:4px 6px 0 rgba(15,23,42,0.06); transition:transform 180ms ease, box-shadow 180ms ease }
        .btn-primary:hover { transform:translateY(-3px); box-shadow:8px 12px 0 rgba(15,23,42,0.08) }
        .btn-yellow { background:linear-gradient(90deg,#f59e0b,#f97316); color:#111827; border:2px solid rgba(0,0,0,0.06) }
        .open-to { margin-top:22px; display:inline-flex; align-items:center; gap:8px; padding:8px 16px; border-radius:6px; border:1px solid rgba(26,26,46,0.08); background:rgba(34,197,94,0.06) }
        .dot { width:8px;height:8px;background:#22c55e;border-radius:50%; animation:pulse 2s infinite }
        @keyframes pulse { 0%{opacity:1}50%{opacity:0.4}100%{opacity:1} }
        @media (max-width:640px) { .logo-wrap { width:100px;height:100px } .hero-name{font-size:clamp(1.2rem,6vw,2rem)} .hero-tagline{padding:0 8px} }
      `}</style>
    </section>
  )
}
