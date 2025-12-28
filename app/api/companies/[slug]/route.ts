import sql from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  try {
    const company = await sql("SELECT * FROM companies WHERE slug = $1", [params.slug])
    if (company.length === 0) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 })
    }
    return NextResponse.json(company[0])
  } catch (error) {
    console.error("Error fetching company:", error)
    return NextResponse.json({ error: "Failed to fetch company" }, { status: 500 })
  }
}
