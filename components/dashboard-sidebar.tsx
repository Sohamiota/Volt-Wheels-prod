"use client"

import { useState } from "react"
import Link from "next/link"
import { LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardSidebarProps {
  companyName: string
  companyColor: string
}

export function DashboardSidebar({ companyName, companyColor }: DashboardSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/admin/leads", label: "All Leads", icon: "📋" },
    { href: "/admin/leads?status=new", label: "New Leads", icon: "🆕" },
    { href: "/admin/leads?status=contacted", label: "Contacted", icon: "📞" },
    { href: "/admin/leads?status=qualified", label: "Qualified", icon: "✅" },
    { href: "/admin/analytics", label: "Analytics", icon: "📈" },
    { href: "/admin/settings", label: "Settings", icon: "⚙️" },
  ]

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-card border border-border rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border z-40 transform transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: companyColor }}
            >
              <span className="text-sidebar-primary-foreground font-bold text-sm">VW</span>
            </div>
            <div>
              <h2 className="font-bold text-sidebar-foreground text-sm">{companyName}</h2>
              <p className="text-xs text-sidebar-foreground/60">Admin Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <span className="text-lg mr-2">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-30 md:hidden" />}
    </>
  )
}
