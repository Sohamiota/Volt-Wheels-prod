import { EulerProductCard } from "@/components/euler-product-card"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function EulerMotorsProductsPage() {
  const products = [
    {
      name: "Euler Turbo EV",
      slug: "turbo-ev",
      description: "High-performance electric commercial vehicle designed for urban logistics and last-mile delivery with exceptional payload capacity.",
      image: "https://www.eulermotors.com/images/products/turbo-ev.jpg",
      features: [
        "Advanced battery technology for extended range",
        "Fast charging capability",
        "Spacious cargo area",
        "Smart connectivity features",
        "Low maintenance cost",
        "Eco-friendly zero emissions",
      ],
      specifications: {
        payload: "Up to 1,000 kg",
        range: "120-150 km per charge",
        battery: "Lithium-ion",
        charging: "Fast charging: 0-80% in 1.5 hours",
      },
    },
    {
      name: "Euler Storm T1500",
      slug: "storm-t1500",
      description: "Heavy-duty electric vehicle built for demanding commercial applications with superior load-carrying capacity and reliability.",
      image: "https://www.eulermotors.com/images/products/storm-t1500.jpg",
      features: [
        "Heavy-duty construction",
        "Extended battery life",
        "Robust chassis design",
        "Advanced safety features",
        "GPS tracking system",
        "Telematics integration",
      ],
      specifications: {
        payload: "Up to 1,500 kg",
        range: "100-130 km per charge",
        battery: "High-capacity Lithium-ion",
        charging: "Standard charging: 6-8 hours",
      },
    },
    {
      name: "Euler HiLoad EV",
      slug: "hiload-ev",
      description: "Premium electric commercial vehicle optimized for maximum efficiency and payload capacity, ideal for logistics and transportation.",
      image: "https://www.eulermotors.com/images/products/hiload-ev.jpg",
      features: [
        "Maximum payload capacity",
        "Optimized energy consumption",
        "Premium build quality",
        "Advanced driver assistance",
        "Real-time monitoring",
        "Comprehensive warranty",
      ],
      specifications: {
        payload: "Up to 1,200 kg",
        range: "140-170 km per charge",
        battery: "Premium Lithium-ion",
        charging: "Fast charging: 0-80% in 1 hour",
      },
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Official Distributor</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Euler Motors Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              As official distributors of Euler Motors, we offer a complete range of electric commercial vehicles
              designed for modern logistics and transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <EulerProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Euler Motors?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of commercial transportation with Euler Motors electric vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Emissions",
                description: "Environmentally friendly vehicles that help reduce carbon footprint and comply with emission regulations.",
              },
              {
                title: "Cost Effective",
                description: "Lower operating costs compared to traditional fuel vehicles with minimal maintenance requirements.",
              },
              {
                title: "Advanced Technology",
                description: "State-of-the-art battery technology and smart connectivity features for modern fleet management.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition">
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Interested in Euler Motors Vehicles?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us for pricing, test drives, and more information about our complete range of Euler Motors products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#contact">Book Test Drive</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
