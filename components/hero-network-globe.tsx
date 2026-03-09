'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  z: number
  size: number
  phase: number
  hue: 'blue' | 'red'
}

type Point2D = {
  x: number
  y: number
  z: number
  scale: number
  alpha: number
  size: number
  hue: 'blue' | 'red'
  phase: number
}

const PARTICLE_COUNT = 180
const GLOBE_RADIUS = 0.92
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

function rotateY(x: number, z: number, angle: number) {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  return { x: x * c - z * s, z: x * s + z * c }
}

function rotateX(y: number, z: number, angle: number) {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  return { y: y * c - z * s, z: y * s + z * c }
}

function createParticles() {
  const particles: Particle[] = []
  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    const t = i / (PARTICLE_COUNT - 1)
    const y = 1 - t * 2
    const ring = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = GOLDEN_ANGLE * i
    const x = Math.cos(theta) * ring * GLOBE_RADIUS
    const z = Math.sin(theta) * ring * GLOBE_RADIUS

    particles.push({
      x,
      y: y * GLOBE_RADIUS,
      z,
      size: 1.2 + ((i * 7) % 10) * 0.13,
      phase: i * 0.23,
      hue: i % 5 === 0 ? 'red' : 'blue',
    })
  }
  return particles
}

function nodeColor(hue: Particle['hue']) {
  return hue === 'red' ? [193, 18, 31] : [46, 124, 246]
}

export default function HeroNetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particles = createParticles()

    let width = 0
    let height = 0
    let dpr = 1
    let cx = 0
    let cy = 0
    let pxRadius = 0
    const focal = 2.55

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      cx = width * 0.5
      cy = height * 0.5
      pxRadius = Math.min(width, height) * 0.34
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height)

      const t = time * 0.001
      const spinY = t * 0.42
      const spinX = Math.sin(t * 0.58) * 0.24
      const spinZ = Math.cos(t * 0.34) * 0.17

      const points: Point2D[] = particles.map((particle) => {
        let x = particle.x
        let y = particle.y
        let z = particle.z

        const r1 = rotateY(x, z, spinY)
        x = r1.x
        z = r1.z

        const r2 = rotateX(y, z, spinX)
        y = r2.y
        z = r2.z

        const r3 = rotateY(x, z, spinZ)
        x = r3.x
        z = r3.z

        const depth = focal / (focal + z + 1.15)
        const projectedX = cx + x * pxRadius * depth
        const projectedY = cy + y * pxRadius * depth
        const alpha = Math.max(0.2, Math.min(1, 0.24 + depth * 0.9))

        return {
          x: projectedX,
          y: projectedY,
          z,
          scale: depth,
          alpha,
          size: particle.size,
          hue: particle.hue,
          phase: particle.phase,
        }
      })

      points.sort((a, b) => a.z - b.z)

      const maxDistance = Math.max(48, Math.min(width, height) * 0.11)
      for (let i = 0; i < points.length; i += 1) {
        const a = points[i]
        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > maxDistance) continue

          const blend = 1 - dist / maxDistance
          const pulse = 0.45 + 0.55 * Math.sin(t * 3.1 + (a.phase + b.phase) * 0.7)
          const alpha = 0.04 + blend * 0.24 * pulse

          context.strokeStyle =
            a.hue === 'red' || b.hue === 'red'
              ? `rgba(193,18,31,${alpha.toFixed(3)})`
              : `rgba(46,124,246,${alpha.toFixed(3)})`
          context.lineWidth = 0.7 + blend * 0.8
          context.beginPath()
          context.moveTo(a.x, a.y)
          context.lineTo(b.x, b.y)
          context.stroke()
        }
      }

      for (const point of points) {
        const [r, g, b] = nodeColor(point.hue)
        const pulse = 0.78 + Math.sin(t * 3.8 + point.phase) * 0.22
        const radius = point.size * point.scale * (1.2 + pulse)

        context.fillStyle = `rgba(${r},${g},${b},${Math.min(1, point.alpha).toFixed(3)})`
        context.beginPath()
        context.arc(point.x, point.y, radius, 0, Math.PI * 2)
        context.fill()

        context.fillStyle = `rgba(255,255,255,${(point.alpha * 0.9).toFixed(3)})`
        context.beginPath()
        context.arc(point.x, point.y, Math.max(0.55, radius * 0.4), 0, Math.PI * 2)
        context.fill()
      }

      const ringAlpha = 0.22 + Math.sin(t * 1.7) * 0.08
      context.strokeStyle = `rgba(255,255,255,${ringAlpha.toFixed(3)})`
      context.lineWidth = 1
      context.beginPath()
      context.ellipse(cx, cy, pxRadius + 8, pxRadius * 0.44, t * 0.08, 0, Math.PI * 2)
      context.stroke()

      if (!reduceMotion) {
        frameRef.current = window.requestAnimationFrame(draw)
      }
    }

    frameRef.current = window.requestAnimationFrame(draw)

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <div className="glass-panel relative h-[420px] overflow-hidden p-5 md:h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(53,122,255,0.22),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(193,18,31,0.2),transparent_45%)]" />

      <canvas
        ref={canvasRef}
        className="relative z-10 h-full w-full rounded-xl border border-white/10 bg-[rgba(4,8,20,0.26)]"
      />

      <div className="absolute left-5 top-5 rounded-md border border-white/20 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
        3D Tech Globe
      </div>
      <div className="absolute right-5 top-5 rounded-md border border-white/20 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-secondary">
        Particle Network
      </div>

      <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-sm">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Network connections - data nodes - AI lines in motion
        </p>
      </div>
    </div>
  )
}
