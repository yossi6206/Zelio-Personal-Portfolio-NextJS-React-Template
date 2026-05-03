"use client"

import Link from "next/link"
import { useState, FormEvent } from "react"

export default function Contact1() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	})
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
	const [errorMsg, setErrorMsg] = useState("")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setStatus("loading")
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			})
			if (res.ok) {
				setStatus("success")
				setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
			} else {
				const data = await res.json()
				setErrorMsg(data.error || "שגיאה לא ידועה")
				setStatus("error")
			}
		} catch {
			setStatus("error")
		}
	}

	return (
		<>
			<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
				<div className="container position-relative z-1">
					<h3 className="ds-3 mt-3 mb-3 text-primary-1">צור קשר</h3>
					<span className="fs-5 fw-medium text-200">
						תמיד שמח לקחת על עצמי פרויקטים חדשים ולשתף פעולה עם אנשים יצירתיים. אם יש לך
						<br />
						פרויקט ברעיון או שאתה פשוט רוצה לשוחח על עיצוב, אל תהסס ליצור קשר!
					</span>
					<div className="row mt-8">
						<div className="col-lg-4 d-flex flex-column">
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-phone-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">מספר טלפון</span>
									<h6 className="mb-0">054-541-6206</h6>
								</div>
								<Link href="tel:0545416206" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-mail-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">מייל</span>
									<h6 className="mb-0">info@allintech.co.il</h6>
								</div>
								<Link href="mailto:info@allintech.co.il" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-map-2-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">כתובת</span>
									<h6 className="mb-0">רש"י 51, ירושלים</h6>
								</div>
								<Link href="https://maps.google.com/maps?q=רש״י+51+ירושלים" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
						<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3>השאר הודעה</h3>
									<form onSubmit={handleSubmit}>
										<div className="row mt-3">
											<div className="col-md-6 ">
												<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary-1">*</span></label>
												<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="ישראל ישראלי" aria-label="username" value={formData.name} onChange={handleChange} required />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="email">מייל address <span className="text-primary-1">*</span></label>
												<input type="email" className="form-control border rounded-3" id="email" name="email" placeholder="contact@example.com" aria-label="email" value={formData.email} onChange={handleChange} required />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary-1">*</span></label>
												<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="054-541-6206" aria-label="phone" value={formData.phone} onChange={handleChange} />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary-1">*</span></label>
												<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="אני רוצה ליצור קשר בנושא..." aria-label="subject" value={formData.subject} onChange={handleChange} />
											</div>
											<div className="col-12">
												<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary-1">*</span></label>
												<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="הודעתך כאן..." aria-label="With textarea" value={formData.message} onChange={handleChange} required />
											</div>
											<div className="col-12">
												{status === "success" && (
													<div className="alert alert-success mt-3" role="alert">
														ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
													</div>
												)}
												{status === "error" && (
													<div className="alert alert-danger mt-3" role="alert">
														שגיאה: {errorMsg}
													</div>
												)}
												<button type="submit" className="btn btn-gradient mt-3" disabled={status === "loading"}>
													{status === "loading" ? "שולח..." : "שלח הודעה"}
													{status !== "loading" && <i className="ri-arrow-right-up-line" />}
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
					<div className="wow img-custom-anim-top">
						<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">allintech</h3>
					</div>
				</div>
			</section>
		</>
	)
}
