"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import HeroSection from "./HeroSection";
import LogoSlider from "../components/LogoSlider";
import MissionVision from "./MissionVision";
import Values from "./Values";

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
    <main className="relative min-h-screen">
      <HeroSection />
      <LogoSlider />
      <MissionVision />
      <Values />
    </main>
  );
};

export default About;
