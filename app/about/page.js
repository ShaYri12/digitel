"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import HeroSection from "./HeroSection";
import LogoSlider from "../components/LogoSlider";

const About = () => {
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
    <main className="relative min-h-screen md:py-12 py-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white">
        <HeroSection />
        <LogoSlider />
      </div>
    </main>
  );
};

export default About;
