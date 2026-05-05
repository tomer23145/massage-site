"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft } from "lucide-react";

type Lang = "he" | "en";

const copy = {
  he: {
    eyebrow: "מרפאת עיסוי מקצועית · ישראל",
    headline: "מגע מקצועי שמרפא\nאת הגוף והנפש",
    sub: "טיפולים מותאמים אישית המשלבים טכניקות מתקדמות עם חוויה שקטה ומחזירה אנרגיה.",
    cta: "הזמינו תור עכשיו",
    ctaSub: "שיחת ייעוץ חינם",
    reviewCount: "מעל 150 ביקורות",
    reviewLabel: "לקוחות מרוצים",
    badge: "זמינות מלאה השבוע",
    nextSlot: "הטיפול הבא הזמין",
    nextTime: "היום, 14:00–15:00",
    bookBtn: "הזמן",
  },
  en: {
    eyebrow: "Professional Massage Clinic · Israel",
    headline: "Expert Touch That\nHeals Body & Mind",
    sub: "Personalised treatments combining advanced techniques with a peaceful, restorative experience.",
    cta: "Book Your Session",
    ctaSub: "Free consultation call",
    reviewCount: "150+ Reviews",
    reviewLabel: "Happy Clients",
    badge: "Full availability this week",
    nextSlot: "Next available slot",
    nextTime: "Today, 14:00–15:00",
    bookBtn: "Book",
  },
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FadeUp({
  delay,
  className,
  children,
}: {
  delay: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];
  const isRtl = lang === "he";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF5]">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(178,172,136,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isRtl ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* ── Text column ── */}
          <div
            className={`flex flex-col ${
              isRtl
                ? "items-end text-right lg:order-1"
                : "items-start text-left lg:order-2"
            }`}
          >
            {/* Eyebrow */}
            <FadeUp delay={0.1} className="mb-5">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#708090] border border-[#B2AC88]/40 bg-white/70"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t.eyebrow}
              </span>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.22}>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6"
                style={{
                  fontFamily: "Frank Ruhl Libre, serif",
                  color: "#2C2C2C",
                  whiteSpace: "pre-line",
                }}
              >
                {t.headline}
              </h1>
            </FadeUp>

            {/* Sub-headline */}
            <FadeUp delay={0.34}>
              <p
                className="text-lg text-[#708090] leading-relaxed mb-8 max-w-lg"
                style={{ fontFamily: "Assistant, sans-serif" }}
              >
                {t.sub}
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.44} className="w-full mb-10">
              <div
                className={`flex flex-col sm:flex-row gap-3 ${
                  isRtl ? "sm:flex-row-reverse" : ""
                }`}
              >
                <a
                  href="#booking"
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #B2AC88 0%, #9A9470 100%)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {t.cta}
                  <ChevronLeft
                    size={18}
                    className={`transition-transform duration-200 group-hover:-translate-x-0.5 ${
                      !isRtl ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <a
                  href="tel:+972533931443"
                  className="flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium text-[#708090] border border-[#B2AC88]/50 hover:border-[#B2AC88] hover:bg-[#B2AC88]/5 transition-all duration-200"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.ctaSub}
                </a>
              </div>
            </FadeUp>

            {/* Social proof bar */}
            <FadeUp delay={0.55}>
              <div
                className={`flex items-center gap-5 flex-wrap ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={17} fill="#B2AC88" stroke="none" />
                    ))}
                  </div>
                  <span
                    className="text-sm font-bold text-[#2C2C2C]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    5.0
                  </span>
                </div>

                <div className="w-px h-8 bg-[#B2AC88]/30" />

                <div className={`flex flex-col ${isRtl ? "items-end" : "items-start"}`}>
                  <span
                    className="text-sm font-bold text-[#2C2C2C]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {t.reviewCount}
                  </span>
                  <span
                    className="text-xs text-[#708090]"
                    style={{ fontFamily: "Assistant, sans-serif" }}
                  >
                    {t.reviewLabel}
                  </span>
                </div>

                <div className="w-px h-8 bg-[#B2AC88]/30" />

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span
                    className="text-xs text-[#708090]"
                    style={{ fontFamily: "Assistant, sans-serif" }}
                  >
                    {t.badge}
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className={`relative ${isRtl ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Decorative blob */}
            <div
              className="absolute -inset-6 rounded-[40%_60%_55%_45%/45%_55%_60%_40%] opacity-20 -z-10"
              style={{ background: "radial-gradient(ellipse, #B2AC88, transparent 70%)" }}
            />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
                alt="Professional massage therapy session"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating availability card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: "backOut" }}
                className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl"
              >
                <div
                  className={`flex items-center justify-between gap-3 ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className={isRtl ? "text-right" : "text-left"}>
                    <p
                      className="text-xs text-[#708090] mb-0.5"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {t.nextSlot}
                    </p>
                    <p
                      className="text-sm font-bold text-[#2C2C2C]"
                      style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                    >
                      {t.nextTime}
                    </p>
                  </div>
                  <a
                    href="#booking"
                    className="px-4 py-2 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg, #B2AC88, #9A9470)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {t.bookBtn}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none bg-gradient-to-t from-[#FAFAF5] to-transparent" />
    </section>
  );
}
