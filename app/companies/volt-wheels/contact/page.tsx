import { Navigation } from "@/components/navigation"
import { LeadForm } from "@/components/lead-form"

export default function VoltWheelsContactPage() {
  const projectTypes = [
    "Charging Station Setup",
    "Fleet Electrification",
    "Smart Grid Integration",
    "Consulting",
    "Maintenance",
    "Other",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in Volt Wheels solutions? Our team is ready to help you accelerate your EV journey.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">sales@voltwheels.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 XXXX-XXXX-XX</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <LeadForm companyId={1} companyName="Volt Wheels" accentColor="#0066FF" projectTypes={projectTypes} />
          </div>
        </div>
      </section>
    </main>
  )
}
