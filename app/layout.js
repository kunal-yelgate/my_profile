import './globals.css'

export const metadata = {
  title: 'Kunal Yelgate | Developer Portfolio',
  description: '3rd Year B.Tech CS Student | Web Developer & AI/ML Enthusiast & Cloud Enthusiast',
  keywords: ['Kunal Yelgate', 'Web Developer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Kunal Yelgate' }],
  openGraph: {
    title: 'Kunal Yelgate | Developer Portfolio',
    description: 'Full-stack web apps, AI/ML exploration, and cloud-powered solutions.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  verification: {
    google: "Z9EWR-wGO6-oyUm3uAv3ybsMDE4qfVk3qmmp7FhEi_0",
  },
};
