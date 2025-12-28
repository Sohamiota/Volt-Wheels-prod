"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Battery, Truck, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface EulerProductCardProps {
  name: string
  slug: string
  description: string
  image: string
  features: string[]
  specifications?: {
    payload?: string
    range?: string
    battery?: string
    charging?: string
  }
}

export function EulerProductCard({
  name,
  slug,
  description,
  image,
  features,
  specifications,
}: EulerProductCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/20 overflow-hidden">
        {!imageError && image && image.startsWith('http') ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30">🚚</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {specifications && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {specifications.payload && (
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{specifications.payload}</span>
              </div>
            )}
            {specifications.range && (
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{specifications.range}</span>
              </div>
            )}
            {specifications.battery && (
              <div className="flex items-center gap-2 text-sm">
                <Battery className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{specifications.battery}</span>
              </div>
            )}
            {specifications.charging && (
              <div className="flex items-center gap-2 text-sm col-span-2">
                <span className="text-muted-foreground">{specifications.charging}</span>
              </div>
            )}
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition">
          <Link href={`/products/euler-motors/${slug}`}>
            View Details
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
