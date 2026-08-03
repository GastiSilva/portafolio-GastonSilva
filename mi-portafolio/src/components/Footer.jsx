import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-6">
        <div className="flex items-center gap-6 text-xl text-slate-500 dark:text-slate-400">
          <a
            href="https://www.linkedin.com/in/gast%C3%B3n-silva-b55249220/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pitch-600 dark:hover:text-pitch-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GastiSilva"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pitch-600 dark:hover:text-pitch-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:gasti.silva@gmail.com"
            className="transition hover:text-pitch-600 dark:hover:text-pitch-400"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
