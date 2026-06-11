import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CIMA — Take control of your finances',
  description: 'App de finanzas personales para venezolanos. Gestiona VES, USD y USDT con tasas BCV en tiempo real.',
}

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Cuentas en múltiples monedas',
    description: 'Registra tus saldos en VES, USD y USDT desde una sola app. Sin fricciones, sin conversiones manuales.',
    color: 'primary',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Tasas BCV en tiempo real',
    description: 'Tipos de cambio actualizados al instante. Tasa oficial BCV y paralela siempre disponibles.',
    color: 'success',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Presupuestos inteligentes',
    description: 'Define límites de gasto y recibe alertas antes de excederlos. Toma el control real.',
    color: 'secondary',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Registro de transacciones',
    description: 'Historial completo de ingresos y gastos con categorías personalizadas y filtros.',
    color: 'info',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Asistente financiero IA',
    description: 'Pregúntale a tu IA personal consejos sobre tus finanzas. Análisis inteligente de tus hábitos.',
    color: 'accent',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Seguimiento de patrimonio',
    description: 'Visualiza el valor total de tus ahorros y activos personales en tiempo real.',
    color: 'purple',
  },
]

const iconColorMap: Record<string, string> = {
  primary: 'bg-primary/10 text-primary group-hover:bg-primary/20',
  success: 'bg-success/10 text-success group-hover:bg-success/20',
  secondary: 'bg-secondary/10 text-secondary group-hover:bg-secondary/20',
  info: 'bg-info/10 text-info group-hover:bg-info/20',
  accent: 'bg-accent/10 text-accent group-hover:bg-accent/20',
  purple: 'bg-purple/10 text-purple-light group-hover:bg-purple/20',
}

const borderColorMap: Record<string, string> = {
  primary: 'hover:border-primary/50',
  success: 'hover:border-success/50',
  secondary: 'hover:border-secondary/50',
  info: 'hover:border-info/50',
  accent: 'hover:border-accent/50',
  purple: 'hover:border-purple/50',
}

const gradientMap: Record<string, string> = {
  primary: 'group-hover:[box-shadow:0_0_20px_rgba(13,148,136,0.12)]',
  success: 'group-hover:[box-shadow:0_0_20px_rgba(16,185,129,0.12)]',
  secondary: 'group-hover:[box-shadow:0_0_20px_rgba(245,158,11,0.12)]',
  info: 'group-hover:[box-shadow:0_0_20px_rgba(59,130,246,0.12)]',
  accent: 'group-hover:[box-shadow:0_0_20px_rgba(99,102,241,0.12)]',
  purple: 'group-hover:[box-shadow:0_0_20px_rgba(124,58,237,0.12)]',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 text-center overflow-hidden">
        {/* Decorative radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute top-20 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs text-secondary mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            Disponible para iOS · Android próximamente
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Toma el control de<br />
            <span className="bg-gradient-to-r from-primary via-accent-light to-accent bg-clip-text text-transparent">
              tus finanzas
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
            La app de registro de finanzas personales para venezolanos. Anota tus ingresos y gastos en VES, USD y USDT, consulta las tasas BCV y alcanza tus metas de ahorro.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center" id="download">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-cta px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:opacity-90 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-white hover:border-primary/50 hover:bg-surface/80 transition-colors"
            >
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Android · Próximamente
            </a>
          </div>

          <p className="mt-4 text-xs text-muted">Gratis para siempre con plan básico</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Todo lo que necesitas</h2>
            <p className="mt-3 text-sm text-muted max-w-md mx-auto">Herramientas financieras diseñadas para la realidad venezolana.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className={`group rounded-xl border border-border bg-surface p-6 transition-all duration-300 ${borderColorMap[f.color]} ${gradientMap[f.color]}`}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg mb-4 transition-colors ${iconColorMap[f.color]}`}>
                  {f.icon}
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Pricing */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Planes para cada etapa</h2>
          <p className="mt-3 text-sm text-muted">Desde gratis hasta Pro. Sin compromisos.</p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-white hover:border-primary/50 transition-colors"
            >
              Ver todos los planes
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
