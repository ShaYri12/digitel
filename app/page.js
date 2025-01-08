"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import LogoSlider from "./components/LogoSlider";
import FAQ from "./components/home/FAQ";
import Hero from "./components/home/Hero";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    if (
      pathname === "/support-request" ||
      pathname === "/" ||
      pathname === "/about"
    ) {
      body.classList.add("bg-grid-white");
    } else {
      body.classList.remove("bg-grid-white");
    }
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <Hero />
      <LogoSlider />
      <div>IIElevenLabs</div>
      <FAQ />
    </div>
  );
}
