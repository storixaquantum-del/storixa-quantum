'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme,
} from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem {...props}>
      <ThemeToggle />
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 hidden dark:block group-hover:rotate-12 transition-transform" />
      <Moon className="w-5 h-5 dark:hidden group-hover:-rotate-12 transition-transform" />
    </button>
  )
}
