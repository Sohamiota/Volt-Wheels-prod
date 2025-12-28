// Exotel API wrapper for call and SMS automation
const EXOTEL_API_URL = "https://api.exotel.com/v2"
const EXOTEL_SID = process.env.EXOTEL_SID
const EXOTEL_TOKEN = process.env.EXOTEL_TOKEN
const EXOTEL_FROM = process.env.EXOTEL_FROM || "02071234567"

if (!EXOTEL_SID || !EXOTEL_TOKEN) {
  console.warn("Exotel credentials not configured")
}

export async function initiateCall(toPhone: string, callerId: string = EXOTEL_FROM) {
  try {
    const response = await fetch(`${EXOTEL_API_URL}/accounts/${EXOTEL_SID}/calls/connect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${EXOTEL_SID}:${EXOTEL_TOKEN}`).toString("base64")}`,
      },
      body: new URLSearchParams({
        From: callerId,
        To: toPhone,
      }).toString(),
    })

    if (!response.ok) {
      throw new Error(`Exotel API error: ${response.statusText}`)
    }

    const data = await response.json()
    return { success: true, callSid: data.Call?.Sid }
  } catch (error) {
    console.error("Error initiating call:", error)
    return { success: false, error: String(error) }
  }
}

export async function sendSMS(toPhone: string, message: string) {
  try {
    const response = await fetch(`${EXOTEL_API_URL}/accounts/${EXOTEL_SID}/sms/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${EXOTEL_SID}:${EXOTEL_TOKEN}`).toString("base64")}`,
      },
      body: new URLSearchParams({
        From: EXOTEL_FROM,
        To: toPhone,
        Body: message,
      }).toString(),
    })

    if (!response.ok) {
      throw new Error(`Exotel API error: ${response.statusText}`)
    }

    const data = await response.json()
    return { success: true, smsSid: data.SMSMessage?.Sid }
  } catch (error) {
    console.error("Error sending SMS:", error)
    return { success: false, error: String(error) }
  }
}
