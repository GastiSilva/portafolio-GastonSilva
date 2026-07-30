import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import MainLayout from '../layouts/MainLayout'
import { useLanguage } from '../context/LanguageContext'
import { cvUrl } from '../data/cv'

export default function Home() {
  const { t, lang } = useLanguage()

  return (
    <MainLayout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pitch-500/30 bg-pitch-50 px-3 py-1 text-xs font-medium text-pitch-700 dark:bg-pitch-500/10 dark:text-pitch-400">
          <span className="h-1.5 w-1.5 rounded-full bg-pitch-500" />
          {t('home.location')}
        </span>

        <p className="text-lg text-slate-500 dark:text-slate-400">{t('home.greeting')}</p>
        <h1 className="font-display text-5xl font-bold text-slate-900 dark:text-white md:text-7xl">
          {t('home.name')}
        </h1>
        <h2 className="mt-3 text-xl font-medium text-pitch-600 dark:text-pitch-400 md:text-2xl">
          {t('home.role')}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {t('home.tagline')}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/proyectos"
            className="rounded-md bg-pitch-600 px-6 py-2.5 font-medium text-white transition hover:bg-pitch-700"
          >
            {t('home.ctaProjects')}
          </Link>
          <Link
            to="/contacto"
            className="rounded-md border border-slate-300 px-6 py-2.5 font-medium text-slate-700 transition hover:border-pitch-500 hover:text-pitch-600 dark:border-ink-800 dark:text-slate-200 dark:hover:text-pitch-400"
          >
            {t('home.ctaContact')}
          </Link>
          <a
            href={cvUrl(lang)}
            download
            className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-slate-500 transition hover:text-pitch-600 dark:text-slate-400 dark:hover:text-pitch-400"
          >
            <FiDownload className="h-4 w-4" /> {t('home.downloadCv')}
          </a>
        </div>
      </div>
    </MainLayout>
  )
}
