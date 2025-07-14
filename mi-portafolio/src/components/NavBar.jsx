// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-[#708A58]">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Enlaces de navegación */}
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold'
                : 'text-white hover:transition'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/proyectos"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold'
                : 'text-white hover:transition'
            }
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold'
                : 'text-white hover:transition'
            }
          >
            Contacto
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
