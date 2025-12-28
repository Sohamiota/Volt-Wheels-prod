import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompanyCardProps {
  name: string
  slug: string
  description: string
  color: string
  icon: React.ReactNode
}

export function CompanyCard({ name, slug, description, color, icon }: CompanyCardProps) {
  return (
    <Link href={`/companies/${slug}`}>
      <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition duration-300 cursor-pointer h-full flex flex-col">
        <div className="mb-4 p-3 rounded-lg inline-flex" style={{ backgroundColor: `${color}20` }}>
          <div style={{ color }}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        <Button variant="ghost" className="justify-start p-0 text-primary hover:text-primary hover:bg-transparent">
          Learn More
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </Link>
  )
}
