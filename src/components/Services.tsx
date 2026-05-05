"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Zap, Leaf, Trophy, ChevronLeft } from "lucide-react";

type Lang = "he" | "en";

interface Service {
  id: string;
  icon: React.ReactNode;
  titleHe: string;
  titleEn: string;
  tag: string;
  descriptionHe: string;
  descriptionEn: string;
  duration: string;
  price: string;
  benefitsHe: string[];
  benefitsEn: string[];
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "deep-tissue",
    icon: <Zap size={22} />,
    titleHe: "עיסוי עמוק",
    titleEn: "Deep Tissue",
    tag: "Deep Tissue",
    descriptionHe:
      "טיפול ממוקד בשכבות העמוקות של רקמת השריר. אידיאלי לכאבים כרוניים, מתח שרירי ועיצוב הגוף.",
    descriptionEn:
      "Targeted treatment of deep muscle layers. Ideal for chronic pain, muscle tension, and body sculpting.",
    duration: "60 / 90 דק׳",
    price: "₪380 / ₪520",
    benefitsHe: ["שחרור מתח עמוק", "שיפור גמישות", "הפחתת כאבי גב"],
    benefitsEn: ["Deep tension release", "Improved flexibility", "Back pain relief"],
    popular: true,
  },
  {
    id: "swedish",
    icon: <Leaf size={22} />,
    titleHe: "עיסוי שוודי",
    titleEn: "Swedish",
    tag: "Swedish",
    descriptionHe:
      "הטכניקה הקלאסית המבוססת על תנועות זורמות ומרגיעות. מושלמת להרפיה מלאה, שיפור מחזור הדם ואיזון מחדש.",
    descriptionEn:
      "The classic technique based on flowing, soothing strokes. Perfect for full relaxation, improved circulation, and full body reset.",
    duration: "60 / 90 דק׳",
    price: "₪320 / ₪450",
    benefitsHe: ["הרפיה מלאה", "שיפור מחזור דם", "הפחתת חרדה"],
    benefitsEn: ["Full relaxation", "Better circulation", "Anxiety reduction"],
  },
  {
    id: "sports",
    icon: <Trophy size={22} />,
    titleHe: "עיסוי ספורט",
    titleEn: "Sports Massage",
    tag: "Sports",
    descriptionHe:
      "פרוטוקול טיפולי מותאם לספורטאים ואנשים פעילים. ממריץ לפני אימון, מאיץ התאוששות לאחריו.",
    descriptionEn:
      "A therapeutic protocol tailored for athletes and active people. Energising before training, accelerating recovery after.",
    duration: "45 / 75 דק׳",
    price: "₪290 / ₪420",
    benefitsHe: ["מניעת פציעות", "האצת התאוששות", "שיפור ביצועים"],
    benefitsEn: ["Injury prevention", "Faster recovery", "Performance boost"],
  },
];

const sectionCopy = {
  he: {
    eyebrow: "מה אנחנו מציעים",
    heading: "טיפולים מותאמים\nבדיוק לכם",
    sub: "כל טיפול מתוכנן בקפידה על-ידי המטפל שלנו בהתאם לצרכים הייחודיים שלכם.",
    cta: "בחרו טיפול זה",
    popular: "הכי פופולרי",
  },
  en: {
    eyebrow: "What We Offer",
    heading: "Treatments Tailored\nPrecisely for You",
    sub: "Every session is carefully designed by our therapist to match your unique needs.",
    cta: "Choose This Treatment",
    popular: "Most Popular",
  },
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ServicesProps {
  lang: Lang;
}

export default function Services({ lang }: ServicesProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const t = sectionCopy[lang];
  const isRtl = lang === "he";

  return (
    <section id="services" className="py-24 bg-[#FAFAF5] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B2AC88]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
          className={`mb-14 ${isRtl ? "text-right" : "text-left"}`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#708090] border border-[#B2AC88]/40 bg-white/70 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {t.eyebrow}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] leading-tight mb-4 whitespace-pre-line"
            style={{ fontFamily: "Frank Ruhl Libre, serif" }}
          >
            {t.heading}
          </h2>
          <p
            className="text-[#708090] text-lg max-w-xl"
            style={{ fontFamily: "Assistant, sans-serif" }}
          >
            {t.sub}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isActive = selected === service.id;
            const title = lang === "he" ? service.titleHe : service.titleEn;
            const description =
              lang === "he" ? service.descriptionHe : service.descriptionEn;
            const benefits =
              lang === "he" ? service.benefitsHe : service.benefitsEn;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-white transition-all duration-300 ${
                  isActive
                    ? "ring-2 ring-[#B2AC88] shadow-2xl -translate-y-1"
                    : "shadow-md hover:shadow-xl hover:-translate-y-0.5"
                }`}
                onClick={() => setSelected(isActive ? null : service.id)}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div
                    className={`absolute top-4 ${
                      isRtl ? "left-4" : "right-4"
                    } px-3 py-1 rounded-full text-xs font-bold text-white z-10`}
                    style={{
                      background: "linear-gradient(135deg, #B2AC88, #9A9470)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {t.popular}
                  </div>
                )}

                {/* Accent strip */}
                <div
                  className="h-1.5 w-full flex-shrink-0"
                  style={{
                    background: service.popular
                      ? "linear-gradient(90deg, #B2AC88, #9A9470)"
                      : "linear-gradient(90deg, #D4D0B8, #B2AC88)",
                  }}
                />

                <div
                  className={`flex flex-col flex-1 p-7 ${
                    isRtl ? "items-end text-right" : "items-start text-left"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-[#B2AC88]"
                    style={{ background: "rgba(178,172,136,0.12)" }}
                  >
                    {service.icon}
                  </div>

                  {/* Tag */}
                  <span
                    className="text-xs font-semibold text-[#B2AC88] uppercase tracking-wider mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-[#2C2C2C] mb-3"
                    style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#708090] text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "Assistant, sans-serif" }}
                  >
                    {description}
                  </p>

                  {/* Benefits */}
                  <ul
                    className={`flex flex-col gap-1.5 mb-6 w-full ${
                      isRtl ? "items-end" : "items-start"
                    }`}
                  >
                    {benefits.map((b) => (
                      <li
                        key={b}
                        className={`flex items-center gap-2 text-xs text-[#708090] ${
                          isRtl ? "flex-row-reverse" : ""
                        }`}
                        style={{ fontFamily: "Assistant, sans-serif" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B2AC88] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="w-full h-px bg-[#B2AC88]/15 mb-5" />

                  {/* Duration + Price */}
                  <div
                    className={`flex items-center justify-between w-full mb-6 ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-1.5 text-[#708090] text-xs ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Clock size={13} className="text-[#B2AC88]" />
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {service.duration}
                      </span>
                    </div>
                    <span
                      className="text-xl font-bold text-[#2C2C2C]"
                      style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                    >
                      {service.price}
                    </span>
                  </div>

                  {/* CTA */}
                  <a
                    href="#booking"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95 ${
                      isActive || service.popular
                        ? "text-white"
                        : "text-[#708090] border border-[#B2AC88]/40 hover:border-[#B2AC88]"
                    }`}
                    style={{
                      ...(isActive || service.popular
                        ? { background: "linear-gradient(135deg, #B2AC88, #9A9470)" }
                        : {}),
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {t.cta}
                    <ChevronLeft
                      size={16}
                      className={!isRtl ? "rotate-180" : ""}
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B2AC88]/30 to-transparent" />
    </section>
  );
}
