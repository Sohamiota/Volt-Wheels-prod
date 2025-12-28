import sql from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Handle Exotel call status callbacks
    if (body.CallSid && body.CallStatus) {
      // Parse call metadata to get lead ID
      const leadId = body.CustomField // Should be set when initiating call
      const duration = body.RecordingDuration || 0

      if (leadId) {
        await sql(
          "INSERT INTO call_logs (lead_id, phone_number, call_type, duration_seconds) VALUES ($1, $2, $3, $4)",
          [leadId, body.From, "inbound", duration],
        )

        // Auto-update status based on call completion
        if (body.CallStatus === "completed") {
          await sql("UPDATE leads SET status = $1 WHERE id = $2", ["contacted", leadId])
        }
      }
    }

    // Handle WhatsApp message status callbacks
    if (body.messages) {
      for (const message of body.messages) {
        if (message.status === "delivered" || message.status === "read") {
          console.log(`WhatsApp message ${message.id} status: ${message.status}`)
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing Exotel webhook:", error)
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 })
  }
}
