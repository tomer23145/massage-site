"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Star } from "lucide-react";

type Lang = "he" | "en";

const PHONE_RAW = "+972533931443";
const PHONE_DISPLAY = "053-393-1443";
const WHATSAPP_URL = "https://wa.me/972533931443";
const MAPS_URL = "https://maps.google.com/?q=Smilanski+Moshe+24+Netanya+Israel";
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
    heading: "הזמינו תור\nאו צרו קשר",
    phone: "טלפון",
    address: "כתובת",
    addressValue: "שמילנסקי משה 24, נתניה",
    hoursTitle: "שעות פעילות",
    whatsapp: "WhatsApp",
    callNow: "התקשרו",
    getDirections: "הוראות הגעה",
    googleReviews: "ביקורות Google",
    googleStars: "5.0 · מעל 150 ביקורות",
    bookViaWhatsapp: "הזמינו דרך WhatsApp",
    bookViaPhone: "התקשרו להזמנה",
  },
  en: {
    eyebrow: "Contact",
    heading: "Book a Session\nor Get in Touch",
    phone: "Phone",
    address: "Address",
    addressValue: "Smilanski Moshe 24, Netanya",
    hoursTitle: "Opening Hours",
    whatsapp: "WhatsApp",
    callNow: "Call Now",
    getDirections: "Get Directions",
    googleReviews: "Google Reviews",
    googleStars: "5.0 · 150+ Reviews",
    bookViaWhatsapp: "Book via WhatsApp",
    bookViaPhone: "Call to Book",
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
    <section id="contact" className="py-12 bg-[#FAFAF5] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B2AC88]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className={`mb-8 ${isRtl ? "text-right" : "text-left"}`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#708090] border border-[#B2AC88]/40 bg-white/70 mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {t.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] leading-tight whitespace-pre-line"
            style={{ fontFamily: "Frank Ruhl Libre, serif" }}
          >
            {t.heading}
          </h2>
        </motion.div>

        {/* 2-column layout: info left, map right */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch ${
            isRtl ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* ── Column 1: Contact details ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease, delay: 0.1 }}
            className={`flex flex-col gap-4 ${isRtl ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Phone + primary booking CTAs */}
            <div
              className={`bg-white rounded-2xl p-5 border border-[#B2AC88]/10 shadow-sm ${
                isRtl ? "text-right" : ""
              }`}
            >
              <div
                className={`flex items-center gap-3 mb-4 ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[#B2AC88]"
                  style={{ background: "rgba(178,172,136,0.12)" }}
                >
                  <Phone size={17} />
                </div>
                <div className={`flex flex-col ${isRtl ? "items-end" : ""}`}>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider text-[#708090]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {t.phone}
                  </span>
                  <span
                    className="text-lg font-bold text-[#2C2C2C] tabular-nums"
                    style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                  >
                    {PHONE_DISPLAY}
                  </span>
                </div>
              </div>

              {/* CTA buttons — absorbed from deleted Booking section */}
              <div
                className={`grid grid-cols-2 gap-3 ${isRtl ? "direction-rtl" : ""}`}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95 ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <MessageCircle size={16} />
                  {t.bookViaWhatsapp}
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95 ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #B2AC88, #9A9470)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <Phone size={16} />
                  {t.bookViaPhone}
                </a>
              </div>
            </div>

            {/* Address */}
            <div
              className={`bg-white rounded-2xl p-5 border border-[#B2AC88]/10 shadow-sm flex items-center gap-4 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[#B2AC88]"
                style={{ background: "rgba(178,172,136,0.12)" }}
              >
                <MapPin size={17} />
              </div>
              <div className={`flex flex-col ${isRtl ? "items-end" : ""}`}>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.address}
                </span>
                <span
                  className="text-sm font-semibold text-[#2C2C2C]"
                  style={{ fontFamily: "Frank Ruhl Libre, serif" }}
                >
                  {t.addressValue}
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B2AC88] hover:underline mt-0.5"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.getDirections} →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div
              className={`bg-white rounded-2xl p-5 border border-[#B2AC88]/10 shadow-sm ${
                isRtl ? "text-right" : ""
              }`}
            >
              <div
                className={`flex items-center gap-3 mb-3 ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[#B2AC88]"
                  style={{ background: "rgba(178,172,136,0.12)" }}
                >
                  <Clock size={17} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t.hoursTitle}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {hrs.map((h, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between text-sm ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className="text-[#2C2C2C] font-medium text-xs"
                      style={{ fontFamily: "Assistant, sans-serif" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className={`text-xs font-semibold tabular-nums ${
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
            </div>

            {/* Google rating */}
            <div
              className={`bg-white rounded-2xl p-5 border border-[#B2AC88]/10 shadow-sm flex items-center gap-4 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#FFF8E1]">
                <Star size={17} style={{ color: "#FBBC04" }} />
              </div>
              <div className={`flex flex-col gap-0.5 ${isRtl ? "items-end" : ""}`}>
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
                      <Star key={j} size={13} fill="#FBBC04" stroke="none" />
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
            </div>
          </motion.div>

          {/* ── Column 2: Map (full height) ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease, delay: 0.15 }}
            className={`min-h-[360px] lg:min-h-0 ${isRtl ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="w-full h-full min-h-[360px] rounded-2xl overflow-hidden shadow-lg relative bg-[#E8E4D0]">
              <iframe
                title="Business Location"
                src={MAPS_EMBED}
                className="w-full h-full absolute inset-0 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
