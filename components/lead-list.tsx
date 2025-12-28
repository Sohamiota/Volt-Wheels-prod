"use client"

import { useEffect, useState } from "react"
import type { Lead } from "@/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

interface LeadListProps {
  companyId?: number
  status?: string
}

export function LeadList({ companyId, status }: LeadListProps) {
  const [leads, setLeads] = useState<Lead[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const params = new URLSearchParams()
        if (companyId) params.append("company_id", String(companyId))
        if (status) params.append("status", status)

        const response = await fetch(`/api/leads?${params}`)
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
  }, [companyId, status])

  if (isLoading) {
    return <div className="text-center py-8">Loading leads...</div>
  }

  if (leads.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No leads found</div>
  }

  const statusColors: Record<string, string> = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-yellow-100 text-yellow-800",
    qualified: "bg-green-100 text-green-800",
    proposal: "bg-purple-100 text-purple-800",
    closed: "bg-gray-100 text-gray-800",
  }

  return (
    <div className="space-y-4">
      {leads.map((lead) => (
        <div key={lead.id} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-foreground">
                {lead.first_name} {lead.last_name}
              </h3>
              <p className="text-sm text-muted-foreground">{lead.company_name}</p>
            </div>
            <Badge className={statusColors[lead.status] || statusColors["new"]}>{lead.status}</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-muted-foreground">Email:</span>
              <p className="text-foreground">{lead.email}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Phone:</span>
              <p className="text-foreground">{lead.phone}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm mb-4 pb-4 border-b border-border">
            {lead.project_type && (
              <div>
                <span className="text-muted-foreground">Project Type:</span>
                <p className="text-foreground">{lead.project_type}</p>
              </div>
            )}
            {lead.budget_range && (
              <div>
                <span className="text-muted-foreground">Budget:</span>
                <p className="text-foreground">{lead.budget_range}</p>
              </div>
            )}
            {lead.timeline && (
              <div>
                <span className="text-muted-foreground">Timeline:</span>
                <p className="text-foreground">{lead.timeline}</p>
              </div>
            )}
          </div>

          {lead.message && (
            <div className="mb-4 text-sm bg-secondary/50 rounded p-3">
              <p className="text-foreground">{lead.message}</p>
            </div>
          )}

          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Created {formatDistanceToNow(new Date(lead.created_at), { addSuffix: true })}</span>
            <Button variant="ghost" size="sm">
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
