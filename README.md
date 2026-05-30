# Kunal Yelgate — Developer Portfolio (Next.js 14)

A retro RPG-themed developer portfolio built with **Next.js 14 App Router** + React.

## Features

- **RPG Skill Tree Design** — Pixel-style cards, hard shadows, 8-bit typography
- **Player Stats** — Animated progress bars for each tech skill category with Intersection Observer
- **Quest Log** — Projects displayed as RPG quests with difficulty levels (EASY / MEDIUM / HARD)
- **Academy Level** — Education section with coursework "completed quests"
- **Start a Quest** — Contact form styled as a mission initiation
- **Fully Responsive** — Mobile-friendly hamburger navigation and adaptive grid layouts
- **SEO Optimized** — Next.js metadata API for Open Graph and search engines
- **Static Export** — Ready for GitHub Pages, Vercel, Netlify, or any static host

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| React 18 | UI library |
| Lucide React | Pixel-perfect icons |
| CSS3 | Custom properties, grid, flexbox, animations |
| Google Fonts | Press Start 2P (pixel), Inter (body), JetBrains Mono (code) |

## Profile Structure (App Router)

```
kunal-portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with scroll effect + mobile menu
│   │   └── Footer.jsx          # Dark footer with social links
│   ├── sections/
│   │   ├── HeroSection.jsx     # Character intro + avatar + status badge
│   │   ├── AboutSection.jsx    # Character backstory lore cards
│   │   ├── SkillsSection.jsx   # Player Stats with XP bars
│   │   ├── EducationSection.jsx# Academy Level with quests
│   │   ├── ProjectsSection.jsx # Quest Log with difficulty badges
│   │   └── ContactSection.jsx  # Start a Quest form
│   ├── data/
│   │   └── portfolioData.js    # All content in one place
│   ├── globals.css             # Design system + utilities
│   ├── layout.js               # Root layout with metadata
│   └── page.js                 # Home page composing all sections
├── public/
│   └── assets/
│       └── images/             # Place for your photos
├── next.config.js              # Static export config
├── package.json
└── README.md
```

## Customization Guide

All content lives in `app/data/portfolioData.js`. Update these objects:

| Object | What to Change |
|--------|---------------|
| `personalInfo` | Name, email, links, bio, resume URL |
| `heroContent` | Greeting, tagline, CTA labels |
| `aboutContent` | Your 3 backstory paragraphs |
| `skills` | Tech groups, colors, learning topics |
| `projects` | Project cards with GitHub links |
| `education` | Degree, college, duration, coursework |
| `contactContent` | Form labels and invitation text |
| `footerContent` | Nav links and copyright |

### Add Your Photo
Replace the code icon in `HeroSection.jsx` with your actual image:
```jsx
<Image
  src="/assets/images/profile.jpg"
  alt="Kunal Yelgate"
  width={120}
  height={120}
  style={{ border: '3px solid #1a1a2e', boxShadow: '6px 6px 0px rgba(26,26,46,0.3)' }}
/>
```

## Design Tokens (CSS Variables)

All styling uses CSS custom properties in `globals.css`:

| Variable | Default | Usage |
|----------|---------|-------|
| `--bg-primary` | `#f5f5f0` | Page background |
| `--bg-card` | `#ffffff` | Card backgrounds |
| `--bg-dark` | `#1a1a2e` | Footer, dark elements |
| `--accent-blue` | `#3b82f6` | Primary buttons, links |
| `--accent-green` | `#22c55e` | Status indicators |
| `--accent-yellow` | `#eab308` | Secondary CTAs, badges |
| `--accent-red` | `#ef4444` | Hard difficulty |
| `--accent-purple` | `#a855f7` | Tools & others |
| `--shadow-hard` | `4px 4px 0px #1a1a2e` | Card shadows |
| `--font-pixel` | `Press Start 2P` | Headings, RPG labels |
| `--font-mono` | `JetBrains Mono` | Tags, labels, code |

## Section → RPG Theme Mapping

| Portfolio Section | RPG Theme | Visual Cues |
|-------------------|-----------|-------------|
| Hero | Character Select | Avatar, class badge (Full-Stack Dev), status indicator |
| About | Character Lore | Numbered lore cards with pixel icons |
| Skills | Player Stats | XP bars, level numbers, skill tree colors |
| Education | Academy Level | Quest completion badges, coursework list |
| Projects | Quest Log | Difficulty tags (EASY/MEDIUM/HARD), sword icons |
| Contact | Start a Quest | Form as mission initiation, "Quest Initiated!" success |
| Footer | Game Credits | Pixel logo, social links, copyright |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Built with ❤️ by Kunal Yelgate
# my_profile
