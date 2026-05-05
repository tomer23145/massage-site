import { Phone, MapPin } from "lucide-react";

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

const copy = {
  he: {
    name: "מסאז׳ נתניה",
    tagline: "מגע מקצועי שמרפא",
    address: "שמילנסקי משה 24, נתניה",
    phone: "053-393-1443",
    rights: "כל הזכויות שמורות",
  },
  en: {
    name: "Massage Netanya",
    tagline: "Expert touch that heals",
    address: "Smilanski Moshe 24, Netanya",
    phone: "053-393-1443",
    rights: "All rights reserved",
  },
};

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = copy[lang];
  const links = navLinks[lang];
  const isRtl = lang === "he";
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#2C2C2C] text-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 ${
            isRtl ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Logo + tagline */}
          <div className={`flex flex-col gap-1 ${isRtl ? "items-end" : ""}`}>
            <span
              className="text-lg font-bold tracking-tight text-white"
              style={{ fontFamily: "Frank Ruhl Libre, serif" }}
            >
              {t.name}
            </span>
            <span
              className="text-xs text-white/50 tracking-wide"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t.tagline}
            </span>
          </div>

          {/* Nav links */}
          <nav
            className={`flex items-center gap-6 flex-wrap ${
              isRtl ? "justify-end" : ""
            }`}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact info */}
          <div
            className={`flex flex-col gap-2 ${isRtl ? "items-end" : ""}`}
          >
            <a
              href="tel:+972533931443"
              className={`flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors ${
                isRtl ? "flex-row-reverse" : ""
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <Phone size={14} className="text-[#B2AC88]" />
              {t.phone}
            </a>
            <div
              className={`flex items-center gap-2 text-sm text-white/70 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
              style={{ fontFamily: "Assistant, sans-serif" }}
            >
              <MapPin size={14} className="text-[#B2AC88]" />
              {t.address}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p
            className={`text-xs text-white/30 ${isRtl ? "text-right" : "text-left"}`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            © {year} {t.name} · {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
