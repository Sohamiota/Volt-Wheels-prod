import sql from "@/lib/db"
import { initiateCall } from "@/lib/exotel"
import { NextResponse } from "next/server"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const { callerId } = await request.json()

    // Get lead details
    const lead = await sql("SELECT * FROM leads WHERE id = $1", [Number.parseInt(params.id)])
    if (lead.length === 0) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    // Initiate call via Exotel
    const callResult = await initiateCall(lead[0].phone, callerId)

    if (!callResult.success) {
      return NextResponse.json({ error: "Failed to initiate call", details: callResult.error }, { status: 500 })
    }

    // Log the call
    const callLog = await sql(
      "INSERT INTO call_logs (lead_id, phone_number, call_type) VALUES ($1, $2, $3) RETURNING *",
      [Number.parseInt(params.id), lead[0].phone, "outbound"],
    )

    return NextResponse.json({
      success: true,
      callSid: callResult.callSid,
      callLog: callLog[0],
    })
  } catch (error) {
    console.error("Error initiating call:", error)
    return NextResponse.json({ error: "Failed to initiate call" }, { status: 500 })
  }
}
