interface LeadStatsProps {
  total: number
  new: number
  contacted: number
  qualified: number
}

export function LeadStats({ total, new: newLeads, contacted, qualified }: LeadStatsProps) {
  const stats = [
    { label: "Total Leads", value: total, color: "bg-blue-100 text-blue-800" },
    { label: "New", value: newLeads, color: "bg-green-100 text-green-800" },
    { label: "Contacted", value: contacted, color: "bg-yellow-100 text-yellow-800" },
    { label: "Qualified", value: qualified, color: "bg-purple-100 text-purple-800" },
  ]

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
          <p className={`text-3xl font-bold ${stat.color.split(" ")[1]} ${stat.color.split(" ")[0]}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
