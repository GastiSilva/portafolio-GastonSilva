// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 bg-[#73946B]">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Enlaces de navegación */}
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold'
                : 'text-gray-600 hover:transition'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/proyectos"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold'
                : 'text-gray-600 hover:transition'
            }
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold'
                : 'text-gray-600 hover:transition'
            }
          >
            Contacto
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
