import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="section-footer position-relative pt-60 pb-60 bg-secondary-1">
                    <div className="container position-relative z-1">
                        <div className="text-center">
                            <Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
                                <img src="/assets/imgs/footer-1/logo.svg" alt="infinia" />
                                <span className="fs-4 ms-2 text-white-keep">william.design</span>
                            </Link>
                            <div className="navigation d-none d-md-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
                                <Link href="/" className="fs-5 text-white-keep">
                                    בית
                                </Link>
                                <Link href="/services" className="fs-5 text-white-keep">
                                    שירותים
                                </Link>
                                <Link href="/work" className="fs-5 text-white-keep">
                                    תיק עבודות
                                </Link>
                                <Link href="/pricing" className="fs-5 text-white-keep">
                                    מחירים
                                </Link>
                                <Link href="/blog-list" className="fs-5 text-white-keep">
                                    בלוג
                                </Link>
                                <Link href="/#contact" className="fs-5 text-white-keep">
                                    צור קשר
                                </Link>
                            </div>
                        </div>
                        <div className="row text-center py-4">
                            <span className="fs-6 text-white-keep">
                                © {new Date().getFullYear()} כל הזכויות שמורות ל{" "}
                                <span>
                                    <Link href="#" className="text-primary-1">
                                        William.design
                                    </Link>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 z-0" data-background="assets/imgs/footer-1/background.png " />
                </div>
            </footer>
        </>
    );
}
