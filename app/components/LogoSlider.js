"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function LogoSlider() {
  const logos = [
    {
      src: "/assets/baseten.png",
      alt: "Company Logo 1",
      width: 218,
      height: 50,
    },
    {
      src: "/assets/combinator.png",
      alt: "Company Logo 2",
      width: 227,
      height: 66,
    },
    {
      src: "/assets/sears.png",
      alt: "Company Logo 3",
      width: 158,
      height: 42,
    },
    {
      src: "/assets/better.png",
      alt: "Company Logo 4",
      width: 194,
      height: 64,
    },
    {
      src: "/assets/paypal.png",
      alt: "Company Logo 5",
      width: 220,
      height: 57,
    },
    {
      src: "/assets/combinator.png",
      alt: "Company Logo 2",
      width: 227,
      height: 66,
    },
    {
      src: "/assets/sears.png",
      alt: "Company Logo 3",
      width: 158,
      height: 42,
    },
  ];

  return (
    <section className="md:py-[100px] py-[80px]">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {logos.map((logo, index) => (
          <div key={index} className="md:mx-12 mx-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="transition-opacity md:w-unset w-[150px]"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
