"use client"

import React from 'react'
import { Github, Linkedin, Mail, Heart } from './Icons'
import { personalInfo, footerContent } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="top">
          <a href="#hero" className="brand">&lt;KY/&gt;</a>

          <div className="links">
            {footerContent.navLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">{link.label}</a>
            ))}
          </div>

          <div className="socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={18} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon"><Mail size={18} /></a>
          </div>
        </div>

        <div className="divider" />

        <div className="bottom">
          <p className="credit">{footerContent.credit} <Heart size={12} color="#ef4444" fill="#ef4444" /></p>
          <p className="small">{footerContent.copyright}</p>
        </div>
      </div>

      <style jsx>{`
        .site-footer { background:#1a1a2e; color:#fff; padding:48px 24px 24px; border-top:4px solid #3b82f6 }
        .top { display:flex; flex-direction:column; align-items:center; gap:24px; margin-bottom:32px }
        .brand { font-family:var(--font-pixel); font-size:0.9rem; color:#fff; text-decoration:none }
        .links { display:flex; flex-wrap:wrap; justify-content:center; gap:24px }
        .footer-nav-link { color:#fff; text-decoration:none }
        .socials { display:flex; gap:16px }
        .divider { width:100%; height:2px; background:#2a2a4e; margin-bottom:24px }
        .bottom { display:flex; flex-direction:column; align-items:center; gap:8px }
        .credit { font-family:var(--font-mono); font-size:0.75rem; color:#a0a0b0; display:flex; align-items:center; gap:4px }
        .small { font-family:var(--font-mono); font-size:0.7rem; color:#6a6a8a }
      `}</style>
    </footer>
  )
}
