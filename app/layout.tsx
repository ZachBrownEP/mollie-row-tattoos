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
  title: "Ink & Steel Tattoo Studio - Austin's Premier Tattoo Artists",
  description:
    "Professional tattoo artistry in Austin, TX. Custom tattoos, cover-ups, and piercings by award-winning artists in a clean, safe environment.",
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
        <script dangerouslySetInnerHTML={{
          __html: `
            // Clear any stored theme preference to ensure light mode
            if (typeof window !== 'undefined') {
              localStorage.removeItem('theme');
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light" disableTransitionOnChange>
          <SiteHeader />
          {children}
          <ThemeSwitcher />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
