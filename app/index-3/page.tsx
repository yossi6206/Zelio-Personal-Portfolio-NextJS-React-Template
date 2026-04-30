"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
};

const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    // spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

export default function Home3() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <section className="section-home-3 bg-1000 pb-130 pt-96 section-work">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-1">
                                <div className="position-relative d-inline-block">
                                    <img className="rounded-5" src="assets/imgs/home-page-3/hero/img-1.png" alt="zelio" />
                                    <img className="position-absolute top-100 start-50 translate-middle pt-8 z-0" src="assets/imgs/home-page-3/hero/signature.png" alt="zelio" />
                                </div>
                                <div className="d-flex flex-column gap-2 mt-9 position-relative z-1">
                                    <Link href="tel:+12345678901">
                                        <i className="ri-phone-fill text-primary-3 fs-7" />
                                        <span className="text-300 fs-6 ms-2">+1-234-567-8901</span>
                                    </Link>
                                    <Link href="mailto:meisa.rosie@gmail.com">
                                        <i className="ri-mail-fill text-primary-3 fs-7" />
                                        <span className="text-300 fs-6 ms-2">meisa.rosie@gmail.com</span>
                                    </Link>
                                    <Link href="#">
                                        <i className="ri-skype-fill text-primary-3 fs-7" />
                                        <span className="text-300 fs-6 ms-2">meisa.rosie</span>
                                    </Link>
                                    <Link href="https://www.google.com/maps/place/1st+Ave.,+New+York,+NY,+Hoa+K%E1%BB%B3/@40.7630169,-73.9594939,17z/data=!4m6!3m5!1s0x89c258c29e084453:0x2bf768350d30b89e!8m2!3d40.7630169!4d-73.9594939!16zL20vMDV3Z2tm?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">
                                        <i className="ri-map-2-fill text-primary-3 fs-7" />
                                        <span className="text-300 fs-6 ms-2">0811 Erdman Prairie, Joaville CA</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 pt-lg-0 pt-8">
                                <div id="about" className="hero-3 pe-lg-5 border-bottom pb-7">
                                    <span className="text-primary-3">עיצוב נרטיבים, הצתת מוחות</span>
                                    <h2 className="text-300 my-3">
                                        Crafting Stories <span className="text-dark">with Passion: Discover the Work</span> of Meisa
                                    </h2>
                                    <p className="mb-8">ברוכים הבאים לעולם היצירתי של מייסה רוזי, שבו מילים מעוצבות לסיפורים מרתקים ותוכן תובנה. חקרו את המסע שלה כסופרת פרס-זוכה וגלו כיצד היא מביאה דמיון לחיים דרך קולה הייחודי ונרטיביה המשכנעים.</p>
                                    <Link href="assets/resume.pdf" className="btn btn-secondary-3 me-2" target="_blank">
                                        Download CV
                                        <i className="ri-download-line ms-2" />
                                    </Link>
                                    <Link href="#contact" className="btn btn-outline-secondary-3 d-inline-flex align-items-center">
                                        <span>שכור אותי</span>
                                        <i className="ri-arrow-right-line ms-2" />
                                    </Link>
                                </div>
                                <div className="typical pt-70">
                                    <h3>עבודות טיפוסיות</h3>
                                    <div className="container px-0 pt-4">
                                        <div className="row">
                                            <div className="card-scroll">
                                                <div className="cards">
                                                    <div className="card-custom pt-0" data-index={0}>
                                                        <div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3">
                                                            <div className="card__image-container rounded-0 zoom-img position-relative">
                                                                <img className="card__image" src="assets/imgs/home-page-3/typical/img-1.png" alt="zelio" />
                                                                <Link href="@@link" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                            </div>
                                                            <div className="card__content px-md-4 px-3 pt-lg-0 pb-lg-8 pb-5">
                                                                <div className="card__title mb-0 mb-lg-2">
                                                                    <p className="text-300 fs-5 mb-0">2018</p>
                                                                    <Link href="#">
                                                                        <p className="fs-3 text-dark">רומנים: הדים מהעבר</p>
                                                                    </Link>
                                                                </div>
                                                                <p className="text-300 mb-lg-auto mb-md-4 mb-3">Set in a dystopian future, "השתקפויות של מחר" is a thought-provoking novel that explores themes of identity, freedom, and resilience. Through its compelling storyline and well-drawn characters, the book invites readers to ponder the ethical dilemmas of technological advancement and societal change.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-custom pt-0" data-index={1}>
                                                        <div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3">
                                                            <div className="card__image-container rounded-0 zoom-img position-relative">
                                                                <img className="card__image" src="assets/imgs/home-page-3/typical/img-2.png" alt="zelio" />
                                                                <Link href="@@link" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                            </div>
                                                            <div className="card__content px-md-4 px-3 pt-lg-0 pb-lg-8 pb-5">
                                                                <div className="card__title mb-0 mb-lg-2">
                                                                    <p className="text-300 fs-5 mb-0">2020</p>
                                                                    <Link href="#">
                                                                        <p className="fs-3 text-dark">לחישות ברוח</p>
                                                                    </Link>
                                                                </div>
                                                                <p className="text-300 mb-lg-auto mb-md-4 mb-3">Set in a dystopian future, "השתקפויות של מחר" is a thought-provoking novel that explores themes of identity, freedom, and resilience. Through its compelling storyline and well-drawn characters, the book invites readers to ponder the ethical dilemmas of technological advancement and societal change.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-custom pt-0" data-index={2}>
                                                        <div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3">
                                                            <div className="card__image-container rounded-0 zoom-img position-relative">
                                                                <img className="card__image" src="assets/imgs/home-page-3/typical/img-3.png" alt="zelio" />
                                                                <Link href="@@link" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                            </div>
                                                            <div className="card__content px-md-4 px-3 pt-lg-0 pb-lg-8 pb-5">
                                                                <div className="card__title mb-0 mb-lg-2">
                                                                    <p className="text-300 fs-5 mb-0">2018</p>
                                                                    <Link href="#">
                                                                        <p className="fs-3 text-dark">השתקפויות של מחר</p>
                                                                    </Link>
                                                                </div>
                                                                <p className="text-300 mb-lg-auto mb-md-4 mb-3">Set in a dystopian future, "השתקפויות של מחר" is a thought-provoking novel that explores themes of identity, freedom, and resilience. Through its compelling storyline and well-drawn characters, the book invites readers to ponder the ethical dilemmas of technological advancement and societal change.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="services" className="my-services pt-70">
                                    <h3>השירותים שלי</h3>
                                    <div className="card-services mb-3 pt-4">
                                        <div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 d-flex">
                                            <div className="d-block">
                                                <div className="card__icon icon-shape icon-lg rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <g clipPath="url(#clip0_184_1754)">
                                                            <path
                                                                className="fill-primary-3"
                                                                d="M21.1875 7.03125V4.21875H16.8421C15.3434 4.21875 13.9009 4.61381 12.6297 5.36667C12.1617 2.33194 9.51408 0 6.32812 0H5.625V2.8125H2.8125V5.625H0V22.5938H7.15191C9.12042 22.5938 10.1521 23.9276 10.2556 24H13.7444C13.8499 23.9261 14.8715 22.5938 16.8481 22.5938H24V7.03125H21.1875ZM16.8421 5.625H19.7812V18.375H16.8421C15.3722 18.375 13.9563 18.7552 12.7031 19.48V7.00472C12.8124 6.9488 14.3378 5.625 16.8421 5.625ZM7.03125 1.45537C9.43927 1.7947 11.2969 3.85055 11.2969 6.32812V16.5239C10.2659 15.2518 8.75058 14.3825 7.03125 14.1945V1.45537ZM4.21875 4.21875H5.625V15.5625H6.32812C8.69639 15.5625 10.6826 17.2124 11.1779 19.4126C9.95433 18.7316 8.58145 18.375 7.15786 18.375H4.21875V4.21875ZM22.5938 21.1875H16.8481C15.478 21.1875 14.1843 21.6847 13.1731 22.5938H10.8269C9.81567 21.6847 8.52202 21.1875 7.15186 21.1875H1.40625V7.03125H2.8125V19.7812H7.15786C9.69675 19.7812 11.2132 21.1253 11.334 21.1875H12.666C12.7859 21.1258 14.3071 19.7812 16.8421 19.7812H21.1875V8.4375H22.5938V21.1875Z"
                                                                fill="#FCC6E2"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card__content px-md-4 px-3">
                                                <div className="card__title mb-0 mb-lg-2">
                                                    <Link href="#">
                                                        <p className="fs-4 text-dark">כתיבה: רומנים, סיפורים קצרים ושירה</p>
                                                    </Link>
                                                </div>
                                                <p className="text-300 mb-lg-auto mb-md-4 mb-3">בין אם אתם מחפשים רומן מרתק, סיפור קצר מושך, או שירה מעוררת, אני הסופר שלכם. עם הבנה עמוקה של פיתוח דמויות, מבנה עלילה ופרוזה לירית, אני יוצר סיפורים המהדהדים ומעוררים השראה.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-services mb-3">
                                        <div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 d-flex">
                                            <div className="d-block">
                                                <div className="card__icon icon-shape icon-lg rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <g clipPath="url(#clip0_184_1754)">
                                                            <path
                                                                className="fill-primary-3"
                                                                d="M21.1875 7.03125V4.21875H16.8421C15.3434 4.21875 13.9009 4.61381 12.6297 5.36667C12.1617 2.33194 9.51408 0 6.32812 0H5.625V2.8125H2.8125V5.625H0V22.5938H7.15191C9.12042 22.5938 10.1521 23.9276 10.2556 24H13.7444C13.8499 23.9261 14.8715 22.5938 16.8481 22.5938H24V7.03125H21.1875ZM16.8421 5.625H19.7812V18.375H16.8421C15.3722 18.375 13.9563 18.7552 12.7031 19.48V7.00472C12.8124 6.9488 14.3378 5.625 16.8421 5.625ZM7.03125 1.45537C9.43927 1.7947 11.2969 3.85055 11.2969 6.32812V16.5239C10.2659 15.2518 8.75058 14.3825 7.03125 14.1945V1.45537ZM4.21875 4.21875H5.625V15.5625H6.32812C8.69639 15.5625 10.6826 17.2124 11.1779 19.4126C9.95433 18.7316 8.58145 18.375 7.15786 18.375H4.21875V4.21875ZM22.5938 21.1875H16.8481C15.478 21.1875 14.1843 21.6847 13.1731 22.5938H10.8269C9.81567 21.6847 8.52202 21.1875 7.15186 21.1875H1.40625V7.03125H2.8125V19.7812H7.15786C9.69675 19.7812 11.2132 21.1253 11.334 21.1875H12.666C12.7859 21.1258 14.3071 19.7812 16.8421 19.7812H21.1875V8.4375H22.5938V21.1875Z"
                                                                fill="#FCC6E2"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card__content px-md-4 px-3">
                                                <div className="card__title mb-0 mb-lg-2">
                                                    <Link href="#">
                                                        <p className="fs-4 text-dark">מאמרים, פוסטים לבלוג ותוכן לאתרים</p>
                                                    </Link>
                                                </div>
                                                <p className="text-300 mb-lg-auto mb-md-4 mb-3">בעידן הדיגיטלי של היום, תוכן מרתק הוא חיוני לתפיסת תשומת לב הקהל שלכם. אני מתמחה ביצירת תוכן באיכות גבוהה המתאים לקול ויעדי המותג שלכם.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-services mb-3">
                                        <div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 d-flex">
                                            <div className="d-block">
                                                <div className="card__icon icon-shape icon-lg rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <g clipPath="url(#clip0_184_1754)">
                                                            <path
                                                                className="fill-primary-3"
                                                                d="M21.1875 7.03125V4.21875H16.8421C15.3434 4.21875 13.9009 4.61381 12.6297 5.36667C12.1617 2.33194 9.51408 0 6.32812 0H5.625V2.8125H2.8125V5.625H0V22.5938H7.15191C9.12042 22.5938 10.1521 23.9276 10.2556 24H13.7444C13.8499 23.9261 14.8715 22.5938 16.8481 22.5938H24V7.03125H21.1875ZM16.8421 5.625H19.7812V18.375H16.8421C15.3722 18.375 13.9563 18.7552 12.7031 19.48V7.00472C12.8124 6.9488 14.3378 5.625 16.8421 5.625ZM7.03125 1.45537C9.43927 1.7947 11.2969 3.85055 11.2969 6.32812V16.5239C10.2659 15.2518 8.75058 14.3825 7.03125 14.1945V1.45537ZM4.21875 4.21875H5.625V15.5625H6.32812C8.69639 15.5625 10.6826 17.2124 11.1779 19.4126C9.95433 18.7316 8.58145 18.375 7.15786 18.375H4.21875V4.21875ZM22.5938 21.1875H16.8481C15.478 21.1875 14.1843 21.6847 13.1731 22.5938H10.8269C9.81567 21.6847 8.52202 21.1875 7.15186 21.1875H1.40625V7.03125H2.8125V19.7812H7.15786C9.69675 19.7812 11.2132 21.1253 11.334 21.1875H12.666C12.7859 21.1258 14.3071 19.7812 16.8421 19.7812H21.1875V8.4375H22.5938V21.1875Z"
                                                                fill="#FCC6E2"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card__content px-md-4 px-3">
                                                <div className="card__title mb-0 mb-lg-2">
                                                    <Link href="#">
                                                        <p className="fs-4 text-dark">הגהה ועריכה מדויקים</p>
                                                    </Link>
                                                </div>
                                                <p className="text-300 mb-lg-auto mb-md-4 mb-3">חזק את המותג שלך עם סיפורים משכנעים ותוכן בלתי נשכח המהדהד עם הקהל שלך.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-services mb-3">
                                        <div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 d-flex">
                                            <div className="d-block">
                                                <div className="card__icon icon-shape icon-lg rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <g clipPath="url(#clip0_184_1754)">
                                                            <path
                                                                className="fill-primary-3"
                                                                d="M21.1875 7.03125V4.21875H16.8421C15.3434 4.21875 13.9009 4.61381 12.6297 5.36667C12.1617 2.33194 9.51408 0 6.32812 0H5.625V2.8125H2.8125V5.625H0V22.5938H7.15191C9.12042 22.5938 10.1521 23.9276 10.2556 24H13.7444C13.8499 23.9261 14.8715 22.5938 16.8481 22.5938H24V7.03125H21.1875ZM16.8421 5.625H19.7812V18.375H16.8421C15.3722 18.375 13.9563 18.7552 12.7031 19.48V7.00472C12.8124 6.9488 14.3378 5.625 16.8421 5.625ZM7.03125 1.45537C9.43927 1.7947 11.2969 3.85055 11.2969 6.32812V16.5239C10.2659 15.2518 8.75058 14.3825 7.03125 14.1945V1.45537ZM4.21875 4.21875H5.625V15.5625H6.32812C8.69639 15.5625 10.6826 17.2124 11.1779 19.4126C9.95433 18.7316 8.58145 18.375 7.15786 18.375H4.21875V4.21875ZM22.5938 21.1875H16.8481C15.478 21.1875 14.1843 21.6847 13.1731 22.5938H10.8269C9.81567 21.6847 8.52202 21.1875 7.15186 21.1875H1.40625V7.03125H2.8125V19.7812H7.15786C9.69675 19.7812 11.2132 21.1253 11.334 21.1875H12.666C12.7859 21.1258 14.3071 19.7812 16.8421 19.7812H21.1875V8.4375H22.5938V21.1875Z"
                                                                fill="#FCC6E2"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card__content px-md-4 px-3">
                                                <div className="card__title mb-0 mb-lg-2">
                                                    <Link href="#">
                                                        <p className="fs-4 text-dark">שירותי כתיבה מותאמי SEO</p>
                                                    </Link>
                                                </div>
                                                <p className="text-300 mb-lg-auto mb-md-4 mb-3">שפר את הנראות המקוונת שלך עם התוכן שלנו הממוקד SEO, המיועד לדירוג גבוה יותר ומשיכת מבקרים רבים יותר.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="resume" className="education pt-70">
                                    <div className="row">
                                        <div className="col-6">
                                            <h3>השכלה</h3>
                                        </div>
                                        <div className="col-6">
                                            <h3 className="d-none d-md-block">פרסים</h3>
                                        </div>
                                    </div>
                                    <div className="row pt-4">
                                        <div className="col-md-6 align-self-stretch h-100">
                                            <div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3 h-100">
                                                <div className="icon rounded-circle overflow-hidden d-inline-block">
                                                    <img src="assets/imgs/home-page-3/education/icon-1.png" alt="Education" />
                                                </div>
                                                <p className="text-dark fs-5 mt-1 mb-2">תעודות בתוכן דיגיטלי וכתיבת SEO</p>
                                                <ul className="d-flex gap-4 ps-3 border-bottom pb-2 mb-4">
                                                    <li>
                                                        <p>2023-2024:</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-primary-3">CM Institute</p>
                                                    </li>
                                                </ul>
                                                <div className="icon rounded-circle overflow-hidden d-inline-block">
                                                    <img src="assets/imgs/home-page-3/education/icon-2.png" alt="Education" />
                                                </div>
                                                <p className="text-dark fs-5 mt-1 mb-2">סדנאות כתיבה והשכלה מתמשכת</p>
                                                <ul className="d-flex gap-4 ps-3 border-bottom pb-2 mb-4">
                                                    <li>
                                                        <p className="mb-2">2019-2021:</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-primary-3">University of Iowa</p>
                                                    </li>
                                                </ul>
                                                <div className="icon rounded-circle overflow-hidden d-inline-block">
                                                    <img src="assets/imgs/home-page-3/education/icon-3.png" alt="Education" />
                                                </div>
                                                <p className="text-dark fs-5 mt-1 mb-2">תואר ראשון בספרות אנגלית</p>
                                                <ul className="d-flex gap-4 ps-3 mb-0">
                                                    <li>
                                                        <p className="mb-2">2016-2018:</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-primary-3">Bachelor of Arts</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 align-self-stretch mt-md-0 mt-5">
                                            <h3 className="d-block d-md-none">פרסים</h3>
                                            <div className="card-award rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3 align-self-stretch h-100 overflow-hidden">
                                                <div className="position-relative h-100 align-self-stretch align-items-center">
                                                    <ul className="list-style-1 d-flex ps-3 flex-column mb-0">
                                                        <li className="position-relative z-1">
                                                            <p className="fs-5 text-dark mb-2">כתבת עמוד ב-The New Yorker</p>
                                                            <ul className="list-style-2 d-flex gap-4 ps-3">
                                                                <li>
                                                                    <p className="text-primary-3 mb-0">NY Times</p>
                                                                </li>
                                                                <li>
                                                                    <p className="mb-2">2018 - 2020</p>
                                                                </li>
                                                            </ul>
                                                            <p className="mb-4">עבדה עם לקוחות שונים, כולל מגזינים, אתרים ובתי הוצאה לאור, לייצר תוכן באיכות גבוהה במגוון ז'אנרים.</p>
                                                        </li>
                                                        <li className="position-relative z-1">
                                                            <p className="fs-5 text-dark mb-2">כותבת תוכן ב-LitHub</p>
                                                            <ul className="list-style-2 d-flex gap-4 ps-3">
                                                                <li>
                                                                    <p className="text-primary-3 mb-0">GitHub</p>
                                                                </li>
                                                                <li>
                                                                    <p className="mb-2">2018 - 2020</p>
                                                                </li>
                                                            </ul>
                                                            <p className="mb-6">יצרה מאמרים מרתקים, פוסטים לבלוג ותכנים לאחד מאתרי הספרות המובילים.</p>
                                                        </li>
                                                        <li className="position-relative z-1">
                                                            <p className="fs-5 text-dark mb-2">עורכת ב-The Write Stuff</p>
                                                            <ul className="list-style-2 d-flex gap-4 ps-3">
                                                                <li>
                                                                    <p className="text-primary-3 mb-0">A.Lecturer</p>
                                                                </li>
                                                                <li>
                                                                    <p className="mb-2">2018 - 2020</p>
                                                                </li>
                                                            </ul>
                                                            <p>פיקוח על התהליך העריכתי, מתן הדרכה והבטחת הסטנדרטים הגבוהים ביותר של תוכן.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="line-left position-absolute top-0 border-start h-md-100 z-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="blog" className="blog pt-70">
                                    <h3>מהבלוג</h3>
                                    <div className="position-relative pt-4">
                                        <Swiper {...swiperOptions2} className="swiper slider-two pb-6 position-relative">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 mb-3">
                                                        <p className="fs-18 text-primary-3">השראה</p>
                                                        <div className="d-flex align-items-center gap-5">
                                                            <div>
                                                                <p className="fs-26 text-dark">כוחה של סיפור: כיצד ליצור נרטיבים מרתקים</p>
                                                                <p className="mb-0">Storytelling is at the heart of human experience. In this post, I delve into the key elements that make a story compelling and share techniques to enhance your narrative skills.</p>
                                                            </div>
                                                            <div className="image-right">
                                                                <img className="rounded-3 w-100 h-100" src="assets/imgs/home-page-3/blog/img-1.png" alt="zelio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3">
                                                        <p className="fs-18 text-primary-3">Author Insights</p>
                                                        <div className="d-flex align-items-center gap-5">
                                                            <div>
                                                                <p className="fs-26 text-dark">Overcoming Writer's Block: Tips and Strategies</p>
                                                                <p className="mb-0">Eery writer faces writer's block at some point. Here, I explore effective methods to overcome this common challenge and reignite your creative spark</p>
                                                            </div>
                                                            <div className="image-right">
                                                                <img className="rounded-3 w-100 h-100" src="assets/imgs/home-page-3/blog/img-2.png" alt="zelio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 mb-3">
                                                        <p className="fs-18 text-primary-3">השראה</p>
                                                        <div className="d-flex align-items-center gap-5">
                                                            <div>
                                                                <p className="fs-26 text-dark">כוחה של סיפור: כיצד ליצור נרטיבים מרתקים</p>
                                                                <p className="mb-0">Storytelling is at the heart of human experience. In this post, I delve into the key elements that make a story compelling and share techniques to enhance your narrative skills.</p>
                                                            </div>
                                                            <div className="image-right">
                                                                <img className="rounded-3 w-100 h-100" src="assets/imgs/home-page-3/blog/img-1.png" alt="zelio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3">
                                                        <p className="fs-18 text-primary-3">Author Insights</p>
                                                        <div className="d-flex align-items-center gap-5">
                                                            <div>
                                                                <p className="fs-26 text-dark">Overcoming Writer's Block: Tips and Strategies</p>
                                                                <p className="mb-0">Every writer faces writer's block at some point. Here, I explore effective methods to overcome this common challenge and reignite your creative spark</p>
                                                            </div>
                                                            <div className="image-right">
                                                                <img className="rounded-3 w-100 h-100" src="assets/imgs/home-page-3/blog/img-2.png" alt="zelio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 mb-3">
                                                        <p className="fs-18 text-primary-3">השראה</p>
                                                        <div className="d-flex align-items-center gap-5">
                                                            <div>
                                                                <p className="fs-26 text-dark">כוחה של סיפור: כיצד ליצור נרטיבים מרתקים</p>
                                                                <p className="mb-0">Storytelling is at the heart of human experience. In this post, I delve into the key elements that make a story compelling and share techniques to enhance your narrative skills.</p>
                                                            </div>
                                                            <div className="image-right">
                                                                <img className="rounded-3 w-100 h-100" src="assets/imgs/home-page-3/blog/img-1.png" alt="zelio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3">
                                                        <p className="fs-18 text-primary-3">Author Insights</p>
                                                        <div className="d-flex align-items-center gap-5">
                                                            <div>
                                                                <p className="fs-26 text-dark">Overcoming Writer's Block: Tips and Strategies</p>
                                                                <p className="mb-0">Every writer faces writer's block at some point. Here, I explore effective methods to overcome this common challenge and reignite your creative spark</p>
                                                            </div>
                                                            <div className="image-right">
                                                                <img className="rounded-3 w-100 h-100" src="assets/imgs/home-page-3/blog/img-2.png" alt="zelio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                                <div id="portfolio" className="testimonials pt-60 border-bottom pb-80">
                                    <h3>המלצות</h3>
                                    <div className="position-relative pt-4">
                                        <Swiper {...swiperOptions} className="swiper slider-one pb-3 position-relative">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="testimonials-block pe-5">
                                                        <img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-1.png" alt="avatar" />
                                                        <p className="fs-5 text-dark">"Meisa's writing is simply magical. She has the ability to capture the essence of a story and preset it in the most captivating way."</p>
                                                        <div className="information ">
                                                            <p className="fs-6 text-primary-3">
                                                                John Doe, <span className="text-300">Author</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonials-block pe-5">
                                                        <img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-2.png" alt="avatar" />
                                                        <p className="fs-5 text-dark">"Working with Meisa was a fantastic experience. Her attention to detail and commitment to quality are unparalleled."</p>
                                                        <div className="information ">
                                                            <p className="fs-6 text-primary-3">
                                                                Jane Smith, <span className="text-300">Editor</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonials-block pe-5">
                                                        <img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-1.png" alt="avatar" />
                                                        <p className="fs-5 text-dark">"Meisa's writing is simply magical. She has the ability to capture the essence of a story and preset it in the most captivating way."</p>
                                                        <div className="information ">
                                                            <p className="fs-6 text-primary-3">
                                                                John Doe, <span className="text-300">Author</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonials-block pe-5">
                                                        <img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-2.png" alt="avatar" />
                                                        <p className="fs-5 text-dark">"Working with Meisa was a fantastic experience. Her attention to detail and commitment to quality are unparalleled."</p>
                                                        <div className="information ">
                                                            <p className="fs-6 text-primary-3">
                                                                Jane Smith, <span className="text-300">Editor</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                                <div id="contact" className="contact pt-70">
                                    <h3>צרו קשר</h3>
                                    <div className="d-flex align-items-center gap-5 mt-4">
                                        <div className="d-flex flex-column gap-2 position-relative z-1">
                                            <Link href="tel:+12345678901">
                                                <i className="ri-phone-fill text-primary-3 h6 fw-medium" />
                                                <span className="text-300 fs-6 ms-2">+1-234-567-8901</span>
                                            </Link>
                                            <Link href="mailto:meisa.rosie@gmail.com">
                                                <i className="ri-mail-fill text-primary-3 h6 fw-medium" />
                                                <span className="text-300 fs-6 ms-2">meisa.rosie@gmail.com</span>
                                            </Link>
                                        </div>
                                        <div className="d-flex flex-column gap-2 position-relative z-1">
                                            <Link href="#">
                                                <i className="ri-skype-fill text-primary-3 h6 fw-medium" />
                                                <span className="text-300 fs-6 ms-https://www.google.com/maps/place/1st+Ave.,+New+York,+NY,+Hoa+K%E1%BB%B3/@40.7630169,-73.9594939,17z/data=!4m6!3m5!1s0x89c258c29e084453:0x2bf768350d30b89e!8m2!3d40.7630169!4d-73.9594939!16zL20vMDV3Z2tm?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">meisa.rosie</span>
                                            </Link>
                                            <Link href="#">
                                                <i className="ri-map-2-fill text-primary-3 h6 fw-medium" />
                                                <span className="text-300 fs-6 ms-2">0811 Erdman Prairie, Joaville CA</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="position-relative z-2 mt-4">
                                        <h5 className="text-dark mb-3">Let’s connect</h5>
                                        <form action="#">
                                            <div className="row g-3">
                                                <div className="col-md-6 ">
                                                    <input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="name" name="name" placeholder="Your name" aria-label="username" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="phone" name="phone" placeholder="Phone" aria-label="phone" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="email" name="email" placeholder="Emaill" aria-label="email" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="subject" name="subject" placeholder="Subject" aria-label="subject" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea className="form-control bg-3 border border-secondary-3 rounded-3" id="message" name="message" placeholder="Message" aria-label="With textarea" defaultValue={""} />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-secondary-3 fw-medium">
                                                        Send Message
                                                        <i className="ri-arrow-right-up-line fw-medium" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
