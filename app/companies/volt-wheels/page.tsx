import { CompanyPageTemplate } from "@/components/company-page-template"

export default function VoltWheelsPage() {
  return (
    <CompanyPageTemplate
      name="Volt Wheels"
      slug="volt-wheels"
      tagline="Leading the electric revolution with intelligent EV charging infrastructure and mobility solutions"
      color="#0066FF"
      description="Volt Wheels is transforming transportation by providing comprehensive EV charging infrastructure, fleet management solutions, and sustainable mobility services. We partner with businesses, municipalities, and enterprises to accelerate the transition to electric vehicles."
      services={[
        {
          title: "EV Charging Infrastructure",
          description: "Fast-charging stations with integrated smart grid connectivity and real-time monitoring.",
          icon: "⚡",
        },
        {
          title: "Fleet Management",
          description: "Complete fleet electrification solutions with battery monitoring and route optimization.",
          icon: "🚗",
        },
        {
          title: "Charging Network",
          description: "Public and private charging networks with app-based access and payment integration.",
          icon: "🔌",
        },
        {
          title: "Energy Management",
          description: "Smart energy distribution and load balancing for optimal charging efficiency.",
          icon: "⚙️",
        },
        {
          title: "Consultation",
          description: "Strategic planning for EV adoption and infrastructure deployment.",
          icon: "📊",
        },
        {
          title: "Maintenance & Support",
          description: "24/7 technical support and preventive maintenance for all charging equipment.",
          icon: "🔧",
        },
      ]}
      stats={[
        { number: "500+", label: "Charging Stations" },
        { number: "50K+", label: "Active Users" },
        { number: "10M+", label: "Km Charged" },
        { number: "99.9%", label: "Uptime" },
      ]}
      expertise={[
        "AC and DC fast charging technology",
        "Battery management systems",
        "Grid integration and load balancing",
        "Mobile app and payment platforms",
        "IoT sensor networks",
        "Fleet electrification strategy",
        "Government and municipal partnerships",
        "Renewable energy integration",
      ]}
      ctaText="Request Demo"
    />
  )
}
