import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function תמחור() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-pricing-1 pt-130 pb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-8">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            התמחור שלי
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            פתרונות <span className="text-300">סבירים לכל</span> תקציב
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            תוכניות גמישות המותאמות לצרכייך הייחודיים, המבטיחות שירותים באיכות גבוהה <br />
                                            ללא עלויות מופרזות
                                        </p>
                                    </div>
                                    <div className="row mt-8 d-flex">
                                        <div className="col-md-6">
                                            <div className="card-pricing-1 p-6 rounded-4 h-100 d-flex flex-column">
                                                <span className="text-uppercase fs-7">בסיסי</span> <br />
                                                <h3 className="ds-3 fw-medium text-primary-1 mb-5">
                                                    $49<span className="text-300 fs-4">/שעה</span>
                                                </h3>
                                                <ul className="ps-3 border-top border-600 pt-5 mb-auto">
                                                    <li>
                                                        <p className="text-300">נדרש אבן הדרך שלך</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">עיצוב באמצעות Figma, Framer</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">פיתוח עם Webflow, React, WordPress, Laravel/PHP</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">שיתוף פעולה מרחוק/אונליין</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">זמין בימי עסקים, ללא סופי שבוע</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">6 חודשי תמיכה</p>
                                                    </li>
                                                </ul>
                                                <Link href="#" className="btn btn-primary mt-5 w-100 justify-content-center">
                                                    הזמן עכשיו
                                                    <i className="ri-arrow-right-up-line" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-pricing-1 p-6 rounded-4 align-self-stretch mt-md-0 mt-6">
                                                <span className="text-uppercase fs-7">עסקי</span> <br />
                                                <h3 className="ds-3 fw-medium text-primary-1 mb-5">
                                                    $99<span className="text-300 fs-4">/שעה</span>
                                                </h3>
                                                <ul className="ps-3 border-top border-600 pt-5">
                                                    <li>
                                                        <p className="text-300">אין צורך באבן דרך</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">עיצוב באמצעות Figma, Framer</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">פיתוח עם Webflow, React, WordPress, Laravel/PHP</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">שיתוף פעולה מרחוק/אונליין</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">זמין בימי עסקים, ללא סופי שבוע</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">12 חודשי תמיכה</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">הפרויקט שלך תמיד בעדיפות</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-300">מתנות שירות לקוחות כלולות</p>
                                                    </li>
                                                </ul>
                                                <Link href="#" className="btn btn-primary mt-5 w-100 justify-content-center">
                                                    הזמן עכשיו
                                                    <i className="ri-arrow-right-up-line" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-8">
                                <div className="col-lg-6  mx-md-auto text-center">
                                    <h2 className="text-300 mb-8">שאלות נפוצות</h2>
                                    <div className="accordion">
                                        <div className="mb-3 card border-2 rounded-4">
                                            <div className="card-header p-0 border-0">
                                                <Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseSevent">
                                                    <p className="fs-5 mb-0 text-dark">מה המוקד העיקרי של תיק העבודות שלך?</p>
                                                    <span className="ms-auto arrow me-2 icon-shape">
                                                        <i className="ri-add-line" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div id="collapseSevent" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-4 pt-0 text-start card-body">ייתכן שתחסוך גם עלויות מבחירות יעילות אנרגטית בביתך המותאם אישית. זיכויי מס פדרליים לחלק מהחומרים הירוקים מאפשרים לך לנכות עד כמה שניתן.</p>
                                            </div>
                                        </div>
                                        <div className="mb-3 card border-2 rounded-4">
                                            <div className="card-header p-0 border-0">
                                                <Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEight">
                                                    <p className="fs-5 mb-0 text-dark">האם תכלול בלוג או תוכן כתוב אחר?</p>
                                                    <span className="ms-auto arrow me-2 icon-shape">
                                                        <i className="ri-add-line" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div id="collapseEight" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-4 pt-0 text-start card-body">ייתכן שתחסוך גם עלויות מבחירות יעילות אנרגטית בביתך המותאם אישית. זיכויי מס פדרליים לחלק מהחומרים הירוקים מאפשרים לך לנכות עד כמה שניתן.</p>
                                            </div>
                                        </div>
                                        <div className="mb-3 card border-2 rounded-4">
                                            <div className="card-header p-0 border-0">
                                                <Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseNine">
                                                    <p className="fs-5 mb-0 text-dark">כמה עולים השירותים שלך?</p>
                                                    <span className="ms-auto arrow me-2 icon-shape">
                                                        <i className="ri-add-line" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div id="collapseNine" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-4 pt-0 text-start card-body">ייתכן שתחסוך גם עלויות מבחירות יעילות אנרגטית בביתך המותאם אישית. זיכויי מס פדרליים לחלק מהחומרים הירוקים מאפשרים לך לנכות עד כמה שניתן.</p>
                                            </div>
                                        </div>
                                        <div className="mb-3 card border-2 rounded-4">
                                            <div className="card-header p-0 border-0">
                                                <Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTen">
                                                    <p className="fs-5 mb-0 text-dark">כמה זמן לוקח לראות תוצאות?</p>
                                                    <span className="ms-auto arrow me-2 icon-shape">
                                                        <i className="ri-add-line" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div id="collapseTen" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-4 pt-0 text-start card-body">ייתכן שתחסוך גם עלויות מבחירות יעילות אנרגטית בביתך המותאם אישית. זיכויי מס פדרליים לחלק מהחומרים הירוקים מאפשרים לך לנכות עד כמה שניתן.</p>
                                            </div>
                                        </div>
                                        <div className="mb-3 card border-2 rounded-4">
                                            <div className="card-header p-0 border-0">
                                                <Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEleven">
                                                    <p className="fs-5 mb-0 text-dark">האם אתה מציע תמיכה מתמשכת?</p>
                                                    <span className="ms-auto arrow me-2 icon-shape">
                                                        <i className="ri-add-line" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div id="collapseEleven" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-4 pt-0 text-start card-body">ייתכן שתחסוך גם עלויות מבחירות יעילות אנרגטית בביתך המותאם אישית. זיכויי מס פדרליים לחלק מהחומרים הירוקים מאפשרים לך לנכות עד כמה שניתן.</p>
                                            </div>
                                        </div>
                                        <div className="mb-3 card border-2 rounded-4">
                                            <div className="card-header p-0 border-0">
                                                <Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTwelve">
                                                    <p className="fs-5 mb-0 text-dark">האם אתה עובד עם עסקים בתעשייה שלי?</p>
                                                    <span className="ms-auto arrow me-2 icon-shape">
                                                        <i className="ri-add-line" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div id="collapseTwelve" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-4 pt-0 text-start card-body">ייתכן שתחסוך גם עלויות מבחירות יעילות אנרגטית בביתך המותאם אישית. זיכויי מס פדרליים לחלק מהחומרים הירוקים מאפשרים לך לנכות עד כמה שניתן.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Static 1*/}
                    <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
                        <div className="container">
                            <div className="inner">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">
                                                    +<span className="odometer ds-1 text-dark fw-semibold">12</span>
                                                </span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">שנות</p>
                                                    <p className="fs-5 mb-0 fw-bold">ניסיון</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">
                                                    +<span className="odometer ds-1 text-dark fw-semibold">250</span>
                                                </span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">פרויקטים</p>
                                                    <p className="fs-5 mb-0 fw-bold">הושלמו</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">
                                                    +<span className="odometer ds-1 text-dark fw-semibold">680</span>
                                                </span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">לקוחות</p>
                                                    <p className="fs-5 mb-0 fw-bold">מרוצים</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">
                                                    +<span className="odometer ds-1 text-dark fw-semibold">18</span>
                                                </span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">פרסים</p>
                                                    <p className="fs-5 mb-0 fw-bold">זכייה</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact 1*/}
                    <section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
                        <div className="container position-relative z-1">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">צור קשר</h3>
                            <span className="fs-5 fw-medium text-200">
                                I'm always excited to take on new projects and collaborate with innovative minds. If you
                                <br />
                                have a project in mind or just want to chat about design, feel free to reach out!
                            </span>
                            <div className="row mt-8">
                                <div className="col-lg-4 d-flex flex-column">
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-phone-fill text-primary-1 fs-26" />
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">מספר טלפון</span>
                                            <h6 className="mb-0">+1-234-567-8901</h6>
                                        </div>
                                        <Link href="/tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100" />
                                    </div>
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-mail-fill text-primary-1 fs-26" />
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">אימייל</span>
                                            <h6 className="mb-0">contact@william.design</h6>
                                        </div>
                                        <Link href="/mailto:someone@example.com" className="position-absolute top-0 start-0 w-100 h-100" />
                                    </div>
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-skype-fill text-primary-1 fs-26" />
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">סקייפ</span>
                                            <h6 className="mb-0">WilliamDesignUX</h6>
                                        </div>
                                        <Link href="/skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100" />
                                    </div>
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-map-2-fill text-primary-1 fs-26" />
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">כתובת</span>
                                            <h6 className="mb-0">0811 Erdman Prairie, Joaville CA</h6>
                                        </div>
                                        <Link href="/https://maps.google.com/maps?q=1st+avenue,New+York" className="position-absolute top-0 start-0 w-100 h-100" />
                                    </div>
                                </div>
                                <div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
                                    <div className="position-relative">
                                        <div className="position-relative z-2">
                                            <h3>השאר הודעה</h3>
                                            <form action="#">
                                                <div className="row mt-3">
                                                    <div className="col-md-6 ">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="name">
                                                            שמך <span className="text-primary-1">*</span>
                                                        </label>
                                                        <input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="ישראל ישראלי" aria-label="username" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="email">
                                                            כתובת אימייל <span className="text-primary-1">*</span>
                                                        </label>
                                                        <input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact@example.com" aria-label="email" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="phone">
                                                            טלפון <span className="text-primary-1">*</span>
                                                        </label>
                                                        <input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+972 50 123 4567" aria-label="phone" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="subject">
                                                            נושא <span className="text-primary-1">*</span>
                                                        </label>
                                                        <input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="אני רוצה ליצור קשר בנוגע ל..." aria-label="subject" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="message">
                                                            הודעה <span className="text-primary-1">*</span>
                                                        </label>
                                                        <textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="ההודעה שלך כאן..." aria-label="With textarea" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-gradient mt-3">
                                                            שלח הודעה
                                                            <i className="ri-arrow-right-up-line" />
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
                                <h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">william.design</h3>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
