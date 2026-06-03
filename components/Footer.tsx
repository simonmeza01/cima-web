import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent font-bold text-base">
                CIMA
              </span>
              <p className="text-xs text-muted">Control, Ingresos, Monedas, Ahorros</p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted">
              <Link href="/privacy" className="hover:text-white transition-colors">Política de Privacidad</Link>
              <Link href="/support" className="hover:text-white transition-colors">Soporte</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Precios</Link>
              <a href="mailto:simonmcode01@gmail.com" className="hover:text-white transition-colors">Contacto</a>
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted">
            <p>© {new Date().getFullYear()} CIMA. Desarrollado por Simon Meza. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
