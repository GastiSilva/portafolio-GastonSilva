import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import MainLayout from '../layouts/MainLayout'
import { useLanguage } from '../context/LanguageContext'

const links = [
  {
    key: 'email',
    icon: FaEnvelope,
    href: 'mailto:gasti.silva@gmail.com',
    value: 'gasti.silva@gmail.com',
  },
  {
    key: 'linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/gast%C3%B3n-silva-b55249220/',
    value: '/in/gastón-silva',
  },
  {
    key: 'github',
    icon: FaGithub,
    href: 'https://github.com/GastiSilva',
    value: '@GastiSilva',
  },
]

export default function Contacto() {
  const { t } = useLanguage()

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          {t('contact.title')}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-slate-600 dark:text-slate-300">{t('contact.subtitle')}</p>

        <div className="mt-10 flex flex-col gap-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.key}
                href={link.href}
                target={link.key !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 text-left transition hover:border-pitch-500 hover:bg-pitch-50 dark:border-ink-800 dark:hover:bg-pitch-500/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pitch-600 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {t(`contact.${link.key}`)}
                  </span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">{link.value}</span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}
