"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Star } from "lucide-react";

type Lang = "he" | "en";

const PHONE_RAW = "+972533931443";
const PHONE_DISPLAY = "053-393-1443";
const WHATSAPP_URL = `https://wa.me/972533931443`;
const MAPS_URL =
  "https://maps.google.com/?q=Smilanski+Moshe+24+Netanya+Israel";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Smilanski+Moshe+24+Netanya+Israel&output=embed&z=16";

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
    eyebrow: "צור קשר",
    heading: "נשמח\nלשמוע מכם",
    sub: "הזמינו תור, שאלו שאלה, או פשוט בואו להכיר.",
    phone: "טלפון",
    address: "כתובת",
    addressValue: "שמילנסקי משה 24, נתניה",
    hoursTitle: "שעות פעילות",
    whatsapp: "שלחו הודעה ב-WhatsApp",
    callNow: "התקשרו",
    getDirections: "הוראות הגעה",
    googleReviews: "ביקורות Google",
    googleStars: "5.0 · מעל 150 ביקורות",
  },
  en: {
    eyebrow: "Contact",
    heading: "We'd Love\nTo Hear From You",
    sub: "Book a session, ask a question, or just come say hello.",
    phone: "Phone",
    address: "Address",
    addressValue: "Smilanski Moshe 24, Netanya",
    hoursTitle: "Opening Hours",
    whatsapp: "Message on WhatsApp",
    callNow: "Call Now",
    getDirections: "Get Directions",
    googleReviews: "Google Reviews",
    googleStars: "5.0 · 150+ Reviews",
  },
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ContactProps {
  lang: Lang;
}

export default function Contact({ lang }: ContactProps) {
  const t = copy[lang];
  const isRtl = lang === "he";
  const hrs = hours[lang];

  return (
    <section id="contact" className="py-24 bg-[#FAFAF5] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B2AC88]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-[#708090] text-lg"
            style={{ fontFamily: "Assistant, sans-serif" }}
          >
            {t.sub}
          </p>
        </motion.div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${
            isRtl ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Info cards */}
          <div
            className={`flex flex-col gap-5 ${isRtl ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.1 }}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-[#B2AC88]/10 flex items-center gap-5 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#B2AC88]"
                style={{ background: "rgba(178,172,136,0.12)" }}
              >
                <Phone size={22} />
              </div>
              <div className={`flex flex-col gap-1 ${isRtl ? "items-end" : ""}`}>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.phone}
                </span>
                <span
                  className="text-xl font-bold text-[#2C2C2C]"
                  style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                >
                  {PHONE_DISPLAY}
                </span>
                <div
                  className={`flex gap-3 mt-1 ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="text-xs font-semibold text-white px-3 py-1.5 rounded-full transition-all hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #B2AC88, #9A9470)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {t.callNow}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.2 }}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-[#B2AC88]/10 flex items-center gap-5 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#B2AC88]"
                style={{ background: "rgba(178,172,136,0.12)" }}
              >
                <MapPin size={22} />
              </div>
              <div className={`flex flex-col gap-1 ${isRtl ? "items-end" : ""}`}>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.address}
                </span>
                <span
                  className="text-base font-semibold text-[#2C2C2C]"
                  style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                >
                  {t.addressValue}
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B2AC88] hover:underline mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.getDirections} →
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.3 }}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-[#B2AC88]/10 ${
                isRtl ? "text-right" : ""
              }`}
            >
              <div
                className={`flex items-center gap-3 mb-4 ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#B2AC88]"
                  style={{ background: "rgba(178,172,136,0.12)" }}
                >
                  <Clock size={22} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.hoursTitle}
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {hrs.map((h, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between text-sm ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className="text-[#2C2C2C] font-medium"
                      style={{ fontFamily: "Assistant, sans-serif" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className={`font-semibold tabular-nums ${
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

            {/* Google rating */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.4 }}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-[#B2AC88]/10 flex items-center gap-5 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#FFF8E1]">
                <Star size={22} style={{ color: "#FBBC04" }} />
              </div>
              <div className={`flex flex-col gap-1 ${isRtl ? "items-end" : ""}`}>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.googleReviews}
                </span>
                <div
                  className={`flex items-center gap-1.5 ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex gap-0.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="#FBBC04" stroke="none" />
                    ))}
                  </div>
                  <span
                    className="text-sm font-bold text-[#2C2C2C]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {t.googleStars}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map + WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease, delay: 0.15 }}
            className={`flex flex-col gap-5 ${isRtl ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="flex-1 rounded-3xl overflow-hidden shadow-lg min-h-[320px] relative bg-[#E8E4D0]">
              <iframe
                title="Business Location"
                src={MAPS_EMBED}
                className="w-full h-full absolute inset-0 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 py-5 px-8 rounded-2xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <MessageCircle size={22} />
              {t.whatsapp}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
