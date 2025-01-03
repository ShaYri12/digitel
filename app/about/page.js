"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
    <section className="min-h-screen">
      <div>About</div>
    </section>
  );
};

export default About;
