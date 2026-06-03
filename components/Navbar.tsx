'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent text-lg">
              CIMA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Precios</Link>
            <Link href="/support" className="hover:text-white transition-colors">Soporte</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
          </nav>

          <div className="hidden md:block">
            <a
              href="#download"
              className="rounded-md bg-gradient-primary px-4 py-1.5 text-sm font-medium text-white shadow-sm shadow-primary/20 hover:opacity-90 transition-all"
            >
              Descargar
            </a>
          </div>

          <button
            className="md:hidden text-muted hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-border py-4 flex flex-col gap-4 text-sm text-muted">
            <Link href="/" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Inicio</Link>
            <Link href="/pricing" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Precios</Link>
            <Link href="/support" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Soporte</Link>
            <Link href="/privacy" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Privacidad</Link>
            <a
              href="#download"
              className="w-fit rounded-md bg-gradient-primary px-4 py-1.5 text-sm font-medium text-white hover:opacity-90 transition-all"
            >
              Descargar
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
