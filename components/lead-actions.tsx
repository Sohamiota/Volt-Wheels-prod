"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { MessageCircle, Phone } from "lucide-react"
import type { Lead } from "@/types"

interface LeadActionsProps {
  lead: Lead
}

export function LeadActions({ lead }: LeadActionsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleCall = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/leads/${lead.id}/call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callerId: "02071234567" }),
      })

      if (!response.ok) throw new Error("Failed to initiate call")

      toast({
        title: "Success",
        description: "Call initiated successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to initiate call",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleWhatsApp = async () => {
    setIsLoading(true)
    try {
      const message = `Hi ${lead.first_name}, thanks for your interest in our solutions. We'll be in touch soon!`
      const response = await fetch(`/api/leads/${lead.id}/whatsapp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) throw new Error("Failed to send message")

      toast({
        title: "Success",
        description: "WhatsApp message sent successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Button size="sm" variant="outline" onClick={handleCall} disabled={isLoading} title="Call this lead using Exotel">
        <Phone size={16} className="mr-1" />
        Call
      </Button>
      <Button size="sm" variant="outline" onClick={handleWhatsApp} disabled={isLoading} title="Send WhatsApp message">
        <MessageCircle size={16} className="mr-1" />
        WhatsApp
      </Button>
    </div>
  )
}
