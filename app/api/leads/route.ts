import sql from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      company_id,
      first_name,
      last_name,
      email,
      phone,
      company_name,
      message,
      project_type,
      budget_range,
      timeline,
    } = body

    // Validate required fields
    if (!company_id || !first_name || !last_name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO leads (company_id, first_name, last_name, email, phone, company_name, message, project_type, budget_range, timeline)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [company_id, first_name, last_name, email, phone, company_name, message, project_type, budget_range, timeline],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const company_id = searchParams.get("company_id")
    const status = searchParams.get("status")

    let query = "SELECT * FROM leads WHERE 1=1"
    const params: (string | number)[] = []

    if (company_id) {
      params.push(Number.parseInt(company_id))
      query += ` AND company_id = $${params.length}`
    }

    if (status) {
      params.push(status)
      query += ` AND status = $${params.length}`
    }

    query += " ORDER BY created_at DESC"

    const leads = await sql(query, params)
    return NextResponse.json(leads)
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
  }
}
