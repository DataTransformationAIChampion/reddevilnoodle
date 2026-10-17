import type { Metadata, Viewport } from "next";
import { Kanit, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-head",
  subsets: ["thai", "latin"],
  weight: ["600", "800"],
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
});

const title = "Red Devil Noodle – ก๋วยเตี๋ยวปีศาจแดง";
const description =
  "ก๋วยเตี๋ยวหมูและเนื้อตุ๋น น้ำซุปเข้มข้น เสิร์ฟในบรรยากาศฟุตบอลสีแดง-ดำ สำหรับแฟนแมนยูและคนรักก๋วยเตี๋ยว";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "th_TH",
    siteName: "Red Devil Noodle",
    images: [{ url: "/menu/red-devil.jpg", width: 1376, height: 864, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/menu/red-devil.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#da291c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${kanit.variable} ${notoThai.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
