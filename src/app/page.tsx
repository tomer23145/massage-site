"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

type Lang = "he" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("he");

  return (
    <main dir={lang === "he" ? "rtl" : "ltr"}>
      <Navigation lang={lang} onLangToggle={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
    </main>
  );
}
