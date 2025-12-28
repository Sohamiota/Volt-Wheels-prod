import { CompanyPageTemplate } from "@/components/company-page-template"

export default function SRSEnterprisePage() {
  return (
    <CompanyPageTemplate
      name="SRS Enterprise"
      slug="srs-enterprise"
      tagline="Powering sustainable business through advanced power distribution and renewable energy systems"
      color="#1DB954"
      description="SRS Enterprise specializes in designing, implementing, and managing power distribution systems and renewable energy solutions for commercial and industrial clients. With expertise in grid modernization, we help businesses reduce costs while increasing sustainability."
      services={[
        {
          title: "Power Distribution Systems",
          description: "Advanced electrical infrastructure for commercial and industrial facilities.",
          icon: "🔋",
        },
        {
          title: "Solar Solutions",
          description: "Rooftop and ground-mounted solar installations with battery storage.",
          icon: "☀️",
        },
        {
          title: "Microgrid Design",
          description: "Integrated microgrids for resilient and efficient energy management.",
          icon: "🌐",
        },
        {
          title: "Energy Audits",
          description: "Comprehensive energy assessments and optimization recommendations.",
          icon: "📈",
        },
        {
          title: "Maintenance Programs",
          description: "Preventive and corrective maintenance for power systems.",
          icon: "🔧",
        },
        {
          title: "Training & Support",
          description: "Staff training and 24/7 technical support for energy systems.",
          icon: "👥",
        },
      ]}
      stats={[
        { number: "200+", label: "Projects Completed" },
        { number: "150MW+", label: "Capacity Deployed" },
        { number: "45%", label: "Avg Energy Savings" },
        { number: "30+", label: "Years Expertise" },
      ]}
      expertise={[
        "High-voltage transmission systems",
        "Medium and low-voltage distribution",
        "Solar photovoltaic systems",
        "Wind energy integration",
        "Battery storage systems",
        "Microgrid architecture",
        "Power quality management",
        "Grid modernization standards",
        "Energy efficiency optimization",
        "Regulatory compliance",
      ]}
      ctaText="Schedule Consultation"
    />
  )
}
