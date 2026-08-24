import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import { Inter } from '@studio-freight/inter'
import "./globals.css"

export const metadata: Metadata = {
  title: "Centurion Diamond | 100 Facets. Engineered to Shine.",
  description: "A revolutionary 100-facet cut designed to unlock extraordinary brilliance and fire. The future of diamond brilliance.",
  keywords: ["diamond", "100 facet", "Centurion", "luxury jewelry", "brilliant cut", "GSI certified"],
  authors: [{ name: "Centurion Diamond" }],
  openGraph: {
    title: "Centurion Diamond | 100 Facets. Engineered to Shine.",
    description: "A revolutionary 100-facet cut designed to unlock extraordinary brilliance and fire.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${Inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
