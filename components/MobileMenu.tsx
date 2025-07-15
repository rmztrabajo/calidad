"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  FilePlus,
  ClipboardList,
  AlertTriangle,
  BarChart3,
  ListChecks
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Crear Plan", href: "/plan", Icon: FilePlus },
    { name: "Planes de Trabajo", href: "/planes", Icon: ClipboardList },
    { name: "Registrar Defecto", href: "/", Icon: AlertTriangle },
    { name: "Lista de Defectos", href: "/reportes", Icon: ListChecks },
    { name: "Dashboard", href: "/dashboard", Icon: BarChart3 }
  ]

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" })
    window.location.href = "/"
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden px-2 py-2">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 flex flex-col justify-between">
        <div>
          <div className="p-4 font-bold text-lg border-b mb-4">
            Calidad Fusion
          </div>
          <nav className="flex flex-col space-y-2">
            {links.map(({ name, href, Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center px-3 py-2 rounded hover:bg-muted ${
                  pathname === href ? "bg-muted font-semibold" : ""
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="border-t pt-4 px-4">
          <button
            onClick={handleLogout}
            className="w-full text-sm text-red-600 hover:underline text-left"
          >
            Cerrar sesión
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
