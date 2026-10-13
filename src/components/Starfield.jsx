import { useEffect, useRef } from 'react'

// Lightweight parallax starfield — a quiet nod to Mission Alpha, the
// portfolio owner's Phaser 3 space game. Pure canvas, no dependencies.
export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, stars, animationId
    let mouseX = 0
    let mouseY = 0
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    function resize() {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio
      const count = Math.floor((width * height) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 * window.devicePixelRatio + 0.3,
        depth: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const offsetX = (mouseX - 0.5) * 20
      const offsetY = (mouseY - 0.5) * 20
      for (const s of stars) {
        s.twinkle += 0.01
        const alpha = 0.4 + Math.sin(s.twinkle) * 0.3
        ctx.beginPath()
        ctx.fillStyle = `rgba(240,239,234,${Math.max(0.15, alpha)})`
        ctx.arc(
          s.x + offsetX * s.depth,
          s.y + offsetY * s.depth,
          s.r,
          0,
          Math.PI * 2
        )
        ctx.fill()
      }
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw)
      }
    }

    function onMove(e) {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', onMove)
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
