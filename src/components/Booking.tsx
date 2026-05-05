"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, Phone } from "lucide-react";

type Lang = "he" | "en";

const hours = {
  he: [
    { day: "ראשון – חמישי", time: "09:00 – 21:00" },
    { day: "שישי", time: "09:00 – 16:00" },
    { day: "שבת", time: "סגור" },
  ],
  en: [
    { day: "Sunday – Thursday", time: "09:00 – 21:00" },
    { day: "Friday", time: "09:00 – 16:00" },
    { day: "Saturday", time: "Closed" },
  ],
};

const copy = {
  he: {
    eyebrow: "הזמנת תור",
    heading: "מוכנים לקבוע\nטיפול?",
    sub: "צרו קשר דרך WhatsApp או טלפון — נחזור אליכם מהר ונמצא זמן שמתאים.",
    hoursTitle: "שעות פעילות",
    whatsapp: "הזמינו דרך WhatsApp",
    call: "התקשרו אלינו",
    whatsappSub: "מענה מהיר · זמין כל היום",
    callSub: "053-393-1443",
  },
  en: {
    eyebrow: "Book a Session",
    heading: "Ready to Book\nYour Treatment?",
    sub: "Reach out via WhatsApp or phone — we'll get back to you quickly and find a time that works.",
    hoursTitle: "Opening Hours",
    whatsapp: "Book via WhatsApp",
    call: "Call Us",
    whatsappSub: "Fast reply · Available all day",
    callSub: "053-393-1443",
  },
};

const WHATSAPP_URL = "https://wa.me/972533931443";
const PHONE_RAW = "+972533931443";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface BookingProps {
  lang: Lang;
}

export default function Booking({ lang }: BookingProps) {
  const t = copy[lang];
  const isRtl = lang === "he";
  const hrs = hours[lang];

  return (
    <section id="booking" className="py-24 bg-white relative">
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#708090] border border-[#B2AC88]/40 bg-[#FAFAF5] mb-4"
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

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
            isRtl ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className={`bg-[#FAFAF5] rounded-3xl p-8 border border-[#B2AC88]/15 shadow-sm ${
              isRtl ? "lg:order-2 text-right" : "lg:order-1"
            }`}
          >
            <div
              className={`flex items-center gap-3 mb-6 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-[#B2AC88] flex-shrink-0"
                style={{ background: "rgba(178,172,136,0.12)" }}
              >
                <Clock size={20} />
              </div>
              <span
                className="text-sm font-semibold uppercase tracking-wider text-[#708090]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t.hoursTitle}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {hrs.map((h, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-3 border-b border-[#B2AC88]/10 last:border-0 ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <span
                    className="text-[#2C2C2C] font-medium text-sm"
                    style={{ fontFamily: "Assistant, sans-serif" }}
                  >
                    {h.day}
                  </span>
                  <span
                    className={`text-sm font-semibold tabular-nums ${
                      h.time === "סגור" || h.time === "Closed"
                        ? "text-[#708090]"
                        : "text-[#B2AC88]"
                    }`}
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs column */}
          <div
            className={`flex flex-col gap-5 ${
              isRtl ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.15 }}
              className={`flex items-center gap-5 bg-white rounded-2xl p-6 border border-[#B2AC88]/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-white transition-transform duration-200 group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <MessageCircle size={24} />
              </div>
              <div className={`flex flex-col ${isRtl ? "items-end" : ""}`}>
                <span
                  className="text-base font-bold text-[#2C2C2C]"
                  style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                >
                  {t.whatsapp}
                </span>
                <span
                  className="text-xs text-[#708090] mt-0.5"
                  style={{ fontFamily: "Assistant, sans-serif" }}
                >
                  {t.whatsappSub}
                </span>
              </div>
            </motion.a>

            {/* Call CTA */}
            <motion.a
              href={`tel:${PHONE_RAW}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.25 }}
              className={`flex items-center gap-5 bg-white rounded-2xl p-6 border border-[#B2AC88]/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-white transition-transform duration-200 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #B2AC88, #9A9470)",
                }}
              >
                <Phone size={24} />
              </div>
              <div className={`flex flex-col ${isRtl ? "items-end" : ""}`}>
                <span
                  className="text-base font-bold text-[#2C2C2C]"
                  style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                >
                  {t.call}
                </span>
                <span
                  className="text-xs text-[#708090] mt-0.5 tabular-nums"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.callSub}
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B2AC88]/30 to-transparent" />
    </section>
  );
}
