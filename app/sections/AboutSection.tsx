"use client"

import React from 'react'
import { Quote } from '../components/Icons'
import { aboutContent, personalInfo } from '../data/portfolioData'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-heading">About Me</h2>

        <div className="about-wrapper">
          <div className="pixel-card about-card">
            <div className="about-head">
              <div className="about-icon">
                <Quote size={16} color="#1a1a2e" />
              </div>
              <span className="about-title">ABOUT ME</span>
            </div>
            <div className="about-content">
              <p className="bio">{personalInfo.githubBio}</p>
              {aboutContent.map((p, i) => (
                <p key={i} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-wrapper { max-width: 900px; margin: 0 auto; display:flex; justify-content:center }
        .about-card { padding:24px; background:#dbeafe; border-radius:var(--radius); max-width:900px }
        .about-head { display:flex; align-items:center; gap:10px; margin-bottom:16px }
        .about-icon { width:36px; height:36px; display:flex; align-items:center; justify-content:center; background:#3b82f6; border:2px solid #1a1a2e }
        .about-title { font-family:var(--font-pixel); font-size:0.7rem; font-weight:700; text-transform:uppercase; color:#1a1a2e }
        .about-content { }
        .bio { font-family:var(--font-mono); font-style:italic; color:var(--text-secondary); margin:0 0 12px 0; font-size:0.95rem }
        .about-paragraph { margin:0 0 12px 0; color:var(--text-secondary); line-height:1.8; font-size:0.95rem; opacity:0; transform:translateY(10px); animation:fadeUp 420ms ease forwards; }

        /* staggered delays for paragraphs */
        .about-content p.about-paragraph:nth-of-type(1) { animation-delay: 0ms }
        .about-content p.about-paragraph:nth-of-type(2) { animation-delay: 80ms }
        .about-content p.about-paragraph:nth-of-type(3) { animation-delay: 160ms }
        .about-content p.about-paragraph:nth-of-type(4) { animation-delay: 240ms }

        @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }

        @media (max-width:768px) { .about-card { padding:20px } .about-icon { margin:0 auto } }
      `}</style>
    </section>
  )
}
