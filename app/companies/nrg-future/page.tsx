import { CompanyPageTemplate } from "@/components/company-page-template"

export default function NRGFuturePage() {
  return (
    <CompanyPageTemplate
      name="NRG Future"
      slug="nrg-future"
      tagline="Pioneering smart grid technology and energy solutions for intelligent infrastructure"
      color="#FF6B35"
      description="NRG Future develops and deploys cutting-edge smart grid technology, energy storage solutions, and IoT platforms that enable intelligent, sustainable energy management. We help utilities and enterprises optimize energy distribution and consumption in real-time."
      services={[
        {
          title: "Smart Grid Technology",
          description: "Advanced grid management systems with AI-driven optimization and forecasting.",
          icon: "🧠",
        },
        {
          title: "Energy Storage",
          description: "Battery systems and thermal storage for peak load management.",
          icon: "🔋",
        },
        {
          title: "IoT Platforms",
          description: "Connected sensor networks for real-time energy monitoring and control.",
          icon: "📡",
        },
        {
          title: "Demand Response",
          description: "Dynamic pricing and load management for utilities and businesses.",
          icon: "⚖️",
        },
        {
          title: "Analytics & Insights",
          description: "Data-driven insights for energy optimization and cost reduction.",
          icon: "📊",
        },
        {
          title: "Cybersecurity",
          description: "Advanced security for critical energy infrastructure and systems.",
          icon: "🔒",
        },
      ]}
      stats={[
        { number: "5M+", label: "Connected Devices" },
        { number: "100+", label: "Utilities Served" },
        { number: "2B+", label: "Data Points Daily" },
        { number: "98%", label: "Prediction Accuracy" },
      ]}
      expertise={[
        "Smart grid architecture and design",
        "SCADA systems and control networks",
        "Advanced metering infrastructure (AMI)",
        "Artificial intelligence and machine learning",
        "Real-time data processing",
        "Energy forecasting models",
        "Demand response management",
        "Cybersecurity and grid resilience",
        "Cloud and edge computing",
        "Utility industry standards and regulations",
      ]}
      ctaText="Explore Technology"
    />
  )
}
