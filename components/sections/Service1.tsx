import Link from "next/link";

export default function Service1() {
    return (
        <>
            <section className="section-service-1 pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 me-auto">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">מה אני מציע?</h3>
                            <span className="fs-5 fw-medium text-200">
                                מסעי התחיל מקסם לעיצוב וטכנולוגיה,
                                <br />
                                שהוביל אותי להתמחות בעיצוב UI/UX
                            </span>
                        </div>
                        <div className="col-lg-auto">
                            <Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
                                קבל הצעת מחיר
                                <i className="ri-arrow-right-up-line" />
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-6 justify-content-between">
                        <div className="col-12">
                            <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-1.png">
                                <div className="service-card-details d-lg-flex align-items-center">
                                    <h3 className="service-card-title w-lg-50 w-100 mb-0">
                                        <Link href="/work-single">
                                            <span className="service-number">01.</span>
                                            עיצוב UI/UX
                                        </Link>
                                    </h3>
                                    <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                                        <p className="service-card-text my-3">
                                            עיצוב ממשקים מרהיבים וידידותיים למשתמש עבור אפליקציות <br />
                                            ווב ומובייל.
                                        </p>
                                        <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                            <i className="ri-arrow-right-up-line" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-2.png">
                                <div className="service-card-details d-lg-flex align-items-center">
                                    <h3 className="service-card-title w-lg-50 w-100 mb-0">
                                        <Link href="/work-single">
                                            <span className="service-number">02.</span>
                                            עיצוב אפליקציות מובייל
                                        </Link>
                                    </h3>
                                    <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                                        <p className="service-card-text my-3">
                                            עיצוב אפליקציות מובייל אינטואיטיביות ומושכות עבור <br />
                                            פלטפורמות iOS ו-Android.
                                        </p>
                                        <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                            <i className="ri-arrow-right-up-line" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-3.png">
                                <div className="service-card-details d-lg-flex align-items-center">
                                    <h3 className="service-card-title w-lg-50 w-100 mb-0">
                                        <Link href="/work-single">
                                            <span className="service-number">03.</span>
                                            עיצוב זהות מותג
                                        </Link>
                                    </h3>
                                    <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                                        <p className="service-card-text my-3">
                                            פיתוח מיתוג ויזואלי עקבי שמדבר <br />
                                            לקהל היעד שלך.
                                        </p>
                                        <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                            <i className="ri-arrow-right-up-line" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} data-img="assets/imgs/services/services-1/img-4.png">
                                <div className="service-card-details d-lg-flex align-items-center">
                                    <h3 className="service-card-title w-lg-50 w-100 mb-0">
                                        <Link href="/work-single">
                                            <span className="service-number">04.</span>
                                            פיתוח אתרים
                                        </Link>
                                    </h3>
                                    <Link href="#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                                        <p className="service-card-text my-3">
                                            בניית אתרים רספונסיביים ומרתקים שמתאימים <br />
                                            למותג ולמטרות העסקיות שלך.
                                        </p>
                                        <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                                            <i className="ri-arrow-right-up-line" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
