import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Clock, MapPin, Shield, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function LeasingPage() {
  const leaseOptions = [
    { hours: "1 hr", km: "10 km" },
    { hours: "2 hr", km: "20 km" },
    { hours: "3 hr", km: "30 km" },
    { hours: "4 hr", km: "40 km" },
    { hours: "5 hr", km: "50 km" },
    { hours: "6 hr", km: "60 km" },
    { hours: "7 hr", km: "70 km" },
    { hours: "8 hr", km: "80 km" },
    { hours: "9 hr", km: "90 km" },
    { hours: "10 hr", km: "100 km" },
    { hours: "11 hr", km: "110 km" },
    { hours: "12 hr", km: "120 km" },
    { hours: "24 hr", km: "200 km" },
  ]

  const leaseTypes = [
    { name: "Local", description: "City-wide daily leasing" },
    { name: "One Way", description: "Point-to-point leasing" },
    { name: "Round Trip", description: "Return journey leasing" },
    { name: "Monthly Rental", description: "Long-term monthly plans" },
  ]

  const vehicleCategories = [
    {
      title: "Euler Motors Vehicles",
      description: "Electric commercial vehicles for business and logistics",
      vehicles: [
        { name: "Euler Turbo EV", capacity: "Up to 1,000 kg", range: "120-150 km" },
        { name: "Euler Storm T1500", capacity: "Up to 1,500 kg", range: "100-130 km" },
        { name: "Euler HiLoad EV", capacity: "Up to 1,200 kg", range: "140-170 km" },
      ],
    },
    {
      title: "EV Passenger Vehicles",
      description: "Electric vehicles for passenger transport",
      vehicles: [
        { name: "EV Sedan", capacity: "4-5 passengers", range: "200-300 km" },
        { name: "EV SUV", capacity: "6-7 passengers", range: "250-350 km" },
        { name: "EV Hatchback", capacity: "4 passengers", range: "180-250 km" },
      ],
    },
    {
      title: "Commercial EV Fleet",
      description: "Fleet leasing solutions for businesses",
      vehicles: [
        { name: "EV Fleet Package", capacity: "10+ vehicles", range: "Custom plans" },
        { name: "Corporate Leasing", capacity: "Business fleets", range: "Flexible terms" },
        { name: "Long-term Rental", capacity: "6-24 months", range: "Best rates" },
      ],
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Cost-Effective Leasing",
      description: "Save up to 40% compared to purchasing. No upfront investment, flexible payment plans.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Maintenance Included",
      description: "All maintenance, servicing, and repairs covered in your lease agreement.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Zero Emissions",
      description: "Go green with 100% electric vehicles. Reduce your carbon footprint and operational costs.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Terms",
      description: "Choose from daily, weekly, monthly, or yearly leasing options that fit your needs.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Drivers",
      description: "Optional professional driver service included. Trained, verified, and insured.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and roadside assistance for peace of mind.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Booking Interface */}
      <section className="relative px-4 py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Vehicle Leasing Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your all-in-one partner for EV vehicle leasing, transport & mobility solutions. Flexible terms, transparent pricing, zero emissions.
            </p>
          </div>

          {/* Booking Interface */}
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {leaseTypes.map((type, idx) => (
                <button
                  key={idx}
                  className="px-4 py-3 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-sm font-medium"
                >
                  {type.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
              {leaseOptions.slice(0, 7).map((option, idx) => (
                <button
                  key={idx}
                  className="px-3 py-2 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-xs"
                >
                  <div className="font-semibold">{option.hours}</div>
                  <div className="text-muted-foreground">{option.km}</div>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {leaseOptions.slice(7).map((option, idx) => (
                <button
                  key={idx}
                  className="px-3 py-2 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-xs"
                >
                  <div className="font-semibold">{option.hours}</div>
                  <div className="text-muted-foreground">{option.km}</div>
                </button>
              ))}
            </div>

            <Button size="lg" className="w-full">
              Check Rate And Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leasing, Transport & Rentals — All in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your all-in-one solution for EV vehicles, commercial transport, and mobility—delivered with care and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EV Vehicle Leasing",
                description: "Affordable, eco-friendly electric vehicle leasing for personal and business use—always at your fingertips.",
                icon: "🚗",
              },
              {
                title: "Commercial Fleet Leasing",
                description: "Complete fleet solutions for businesses. Scale your operations with our flexible leasing plans.",
                icon: "🚚",
              },
              {
                title: "Long-term Rentals",
                description: "Monthly and yearly leasing plans for individuals and businesses—dependable and cost-effective.",
                icon: "📅",
              },
              {
                title: "Euler Motors Leasing",
                description: "Lease Euler Motors commercial vehicles for logistics, delivery, and transportation needs.",
                icon: "⚡",
              },
              {
                title: "Corporate Leasing",
                description: "Dedicated EV fleet solutions for corporate clients with driver services and maintenance included.",
                icon: "🏢",
              },
              {
                title: "Flexible Lease Terms",
                description: "Customizable leasing options from daily rentals to multi-year contracts tailored to your needs.",
                icon: "🔄",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Vehicle Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide pocket-friendly EV leasing options, giving you the best value every time you choose one!
            </p>
          </div>

          <div className="space-y-12">
            {vehicleCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.vehicles.map((vehicle, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition"
                    >
                      <h4 className="text-lg font-bold text-foreground mb-3">{vehicle.name}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{vehicle.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{vehicle.range}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Volt Wheels Leasing */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Volt Wheels for Leasing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From everyday rides to commercial fleets, Volt Wheels offers complete EV leasing solutions with fair pricing and no hidden charges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition">
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lease Plans */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flexible Leasing Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect leasing plan that fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Short-term Lease",
                duration: "1-30 days",
                features: ["Daily, weekly, or monthly", "No long-term commitment", "Perfect for events", "Flexible cancellation"],
                price: "Starting from ₹2,000/day",
              },
              {
                name: "Medium-term Lease",
                duration: "1-6 months",
                features: ["Monthly payments", "Maintenance included", "Driver service available", "Best for businesses"],
                price: "Starting from ₹45,000/month",
              },
              {
                name: "Long-term Lease",
                duration: "6-24 months",
                features: ["Lowest monthly rates", "Full maintenance coverage", "Priority support", "Fleet discounts"],
                price: "Starting from ₹35,000/month",
              },
            ].map((plan, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.duration}</p>
                  <div className="mt-4 text-2xl font-bold text-primary">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="lg">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Leasing?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us for custom leasing quotes, vehicle availability, and flexible payment plans tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

