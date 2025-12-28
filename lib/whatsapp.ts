// WhatsApp Business API wrapper using Exotel
const WHATSAPP_API_URL = "https://api.exotel.com/v2"
const EXOTEL_SID = process.env.EXOTEL_SID
const EXOTEL_TOKEN = process.env.EXOTEL_TOKEN
const WHATSAPP_FROM = process.env.WHATSAPP_BUSINESS_PHONE || ""

if (!EXOTEL_SID || !EXOTEL_TOKEN) {
  console.warn("WhatsApp credentials not configured")
}

export async function sendWhatsAppMessage(toPhone: string, message: string) {
  try {
    const response = await fetch(`${WHATSAPP_API_URL}/accounts/${EXOTEL_SID}/whatsapp/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${EXOTEL_SID}:${EXOTEL_TOKEN}`).toString("base64")}`,
      },
      body: JSON.stringify({
        from: WHATSAPP_FROM,
        to: toPhone,
        type: "text",
        text: {
          body: message,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.statusText}`)
    }

    const data = await response.json()
    return { success: true, messageId: data.messages?.[0]?.id }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return { success: false, error: String(error) }
  }
}

export async function sendWhatsAppTemplate(toPhone: string, templateName: string, parameters?: string[]) {
  try {
    const response = await fetch(`${WHATSAPP_API_URL}/accounts/${EXOTEL_SID}/whatsapp/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${EXOTEL_SID}:${EXOTEL_TOKEN}`).toString("base64")}`,
      },
      body: JSON.stringify({
        from: WHATSAPP_FROM,
        to: toPhone,
        type: "template",
        template: {
          name: templateName,
          language: {
            code: "en",
          },
          parameters: parameters
            ? {
                body: {
                  parameters: parameters.map((param) => ({ text: param })),
                },
              }
            : undefined,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.statusText}`)
    }

    const data = await response.json()
    return { success: true, messageId: data.messages?.[0]?.id }
  } catch (error) {
    console.error("Error sending WhatsApp template:", error)
    return { success: false, error: String(error) }
  }
}
