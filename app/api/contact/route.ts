import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
	try {
		const { name, email, phone, subject, message } = await req.json()

		if (!name || !email || !message) {
			return NextResponse.json({ error: "שדות חובה חסרים" }, { status: 400 })
		}

		const [{ error }, { error: autoReplyError }] = await Promise.all([
			resend.emails.send({
				from: "noreply@allintech.co.il",
				to: "info@allintech.co.il",
				subject: subject || `הודעה חדשה מ-${name}`,
				html: `
					<div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
						<h2 style="color: #6c47ff;">הודעה חדשה מהאתר</h2>
						<table style="width: 100%; border-collapse: collapse;">
							<tr>
								<td style="padding: 8px; font-weight: bold; width: 120px;">שם:</td>
								<td style="padding: 8px;">${name}</td>
							</tr>
							<tr style="background: #f5f5f5;">
								<td style="padding: 8px; font-weight: bold;">מייל:</td>
								<td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
							</tr>
							<tr>
								<td style="padding: 8px; font-weight: bold;">טלפון:</td>
								<td style="padding: 8px;">${phone || "לא צוין"}</td>
							</tr>
							<tr style="background: #f5f5f5;">
								<td style="padding: 8px; font-weight: bold;">נושא:</td>
								<td style="padding: 8px;">${subject || "לא צוין"}</td>
							</tr>
							<tr>
								<td style="padding: 8px; font-weight: bold; vertical-align: top;">הודעה:</td>
								<td style="padding: 8px; white-space: pre-line;">${message}</td>
							</tr>
						</table>
					</div>
				`,
			}),
			resend.emails.send({
				from: "noreply@allintech.co.il",
				to: email,
				subject: "קיבלנו את פנייתך — תודה!",
				html: `
					<div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9fb; border-radius: 12px;">
						<h2 style="color: #6c47ff; margin-bottom: 8px;">שלום ${name},</h2>
						<p style="font-size: 16px; color: #333; line-height: 1.7;">
							קיבלנו את פנייתך, תודה שפנית אלינו.<br/>
							נחזור אליך בהקדם האפשרי.
						</p>
						<hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;" />
						<p style="font-size: 13px; color: #888;">
							הודעה זו נשלחה אוטומטית, אין צורך להשיב עליה.
						</p>
					</div>
				`,
			}),
		])

		if (error || autoReplyError) {
			const errMsg = (error || autoReplyError)?.message
			console.error("Resend error:", error || autoReplyError)
			return NextResponse.json({ error: errMsg }, { status: 500 })
		}

		console.log("Emails sent successfully")
		return NextResponse.json({ success: true })
	} catch (error) {
		console.error("Contact form error:", error)
		return NextResponse.json({ error: String(error) }, { status: 500 })
	}
}
