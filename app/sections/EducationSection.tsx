"use client"

import React, { useState } from 'react'
import { GraduationCap, BookOpen, Calendar, MapPin } from '../components/Icons'
import { education as educationData, Education as EducationType } from '../data/portfolioData'

const colorMap: Record<number, { bg: string; color: string; dotColor: string }> = {
  0: { bg: '#dbeafe', color: '#3b82f6', dotColor: '#3b82f6' },
  1: { bg: '#fce7f3', color: '#f472b6', dotColor: '#f472b6' },
}

export default function EducationSection() {
  const [items, setItems] = useState<Array<EducationType>>(educationData)

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <h2 className="section-heading">Academy Level</h2>
        <p className="muted">Educational journey and academic achievements</p>

        <div className="edu-grid">
          {items.map((ed, idx) => {
            const colorSet = colorMap[idx % 2] || colorMap[0]
            return (
              <div className="pixel-card edu-card" key={idx} style={{ background: colorSet.bg }}>
                <div className="edu-head">
                  <div className="icon-box" style={{ background: colorSet.bg, borderColor: colorSet.color }}>
                    <GraduationCap size={20} color={colorSet.color} />
                  </div>
                  <div className="edu-info">
                    <h3 className="degree">{ed.degree.toUpperCase()}</h3>
                    <div className="college-name"><MapPin size={12} /> {ed.college}</div>
                  </div>
                </div>

                <div className="edu-metrics">
                  <div className="metric">
                    <span className="metric-label">Duration</span>
                    <span className="metric-value">{ed.duration}</span>
                  </div>
                  {ed.cgpa && (
                    <div className="metric">
                      <span className="metric-label">CGPA</span>
                      <span className="metric-value">{ed.cgpa}</span>
                    </div>
                  )}
                  {ed.percentage && (
                    <div className="metric">
                      <span className="metric-label">Percentage</span>
                      <span className="metric-value">{ed.percentage}</span>
                    </div>
                  )}
                </div>

                {ed.note && <p className="note">{ed.note}</p>}

                <div className="courses">
                  <BookOpen size={14} color={colorSet.color} />
                  <div className="tags">
                    {ed.coursework.map((c) => (
                      <span key={c} className="course" style={{ background: '#fff', borderColor: colorSet.color }}>
                        <span className="tag-dot" style={{ background: colorSet.dotColor }} />
                        <span className="course-name">{c}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .muted { text-align:center; color:var(--text-muted); margin-bottom:28px; font-family:var(--font-mono) }
        .edu-grid { max-width:900px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px }
        .edu-card { padding:24px; border-radius:var(--radius); }
        .edu-head { display:flex; gap:14px; align-items:flex-start; margin-bottom:14px }
        .icon-box { width:48px; height:48px; min-width:48px; display:flex; align-items:center; justify-content:center; border:2px solid; border-radius:0 }
        .edu-info { flex:1 }
        .degree { font-family:var(--font-pixel); font-size:0.75rem; margin:0 0 4px 0; text-transform:uppercase; font-weight:600 }
        .college-name { font-family:var(--font-mono); font-size:0.7rem; color:var(--text-secondary); display:flex; gap:4px; align-items:center }
        .edu-metrics { display:flex; gap:12px; margin-bottom:12px }
        .metric { display:flex; flex-direction:column; gap:2px }
        .metric-label { font-family:var(--font-mono); font-size:0.65rem; color:var(--text-muted); text-transform:uppercase }
        .metric-value { font-family:var(--font-pixel); font-size:0.7rem; font-weight:700 }
        .note { font-style:italic; color:var(--text-secondary); font-size:0.8rem; margin-bottom:12px }
        .courses { display:flex; gap:8px; align-items:flex-start; margin-top:12px }
        .tags { display:flex; flex-wrap:wrap; gap:6px; flex:1 }
        .course { display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border:2px solid; font-family:var(--font-mono); font-size:0.7rem; font-weight:600 }
        .course .tag-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0 }
        .course .course-name { display:inline-block }

        @media (max-width:768px) { .edu-grid { grid-template-columns:1fr; } }
      `}</style>
    </section>
  )
}
