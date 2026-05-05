"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Lang = "he" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("he");

  return (
    <>
      <main dir={lang === "he" ? "rtl" : "ltr"}>
        <Navigation lang={lang} onLangToggle={setLang} />
        <Hero lang={lang} />
        <Services lang={lang} />
        <Booking lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/972533931443"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </>
  );
}
