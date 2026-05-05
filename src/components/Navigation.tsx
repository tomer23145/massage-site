"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

type Lang = "he" | "en";

const navLinks = {
  he: [
    { label: "שירותים", href: "#services" },
    { label: "הזמנת תור", href: "#booking" },
    { label: "המלצות", href: "#testimonials" },
    { label: "צור קשר", href: "#contact" },
  ],
  en: [
    { label: "Services", href: "#services" },
    { label: "Book Now", href: "#booking" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

const cta = { he: "הזמינו תור", en: "Book Now" };
const phone = "050-000-0000";

interface NavigationProps {
  lang: Lang;
  onLangToggle: (lang: Lang) => void;
}

export default function Navigation({ lang, onLangToggle }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navLinks[lang];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo — right side in RTL */}
            <a href="#" className="flex flex-col leading-none group">
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "Frank Ruhl Libre, serif", color: "#2C2C2C" }}
              >
                מרפאת העיסוי
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#708090" }}
              >
                Therapeutic Massage
              </span>
            </a>

            {/* Desktop nav — center */}
            <nav className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-[#B2AC88]"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#708090" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right cluster: phone + lang toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={() => onLangToggle(lang === "he" ? "en" : "he")}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#B2AC88] text-[#708090] hover:bg-[#B2AC88] hover:text-white transition-all duration-200"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {lang === "he" ? "EN" : "עב"}
              </button>

              {/* Phone */}
              <a
                href={`tel:${phone.replace(/-/g, "")}`}
                className="flex items-center gap-1.5 text-sm text-[#708090] hover:text-[#B2AC88] transition-colors"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Phone size={15} />
                <span className="hidden lg:inline">{phone}</span>
              </a>

              {/* CTA */}
              <a
                href="#booking"
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #B2AC88 0%, #9A9470 100%)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {cta[lang]}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-[#708090] hover:text-[#B2AC88] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[68px] z-40 glass shadow-lg border-t border-[#B2AC88]/20 md:hidden"
          >
            <nav className="flex flex-col divide-y divide-[#B2AC88]/10">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-4 text-base font-medium text-[#2C2C2C] hover:text-[#B2AC88] transition-colors"
                  style={{ fontFamily: "Assistant, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-4 flex items-center justify-between">
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #B2AC88 0%, #9A9470 100%)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {cta[lang]}
                </a>
                <button
                  onClick={() => {
                    onLangToggle(lang === "he" ? "en" : "he");
                    setMobileOpen(false);
                  }}
                  className="mr-3 text-xs font-semibold px-3 py-2 rounded-full border border-[#B2AC88] text-[#708090]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {lang === "he" ? "EN" : "עב"}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
