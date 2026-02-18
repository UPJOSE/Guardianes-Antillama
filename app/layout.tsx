import type { Metadata, Viewport } from 'next'
import { Baloo_2, Quicksand } from 'next/font/google'
import './globals.css'

const baloo2 = Baloo_2({ subsets: ['latin'], variable: '--font-baloo2' })
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' })

export const metadata: Metadata = {
  title: 'Guardianes AntiLlama | Aprende a cuidarte del fuego jugando',
  description: 'Juego educativo interactivo para niños de 9-12 años sobre prevención de quemaduras. En alianza con Aniquem.',
  keywords: 'educación, prevención, quemaduras, niños, seguridad, Aniquem',
  authors: [{ name: 'Guardianes AntiLlama' }],
}

export const viewport: Viewport = {
  themeColor: '#FF8C42',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${baloo2.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
