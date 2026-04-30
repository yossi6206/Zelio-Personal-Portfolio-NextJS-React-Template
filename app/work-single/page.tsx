import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function WorkSingle() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            פרטי עבודה
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">Travila - עיצוב UI/UX לאפליקציית הזמנת נסיעות</h3>
                                        <p className="text-300 fs-5 mb-0">הפרויקט כלל יצירת ממשק משתמש אינטואיטיבי ויפה מבחינה ויזואלית, המבטיח שמשתמשים יכולים להזמין בקלות טיסות, מלונות והשכרות רכב בתוך אפליקציה אחת.</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">לקוח</p>
                                        <h6>Fushio Company</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">התחלה</p>
                                        <h6>01 May 2026</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">השלמה</p>
                                        <h6>01 June 2026</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">שירותים</p>
                                        <h6>UI/UX Design</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">אתר</p>
                                        <h6>fushion.wr</h6>
                                    </div>
                                </div>
                                <img src="/assets/imgs/work/img-background.png" alt="" />
                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">תיאור</h5>
                                    <p className="text-300">Travila is a comprehensive travel booking app designed to provide users with a seamless and enjoyable booking experience. הפרויקט כלל יצירת ממשק משתמש אינטואיטיבי ויפה מבחינה ויזואלית, המבטיח שמשתמשים יכולים להזמין בקלות טיסות, מלונות והשכרות רכב בתוך אפליקציה אחת. The primary goal was to enhance the overall user experience, making travel planning easy and enjoyable.</p>
                                    <h5 className="fs-5 fw-medium mt-4">תכונות מרכזיות</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                ממשק ממוקד משתמש: <span className="text-300 fw-medium">עיצוב ממשק נקי ואינטואיטיבי המאפשר למשתמשים לנווט באפליקציה בקלות, מבטיח תהליך הזמנה חלק ומהנה.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                חיפוש והזמנה משולבים: <span className="text-300 fw-medium">פיתוח פונקציית חיפוש משולבת המאפשרת למשתמשים למצוא ולהזמין טיסות, מלונות והשכרות רכב במהירות וביעילות.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                המלצות מותאמות אישית: <span className="text-300 fw-medium">יישום מערכת המלצות המציעה יעדים, מקומות לינה ופעילויות על בסיס העדפות המשתמש והתנהגויות עבר.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                שער תשלום מאובטח:{" "}
                                                <span className="text-300 fw-medium">
                                                    שילוב שער תשלום מאובטח להבטחת כל העסקאות <span className="text-dark fw-bold">בטוחות ונתוני המשתמש מוגנים.</span>
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                מפות אינטראקטיביות: <span className="text-300 fw-medium">הוספת מפות אינטראקטיביות לעזור למשתמשים לחקור יעדים, למצוא אטרקציות קרובות ולקבל הוראות הגעה.</span>
                                            </p>
                                        </li>
                                    </ul>
                                    <h5 className="fs-5 fw-medium mt-4">טכנולוגיות בשימוש</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                צד לקוח: <span className="text-300 fw-medium">React Native לפיתוח מובייל חוצה-פלטפורמות, המבטיח חוויה עקבית הן במכשירי iOS והן ב-Android.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                צד שרת: <span className="text-300 fw-medium">Node.js ו-Express לטיפול בלוגיקת צד שרת ואינטראקציות מסד נתונים.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Database: <span className="text-300 fw-medium">MongoDB for flexible data storage and retrieval.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                APIs: <span className="text-300 fw-medium">Integrated third-party APIs for flight, hotel, and car rental bookings to provide a wide range of options to users.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Payment Integration: <span className="text-300 fw-medium">Stripe API for secure and reliable payment processing.</span>
                                            </p>
                                        </li>
                                    </ul>
                                    <h5 className="fs-5 fw-medium mt-4">Design Highlights</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Visual Appeal: <span className="text-300 fw-medium">Focused on a visually appealing design with high-quality images and a modern color palette to enhance user engagement.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Usability: <span className="text-300 fw-medium">Ensured the app is user-friendly with clear icons, concise labels, and a straightforward navigation structure.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">
                                                Responsive Design: <span className="text-300 fw-medium">Made the app responsive to different screen sizes and orientations, providing a consistent user experience across various devices.</span>
                                            </p>
                                        </li>
                                    </ul>
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
                                                        <input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="John Doe" aria-label="username" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="email">
                                                            כתובת אימייל <span className="text-primary-1">*</span>
                                                        </label>
                                                        <input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact.john@gmail.com" aria-label="email" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="phone">
                                                            טלפון <span className="text-primary-1">*</span>
                                                        </label>
                                                        <input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="subject">
                                                            נושא <span className="text-primary-1">*</span>
                                                        </label>
                                                        <input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="mb-1 mt-3 text-dark" htmlFor="message">
                                                            הודעה <span className="text-primary-1">*</span>
                                                        </label>
                                                        <textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea" />
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
