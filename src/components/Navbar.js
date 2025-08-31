"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ✅ hamburger & close icons

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="backdrop-blur-md bg-white/40 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" width={60} height={60} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.path}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-yellow-400 font-bold"
                        : "text-black font-bold"
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
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} color="black" /> : <Menu size={28} color="black"/>}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-6">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`block text-lg transition-colors duration-300 ${
                        isActive
                          ? "text-yellow-500 font-bold"
                          : "text-gray-800 font-bold"
                      }`}
                      onClick={() => setMenuOpen(false)} // close menu on click
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
