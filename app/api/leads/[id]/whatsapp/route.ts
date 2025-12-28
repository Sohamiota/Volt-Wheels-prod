import sql from "@/lib/db"
import { sendWhatsAppMessage } from "@/lib/whatsapp"
import { NextResponse } from "next/server"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const { message } = await request.json()

    // Get lead details
    const lead = await sql("SELECT * FROM leads WHERE id = $1", [Number.parseInt(params.id)])
    if (lead.length === 0) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    // Send WhatsApp message
    const result = await sendWhatsAppMessage(lead[0].phone, message)

    if (!result.success) {
      return NextResponse.json({ error: "Failed to send message", details: result.error }, { status: 500 })
    }

    // Update lead status to contacted
    await sql("UPDATE leads SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2", [
      "contacted",
      Number.parseInt(params.id),
    ])

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
    })
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
