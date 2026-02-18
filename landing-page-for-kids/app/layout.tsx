import React from "react"
import type { Metadata, Viewport } from "next"
import { Baloo_2, Quicksand } from "next/font/google"

import "./globals.css"

const _baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-baloo2" })
const _quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" })

export const metadata: Metadata = {
  title: "Guardianes Antillamas | Creando conciencia a traves del juego",
  description:
    "Plataforma educativa para ninos, ninas y adolescentes que transforma practicas cotidianas en conductas seguras dentro del hogar y la comunidad. En alianza con Aniquem.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_baloo2.variable} ${_quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
