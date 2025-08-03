import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import SiteHeader from "@/site-header"
import ThemeSwitcher from "@/components/theme-switcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mollie Row Tattoos - Asheville's Premier Tattoo Artist",
  description:
    "Professional tattoo artistry in Asheville, North Carolina. Custom tattoos and cover-ups by Mollie Row in a clean, safe environment.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} no-horizontal-scroll`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="relative pt-16">
            {children}
          </main>
          <ThemeSwitcher />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
