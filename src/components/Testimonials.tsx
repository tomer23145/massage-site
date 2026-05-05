"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Lang = "he" | "en";

interface Review {
  nameHe: string;
  nameEn: string;
  textHe: string;
  textEn: string;
  date: string;
  stars: number;
}

const reviews: Review[] = [
  {
    nameHe: "מיכל כהן",
    nameEn: "Michal Cohen",
    textHe: "הגעתי עם כאבי גב קשים וחיכיתי לפגישה בספקנות, אבל כבר אחרי הטיפול הראשון הרגשתי הבדל משמעותי. מטפל מקצועי ואדיב, סביבה נעימה ומרגיעה. ממליצה בחום!",
    textEn: "I came with severe back pain and was quite skeptical, but after the very first session I felt a significant difference. Professional and kind therapist, pleasant calming environment. Highly recommended!",
    date: "מרץ 2024",
    stars: 5,
  },
  {
    nameHe: "דני לוי",
    nameEn: "Danny Levy",
    textHe: "כבר שנים שאני בא לפה. העיסוי העמוק הכי טוב שקיבלתי בחיים. המטפל יודע בדיוק איפה הלחץ ואיך לשחרר אותו. כל ביקור הוא חוויה מחדש.",
    textEn: "I've been coming here for years. The best deep tissue massage I've ever had. The therapist knows exactly where the tension is and how to release it. Every visit is a new experience.",
    date: "ינואר 2024",
    stars: 5,
  },
  {
    nameHe: "רונה שמש",
    nameEn: "Rona Shemesh",
    textHe: "קיבלתי עיסוי שוודי ולא הייתי מוכנה לכמה שזה יהיה מרגיע. הסביבה נקייה ונעימה, המטפל מקשיב לצרכים שלי. יצאתי כאילו נולדתי מחדש!",
    textEn: "I got a Swedish massage and wasn't prepared for how deeply relaxing it would be. Clean and pleasant environment, therapist who truly listens. I left feeling reborn!",
    date: "פברואר 2024",
    stars: 5,
  },
  {
    nameHe: "אבי גולן",
    nameEn: "Avi Golan",
    textHe: "הגעתי אחרי ריצת מרתון עם כאבים בכל הגוף. העיסוי הספורטיבי עשה פלאים — חזרתי לאימונים הרבה מהר יותר מהרגיל. שירות ברמה הגבוהה ביותר.",
    textEn: "I arrived after a marathon with aches all over. The sports massage worked wonders — I returned to training much faster than usual. Service of the highest level.",
    date: "דצמבר 2023",
    stars: 5,
  },
  {
    nameHe: "תמר יצחק",
    nameEn: "Tamar Yitzhak",
    textHe: "אחרי שנים של עיסויים שונים, הגעתי לפסגה כאן. המקצועיות, הניסיון ותשומת הלב פשוט יוצאים מן הכלל. מקום שאני ממליצה לכל אחד ואחת.",
    textEn: "After years of trying different massages, I finally found the pinnacle here. The professionalism, experience, and attention to detail are simply outstanding. I recommend it to everyone.",
    date: "אפריל 2024",
    stars: 5,
  },
  {
    nameHe: "שירה ברק",
    nameEn: "Shira Barak",
    textHe: "הגעתי לפני חתונה ורציתי להרגיש בשיא. הטיפול היה מושלם — יצאתי רגועה, פנויה ומוכנה ליום הגדול. תודה על הפינוק המדהים!",
    textEn: "I came before my wedding wanting to feel my absolute best. The treatment was perfect — I left relaxed and clear-headed, ready for the big day. Thank you for the amazing pampering!",
    date: "מאי 2024",
    stars: 5,
  },
];

const sectionCopy = {
  he: {
    eyebrow: "מה אומרים הלקוחות",
    heading: "ביקורות אמיתיות\nמלקוחות מרוצים",
    sub: "מעל 150 לקוחות שיתפו את החוויה שלהם.",
    googleBadge: "5.0 ב-Google",
  },
  en: {
    eyebrow: "What Clients Say",
    heading: "Real Reviews\nFrom Happy Clients",
    sub: "Over 150 satisfied clients have shared their experience.",
    googleBadge: "5.0 on Google",
  },
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface TestimonialsProps {
  lang: Lang;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = sectionCopy[lang];
  const isRtl = lang === "he";

  return (
    <section id="testimonials" className="py-12 bg-[#F0EDE0] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B2AC88]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
          className={`mb-8 ${isRtl ? "text-right" : "text-left"}`}
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
          <div
            className={`flex items-center gap-4 flex-wrap ${
              isRtl ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <p
              className="text-[#708090] text-lg"
              style={{ fontFamily: "Assistant, sans-serif" }}
            >
              {t.sub}
            </p>
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#B2AC88]/40 bg-[#FAFAF5] flex-shrink-0 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`flex gap-0.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="#B2AC88" stroke="none" />
                ))}
              </div>
              <span
                className="text-xs font-semibold text-[#2C2C2C]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t.googleBadge}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className={`relative flex flex-col bg-white rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#B2AC88]/10 hover:border-[#B2AC88]/30 ${
                isRtl ? "text-right items-end" : "text-left items-start"
              }`}
            >
              <div
                className={`absolute top-6 ${isRtl ? "left-6" : "right-6"} opacity-10`}
              >
                <Quote
                  size={32}
                  style={{ color: "#B2AC88" }}
                  className={isRtl ? "rotate-180" : ""}
                />
              </div>

              <div className={`flex gap-0.5 mb-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} size={15} fill="#B2AC88" stroke="none" />
                ))}
              </div>

              <p
                className="text-[#4A4A4A] text-sm leading-relaxed flex-1 mb-5"
                style={{ fontFamily: "Assistant, sans-serif" }}
              >
                {lang === "he" ? review.textHe : review.textEn}
              </p>

              <div className="w-full h-px bg-[#B2AC88]/15 mb-4" />

              <div
                className={`flex items-center justify-between w-full ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #B2AC88, #9A9470)",
                    }}
                  >
                    {(lang === "he" ? review.nameHe : review.nameEn).charAt(0)}
                  </div>
                  <span
                    className="text-sm font-semibold text-[#2C2C2C]"
                    style={{ fontFamily: "Assistant, sans-serif" }}
                  >
                    {lang === "he" ? review.nameHe : review.nameEn}
                  </span>
                </div>
                <span
                  className="text-xs text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B2AC88]/30 to-transparent" />
    </section>
  );
}
