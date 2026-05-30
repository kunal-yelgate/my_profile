"use client"

import React, { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="brand">&lt;KY/&gt;</a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <div className="socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={18} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon"><Mail size={18} /></a>
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="mobile-link">
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        .nav-root { position:fixed; top:0; left:0; right:0; z-index:1000; transition:all .3s ease }
        .nav-root.scrolled { background:#fff; border-bottom:2px solid #1a1a2e; box-shadow:0 4px 0 rgba(26,26,46,0.1) }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; height:64px }
        .brand { font-family:var(--font-pixel); font-size:0.75rem; color:var(--text-primary); text-decoration:none }
        .desktop-nav { display:flex; align-items:center; gap:32px }
        .nav-link { text-decoration:none; font-family:var(--font-mono); color:var(--text-secondary); font-weight:600 }
        .socials { display:flex; gap:12px; align-items:center }
        .mobile-toggle { display:none; background:none; border:none; color:var(--text-primary) }
        .mobile-menu { background:#fff; border-bottom:2px solid #1a1a2e; padding:16px 24px }
        .mobile-link { display:block; padding:10px 0; font-family:var(--font-mono); font-size:0.8rem; font-weight:600; color:var(--text-secondary); text-decoration:none; text-transform:uppercase; border-bottom:1px solid #eee }

        @media (max-width: 768px) {
          .desktop-nav { display:none }
          .mobile-toggle { display:block }
        }
      `}</style>
    </nav>
  )
}
