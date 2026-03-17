"use client"

import { useState, useEffect } from "react"
import { Chrome, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-100 transition-all duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon512.png" alt="InboxHero" width={32} height={32} className="rounded-lg" />
          <span className="text-xl font-bold tracking-tight text-gray-900">InboxHero</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it works</a>
          <div className="flex items-center gap-1.5 text-gray-400 select-none">
            <span>Pricing</span>
            <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 font-semibold">SOON</span>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="#"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
          >
            <Chrome className="w-4 h-4" />
            Add to Chrome
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          <a href="#features" onClick={() => setOpen(false)} className="block text-sm text-gray-600 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors">Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block text-sm text-gray-600 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors">How it works</a>
          <div className="pt-2">
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold h-10 px-4 rounded-full transition-colors w-full"
            >
              <Chrome className="w-4 h-4" />
              Add to Chrome
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
