import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Nuestros Productos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="fixed w-full top-0 bg-white shadow z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Juguetes Creativos Rafito" className="h-10" />
          <span className="font-bold text-xl text-rafito">Juguetes Creativos Rafito</span>
        </div>
        <ul className="flex gap-6">
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`font-medium ${location.pathname === item.to ? 'text-rafito' : 'hover:text-rafitoBlue'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}