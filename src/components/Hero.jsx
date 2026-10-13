import { useEffect, useState } from 'react'
import Starfield from './Starfield.jsx'

const BOOT_LINES = [
  'initializing runtime...',
  'loading modules: react, node, mongodb, phaser3, openai...',
  'compiling profile: sachin_girepanoor.dev',
  'status: ready',
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setVisibleLines(BOOT_LINES.length)
      setShowName(true)
      return
    }

    let i = 0
    const interval = setInterval(() => {
      i += 1
      setVisibleLines(i)
      if (i >= BOOT_LINES.length) {
        clearInterval(interval)
        setTimeout(() => setShowName(true), 300)
      }
    }, 420)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid bg-grid"
    >
      <Starfield />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/60 to-bg pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 w-full">
        <div className="font-mono text-sm sm:text-base text-cyan/80 space-y-1.5 min-h-[7.5rem]">
          {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
            <p key={idx}>
              <span className="text-muted">$</span> {line}
            </p>
          ))}
        </div>

        <div
          className={`transition-all duration-700 ${
            showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h1 className="font-mono font-800 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mt-6 text-ink">
            Sachin Girepanoor
          </h1>
          <p className="font-mono text-lg sm:text-2xl text-amber mt-4 blink-cursor">
            Full Stack Developer
          </p>
          <p className="text-muted text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            I build web applications, browser games, and AI-powered tools —
            4+ years shipping production code at Tata Consultancy Services,
            from REST APIs to a 2D game engine running in the browser.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projects"
              className="focus-ring bg-amber text-bg font-mono font-semibold text-sm px-6 py-3 rounded-sm hover:bg-amber/90 transition-colors"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="focus-ring border border-border text-ink font-mono text-sm px-6 py-3 rounded-sm hover:border-cyan hover:text-cyan transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
