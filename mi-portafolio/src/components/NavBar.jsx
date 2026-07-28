import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { to: '/', key: 'home' },
  { to: '/sobre-mi', key: 'about' },
  { to: '/proyectos', key: 'projects' },
  { to: '/contacto', key: 'contact' },
]

export default function NavBar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? 'text-pitch-600 dark:text-pitch-400'
        : 'text-slate-600 hover:text-pitch-600 dark:text-slate-300 dark:hover:text-pitch-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-ink-800 dark:bg-ink-950/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <NavLink to="/" className="font-display text-lg font-bold text-slate-900 dark:text-white">
          Gastón Silva
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-600 transition hover:border-pitch-500 hover:text-pitch-600 dark:border-ink-800 dark:text-slate-300 dark:hover:text-pitch-400"
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')}
            className="rounded-md border border-slate-300 p-1.5 text-slate-600 transition hover:border-pitch-500 hover:text-pitch-600 dark:border-ink-800 dark:text-slate-300 dark:hover:text-pitch-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md border border-slate-300 p-1.5 text-slate-600 dark:border-ink-800 dark:text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 px-4 py-3 dark:border-ink-800 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
