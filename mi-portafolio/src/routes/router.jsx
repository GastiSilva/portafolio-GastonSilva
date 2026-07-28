import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import SobreMi from '../views/SobreMi'
import Proyectos from '../views/Proyectos'
import Contacto from '../views/Contacto'

export default function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}
