"use client"

import { useEffect, useState } from "react"
import { LeadStats } from "@/components/lead-stats"
import { LeadList } from "@/components/lead-list"
import { Card } from "@/components/ui/card"
import type { Lead } from "@/types"

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/api/leads")
        if (!response.ok) throw new Error("Failed to fetch leads")
        const data = await response.json()
        setLeads(data)
      } catch (error) {
        console.error("Error fetching leads:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLeads()
  }, [])

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
  }

  const recentLeads = leads.slice(0, 5)

  if (isLoading) {
    return <div className="text-center py-12">Loading dashboard...</div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your lead overview.</p>
      </div>

      <LeadStats {...stats} />

      <Card className="p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Leads</h2>
        {recentLeads.length > 0 ? <LeadList /> : <p className="text-muted-foreground">No leads yet.</p>}
      </Card>
    </div>
  )
}
