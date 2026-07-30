import { useEffect, useRef } from 'react'

const CLOUDS = [
  { top: '18%', left: '12%', size: 58, color: '255, 60, 130', depth: 18, drift: [46, -34], duration: 13 },
  { top: '55%', left: '78%', size: 64, color: '170, 70, 255', depth: 26, drift: [-40, 36], duration: 16 },
  { top: '68%', left: '20%', size: 52, color: '50, 130, 255', depth: 14, drift: [34, 30], duration: 12 },
  { top: '10%', left: '70%', size: 56, color: '255, 140, 40', depth: 22, drift: [-38, -26], duration: 15 },
  { top: '38%', left: '48%', size: 48, color: '40, 220, 200', depth: 30, drift: [30, -38], duration: 10 },
  { top: '82%', left: '55%', size: 50, color: '255, 45, 170', depth: 20, drift: [-28, -32], duration: 14 },
]

const LIGHT_CLOUDS = [
  { top: '12%', left: '18%', size: 70, color: '34, 197, 94', drift: [46, -32], duration: 12 },
  { top: '65%', left: '82%', size: 76, color: '250, 204, 21', drift: [-40, 34], duration: 15 },
  { top: '75%', left: '15%', size: 64, color: '56, 189, 248', drift: [38, 30], duration: 11 },
  { top: '30%', left: '55%', size: 60, color: '52, 211, 153', drift: [-32, -28], duration: 14 },
  { top: '15%', left: '75%', size: 58, color: '244, 114, 182', drift: [-30, -24], duration: 13 },
  { top: '85%', left: '48%', size: 54, color: '129, 140, 248', drift: [26, 28], duration: 16 },
]

const STAR_LINK_RADIUS = 130

export default function NebulaBackground() {
  const canvasRef = useRef(null)
  const cloudRefs = useRef([])
  const mouse = useRef({ x: -9999, y: -9999 })
  const parallax = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let animationId = null
    let dpr = 1

    const stars = []
    const comets = []

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      resize()
      const starCount = Math.floor((width * height) / 3200)
      stars.length = 0
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.3,
          baseAlpha: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    function maybeSpawnComet() {
      if (comets.length >= 2 && Math.random() > 0.001) return
      if (Math.random() > 0.0025) return
      const fromLeft = Math.random() > 0.5
      const startX = fromLeft ? -50 : width + 50
      const startY = Math.random() * height * 0.5
      const angle = fromLeft ? Math.PI / 8 + Math.random() * 0.2 : Math.PI - Math.PI / 8 - Math.random() * 0.2
      const speed = 6 + Math.random() * 4
      comets.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
      })
    }

    let t = 0
    function draw() {
      t += 1
      ctx.clearRect(0, 0, width, height)

      for (const star of stars) {
        const alpha = star.baseAlpha + Math.sin(t * star.twinkleSpeed + star.phase) * 0.3
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(alpha, 0)})`
        ctx.fill()
      }

      const mx = mouse.current.x
      const my = mouse.current.y
      if (mx > -1000) {
        for (const star of stars) {
          const dx = star.x - mx
          const dy = star.y - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < STAR_LINK_RADIUS) {
            const alpha = (1 - dist / STAR_LINK_RADIUS) * 0.35
            ctx.beginPath()
            ctx.moveTo(mx, my)
            ctx.lineTo(star.x, star.y)
            ctx.strokeStyle = `rgba(180, 210, 255, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      maybeSpawnComet()
      for (let i = comets.length - 1; i >= 0; i--) {
        const comet = comets[i]
        comet.x += comet.vx
        comet.y += comet.vy
        comet.life -= 0.012

        const tailX = comet.x - comet.vx * 6
        const tailY = comet.y - comet.vy * 6
        const gradient = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.max(comet.life, 0)})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y)
        ctx.lineTo(tailX, tailY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.6
        ctx.stroke()

        if (comet.life <= 0 || comet.x < -100 || comet.x > width + 100 || comet.y > height + 100) {
          comets.splice(i, 1)
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    init()
    draw()

    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  useEffect(() => {
    let rafId = null

    function handleMouseMove(e) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      parallax.current.x = (e.clientX - cx) / cx
      parallax.current.y = (e.clientY - cy) / cy
    }

    function handleMouseLeave() {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    function applyParallax() {
      cloudRefs.current.forEach((el, i) => {
        if (!el) return
        const depth = CLOUDS[i].depth
        const x = parallax.current.x * depth
        const y = parallax.current.y * depth
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
      rafId = requestAnimationFrame(applyParallax)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    rafId = requestAnimationFrame(applyParallax)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 block overflow-hidden dark:hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #f7fdf9 0%, #ffffff 45%, #f3fbf5 100%)' }}
        />
        <div className="absolute inset-0" style={{ animation: 'nebula-swirl 55s linear infinite' }}>
          {LIGHT_CLOUDS.map((cloud, i) => (
            <div key={i} className="absolute" style={{ top: cloud.top, left: cloud.left }}>
              <div
                style={{
                  width: `${cloud.size}vmax`,
                  height: `${cloud.size}vmax`,
                  marginLeft: `-${cloud.size / 2}vmax`,
                  marginTop: `-${cloud.size / 2}vmax`,
                  borderRadius: '9999px',
                  background: `radial-gradient(circle, rgba(${cloud.color}, 0.4) 0%, rgba(${cloud.color}, 0.16) 45%, rgba(${cloud.color}, 0) 72%)`,
                  filter: 'blur(22px)',
                  mixBlendMode: 'multiply',
                  animation: `nebula-drift ${cloud.duration}s ease-in-out infinite`,
                  '--drift-x': `${cloud.drift[0]}px`,
                  '--drift-y': `${cloud.drift[1]}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden dark:block"
      >
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, #0c0916 0%, #030306 75%)' }}
      />

      <div className="absolute inset-0" style={{ animation: 'nebula-swirl 70s linear infinite' }}>
        {CLOUDS.map((cloud, i) => (
          <div
            key={i}
            ref={(el) => (cloudRefs.current[i] = el)}
            className="absolute transition-transform duration-500 ease-out"
            style={{ top: cloud.top, left: cloud.left }}
          >
            <div
              style={{
                width: `${cloud.size}vmax`,
                height: `${cloud.size}vmax`,
                marginLeft: `-${cloud.size / 2}vmax`,
                marginTop: `-${cloud.size / 2}vmax`,
                borderRadius: '9999px',
                background: `radial-gradient(circle, rgba(${cloud.color}, 0.6) 0%, rgba(${cloud.color}, 0.2) 45%, rgba(${cloud.color}, 0) 72%)`,
                filter: 'blur(20px)',
                mixBlendMode: 'screen',
                animation: `nebula-drift ${cloud.duration}s ease-in-out infinite`,
                '--drift-x': `${cloud.drift[0]}px`,
                '--drift-y': `${cloud.drift[1]}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 42%, rgba(3,3,8,0.6) 0%, rgba(3,3,8,0.25) 40%, rgba(3,3,8,0) 70%)',
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
    </>
  )
}
