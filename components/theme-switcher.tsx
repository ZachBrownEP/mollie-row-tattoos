"use client"

import { useState, useEffect } from "react"
import { Palette, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Theme {
  id: string
  name: string
  description: string
  colors: string[]
  cssVars: {
    primary: string
    primaryForeground: string
    accent: string
  }
}

const themes: Theme[] = [
  {
    id: "default",
    name: "Default",
    description: "Classic theme that adapts to light/dark mode",
    colors: ["#000000", "#404040", "#808080"],
    cssVars: {
      primary: "240 5.9% 10%",
      primaryForeground: "0 0% 98%",
      accent: "240 4.8% 95.9%",
    },
  },
  {
    id: "ink-steel",
    name: "Risa Tattoos",
    description: "Deep purples with metallic accents",
    colors: ["#8B5CF6", "#A855F7", "#C084FC"],
    cssVars: {
      primary: "262.1 83.3% 57.8%",
      primaryForeground: "210 20% 98%",
      accent: "262.1 83.3% 57.8%",
    },
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    description: "Warm sunset hues with golden undertones",
    colors: ["#F97316", "#FB923C", "#FDBA74"],
    cssVars: {
      primary: "20.5 90.2% 48.2%",
      primaryForeground: "60 9.1% 97.8%",
      accent: "20.5 90.2% 48.2%",
    },
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    description: "Cool ocean blues with refreshing greens",
    colors: ["#0891B2", "#22D3EE", "#67E8F9"],
    cssVars: {
      primary: "188.7 85% 26.5%",
      primaryForeground: "210 20% 98%",
      accent: "188.7 85% 26.5%",
    },
  },
  {
    id: "forest-zen",
    name: "Forest Zen",
    description: "Deep forest greens with natural earth tones",
    colors: ["#059669", "#10B981", "#6EE7B7"],
    cssVars: {
      primary: "160 84.1% 39.4%",
      primaryForeground: "355 20% 98%",
      accent: "160 84.1% 39.4%",
    },
  },
  {
    id: "crimson-edge",
    name: "Crimson Edge",
    description: "Bold reds with dark undertones",
    colors: ["#DC2626", "#EF4444", "#F87171"],
    cssVars: {
      primary: "0 84.2% 60.2%",
      primaryForeground: "210 20% 98%",
      accent: "0 84.2% 60.2%",
    },
  },
  {
    id: "midnight-gold",
    name: "Midnight Gold",
    description: "Elegant golds with deep blacks",
    colors: ["#EAB308", "#FDE047", "#FEF08A"],
    cssVars: {
      primary: "45 93.4% 47.5%",
      primaryForeground: "20 14.3% 4.1%",
      accent: "45 93.4% 47.5%",
    },
  },
  {
    id: "lavender-fields",
    name: "Lavender Fields",
    description: "Soothing purples inspired by lavender",
    colors: ["#9333EA", "#A855F7", "#C4B5FD"],
    cssVars: {
      primary: "262.1 83.3% 57.8%",
      primaryForeground: "210 20% 98%",
      accent: "262.1 83.3% 57.8%",
    },
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    description: "Soft pinks with warm undertones",
    colors: ["#EC4899", "#F472B6", "#FBCFE8"],
    cssVars: {
      primary: "322.2 90.5% 54.3%",
      primaryForeground: "210 20% 98%",
      accent: "322.2 90.5% 54.3%",
    },
  },
  {
    id: "electric-blue",
    name: "Electric Blue",
    description: "Vibrant blues with electric energy",
    colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
    cssVars: {
      primary: "221.2 83.2% 53.3%",
      primaryForeground: "210 20% 98%",
      accent: "221.2 83.2% 53.3%",
    },
  },
  {
    id: "emerald-dream",
    name: "Emerald Dream",
    description: "Rich emeralds with jade accents",
    colors: ["#10B981", "#34D399", "#6EE7B7"],
    cssVars: {
      primary: "160 84.1% 39.4%",
      primaryForeground: "355 20% 98%",
      accent: "160 84.1% 39.4%",
    },
  },
  {
    id: "amber-fire",
    name: "Amber Fire",
    description: "Warm ambers with fiery orange",
    colors: ["#F59E0B", "#FBBF24", "#FDE68A"],
    cssVars: {
      primary: "45 93.4% 47.5%",
      primaryForeground: "20 14.3% 4.1%",
      accent: "45 93.4% 47.5%",
    },
  },
  {
    id: "royal-purple",
    name: "Royal Purple",
    description: "Majestic purples with regal tones",
    colors: ["#7C3AED", "#8B5CF6", "#A78BFA"],
    cssVars: {
      primary: "262.1 83.3% 57.8%",
      primaryForeground: "210 20% 98%",
      accent: "262.1 83.3% 57.8%",
    },
  },
  {
    id: "steel-gray",
    name: "Steel Gray",
    description: "Industrial grays with metallic shine",
    colors: ["#6B7280", "#9CA3AF", "#D1D5DB"],
    cssVars: {
      primary: "220 8.9% 46.1%",
      primaryForeground: "210 20% 98%",
      accent: "220 8.9% 46.1%",
    },
  },
  {
    id: "neon-green",
    name: "Neon Green",
    description: "Electric greens with bright energy",
    colors: ["#22C55E", "#4ADE80", "#86EFAC"],
    cssVars: {
      primary: "142.1 76.2% 36.3%",
      primaryForeground: "355.7 100% 97.3%",
      accent: "142.1 76.2% 36.3%",
    },
  },
  {
    id: "deep-teal",
    name: "Deep Teal",
    description: "Rich teals with ocean depths",
    colors: ["#0D9488", "#14B8A6", "#5EEAD4"],
    cssVars: {
      primary: "173.4 80.4% 40%",
      primaryForeground: "150 100% 6.1%",
      accent: "173.4 80.4% 40%",
    },
  },
  {
    id: "magenta-burst",
    name: "Magenta Burst",
    description: "Bold magentas with vibrant energy",
    colors: ["#D946EF", "#E879F9", "#F0ABFC"],
    cssVars: {
      primary: "300 76% 72%",
      primaryForeground: "210 20% 98%",
      accent: "300 76% 72%",
    },
  },
  {
    id: "burnt-orange",
    name: "Burnt Orange",
    description: "Rich oranges with earthy warmth",
    colors: ["#EA580C", "#F97316", "#FB923C"],
    cssVars: {
      primary: "20.5 90.2% 48.2%",
      primaryForeground: "60 9.1% 97.8%",
      accent: "20.5 90.2% 48.2%",
    },
  },
  {
    id: "midnight-blue",
    name: "Midnight Blue",
    description: "Deep blues with starry night tones",
    colors: ["#1E40AF", "#3B82F6", "#60A5FA"],
    cssVars: {
      primary: "221.2 83.2% 53.3%",
      primaryForeground: "210 20% 98%",
      accent: "221.2 83.2% 53.3%",
    },
  },
  {
    id: "cherry-red",
    name: "Cherry Red",
    description: "Classic reds with cherry brightness",
    colors: ["#DC2626", "#EF4444", "#F87171"],
    cssVars: {
      primary: "0 84.2% 60.2%",
      primaryForeground: "210 20% 98%",
      accent: "0 84.2% 60.2%",
    },
  },
]

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("default")

  useEffect(() => {
    // Only apply color theme if user has specifically chosen one
    const checkAndApplyTheme = () => {
      const savedTheme = localStorage.getItem("color-theme")
      if (savedTheme) {
        setCurrentTheme(savedTheme)
        applyTheme(savedTheme)
      } else {
        // Don't apply any color theme on first load - let the system use default styling
        setCurrentTheme("default")
        // Don't force apply the theme unless user explicitly selects it
      }
    }

    checkAndApplyTheme()

    // Listen for storage changes (in case of multiple tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "color-theme" && e.newValue) {
        setCurrentTheme(e.newValue)
        applyTheme(e.newValue)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])


  const applyTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId)
    if (!theme) return

    const root = document.documentElement
    
    // Only apply custom CSS properties for non-default themes
    if (themeId !== "default") {
      root.style.setProperty("--primary", theme.cssVars.primary)
      root.style.setProperty("--primary-foreground", theme.cssVars.primaryForeground)
      root.style.setProperty("--accent", theme.cssVars.accent)
      root.setAttribute("data-theme", themeId)
    } else {
      // For default theme, remove custom properties to let CSS defaults work
      root.style.removeProperty("--primary")
      root.style.removeProperty("--primary-foreground")
      root.style.removeProperty("--accent")
      root.setAttribute("data-theme", "default")
    }
  }

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    // Only save to localStorage if it's not the default theme
    if (themeId !== "default") {
      localStorage.setItem("color-theme", themeId)
    } else {
      // If selecting default, remove custom theme from localStorage
      localStorage.removeItem("color-theme")
      // Clear custom CSS properties to let the CSS defaults take over
      const root = document.documentElement
      root.style.removeProperty("--primary")
      root.style.removeProperty("--primary-foreground")
      root.style.removeProperty("--accent")
      root.removeAttribute("data-theme")
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Theme Button */}
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Palette className="h-6 w-6" />
        <span className="sr-only">Choose theme</span>
      </Button>

      {/* Theme Selector Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/50">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
          <Card className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Choose Your Palette</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  ×
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {themes.map((theme) => (
                  <Card
                    key={theme.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      currentTheme === theme.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleThemeChange(theme.id)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-1">
                          {theme.colors.map((color, index) => (
                            <div key={index} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                          ))}
                        </div>
                        {currentTheme === theme.id && <Check className="h-3 w-3 text-primary" />}
                      </div>
                      <h4 className="font-medium text-xs mb-1">{theme.name}</h4>
                      <p className="text-xs text-muted-foreground leading-tight">{theme.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
