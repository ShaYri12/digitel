"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import LogoSlider from "./components/LogoSlider";
import FAQ from "./components/FAQ";

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
    <div className="py-[100px] min-h-screen">
      <div>Hero section</div>
      <LogoSlider />
      <div>IIElevenLabs</div>
      <FAQ />
    </div>
  );
}
