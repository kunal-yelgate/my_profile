"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Sword, Shield, Zap, Brain, Wrench } from '../components/Icons'
import { skills as skillsData } from '../data/portfolioData'

const iconMap: Record<string, any> = {
  Languages: Sword,
  Frontend: Shield,
  'Backend & Cloud': Zap,
  'Database & Services': Brain,
  'Tools & Others': Wrench,
}

const colorMap: Record<string, string> = {
  Languages: '#3b82f6',
  Frontend: '#f472b6',
  'Backend & Cloud': '#22c55e',
  'Database & Services': '#fbbf24',
  'Tools & Others': '#a855f7',
}

const bgMap: Record<string, string> = {
  Languages: '#dbeafe',
  Frontend: '#fce7f3',
  'Backend & Cloud': '#dcfce7',
  'Database & Services': '#fef9c3',
  'Tools & Others': '#f3e8ff',
}

const levelMap: Record<string, number> = {
  Languages: 88,
  Frontend: 91,
  'Backend & Cloud': 83,
  'Database & Services': 87,
  'Tools & Others': 85,
}

type SkillGroup = typeof skillsData.groups[number]

function SkillBar({ group, index }: { group: SkillGroup; index: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const Icon = iconMap[group.label] || Sword
  const color = colorMap[group.label] || '#3b82f6'
  const bg = bgMap[group.label] || '#dbeafe'
  const level = levelMap[group.label] || 85

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), index * 150)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index, level])

  return (
    <div ref={ref} className="pixel-card skill-card">
      <div className="skill-head">
        <div className="skill-icon" style={{ background: bg }}>
          <Icon size={18} color={color} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="skill-title-row">
            <span className="skill-label">{group.label}</span>
            <span className="skill-level">LVL {level}</span>
          </div>

          <div className="progress-container">
            <div className="progress-fill" style={{ width: `${width}%`, background: color }} />
          </div>
        </div>
      </div>
      <div className="skill-tags">
        {group.items.map((item) => (
          <span key={item} className="skill-tag" style={{ background: bg }}>
            <Icon size={12} color={color} />
            <span className="skill-name">{item}</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        .skill-card { padding:20px }
        .skill-head { display:flex; gap:12px; align-items:center; margin-bottom:12px }
        .skill-icon { width:36px; height:36px; display:flex; align-items:center; justify-content:center; border:2px solid #1a1a2e }
        .skill-title-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px }
        .skill-label { font-family:var(--font-mono); font-size:0.8rem; font-weight:700; color:var(--text-primary); text-transform:uppercase }
        .skill-level { font-family:var(--font-pixel); font-size:0.6rem }
        .progress-container { height:8px; background:#eee; border-radius:6px; overflow:hidden }
        .progress-fill { height:100%; width:0; transition:width 700ms ease }
        .skill-tags { display:flex; flex-wrap:wrap; gap:8px }
        .skill-tag { display:inline-flex; align-items:center; gap:8px; padding:6px 12px; border:2px solid #1a1a2e; font-family:var(--font-mono); font-size:0.75rem; font-weight:600 }
        .skill-tag svg { flex-shrink:0 }
        .skill-name { display:inline-block }
      `}</style>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-heading">Player Stats</h2>
        <p className="muted">Current skill tree progression and tech stack mastery</p>

        <div className="skills-grid">
          {skillsData.groups.map((group, index) => (
            <SkillBar key={group.label} group={group} index={index} />
          ))}
        </div>

        <div className="pixel-card currently-leveling">
          <div className="level-head">
            <div className="zap-box"><Zap size={14} color="#1a1a2e" /></div>
            <span>CURRENTLY LEVELING UP</span>
          </div>
          <div className="level-tags">
            {skillsData.currentlyLearning.map((item) => (
              <span key={item} className="level-tag">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .muted { text-align:center; color:var(--text-muted); margin-bottom:28px; font-family:var(--font-mono) }
        .skills-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px; max-width:900px; margin:0 auto }
        .currently-leveling { max-width:900px; margin:32px auto 0; padding:24px; background:#fef9c3 }
        .level-head { display:flex; align-items:center; gap:10px; margin-bottom:16px }
        .zap-box { width:28px; height:28px; display:flex; align-items:center; justify-content:center; background:#eab308; border:2px solid #1a1a2e }
        .level-tags { display:flex; flex-wrap:wrap; gap:8px }
        .level-tag { padding:6px 14px; border:2px solid #1a1a2e; font-family:var(--font-mono); font-size:0.7rem; font-weight:600; background:#fff }
      `}</style>
    </section>
  )
}
