export const cvFiles = {
  es: 'cv/Gaston-Silva-CV-ES.pdf',
  en: 'cv/Gaston-Silva-CV-EN.pdf',
}

export function cvUrl(lang) {
  return `${import.meta.env.BASE_URL}${cvFiles[lang] ?? cvFiles.es}`
}
