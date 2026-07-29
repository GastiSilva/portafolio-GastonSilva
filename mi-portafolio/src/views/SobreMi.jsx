import MainLayout from '../layouts/MainLayout'
import { useLanguage } from '../context/LanguageContext'

const skillCategories = ['backend', 'frontend', 'gis', 'databases', 'infra', 'architecture', 'languages']

export default function SobreMi() {
  const { t } = useLanguage()
  const timeline = t('about.timeline')
  const experience = t('about.experience')

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          {t('about.title')}
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{t('about.intro')}</p>

        <h3 className="mt-10 font-display text-xl font-bold text-slate-900 dark:text-white">
          {t('about.skillsTitle')}
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillCategories.map((cat) => {
            const category = t(`about.skills.${cat}`)
            return (
              <div
                key={cat}
                className={`rounded-xl border border-slate-200 p-4 dark:border-ink-800 ${
                  cat === 'languages' ? 'sm:col-span-2' : ''
                }`}
              >
                <h4 className="text-sm font-semibold text-pitch-600 dark:text-pitch-400">{category.title}</h4>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-ink-800 dark:text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <h3 className="mt-10 font-display text-xl font-bold text-slate-900 dark:text-white">
          {t('about.experienceTitle')}
        </h3>
        <div className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-ink-800">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">{experience.role}</h4>
            <span className="text-xs font-semibold uppercase tracking-wide text-pitch-600 dark:text-pitch-400">
              {experience.period}
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{experience.company}</p>

          <div className="mt-5 flex flex-col gap-5">
            {experience.projects.map((project) => (
              <div key={project.name}>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h5 className="font-semibold text-slate-900 dark:text-white">{project.name}</h5>
                  {project.tag && (
                    <span className="text-xs italic text-pitch-600 dark:text-pitch-400">{project.tag}</span>
                  )}
                </div>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pitch-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <h3 className="mt-10 font-display text-xl font-bold text-slate-900 dark:text-white">
          {t('about.timelineTitle')}
        </h3>
        <div className="mt-4 flex flex-col gap-6 border-l-2 border-pitch-500/30 pl-6">
          {timeline.map((entry) => (
            <div key={entry.title} className="relative">
              <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full bg-pitch-500" />
              <p className="text-xs font-semibold uppercase tracking-wide text-pitch-600 dark:text-pitch-400">
                {entry.period}
              </p>
              <h4 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">
                {entry.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{entry.place}</p>
              {entry.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {entry.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
