import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad — CIMA',
  description: 'Política de privacidad de CIMA. Cómo recopilamos, usamos y protegemos tu información.',
}

const sections = [
  {
    title: '1. Información que recopilamos',
    content: `Recopilamos la siguiente información para proporcionar y mejorar nuestros servicios:

• **Datos de cuenta:** dirección de correo electrónico y contraseña cifrada (o token de Google Sign-In si autentificas con Google).
• **Datos financieros:** transacciones, saldos de billeteras y presupuestos que tú mismo introduces en la app. CIMA no accede a ninguna cuenta bancaria ni datos financieros externos.
• **Token de notificaciones push:** generado por Firebase Cloud Messaging para enviarte alertas de presupuesto. Solo se usa para notificaciones.
• **Datos de uso y analíticas:** información anónima sobre cómo usas la app (pantallas visitadas, funciones utilizadas) para mejorar la experiencia.`,
  },
  {
    title: '2. Datos biométricos',
    content: `Face ID y Touch ID se procesan exclusivamente en tu dispositivo mediante las APIs nativas de iOS/Android. CIMA **nunca** recibe, almacena ni transmite datos biométricos a nuestros servidores. La autenticación biométrica solo desbloquea el acceso local a la app.`,
  },
  {
    title: '3. Cómo usamos tu información',
    content: `Utilizamos tu información para:

• Proveer y mantener el servicio de CIMA.
• Enviarte notificaciones push relevantes (alertas de presupuesto, recordatorios).
• Mejorar la experiencia mediante análisis de uso agregados y anónimos.
• Responder a tus solicitudes de soporte.
• Cumplir obligaciones legales aplicables.`,
  },
  {
    title: '4. Almacenamiento y seguridad',
    content: `Todos tus datos se almacenan en **Supabase**, una plataforma de base de datos en la nube con:

• Cifrado en reposo (AES-256) y en tránsito (TLS 1.2+).
• Políticas de seguridad a nivel de fila (Row Level Security) que garantizan que solo tú puedas acceder a tus datos.
• Copias de seguridad automáticas con alta disponibilidad.

Nunca almacenamos contraseñas en texto plano. Se aplica hashing seguro (bcrypt) en todo momento.`,
  },
  {
    title: '5. Compartición de datos con terceros',
    content: `**No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales.**

Podemos compartir datos únicamente en estas circunstancias limitadas:
• Con proveedores de servicios esenciales (Supabase para base de datos, Firebase para notificaciones) bajo estrictos acuerdos de confidencialidad.
• Cuando sea requerido por ley o autoridad competente.
• En caso de fusión o adquisición, con notificación previa a los usuarios.`,
  },
  {
    title: '6. Retención de datos',
    content: `Retenemos tus datos mientras tu cuenta esté activa. Si eliminas tu cuenta, todos tus datos personales y financieros serán eliminados permanentemente de nuestros sistemas dentro de los **30 días siguientes** a tu solicitud.

Puedes eliminar tu cuenta en cualquier momento desde **Configuración → Cuenta → Eliminar cuenta**.`,
  },
  {
    title: '7. Tus derechos',
    content: `Tienes derecho a:

• **Acceder** a los datos que tenemos sobre ti.
• **Corregir** información inexacta.
• **Eliminar** tu cuenta y todos los datos asociados.
• **Exportar** tus datos (disponible en el plan Pro).
• **Oponerte** al procesamiento de tus datos en determinadas circunstancias.

Para ejercer estos derechos, contáctanos en simonmcode01@gmail.com.`,
  },
  {
    title: '8. Cookies y tecnologías similares',
    content: `La app móvil de CIMA no utiliza cookies. El sitio web puede usar cookies técnicas esenciales para el funcionamiento básico del sitio. No usamos cookies de seguimiento de terceros ni publicidad comportamental.`,
  },
  {
    title: '9. Menores de edad',
    content: `CIMA no está dirigida a menores de 13 años. No recopilamos intencionalmente información de menores. Si descubrimos que hemos recopilado datos de un menor sin el consentimiento parental, los eliminaremos de inmediato.`,
  },
  {
    title: '10. Cambios a esta política',
    content: `Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos mediante notificación push o correo electrónico. El uso continuado de la app después de los cambios constituye aceptación de la nueva política.`,
  },
  {
    title: '11. Contacto',
    content: `Si tienes preguntas sobre esta política de privacidad, contáctanos:

**Simon Meza**
Email: simonmcode01@gmail.com
Aplicación: CIMA — Control, Ingresos, Monedas, Ahorros`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">Política de Privacidad</h1>
          <p className="mt-3 text-sm text-muted">
            Última actualización: junio 2026 · Operado por Simon Meza
          </p>
          <div className="mt-6 rounded-xl border border-border bg-surface p-4 text-sm text-muted leading-relaxed">
            Tu privacidad es fundamental para CIMA. Esta política explica qué datos recopilamos, cómo los usamos y cómo los protegemos. Leemos esta política como una promesa a nuestros usuarios, no como letra pequeña.
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-base font-medium text-white mb-3">{s.title}</h2>
              <div className="text-sm text-muted leading-relaxed whitespace-pre-line space-y-2">
                {s.content.split('\n').map((line, i) => {
                  if (!line.trim()) return <br key={i} />
                  const formatted = line
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/90">$1</strong>')
                    .replace(/^•\s/, '')

                  if (line.startsWith('•')) {
                    return (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">·</span>
                        <span dangerouslySetInnerHTML={{ __html: formatted }} />
                      </div>
                    )
                  }
                  return <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/90">$1</strong>') }} />
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
