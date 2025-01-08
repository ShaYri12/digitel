import {
  PiKeyholeFill,
  PiLightbulbFill,
  PiTrendUpBold,
  PiTrophyFill,
} from "react-icons/pi";

export default function Values() {
  const values = [
    {
      icon: <PiLightbulbFill className="w-[42px] h-[42px]" />,
      title: "Customer-Driven Innovation",
      description:
        "We prioritize your success by investing in cutting-edge solutions and deep user research. By aligning our goals with yours, we create AI-powered experiences that elevate your customer interactions, building lasting relationships grounded in trust and collaboration.",
    },
    {
      icon: <PiKeyholeFill className="w-[42px] h-[42px]" />,
      title: "Privacy-Centric Commitment",
      description:
        "Your data, your rules. We ensure your information is handled with the highest levels of security and transparency, giving you complete control and peace of mind while safeguarding your customers' trust.",
    },
    {
      icon: <PiTrendUpBold className="w-[42px] h-[42px]" />,
      title: "Culture of Empowerment and Growth",
      description:
        "Diversity, respect, and learning are at the heart of what we do. We embrace feedback, mentor one another, and strive for continuous improvement, ensuring our team—and yours—achieves new heights of success together.",
    },
    {
      icon: <PiTrophyFill className="w-[42px] h-[42px]" />,
      title: "Relentless Pursuit of Excellence",
      description:
        "Your data, your rules. We ensure your information is handled with the highest levels of security and transparency, giving you complete control and peace of mind while safeguarding your customers' trust.",
    },
  ];

  return (
    <section className="bg-[#141414] w-full text-white md:py-12 py-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white">
        <h2 className="md:text-[62px] text-[40px] font-[400] text-center mb-[18px]">
          Values
        </h2>

        <div className="grid md:grid-cols-2 gap-[20px]">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#FFFFFF33] xl:px-[46px] md:px-[28px] px-4 md:py-[57px] py-[30px]"
              style={{
                background:
                  "linear-gradient(166.27deg, rgba(38, 38, 38, 0.2) 69.2%, #363636 102.23%)",
              }}
            >
              <div className="bg-purple rounded-full w-[90px] min-w-[90px] h-[90px] flex items-center justify-center mb-[20px]">
                {value.icon}
              </div>
              <h3 className="md:text-[24px] text-[18px] font-[400] mb-[8px]">
                {value.title}
              </h3>
              <p className="md:text-[18px] font-[300]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
