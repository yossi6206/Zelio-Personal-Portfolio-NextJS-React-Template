import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
					<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
						<button><i className="ri-close-line" /></button>
					</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">צור קשר</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">תמיד שמח לקחת על עצמי פרויקטים חדשים ולשתף פעולה עם אנשים יצירתיים.</p>
						<div className="mb-3">
							<span className="text-400 fs-5">מספר טלפון</span>
							<p className="mb-0">+1-234-567-8901</p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">מייל</span>
							<p className="mb-0">info@allintech.co.il</p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">סקייפ</span>
							<p className="mb-0">Allintech</p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">כתובת</span>
							<p className="mb-0">0811 Erdman Prairie Road, Joaville, California 90210</p>
						</div>
					</div>
					<div className="contact-list">
						<p className="text-400 fs-5 mb-2">רשתות חברתיות</p>
							<div className="d-md-flex d-none gap-3">
								<Link href="/http://facebook.com">
									<i className="ri-facebook-circle-fill fs-18" />
								</Link>
								<Link href="/http://twitter.com">
									<i className="ri-twitter-x-fill fs-18" />
								</Link>
								<Link href="/http://linkedin.com">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="/http://github.com">
									<i className="ri-github-fill fs-18" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}
