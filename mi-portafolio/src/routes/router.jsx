import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import ProyectosLayout from '../views/Proyectos'
// import About from '../views/About'
// import Projects from '../views/Projects'
// import Contact from '../views/Contact'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre-mi" element={<About />} /> */}
        <Route path="/proyectos" element={<ProyectosLayout />} />
        {/* <Route path="/contacto" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
