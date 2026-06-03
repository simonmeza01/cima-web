import type { Metadata } from 'next'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'Soporte — CIMA',
  description: 'Centro de ayuda de CIMA. Encuentra respuestas a las preguntas más frecuentes.',
}

const faqs = [
  {
    q: '¿Cómo agrego una billetera?',
    a: 'Desde la pantalla principal, toca el botón "+" en la sección de billeteras. Elige la moneda (VES, USD o USDT), asígnale un nombre y establece el saldo inicial. La billetera quedará disponible de inmediato.',
  },
  {
    q: '¿Cómo funcionan los tipos de cambio?',
    a: 'CIMA actualiza automáticamente las tasas BCV (oficial) y paralela varias veces al día. Puedes ver la tasa vigente en la pantalla principal. Las conversiones entre billeteras usan la tasa que tú elijas.',
  },
  {
    q: '¿Puedo usar CIMA sin conexión a internet?',
    a: 'Sí. Puedes registrar transacciones y consultar tu historial sin conexión. Los datos se sincronizan automáticamente con la nube cuando recuperas acceso a internet. Las tasas de cambio sí requieren conexión para actualizarse.',
  },
  {
    q: '¿Cómo activo Face ID / Touch ID?',
    a: 'Ve a Configuración → Seguridad → Autenticación biométrica y activa el interruptor. La app solicitará tu confirmación mediante el sistema biométrico de tu dispositivo. Tus datos biométricos nunca salen de tu dispositivo.',
  },
  {
    q: '¿Cómo configuro un presupuesto?',
    a: 'En la sección Presupuestos, toca "Nuevo presupuesto", elige la categoría, el período (mensual, semanal o personalizado) y el límite de gasto. CIMA te notificará cuando alcances el 80% y el 100% del presupuesto.',
  },
  {
    q: '¿Puedo exportar mis datos?',
    a: 'La exportación CSV y PDF está disponible en el plan Pro. Ve a Más → Exportar datos para generar el archivo. Puedes filtrar por rango de fechas, billetera o categoría antes de exportar.',
  },
  {
    q: '¿Cómo elimino mi cuenta?',
    a: 'Ve a Configuración → Cuenta → Eliminar cuenta. Confirma tu identidad y todos tus datos serán eliminados permanentemente dentro de los 30 días siguientes. Esta acción no puede deshacerse.',
  },
  {
    q: '¿Qué monedas son compatibles?',
    a: 'Actualmente CIMA soporta Bolívares (VES), Dólares estadounidenses (USD) y Tether (USDT). Estamos trabajando en agregar más monedas en futuras actualizaciones.',
  },
]

export default function SupportPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">¿Cómo podemos ayudarte?</h1>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            Encuentra respuestas rápidas a las dudas más comunes.
          </p>
        </div>

        {/* Search hint — info left border accent */}
        <div className="mb-10 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 border-l-4 border-l-info">
          <svg className="w-4 h-4 text-info shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm text-muted">Usa el chat de soporte en la esquina inferior derecha para preguntas personalizadas</span>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-surface overflow-hidden open:border-accent/40 transition-colors"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-white hover:text-primary transition-colors list-none">
                <span>{faq.q}</span>
                <svg
                  className="w-4 h-4 text-muted shrink-0 transition-transform group-open:rotate-180 group-open:text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted leading-relaxed border-t border-border pt-4 border-l-2 border-l-accent/40 ml-5">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-xl border border-border bg-surface p-8 text-center">
          <h2 className="text-base font-medium text-white mb-2">¿Sigues sin encontrar lo que buscas?</h2>
          <p className="text-sm text-muted mb-5">
            Escríbenos directamente y te responderemos en menos de 24 horas.
          </p>
          <a
            href="mailto:simonmcode01@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/20 hover:opacity-90 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            simonmcode01@gmail.com
          </a>
        </div>
      </div>

      <ChatWidget />
    </div>
  )
}
