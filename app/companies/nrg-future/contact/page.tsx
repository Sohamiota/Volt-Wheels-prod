import { Navigation } from "@/components/navigation"
import { LeadForm } from "@/components/lead-form"

export default function NRGFutureContactPage() {
  const projectTypes = [
    "Smart Grid Implementation",
    "Energy Storage",
    "IoT Platform",
    "Demand Response",
    "Analytics Solutions",
    "Security Assessment",
    "Other",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how NRG Future's smart grid technology can transform your energy operations.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">sales@nrgfuture.com</p>
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

          <div className="bg-card border border-border rounded-xl p-8">
            <LeadForm companyId={3} companyName="NRG Future" accentColor="#FF6B35" projectTypes={projectTypes} />
          </div>
        </div>
      </section>
    </main>
  )
}
