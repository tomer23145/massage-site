import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre, Montserrat, Assistant } from "next/font/google";
import "./globals.css";

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "מסאז׳ נתניה | טיפול מקצועי בנתניה",
  description:
    "מסאז׳ מקצועי בנתניה — טיפולי Deep Tissue, Swedish ו-Sports Massage. שמילנסקי משה 24, נתניה. 053-393-1443. הזמינו תור עוד היום.",
  keywords: ["מסאז נתניה", "עיסוי נתניה", "מסאז מקצועי", "Deep Tissue", "Swedish Massage", "ישראל", "נתניה"],
  openGraph: {
    title: "מסאז׳ נתניה | טיפול מקצועי",
    description: "מגע מקצועי שמרפא את הגוף והנפש · נתניה",
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
    <html
      lang="he"
      dir="rtl"
      className={`h-full antialiased scroll-smooth ${frankRuhl.variable} ${montserrat.variable} ${assistant.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF5] text-[#2C2C2C]">
        {children}
      </body>
    </html>
  );
}
