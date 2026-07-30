const CATS = [
  { name: 'Malta', file: 'malta.jpg', bottom: 10, duration: 32, delay: -4, flip: false },
  { name: 'Niza', file: 'niza.jpg', bottom: 24, duration: 26, delay: -14, flip: true },
  { name: 'Moka', file: 'moka.jpg', bottom: 17, duration: 38, delay: -22, flip: false, tribute: true },
]

export default function CatMascots() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-0 overflow-visible">
      {CATS.map((cat) => (
        <div
          key={cat.name}
          className="cat-walker pointer-events-auto absolute left-0"
          style={{
            bottom: `${cat.bottom}px`,
            animation: `cat-walk ${cat.duration}s linear infinite`,
            animationDelay: `${cat.delay}s`,
          }}
        >
          <div style={{ transform: cat.flip ? 'scaleX(-1)' : undefined }}>
            <div
              className="pointer-events-auto relative h-9 w-9 animate-[cat-bob_0.6s_ease-in-out_infinite] overflow-hidden rounded-full border-2 border-white/80 shadow-md dark:border-white/20"
              title={cat.tribute ? `${cat.name} 👼` : cat.name}
            >
              <img src={`${import.meta.env.BASE_URL}cats/${cat.file}`} alt={cat.name} className="h-full w-full object-cover" />
            </div>
            {cat.tribute && (
              <span
                className="pointer-events-auto absolute -right-1 -top-1 text-xs leading-none"
                title={`En memoria de ${cat.name}`}
              >
                👼
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
