import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CIMA — Control de Finanzas Personales',
  description: 'Registra tus ingresos y gastos en múltiples monedas (VES, USD, USDT). Presupuestos, tasas BCV en tiempo real y asistente financiero con IA.',
  keywords: 'finanzas personales, Venezuela, VES, USD, presupuesto, control de gastos, ahorro, registro de gastos',
  authors: [{ name: 'Simon Meza' }],
  openGraph: {
    title: 'CIMA — Take control of your finances',
    description: 'Personal finance tracker for Venezuelan users. Manually log income and expenses in multiple currencies. No bank connections.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
