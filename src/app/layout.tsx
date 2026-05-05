import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "מרפאת העיסוי | טיפול מקצועי בישראל",
  description:
    "מרפאת עיסוי מקצועית עם טיפולי Deep Tissue, Swedish ו-Sports Massage. הזמינו תור עוד היום.",
  keywords: ["עיסוי", "מרפאת עיסוי", "Deep Tissue", "Swedish Massage", "ישראל"],
  openGraph: {
    title: "מרפאת העיסוי | טיפול מקצועי",
    description: "מגע מקצועי שמרפא את הגוף והנפש",
    locale: "he_IL",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FAFAF5] text-[#2C2C2C]">
        {children}
      </body>
    </html>
  );
}
