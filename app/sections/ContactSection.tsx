"use client"

import React, { useState } from 'react'
import { Mail, Linkedin, Github, Send, MessageSquare, Download } from '../components/Icons'
import { personalInfo, contactContent } from '../data/portfolioData'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-heading">Start a Quest</h2>
        <p className="muted">Send a message and let's team up on a new mission</p>

        <div className="contact-grid">
          <div className="contact-cards">
            <a href={`mailto:${personalInfo.email}`} className="pixel-card contact-card">
              <div className="card-icon"><Mail size={18} color="#3b82f6" /></div>
              <div>
                <p className="card-label">Email</p>
                <p className="card-value">{personalInfo.email}</p>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="pixel-card contact-card">
              <div className="card-icon"><Linkedin size={18} color="#3b82f6" /></div>
              <div>
                <p className="card-label">LinkedIn</p>
                <p className="card-value">/in/kunal-yelgate</p>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="pixel-card contact-card">
              <div className="card-icon"><Github size={18} color="#a855f7" /></div>
              <div>
                <p className="card-label">GitHub</p>
                <p className="card-value">/kunal-yelgate</p>
              </div>
            </a>
          </div>

          <div className="pixel-card form-card">
            <div className="form-head"><MessageSquare size={20} color="#3b82f6" /><h3>SEND MESSAGE</h3></div>

            {submitted ? (
              <div className="submitted">
                <p className="submitted-title">QUEST INITIATED!</p>
                <p className="submitted-sub">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <label>{contactContent.formLabels.name}</label>
                <input type="text" className="form-input" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />

                <label>{contactContent.formLabels.email}</label>
                <input type="email" className="form-input" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

                <label>{contactContent.formLabels.message}</label>
                <textarea className="form-input" placeholder="Write your message..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />

                <button type="submit" className="btn btn-primary submit-btn"><Send size={16} />{contactContent.formLabels.submit}</button>
              </form>
            )}
          </div>

          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="pixel-card resume-card">
            <Download size={20} color="#fff" />
            <span>DOWNLOAD RESUME / QUEST LOG</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .muted { text-align:center; color:var(--text-muted); margin-bottom:28px; font-family:var(--font-mono) }
        .contact-grid { max-width:700px; margin:0 auto; display:grid; grid-template-columns:1fr; gap:24px }
        .contact-cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px }
        .contact-card { padding:20px; display:flex; align-items:center; gap:12px; text-decoration:none }
        .card-icon { width:40px; height:40px; display:flex; align-items:center; justify-content:center; background:#dbeafe; border:2px solid #1a1a2e }
        .card-label { font-family:var(--font-mono); font-size:0.65rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:2px }
        .card-value { font-family:var(--font-mono); font-size:0.75rem; color:var(--text-primary); word-break:break-all }
        .form-card { padding:32px }
        .form-head { display:flex; align-items:center; gap:10px; margin-bottom:24px }
        .submitted { text-align:center; padding:40px; background:#dcfce7; border:2px solid #1a1a2e }
        .submitted-title { font-family:var(--font-pixel); font-size:0.8rem; color:#166534 }
        .submitted-sub { font-family:var(--font-mono); font-size:0.8rem; color:#166534; margin-top:8px }
        .contact-form { display:flex; flex-direction:column; gap:16px }
        .form-input { padding:8px; border:2px solid #dcdcdc; border-radius:4px }
        .submit-btn { width:100%; margin-top:8px }
        .resume-card { padding:20px; display:flex; align-items:center; justify-content:center; gap:12px; text-decoration:none; background:#ff9500; color:#fff }
      `}</style>
    </section>
  )
}
