import AppRouter from './routes/router'
import NebulaBackground from './components/NebulaBackground'
import CatMascots from './components/CatMascots'

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 transition-colors dark:bg-ink-950 dark:text-slate-100">
      <NebulaBackground />
      <CatMascots />
      <div className="relative z-10">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
