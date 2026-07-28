import MainLayout from '../layouts/MainLayout'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

export default function Proyectos() {
  const { t } = useLanguage()

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{t('projects.subtitle')}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
