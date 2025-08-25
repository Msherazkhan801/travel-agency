'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true) // scroll down → hide
      } else {
        setHidden(false) // scroll up → show
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="backdrop-blur-md bg-white/40 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Logo</h1>
          <ul className="flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.path
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.path}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "text-gray-800 font-bold"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Gradient underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
