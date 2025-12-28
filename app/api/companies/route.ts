import sql from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const companies = await sql("SELECT * FROM companies ORDER BY name")
    return NextResponse.json(companies)
  } catch (error) {
    console.error("Error fetching companies:", error)
    return NextResponse.json({ error: "Failed to fetch companies" }, { status: 500 })
  }
}
