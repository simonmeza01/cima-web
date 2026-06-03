import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CIMA — Control de Finanzas Personales',
  description: 'Gestiona tu dinero en múltiples monedas (VES, USD, USDT). Presupuestos inteligentes, tasas BCV en tiempo real y asistente financiero con IA.',
  keywords: 'finanzas personales, Venezuela, VES, USD, USDT, control de gastos, presupuesto',
  authors: [{ name: 'Simon Meza' }],
  openGraph: {
    title: 'CIMA — Take control of your finances',
    description: 'Personal finance app for Venezuelan users managing money in multiple currencies.',
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
