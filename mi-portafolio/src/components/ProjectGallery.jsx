import { useRef, useState } from 'react'
import Lightbox from './Lightbox'

export default function ProjectGallery({ images, alt }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  function handleScroll() {
    const track = trackRef.current
    if (!track) return
    const i = Math.round(track.scrollLeft / track.clientWidth)
    setActive(i)
  }

  function scrollTo(i) {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-video w-full shrink-0 snap-start cursor-zoom-in overflow-hidden bg-slate-100 dark:bg-ink-950"
            aria-label={`Ver ${alt} ${i + 1} en grande`}
          >
            <img
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={`pointer-events-auto h-1.5 rounded-full transition-all ${
                i === active ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              }`}
              aria-label={`Ir a la imagen ${i + 1}`}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  )
}
