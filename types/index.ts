export interface Company {
  id: number
  slug: string
  name: string
  description: string
  logo_url: string
  color_primary: string
  color_secondary: string
  website: string
  phone: string
  email: string
  address: string
  created_at: string
}

export interface Lead {
  id: number
  company_id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  company_name: string
  message: string
  project_type: string
  budget_range: string
  timeline: string
  status: string
  assigned_to: string
  notes: string
  created_at: string
  updated_at: string
}

export interface CallLog {
  id: number
  lead_id: number
  phone_number: string
  call_type: string
  duration_seconds: number
  notes: string
  created_at: string
}
