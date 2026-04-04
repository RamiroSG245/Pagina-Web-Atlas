import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 60
const CONNECTION_DISTANCE = 150

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  glow: number
}

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: Math.random() * 1.5 + 0.5,
    glow: 0,
  }
}

export function useParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let mouse = { x: null as number | null, y: null as number | null }
    let rafId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      )
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // update
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        if (mouse.x != null && mouse.y != null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          p.glow =
            dist < 100
              ? Math.min(p.glow + 0.1, 1)
              : Math.max(p.glow - 0.05, 0)
        }

        // draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        const opacity = 0.2 + p.glow * 0.8
        ctx.fillStyle =
          p.glow > 0
            ? `rgba(255, 170, 1, ${opacity})`
            : `rgba(255, 255, 255, 0.2)`
        if (p.glow > 0) {
          ctx.shadowBlur = 10
          ctx.shadowColor = '#ffaa01'
        } else {
          ctx.shadowBlur = 0
        }
        ctx.fill()
        ctx.shadowBlur = 0

        // draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15
            const combinedGlow = (p.glow + q.glow) / 2
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle =
              combinedGlow > 0
                ? `rgba(255, 170, 1, ${opacity + combinedGlow * 0.1})`
                : `rgba(255, 255, 255, ${opacity})`
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    resize()
    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return canvasRef
}
