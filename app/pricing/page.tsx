import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios — CIMA',
  description: 'Planes flexibles para gestionar tus finanzas. Desde gratis hasta Pro con asistente IA.',
}

const plans = [
  {
    name: 'Free',
    price: { monthly: '$0', annual: null },
    description: 'Para empezar a ordenar tus finanzas.',
    features: [
      'Hasta 3 billeteras',
      'Hasta 50 transacciones/mes',
      '1 presupuesto activo',
      'Tasas BCV y paralela',
      'Categorías básicas',
    ],
    cta: 'Descargar gratis',
    ctaHref: '#download',
    disabled: false,
    highlight: false,
    variant: 'free' as const,
  },
  {
    name: 'Pro',
    price: { monthly: '$2.99', annual: '$24.99' },
    description: 'Para quienes toman sus finanzas en serio.',
    badge: 'Más popular',
    features: [
      'Billeteras ilimitadas',
      'Transacciones ilimitadas',
      'Presupuestos ilimitados',
      'Asistente financiero IA',
      'Escaneo de recibos',
      'Portafolio de inversiones',
      'Rastreador de suscripciones',
      'División de gastos',
      'Informe mensual de insights',
      'Exportación CSV / PDF',
    ],
    cta: 'Empezar prueba gratis',
    ctaHref: '#download',
    disabled: false,
    highlight: true,
    variant: 'pro' as const,
  },
  {
    name: 'Family',
    price: { monthly: '$5.99', annual: '$49.99' },
    description: 'Finanzas familiares bajo control.',
    features: [
      'Todo lo de Pro',
      'Hasta 5 miembros de familia',
      'Presupuestos compartidos',
      'Soporte prioritario',
    ],
    cta: 'Próximamente',
    ctaHref: '#',
    disabled: true,
    highlight: false,
    variant: 'family' as const,
  },
]

const checkIconColor: Record<string, string> = {
  free: 'text-primary',
  pro: 'text-accent-light',
  family: 'text-purple-light',
}

const cardClass: Record<string, string> = {
  free: 'border-border bg-surface',
  pro: 'border-accent/60 bg-accent/5 shadow-xl shadow-accent/10',
  family: 'border-purple/60 bg-purple/5 shadow-xl shadow-purple/10',
}

const ctaClass: Record<string, string> = {
  free: 'border border-border text-white hover:border-primary/50 hover:text-primary',
  pro: 'bg-gradient-cta text-white shadow-md shadow-accent/20 hover:opacity-90',
  family: 'bg-gradient-purple text-white shadow-md shadow-purple/20 hover:opacity-90',
}

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">Precios simples y justos</h1>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            Empieza gratis y escala cuando lo necesites. Sin costos ocultos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-6 flex flex-col ${cardClass[plan.variant]}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-gold px-3 py-0.5 text-xs font-semibold text-background">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">{plan.name}</h2>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-semibold text-white">{plan.price.monthly}</span>
                  <span className="text-sm text-muted mb-1">/mes</span>
                </div>
                {plan.price.annual && (
                  <p className="mt-1 text-xs text-muted">o {plan.price.annual}/año · ahorra 30%</p>
                )}
                <p className="mt-3 text-sm text-muted">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${checkIconColor[plan.variant]}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              {plan.disabled ? (
                <span className="w-full rounded-lg py-2.5 text-center text-sm font-medium border border-border text-muted cursor-not-allowed block">
                  {plan.cta}
                </span>
              ) : (
                <a
                  href={plan.ctaHref}
                  className={`w-full rounded-lg py-2.5 text-center text-sm font-medium transition-all block ${ctaClass[plan.variant]}`}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          Todos los planes incluyen cifrado de datos, soporte por email y actualizaciones gratuitas.
        </p>
      </div>
    </div>
  )
}
