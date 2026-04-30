import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function BlogDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-details pt-130 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-8">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            {" "}
                                            מגמות עיצוב{" "}
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">כיצד ליצור חוויית מובייל חלקה</h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A great mobile experience can significantly enhance user satisfaction, increase <br />
                                            engagement, and boost your app's success. Here’s a comprehensive guide to help you <br />
                                            create a seamless mobile experience for your users.
                                        </p>
                                    </div>
                                </div>
                                <img src="/assets/imgs/blog/blog-1/img-background.png" alt="" />
                                <div className="col-lg-10 mx-lg-auto mt-8">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h5>תעדף עיצוב ממוקד משתמש</h5>
                                            <h5 className="fs-5 fw-medium">הכר את המשתמשים שלך</h5>
                                            <p className="text-300">Conduct thorough user research to understand your target audience’s needs, preferences, and pain points. Use surveys, interviews, and usability testing to gather valuable insights.</p>
                                            <h5 className="fs-5 fw-medium">פשט את הניווט</h5>
                                            <p className="text-300">Design a clean and intuitive navigation structure. Ensure users can easily find what they’re looking for without feeling overwhelmed. Use familiar icons and clear labels to guide them.</p>
                                            <h5 className="mt-6">אופטימיזציה של ביצועים</h5>
                                            <h5 className="fs-5 fw-medium">זמני טעינה מהירים</h5>
                                            <p className="text-300">אופטימיזציה של האפליקציה לטעינה מהירה. משתמשים מצפים לסיפוק מיידי, וזמני טעינה איטיים עלולים להוביל לתסכול ונטישת האפליקציה. השתמש בנוהלי קידוד יעילים ומזעור שימוש בגרפיקה כבדה.</p>
                                            <h5 className="fs-5 fw-medium">אנימציות חלקות</h5>
                                            <p className="text-300">Ensure animations and transitions are smooth and do not hinder the app’s performance. Well-executed animations can enhance the user experience by providing visual feedback and making interactions feel natural.</p>
                                            <h5 className="fs-5 fw-medium">גישה אופליין</h5>
                                            <p className="text-300">ספק יכולות אופליין לתכונות חיוניות. אפשרות למשתמשים לגשת לפונקציונליות מסוימות ללא חיבור לאינטרנט יכולה לשפר מאוד את חוויתם, במיוחד באזורים עם קישוריות גרועה.</p>
                                            <div className="d-flex align-items-center my-6">
                                                <img src="/assets/imgs/blog/blog-1/img-10.png" alt="" />
                                                <div className="d-md-flex flex-column d-none gap-3 ms-3">
                                                    <img src="/assets/imgs/blog/blog-1/img-11.png" alt="" />
                                                    <img src="/assets/imgs/blog/blog-1/img-12.png" alt="" />
                                                </div>
                                            </div>
                                            <h5>הבטחת אבטחה חזקה</h5>
                                            <h5 className="fs-5 fw-medium">הגנת נתונים</h5>
                                            <p className="text-300">יישם אמצעי אבטחה חזקים להגנת נתוני המשתמש. השתמש בהצפנה, שיטות אימות מאובטחות וביקורות אבטחה קבועות להגנת מידע רגיש.</p>
                                            <h5 className="fs-5 fw-medium">מדיניות שקופה</h5>
                                            <p className="text-300">היה שקוף לגבי מדיניות איסוף הנתונים והשימוש שלך. ספק למשתמשים מידע ברור על אופן השימוש בנתוניהם ותן להם שליטה על הגדרות הפרטיות שלהם.</p>
                                            <h5 className="fs-5 fw-medium">עדכונים קבועים</h5>
                                            <p className="text-300">עדכן את האפליקציה שלך עם תיקוני האבטחה והשיפורים האחרונים. עדכונים קבועים לא רק משפרים את האבטחה אלא גם מראים למשתמשים שאתה מתחזק ומשפר את האפליקציה באופן פעיל.</p>
                                            <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-6">
                                                <h4>סיכום</h4>
                                                <p className="text-300 mt-4">יצירת חוויית מובייל חלקה דורשת גישה ממוקדת משתמש, אופטימיזציית ביצועים, עיצוב רספונסיבי, אסטרטגיות מעורבות משתמשים ואמצעי אבטחה חזקים. על ידי התמקדות בתחומי מפתח אלה, תוכל לבנות אפליקציית מובייל שלא רק עונה על ציפיות המשתמש אלא גם בולטת בשוק האפליקציות התחרותי. זכור, חוויית מובייל מצוינת יכולה להפוך משתמשים לתומכים נאמנים, מניעת ההצלחה של האפליקציה שלך.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-8">
                                            <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-lg-0 mt-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="ri-time-line fs-6" />
                                                    <span className="ms-2 fs-6">16 דקות קריאה</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="ri-calendar-schedule-line fs-6" />
                                                    <span className="ms-2 fs-6">Nov 21, 2026</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="ri-user-line fs-6" />
                                                    <span className="ms-2 fs-6">
                                                        By{" "}
                                                        <Link className="fw-bold" href="#">
                                                            Alonso
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-4">
                                                <span className="text-uppercase fs-7">שתף</span> <br />
                                                <div className="d-flex gap-3 pt-3">
                                                    <Link href="#" className="text-decoration-none">
                                                        <i className="ri-facebook-circle-fill fs-18" />
                                                    </Link>
                                                    <Link href="#" className="text-decoration-none">
                                                        <i className="ri-twitter-x-fill fs-18" />
                                                    </Link>
                                                    <Link href="#" className="text-decoration-none">
                                                        <i className="ri-instagram-fill fs-5" />
                                                    </Link>
                                                    <Link href="#" className="text-decoration-none">
                                                        <i className="ri-pinterest-fill fs-5" />
                                                    </Link>
                                                    <Link href="#" className="text-decoration-none">
                                                        <i className="ri-google-fill fs-5" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* blog list */}
                    <section className="section-blog-list">
                        <div className="container border-top pt-80 pb-80">
                            <div className="row">
                                <div className="d-md-flex align-items-center">
                                    <h1 className="text-300">פוסטים קשורים</h1>
                                    <Link href="#" className="btn btn-gradient ms-auto">
                                        צפה עוד
                                        <i className="ri-arrow-right-line" />
                                    </Link>
                                </div>
                            </div>
                            <div className="row mt-8">
                                <div className="col-lg-4">
                                    <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
                                        <div className="blog-card__image position-relative">
                                            <div className="zoom-img rounded-3 overflow-hidden">
                                                <img className="w-100" src="/assets/imgs/blog/blog-1/img-1.png" alt="" />
                                                <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">
                                                    עיצוב אפליקציה
                                                </Link>
                                                <Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
                                                    <i className="ri-arrow-right-up-line text-dark" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-card__content position-relative text-center mt-4">
                                            <span className="blog-card__date fs-7">March 28, 2026 • 3 דקות קריאה</span>
                                            <h5 className="blog-card__title">5 UI/UX Trends to Watch in 2026</h5>
                                            <p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
                                            <Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
                                        <div className="blog-card__image position-relative">
                                            <div className="zoom-img rounded-3 overflow-hidden">
                                                <img className="w-100" src="/assets/imgs/blog/blog-1/img-2.png" alt="" />
                                                <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">
                                                    עיצוב אפליקציה
                                                </Link>
                                                <Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
                                                    <i className="ri-arrow-right-up-line text-dark" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-card__content position-relative text-center mt-4">
                                            <span className="blog-card__date fs-7">March 28, 2026 • 3 דקות קריאה</span>
                                            <h5 className="blog-card__title">The Importance of User Research</h5>
                                            <p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
                                            <Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
                                        <div className="blog-card__image position-relative">
                                            <div className="zoom-img rounded-3 overflow-hidden">
                                                <img className="w-100" src="/assets/imgs/blog/blog-1/img-3.png" alt="" />
                                                <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">
                                                    עיצוב אפליקציה
                                                </Link>
                                                <Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
                                                    <i className="ri-arrow-right-up-line text-dark" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-card__content position-relative text-center mt-4">
                                            <span className="blog-card__date fs-7">March 28, 2026 • 3 דקות קריאה</span>
                                            <h5 className="blog-card__title">The Role of Color Psychology</h5>
                                            <p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
                                            <Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
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
