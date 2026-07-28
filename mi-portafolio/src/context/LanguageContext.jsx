import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

function getInitialLang() {
  const stored = localStorage.getItem('lang')
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language?.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('lang', next)
      return next
    })
  }

  const t = (path) => {
    const value = path.split('.').reduce((acc, key) => acc?.[key], translations[lang])
    return value ?? path
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}
