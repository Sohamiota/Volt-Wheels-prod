"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Loader2 } from "lucide-react"

interface LeadFormProps {
  companyId: number
  companyName: string
  accentColor: string
  projectTypes: string[]
}

export function LeadForm({ companyId, companyName, accentColor, projectTypes }: LeadFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
    project_type: "",
    budget_range: "",
    timeline: "",
  })

  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, company_id: companyId }),
      })

      if (!response.ok) throw new Error("Failed to submit form")

      toast({
        title: "Success!",
        description: "Your inquiry has been received. We'll be in touch shortly.",
      })

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company_name: "",
        message: "",
        project_type: "",
        budget_range: "",
        timeline: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
          <Input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="John"
            required
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
          <Input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765-43210"
            required
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
        <Input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Your Company"
          className="w-full"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
          <select
            name="project_type"
            value={formData.project_type}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-border bg-card text-foreground"
          >
            <option value="">Select a type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
          <select
            name="budget_range"
            value={formData.budget_range}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-border bg-card text-foreground"
          >
            <option value="">Select range</option>
            <option value="under-5lakh">Under ₹5 Lakh</option>
            <option value="5-20lakh">₹5-20 Lakh</option>
            <option value="20-50lakh">₹20-50 Lakh</option>
            <option value="50-1cr">₹50 Lakh-1 Cr</option>
            <option value="above-1cr">Above ₹1 Cr</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Timeline</label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-border bg-card text-foreground"
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediate (1-3 months)</option>
          <option value="near-term">Near Term (3-6 months)</option>
          <option value="mid-term">Mid Term (6-12 months)</option>
          <option value="planning">Just Planning</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Message / Additional Details</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project needs..."
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
        style={{ backgroundColor: accentColor, color: "white" }}
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Inquiry
            <ArrowRight size={16} className="ml-2" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We'll contact you within 24 hours to discuss your requirements.
      </p>
    </form>
  )
}
