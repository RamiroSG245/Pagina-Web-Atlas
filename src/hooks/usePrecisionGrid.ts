import { useLayoutEffect, useRef } from 'react'

const GRID_SIZE = 80

interface GridPoint {
  x: number
  y: number
  offset: number
}

export function usePrecisionGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let points: GridPoint[] = []
    let radarPos = -200
    let rafId: number

    const initPoints = () => {
      points = []
      for (let x = 0; x <= width; x += GRID_SIZE) {
        for (let y = 0; y <= height; y += GRID_SIZE) {
          points.push({ x, y, offset: Math.random() * Math.PI * 2 })
        }
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      // Reset then reapply the DPR scale every call — never compound with ctx.scale
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initPoints()
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // grid lines
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(66, 70, 86, 0.15)'
      ctx.lineWidth = 1
      for (let x = 0; x <= width; x += GRID_SIZE) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y <= height; y += GRID_SIZE) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()

      // pulsating intersections
      points.forEach((p) => {
        const pulse = (Math.sin(time * 0.001 + p.offset) + 1) / 2
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 170, 1, ${0.1 + pulse * 0.2})`
        ctx.fill()

        if (pulse > 0.8) {
          ctx.shadowBlur = 4
          ctx.shadowColor = '#ffaa01'
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // radar sweep
      radarPos += 2
      if (radarPos > width + 200) radarPos = -200

      const gradient = ctx.createLinearGradient(radarPos - 150, 0, radarPos, 0)
      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(0.5, 'rgba(255, 170, 1, 0.03)')
      gradient.addColorStop(1, 'rgba(255, 170, 1, 0.08)')
      ctx.fillStyle = gradient
      ctx.fillRect(radarPos - 150, 0, 150, height)

      ctx.beginPath()
      ctx.moveTo(radarPos, 0)
      ctx.lineTo(radarPos, height)
      ctx.strokeStyle = 'rgba(255, 170, 1, 0.15)'
      ctx.stroke()

      rafId = requestAnimationFrame(draw)
    }

    // Debounced resize — avoids redundant recalculations from rapid layout events
    let resizeTimer: ReturnType<typeof setTimeout> | null = null
    const debouncedResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resize, 150)
    }

    // ResizeObserver on the container catches layout-affecting events (font
    // load, CSS reflow, viewport-triggered reveal) that don't fire window.resize
    const resizeObserver = new ResizeObserver(debouncedResize)
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    resize()
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      if (resizeTimer) clearTimeout(resizeTimer)
      resizeObserver.disconnect()
    }
  }, [])

  return canvasRef
}
