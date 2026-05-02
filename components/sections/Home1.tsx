
import Link from "next/link"

export default function Home1() {
	return (
		<>
		<section className="section-hero-1 position-relative" style={{height: "100vh"}}>

			{/* רקע */}
			<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert z-1" data-background="assets/imgs/hero/hero-1/background.png" />

			<div className="container position-relative z-3" style={{height: "100%"}}>
				<div className="row" style={{height: "100%"}}>

					{/* עמודת האיש — ימין */}
					<div className="col-lg-6 d-none d-lg-block position-relative order-lg-1" style={{height: "100%"}}>
					<div className="position-absolute" style={{top: "55%", right: "2%", transform: "translateY(-50%)", zIndex: 0}}>
						<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" style={{width: "460px"}} />
					</div>
						<img
							className="filter-gray position-absolute bottom-0 start-50 translate-middle-x"
							src="/assets/imgs/hero/hero-1/man.webp"
							alt="man"
							style={{height: "85%", objectFit: "contain", objectPosition: "bottom", zIndex: 1}}
						/>
					</div>

					{/* עמודת הטקסט — שמאל */}
					<div className="col-lg-6 col-12 order-lg-2 d-flex flex-column justify-content-center" style={{zIndex: 2, paddingTop: "80px"}}>
						<span className="text-dark">👋 שלום, אני יוסי כהן</span>
						<h1 className="ds-2 mb-3">יוצר <span className="text-primary-1">חוויות דיגיטליות</span> אינטואיטיביות</h1>
						<p className="text-300 mb-6">אני מסייע לאנשים ומותגים להשיג את מטרותיהם על ידי יצירה ופיתוח של מוצרים דיגיטליים ממוקדי משתמש וחוויות אינטראקטיביות.</p>
						<div className="d-flex flex-wrap gap-2 mb-6">
							<Link href="/assets/resume.pdf" className="btn btn-gradient" target="_blank">
								הורד קורות חיים
								<i className="ri-download-line ms-2" />
							</Link>
							<Link href="/#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
								<span>שכור אותי</span>
								<i className="ri-arrow-right-line ms-2" />
							</Link>
						</div>
						<p className="text-400 mb-3">+ 12 שנות ניסיון בתוכנות עיצוב מקצועיות</p>
						<div className="d-flex gap-3 flex-wrap">
							<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
								<img src="/assets/imgs/hero/hero-1/brand-1.png" alt="brand" />
							</div>
							<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
								<img src="/assets/imgs/hero/hero-1/brand-2.png" alt="brand" />
							</div>
							<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
								<img src="/assets/imgs/hero/hero-1/brand-3.png" alt="brand" />
							</div>
							<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
								<img src="/assets/imgs/hero/hero-1/brand-4.png" alt="brand" />
							</div>
							<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
								<img src="/assets/imgs/hero/hero-1/brand-5.png" alt="brand" />
							</div>
							<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
								<img src="/assets/imgs/hero/hero-1/brand-6.png" alt="brand" />
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
		</>
	)
}
