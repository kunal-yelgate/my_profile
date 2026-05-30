"use client"

import React, { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Sword } from '../components/Icons'
import { projects as projectsData } from '../data/portfolioData'

const difficultyMap: Record<string, { level: string; color: string; bg: string }> = {
  ContactApp: { level: 'EASY', color: '#22c55e', bg: '#dcfce7' },
  'White Board': { level: 'MEDIUM', color: '#eab308', bg: '#fef9c3' },
  'Taskflow Automation': { level: 'HARD', color: '#ef4444', bg: '#fee2e2' },
}

export default function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null
    if (!paused) {
      timer = setInterval(() => {
        const el = sliderRef.current
        if (!el) return
        const child = el.children[0] as HTMLElement | undefined
        const cardWidth = child ? child.offsetWidth + 20 : el.clientWidth
        const maxScroll = el.scrollWidth - el.clientWidth
        if (el.scrollLeft < maxScroll) {
          el.scrollTo({ left: Math.min(el.scrollLeft + cardWidth, maxScroll), behavior: 'smooth' })
        } else {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        }
      }, 5000)
    }
    return () => { if (timer) clearInterval(timer) }
  }, [paused])

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-heading">Project Log</h2>
        <p className="muted">Side projects completed on the journey</p>

        <div className="slider-wrap">
          <button className="slider-btn prev" onClick={() => {
            const el = sliderRef.current
            if (!el) return
            const child = el.children[0] as HTMLElement | undefined
            const cardWidth = child ? child.offsetWidth + 20 : el.clientWidth
            el.scrollTo({ left: Math.max(el.scrollLeft - cardWidth, 0), behavior: 'smooth' })
          }} aria-label="Previous">‹</button>

          <div className="projects-slider" ref={sliderRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {projectsData.map((project) => {
              const diff = difficultyMap[project.title] || { level: 'MEDIUM', color: '#eab308', bg: '#fef9c3' }
              const difficultyClass = project.title === 'ContactApp' ? 'easy' : project.title === 'White Board' ? 'medium' : project.title === 'Taskflow Automation' ? 'hard' : 'medium'
              return (
                <article className="pixel-card proj-card" key={project.id} style={{ background: diff.bg }}>
                  <div className="proj-head">
                    <div className="left">
                      <div className={`icon ${difficultyClass}`} style={{ borderColor: diff.color }}>
                        <Sword size={16} color={diff.color} />
                      </div>
                      <div className="proj-info">
                        <h3 className="proj-title">{project.title.toUpperCase()}</h3>
                        <p className="proj-tagline">{project.tagline}</p>
                      </div>
                    </div>

                    <span className={`badge ${difficultyClass}`} style={{ color: diff.color, borderColor: diff.color }}>
                      {diff.level}
                    </span>
                  </div>

                  <p className="proj-desc">{project.description}</p>

                  <div className="techs">
                    {project.techStack.map((t) => (
                      <span key={t} className="tech" style={{ background: '#fff', borderColor: diff.color }}>
                        <span className="tag-dot" style={{ background: diff.color }} />
                        <span className="tech-name">{t}</span>
                      </span>
                    ))}
                  </div>

                  <div className="actions">
                    <a className="btn code" href={project.github ?? '#'} target="_blank" rel="noopener noreferrer" style={{ borderColor: diff.color }}>
                      <span style={{ display: 'inline-flex', filter: 'brightness(0) invert(1)' }}>
                        <Github size={14} />
                      </span>
                      Source
                    </a>
                    <a
                      className="btn live"
                      href={project.liveDemo ?? project.github ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: diff.color, borderColor: diff.color }}
                    >
                      <ExternalLink size={14} color="#fff" /> Live
                    </a>
                  </div>
                </article>
              )
            })}
          </div>

          <button className="slider-btn next" onClick={() => {
            const el = sliderRef.current
            if (!el) return
            const child = el.children[0] as HTMLElement | undefined
            const cardWidth = child ? child.offsetWidth + 20 : el.clientWidth
            const maxScroll = el.scrollWidth - el.clientWidth
            el.scrollTo({ left: Math.min(el.scrollLeft + cardWidth, maxScroll), behavior: 'smooth' })
          }} aria-label="Next">›</button>
        </div>
      </div>

      <style jsx>{`
        .muted { text-align:center; color:var(--text-muted); margin-bottom:28px; font-family:var(--font-mono) }
        .slider-wrap { max-width:1100px; margin:0 auto; position:relative }
        .projects-slider { display:flex; gap:20px; overflow:hidden; scroll-snap-type:x mandatory; scroll-behavior:smooth; padding:8px 0 }
        .projects-slider > .proj-card { scroll-snap-align:center; flex:0 0 320px }
        .proj-card { padding:24px; border-radius:var(--radius); transition:transform 220ms ease, box-shadow 220ms ease }
        .proj-head { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px; gap:10px }
        .left { display:flex; gap:12px; align-items:flex-start; flex:1 }
        .icon { width:40px; height:40px; min-width:40px; display:flex; align-items:center; justify-content:center; border:2px solid; border-radius:0 }
        .proj-info { flex:1 }
        .proj-title { font-family:var(--font-pixel); font-size:0.7rem; margin:0; text-transform:uppercase; font-weight:600 }
        .proj-tagline { margin:4px 0 0 0; font-family:var(--font-mono); color:var(--text-secondary); font-size:0.7rem; line-height:1.3 }
        .badge { padding:6px 10px; border:2px solid; font-family:var(--font-pixel); font-size:0.6rem; font-weight:600; text-transform:uppercase; border-radius:0 }
        .proj-desc { color:var(--text-secondary); line-height:1.5; font-size:0.85rem; margin-bottom:12px }
        .techs { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px }
        .tech { display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border:2px solid; background:#f8f9fb; font-family:var(--font-mono); font-size:0.7rem; font-weight:600 }
        .tech .tag-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0 }
        .tech .tech-name { display:inline-block }
        .actions { display:flex; gap:8px }
        .btn { display:inline-flex; gap:6px; align-items:center; padding:6px 12px; border:2px solid; text-decoration:none; font-family:var(--font-mono); font-size:0.7rem; font-weight:600; color:#fff; border-radius:0 }
        .btn.code { background:#1a1a2e; color:#fff }
        .btn.live { color:#fff }

        .slider-btn { position:absolute; top:50%; transform:translateY(-50%); background:var(--bg-card); border:2px solid var(--border-color); width:42px; height:42px; display:flex; align-items:center; justify-content:center; font-size:1.4rem; cursor:pointer; z-index:10 }
        .slider-btn.prev { left:-10px }
        .slider-btn.next { right:-10px }

        @media (max-width:768px) { .projects-slider > .proj-card { flex:0 0 88%; } .slider-btn { display:none } }
      `}</style>
    </section>
  )
}
