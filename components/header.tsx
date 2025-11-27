"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Download", href: "#download" },
    { label: "Docs", href: "#docs" },
    { label: "Contact", href: "#contact" },
  ]

  const handleMenuClose = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              DW
            </div>
            <span className="font-bold text-lg hidden sm:inline">DWT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            <a
              href="#download"
              className="hidden sm:inline-block btn-primary text-sm"
              aria-label="Download Digital Wellbeing Tracker"
            >
              Download App
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden pb-4 space-y-2"
            aria-label="Mobile navigation"
            role="navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-muted rounded focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                onClick={handleMenuClose}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#download"
                className="w-full btn-primary text-sm text-center block"
                onClick={handleMenuClose}
              >
                Download App
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
