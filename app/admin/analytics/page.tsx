"use client"

import { useState, useEffect } from "react"
import type { Lead } from "@/types"
import { Card } from "@/components/ui/card"

export default function AnalyticsPage() {
  const [leads, setLeads] = useState<Lead[]>([])

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/api/leads")
        if (!response.ok) throw new Error("Failed to fetch leads")
        const data = await response.json()
        setLeads(data)
      } catch (error) {
        console.error("Error fetching leads:", error)
      }
    }

    fetchLeads()
  }, [])

  const budgetDistribution = leads.reduce(
    (acc, lead) => {
      if (lead.budget_range) {
        acc[lead.budget_range] = (acc[lead.budget_range] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  const projectTypeDistribution = leads.reduce(
    (acc, lead) => {
      if (lead.project_type) {
        acc[lead.project_type] = (acc[lead.project_type] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  const timelineDistribution = leads.reduce(
    (acc, lead) => {
      if (lead.timeline) {
        acc[lead.timeline] = (acc[lead.timeline] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">Lead insights and trends</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Budget Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Budget Distribution</h3>
          <div className="space-y-3">
            {Object.entries(budgetDistribution).map(([budget, count]) => (
              <div key={budget} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{budget}</span>
                <span className="font-semibold text-foreground">{count}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Project Type Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Project Types</h3>
          <div className="space-y-3">
            {Object.entries(projectTypeDistribution).map(([type, count]) => (
              <div key={type} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground truncate">{type}</span>
                <span className="font-semibold text-foreground">{count}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Timeline Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Timeline Distribution</h3>
          <div className="space-y-3">
            {Object.entries(timelineDistribution).map(([timeline, count]) => (
              <div key={timeline} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{timeline}</span>
                <span className="font-semibold text-foreground">{count}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Summary Statistics */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Summary</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Leads</p>
            <p className="text-2xl font-bold text-foreground">{leads.length}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
            <p className="text-2xl font-bold text-foreground">
              {leads.length > 0
                ? ((leads.filter((l) => l.status === "qualified").length / leads.length) * 100).toFixed(1)
                : 0}
              %
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Avg Budget</p>
            <p className="text-2xl font-bold text-foreground">Mid Range</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Response Rate</p>
            <p className="text-2xl font-bold text-foreground">
              {leads.length > 0
                ? ((leads.filter((l) => l.status !== "new").length / leads.length) * 100).toFixed(1)
                : 0}
              %
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
