import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Services() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-service-list pt-120 pb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            השירותים שלי
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            הפיכת רעיונות
                                            <span className="text-300">לעיצובים אינטואיטיביים עבור</span>
                                            חוויות משתמש
                                            <span className="text-300">מרתקות</span>
                                        </h3>
                                        <p className="text-300 fs-5">
                                            עם מומחיות בעיצוב אפליקציות מובייל וווב, אני הופך רעיונות לממשקים ויזואליים <br />
                                            מרהיבים וידידותיים למשתמש שמרתקים ושומרים על משתמשים. <br />
                                            חקרו את העבודות שלי וראו עיצוב בפעולה.
                                        </p>
                                    </div>
                                    <div className="card-scroll mt-8">
                                        <div className="cards">
                                            <div className="card-custom" data-index={0}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#" className="card_title_link">
                                                            <h3 className="fw-semibold mb-2">עיצוב UI/UX</h3>
                                                            <p className="mb-0">יצירתי. ייחודי. מציאות.</p>
                                                        </Link>
                                                        <Link href="#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/img-1.png" alt="" />
                                                        <Link href="#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">מחקר משתמשים</p>
                                                            <p className="card__description text-300 fs-6 mb-0">עריכת מחקר משתמשים יסודי באמצעות סקרים, ראיונות ומחקרי שימושיות להבנת קהלי היעד וצרכיהם, המבטיח שהעיצובים ממוקדי משתמש ויעילים.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">אבנות ותצוגה מקדימה</p>
                                                            <p className="card__description text-300 fs-6 mb-0">תכנון אבנות מפורטות ופרוטוטייפים אינטראקטיביים לדמיון ובדיקת זרימות ואינטראקציות משתמש, המאפשרים משוב מוקדם ושיפורים איטרטיביים.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">בדיקות משתמשים</p>
                                                            <p className="card__description text-300 fs-6 mb-0">יישום סשנים מקיפים של בדיקות משתמשים לאיסוף משוב, זיהוי נקודות כאב וביצוע שיפורי עיצוב מבוססי נתונים, המבטיחים חוויית משתמש חלקה.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-custom" data-index={0}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#" className="card_title_link">
                                                            <h3 className="fw-semibold mb-2">עיצוב אפליקציות מובייל</h3>
                                                            <p className="mb-0">יצירתי. ייחודי. מציאות.</p>
                                                        </Link>
                                                        <Link href="#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/img-2.png" alt="" />
                                                        <Link href="#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">עיצוב חוצה פלטפורמות</p>
                                                            <p className="card__description text-300 fs-6 mb-0">יצירת עיצובים הפועלים בצורה חלקה הן בפלטפורמות iOS והן ב-Android, המבטיחים חוויית משתמש עקבית ואיכותית ללא קשר למכשיר.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">פרוטוטייפים אינטראקטיביים</p>
                                                            <p className="card__description text-300 fs-6 mb-0">פיתוח פרוטוטייפים אינטראקטיביים להדגמת פונקציונליות האפליקציה המאפשרים לבעלי עניין לחוות את האפליקציה לפני תחילת הפיתוח.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">מיתוג עקבי</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Ensuring the app design is consistent with your brand’s identity and aesthetics, maintaining brand recognition and trust across all touchpoints.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-custom" data-index={0}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#" className="card_title_link">
                                                            <h3 className="fw-semibold mb-2">עיצוב זהות מותגית</h3>
                                                            <p className="mb-0">יצירתי. ייחודי. מציאות.</p>
                                                        </Link>
                                                        <Link href="#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/img-3.png" alt="" />
                                                        <Link href="#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">עיצוב לוגו</p>
                                                            <p className="card__description text-300 fs-6 mb-0">Creating memorable and impactful logos that represent your brand’s essence and values, helping you stand out in a crowded marketplace.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">קווים מנחים למותג</p>
                                                            <p className="card__description text-300 fs-6 mb-0">פיתוח קווים מנחים מקיפים למותג הכוללים טיפוגרפיה, סגנונות ויזואליים וצבעוניים לשמירת עקביות בכל הפלטפורמות והמדיות.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">נכסים ויזואליים:</p>
                                                            <p className="card__description text-300 fs-6 mb-0">תכנון מגוון נכסים ויזואליים, כולל כרטיסי ביקור וראשי מכתבים, להבטחה שכל תקשורת המותג היא מקצועית ומגובשת.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-custom" data-index={0}>
                                                <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
                                                    <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                        <Link href="#" className="card_title_link">
                                                            <h3 className="fw-semibold mb-2">פיתוח ווב</h3>
                                                            <p className="mb-0">יצירתי. ייחודי. מציאות.</p>
                                                        </Link>
                                                        <Link href="#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img className="card__image" src="/assets/imgs/services-list/img-4.png" alt="" />
                                                        <Link href="#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                    </div>
                                                    <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">פיתוח צד לקוח</p>
                                                            <p className="card__description text-300 fs-6 mb-0">שימוש בטכנולוגיות מודרניות כמו HTML, CSS ו-JavaScript ליצירת דפי ווב רספונסיביים ואינטראקטיביים המספקים חוויית משתמש מרתקת.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">פיתוח צד שרת</p>
                                                            <p className="card__description text-300 fs-6 mb-0">יישום לוגיקת צד שרת וניהול מסד נתונים עם טכנולוגיות כמו Node.js, Python או Ruby on Rails להבטחת ביצועים חלקים ושלמות נתונים.</p>
                                                        </div>
                                                        <div className="d-md-flex content">
                                                            <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">מערכות ניהול תוכן</p>
                                                            <p className="card__description text-300 fs-6 mb-0">שילוב פלטפורמות CMS ידידותיות למשתמש כמו WordPress, Drupal, או פתרונות מותאמים אישית לעדכוני תוכן קלים, המאפשרים למשתמשים לא טכניים לנהל תוכן אתר ביעילות.</p>
                                                        </div>
                                                    </div>
                                                </div>
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
