"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { LeadList } from "@/components/lead-list"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function LeadsPage() {
  const searchParams = useSearchParams()
  const status = searchParams.get("status") || undefined
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      // Placeholder for export functionality
      alert("Export functionality to be implemented")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Leads Management</h1>
          <p className="text-muted-foreground">Manage and track all incoming leads</p>
        </div>
        <Button onClick={handleExport} disabled={isExporting} variant="outline" size="lg">
          <Download size={18} className="mr-2" />
          {isExporting ? "Exporting..." : "Export"}
        </Button>
      </div>

      <Card className="p-8">
        <LeadList status={status} />
      </Card>
    </div>
  )
}
