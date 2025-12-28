import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface CompanyPageProps {
  name: string
  slug: string
  tagline: string
  color: string
  description: string
  services: Array<{
    title: string
    description: string
    icon: string
  }>
  stats: Array<{
    number: string
    label: string
  }>
  expertise: string[]
  ctaText?: string
}

export function CompanyPageTemplate({
  name,
  slug,
  tagline,
  color,
  description,
  services,
  stats,
  expertise,
  ctaText = "Get in Touch",
}: CompanyPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32 max-w-7xl mx-auto">
        <div className="mb-4 inline-flex px-4 py-2 rounded-full border border-border bg-secondary/50">
          <span className="text-sm text-foreground/70">← Back to all companies</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color }}>
          {name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">{tagline}</p>
        <Button asChild size="lg" style={{ backgroundColor: color, color: "white" }}>
          <Link href={`/companies/${slug}/contact`}>
            {ctaText}
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </Button>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color }}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6">About {name}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{description}</p>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {expertise.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4">
              <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <p className="text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Partner With {name}?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Connect with our team to discuss how we can support your business goals.
        </p>
        <Button asChild size="lg" style={{ backgroundColor: color, color: "white" }}>
          <Link href={`/companies/${slug}/contact`}>{ctaText}</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border px-4 py-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 {name}. Part of Volt Wheels.</p>
        </div>
      </footer>
    </main>
  )
}
