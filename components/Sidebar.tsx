"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FilePlus,
  ClipboardList,
  AlertTriangle,
  BarChart3,
  ListChecks,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { name: "Crear Plan", href: "/plan", Icon: FilePlus },
    { name: "Planes de Trabajo", href: "/planes", Icon: ClipboardList },
    { name: "Registrar Defecto", href: "/", Icon: AlertTriangle },
    { name: "Lista de Defectos", href: "/reportes", Icon: ListChecks },
    { name: "Dashboard", href: "/dashboard", Icon: BarChart3 },
  ]

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" })
    window.location.href = "/" // Redirige al login
  }

  return (
    <aside className="w-64 h-full border-r bg-white shadow-sm fixed top-0 left-0 hidden lg:flex flex-col justify-between">
      <div>
        <div className="p-4 border-b flex justify-center">
          <img src="/logo.png" alt="Calidad Fusion" className="mx-auto" />
        </div>
        <nav className="p-4 flex flex-col gap-2">
          {links.map(({ name, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center px-3 py-2 rounded hover:bg-gray-100 ${
                pathname === href ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-2" />
              {name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-3 py-2 rounded hover:bg-gray-100 text-red-600"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}
