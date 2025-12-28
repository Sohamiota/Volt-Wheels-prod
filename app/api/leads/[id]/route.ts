import sql from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const lead = await sql("SELECT * FROM leads WHERE id = $1", [Number.parseInt(params.id)])
    if (lead.length === 0) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }
    return NextResponse.json(lead[0])
  } catch (error) {
    console.error("Error fetching lead:", error)
    return NextResponse.json({ error: "Failed to fetch lead" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { status, assigned_to, notes } = body

    const updates: string[] = []
    const values: (string | number)[] = []
    let paramCount = 1

    if (status !== undefined) {
      updates.push(`status = $${paramCount}`)
      values.push(status)
      paramCount++
    }

    if (assigned_to !== undefined) {
      updates.push(`assigned_to = $${paramCount}`)
      values.push(assigned_to)
      paramCount++
    }

    if (notes !== undefined) {
      updates.push(`notes = $${paramCount}`)
      values.push(notes)
      paramCount++
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 })
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`)
    values.push(Number.parseInt(params.id))

    const result = await sql(`UPDATE leads SET ${updates.join(", ")} WHERE id = $${paramCount} RETURNING *`, values)

    if (result.length === 0) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error updating lead:", error)
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 })
  }
}
