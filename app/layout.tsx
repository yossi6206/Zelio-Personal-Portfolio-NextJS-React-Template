import type { Metadata } from "next";
import "@/public/assets/fonts/polin/polin.css";
import "@/public/assets/css/vendors/bootstrap.min.css";
import "@/public/assets/css/vendors/swiper-bundle.min.css";
import "@/public/assets/css/vendors/carouselTicker.css";
import "@/public/assets/css/vendors/magnific-popup.css";
import "@/public/assets/fonts/remixicon/remixicon.css";
import "@/public/assets/css/main.css";
import "@/app/rtl.css";

export const metadata: Metadata = {
    title: "זליו - תיק עבודות אישי",
    description: "זליו - תיק עבודות אישי",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="he" dir="rtl" data-bs-theme="dark" className="zelio">
            <body>{children}</body>
        </html>
    );
}
