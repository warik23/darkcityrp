import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dark City Roleplay - FiveM RP Szerver",
  description:
    "Csatlakozz a Dark City Roleplay FiveM szerverhez és építsd fel saját történeted egy élethű, szabad világban!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

