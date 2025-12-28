"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)


  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">VW</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Volt Wheels</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            
            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1">
                <span>About Us</span>
                <ChevronDown size={16} className={`transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg transition-all ${openDropdown === "about" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-foreground hover:bg-secondary first:rounded-t-lg hover:text-primary transition"
                >
                  About Us
                </Link>
                <Link
                  href="/career"
                  className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition"
                >
                  Career
                </Link>
                <Link
                  href="/policies"
                  className="block px-4 py-3 text-foreground hover:bg-secondary last:rounded-b-lg hover:text-primary transition"
                >
                  Policies
                </Link>
              </div>
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1">
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg transition-all ${openDropdown === "products" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link
                  href="/products/euler-motors"
                  className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg hover:text-primary transition font-semibold"
                >
                  Euler Motors Vehicles
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg transition-all ${openDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-foreground hover:bg-secondary first:rounded-t-lg hover:text-primary transition"
                >
                  Our Services
                </Link>
                <Link
                  href="/iot-tech"
                  className="block px-4 py-3 text-foreground hover:bg-secondary last:rounded-b-lg hover:text-primary transition"
                >
                  IoT Driven Tech
                </Link>
              </div>
            </div>

            <Link href="/leasing" className="text-foreground hover:text-primary transition-colors font-medium">
              Leasing
            </Link>
            <Link href="/sustainability" className="text-foreground hover:text-primary transition-colors font-medium">
              Sustainability
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button asChild variant="default" className="hidden sm:inline-flex">
              <Link href="#contact">Get Started</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-secondary/50 backdrop-blur">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-foreground hover:text-primary rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-2">
                <div className="font-semibold text-foreground mb-2">About Us</div>
                <div className="pl-4 space-y-1">
                  <Link href="/about" className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>About Us</Link>
                  <Link href="/career" className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Career</Link>
                  <Link href="/policies" className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Policies</Link>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="font-semibold text-foreground mb-2">Products</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/products/euler-motors"
                    className="block py-1 text-primary font-semibold hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Euler Motors Vehicles
                  </Link>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="font-semibold text-foreground mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link href="/services" className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Our Services</Link>
                  <Link href="/iot-tech" className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>IoT Driven Tech</Link>
                </div>
              </div>
              <Link
                href="/leasing"
                className="block px-4 py-2 text-foreground hover:text-primary rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Leasing
              </Link>
              <Link
                href="/sustainability"
                className="block px-4 py-2 text-foreground hover:text-primary rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Sustainability
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-2 text-foreground hover:text-primary rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
