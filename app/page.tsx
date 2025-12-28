import { CompanyCard } from "@/components/company-card"
import { HeroCarousel } from "@/components/hero-carousel"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Grid3X3, Leaf, Wifi, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const companies = [
    {
      name: "Volt Wheels",
      slug: "volt-wheels",
      description: "EV mobility solutions and intelligent charging infrastructure for the future of transportation.",
      color: "#0066FF",
      icon: <Zap size={28} />,
    },
    {
      name: "SRS Enterprise",
      slug: "srs-enterprise",
      description: "Power distribution and renewable energy systems for sustainable business growth.",
      color: "#1DB954",
      icon: <Leaf size={28} />,
    },
    {
      name: "NRG Future",
      slug: "nrg-future",
      description: "Energy solutions and smart grid technology powering tomorrow's infrastructure.",
      color: "#FF6B35",
      icon: <Grid3X3 size={28} />,
    },
  ]

  const services = [
    {
      title: "EV Charging Solutions",
      description: "Comprehensive charging infrastructure for residential, commercial, and fleet applications.",
      link: "/companies/volt-wheels",
    },
    {
      title: "Energy Management",
      description: "Smart grid technology and renewable energy systems for sustainable operations.",
      link: "/companies/srs-enterprise",
    },
    {
      title: "IoT Integration",
      description: "Advanced monitoring and control systems for optimized energy consumption.",
      link: "/companies/nrg-future",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Services/Products Section */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {idx === 0 ? "⚡" : idx === 1 ? "🌱" : "🔋"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                      CONTINUE
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Assisted Operation Section */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Wifi className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">IoT Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                IoT Assisted Operation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Volt Wheels' monitoring system enables you to track the real usage of your charging infrastructure through a remote connection. It provides you with an online view that illustrates the actual usage of your EV charging stations, energy consumption patterns, and operational efficiency metrics.
              </p>
              <Button asChild size="lg">
                <Link href="/iot-tech">
                  Know More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
              <div className="text-8xl opacity-30">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Euler Motors Products Section */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Official Distributor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Euler Motors Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As official distributors of Euler Motors, we offer a complete range of electric commercial vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Euler Turbo EV",
                description: "High-performance electric commercial vehicle for urban logistics",
                link: "/products/euler-motors#turbo-ev",
              },
              {
                name: "Euler Storm T1500",
                description: "Heavy-duty electric vehicle for demanding commercial applications",
                link: "/products/euler-motors#storm-t1500",
              },
              {
                name: "Euler HiLoad EV",
                description: "Premium electric vehicle optimized for maximum efficiency",
                link: "/products/euler-motors#hiload-ev",
              },
            ].map((product, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚚</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <Link href={product.link}>
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                      VIEW PRODUCTS
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/products/euler-motors">
                View All Euler Motors Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="px-4 py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrated solutions across mobility, power distribution, and energy technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company) => (
              <CompanyCard key={company.slug} {...company} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="px-4 py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your Message"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">VW</span>
                </div>
                <span className="font-bold text-lg">Volt Wheels</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Companies</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/companies/volt-wheels" className="text-sm text-muted-foreground hover:text-primary transition">
                    Volt Wheels
                  </Link>
                </li>
                <li>
                  <Link href="/companies/srs-enterprise" className="text-sm text-muted-foreground hover:text-primary transition">
                    SRS Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/companies/nrg-future" className="text-sm text-muted-foreground hover:text-primary transition">
                    NRG Future
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground mb-2">sales@voltwheels.com</p>
              <p className="text-sm text-muted-foreground">+91 XXXX-XXXX-XX</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Volt Wheels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
