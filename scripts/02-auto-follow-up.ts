// Scheduled automation for lead follow-ups
import sql from "../lib/db"
import { sendWhatsAppMessage } from "../lib/whatsapp"

const FOLLOW_UP_TEMPLATES = {
  first_followup: (name: string) =>
    `Hi ${name}, thank you for your interest in our solutions! We'd love to discuss how we can help your business. Would you be available for a quick call?`,
  second_followup: (name: string, company: string) =>
    `Hi ${name}, this is a follow-up regarding your ${company} inquiry. Let's schedule a time that works for you.`,
  qualified_message: (name: string) =>
    `Great news, ${name}! Based on your requirements, we have some perfect solutions for you. Check your email for details!`,
}

export async function runAutoFollowUps() {
  try {
    // Get new leads from the last 24 hours without contact
    const newLeads = await sql(
      `SELECT * FROM leads 
       WHERE status = 'new' 
       AND created_at >= NOW() - INTERVAL '24 hours'
       LIMIT 10`,
    )

    for (const lead of newLeads) {
      // Send initial WhatsApp message
      const message = FOLLOW_UP_TEMPLATES.first_followup(lead.first_name)
      const result = await sendWhatsAppMessage(lead.phone, message)

      if (result.success) {
        // Update lead status to contacted
        await sql("UPDATE leads SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2", ["contacted", lead.id])

        console.log(`Auto follow-up sent to ${lead.first_name} ${lead.last_name}`)
      }
    }

    // Get qualified leads and send conversion message
    const qualifiedLeads = await sql(
      `SELECT * FROM leads 
       WHERE status = 'qualified' 
       AND updated_at < NOW() - INTERVAL '2 days'
       LIMIT 5`,
    )

    for (const lead of qualifiedLeads) {
      const message = FOLLOW_UP_TEMPLATES.qualified_message(lead.first_name)
      await sendWhatsAppMessage(lead.phone, message)
      console.log(`Qualified message sent to ${lead.first_name}`)
    }

    console.log("Auto follow-up automation completed")
  } catch (error) {
    console.error("Error in auto follow-up automation:", error)
  }
}

// Run this script via cron job or scheduler
if (require.main === module) {
  runAutoFollowUps()
}
