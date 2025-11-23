import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full py-3 sm:py-5">
      <div className="container flex items-center justify-between">
        <div className="block">
          <Link href="/" aria-label="Ir a la página de inicio">
            <span className="font-header ml-4 cursor-pointer text-2xl text-white">
              jortiz.dev
            </span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="mr-4 block text-3xl text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>

        {/* Desktop Nav */}
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center">
            <li className="group pl-6">
              <Link href="#about" scroll={false}>
                <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
                  About
                </span>
                <span className="block h-0.5 w-full bg-transparent transition-all duration-300 group-hover:bg-yellow-500"></span>
              </Link>
            </li>
            <li className="group pl-6">
              <Link href="#portfolio" scroll={false}>
                <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
                  Portfolio
                </span>
                <span className="block h-0.5 w-full bg-transparent transition-all duration-300 group-hover:bg-yellow-500"></span>
              </Link>
            </li>
            <li className="group pl-6">
              <Link href="#contact" scroll={false}>
                <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
                  Contact
                </span>
                <span className="block h-0.5 w-full bg-transparent transition-all duration-300 group-hover:bg-yellow-500"></span>
              </Link>
            </li>
            <li className="pl-6">
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 w-full bg-slate-900 p-4 shadow-lg lg:hidden">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                  <span className="font-header text-lg text-white">About</span>
                </Link>
              </li>
              <li>
                <Link href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                  <span className="font-header text-lg text-white">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <span className="font-header text-lg text-white">Contact</span>
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
