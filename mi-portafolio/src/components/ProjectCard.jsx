import { FiGithub, FiExternalLink, FiLock } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import ProjectGallery from './ProjectGallery'

export default function ProjectCard({ project }) {
  const { t } = useLanguage()
  const item = t(`projects.items.${project.id}`)
  const isLive = project.status === 'live'

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-ink-800 dark:bg-ink-900">
      <div className="relative flex items-center justify-between bg-gradient-to-br from-pitch-600 to-ink-900 px-5 py-4">
        <span className="font-display text-3xl font-bold text-white/25">{project.number}</span>
        <span
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            isLive ? 'bg-pitch-500/20 text-pitch-50' : 'bg-white/10 text-slate-100'
          }`}
        >
          {isLive ? (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-pitch-400" />
              {t('projects.statusLive')}
            </>
          ) : (
            <>
              <FiLock className="h-3 w-3" />
              {t('projects.statusPrivate')}
            </>
          )}
        </span>
      </div>

      {project.images?.length > 0 && (
        <ProjectGallery
          images={project.images.map((src) => `${import.meta.env.BASE_URL}${src}`)}
          alt={item.name}
        />
      )}

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{item.name}</h3>
          <p className="mt-0.5 text-sm italic text-pitch-600 dark:text-pitch-400">{item.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-ink-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.repoBackUrl ? (
            <>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-pitch-500 hover:text-pitch-600 dark:border-ink-800 dark:text-slate-200 dark:hover:text-pitch-400"
              >
                <FiGithub className="h-4 w-4" /> {t('projects.viewFrontRepo')}
              </a>
              <a
                href={project.repoBackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-pitch-500 hover:text-pitch-600 dark:border-ink-800 dark:text-slate-200 dark:hover:text-pitch-400"
              >
                <FiGithub className="h-4 w-4" /> {t('projects.viewBackRepo')}
              </a>
            </>
          ) : (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-pitch-500 hover:text-pitch-600 dark:border-ink-800 dark:text-slate-200 dark:hover:text-pitch-400"
            >
              <FiGithub className="h-4 w-4" /> {t('projects.viewRepo')}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-pitch-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-pitch-700"
            >
              <FiExternalLink className="h-4 w-4" /> {t('projects.viewDemo')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
