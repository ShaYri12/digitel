import Image from "next/image";

export default function ExecutiveTeam() {
  const committeeMembers = [
    {
      name: "Emma Johnson",
      role: "CEO & Founder",
      image: "/assets/ethics-img1.jpg",
    },
    {
      name: "Liam Davis",
      role: "Chief Operating Officer",
      image: "/assets/ethics-img2.jpg",
    },
    {
      name: "Olivia Chen",
      role: "Software Engineer",
      image: "/assets/team3.jpg",
    },
    {
      name: "Sophia Martinez",
      role: "Chief Technology Officer",
      image: "/assets/team4.jpg",
    },
    {
      name: "Ethan Carter",
      role: "Marketing Strategist",
      image: "/assets/team5.jpg",
    },
    {
      name: "Ava Thompson",
      role: "Customer Success Manager",
      image: "/assets/team6.jpg",
    },
    {
      name: "Ethan Carter",
      role: "Marketing Strategist",
      image: "/assets/ethics-img2.jpg",
    },
  ];

  return (
    <section className="bg-[#141414] w-full text-white md:py-12 py-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white">
        <h2 className="md:text-[62px] text-[40px] font-[400] text-center mb-[18px]">
          The Executive Team
        </h2>

        <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[24px]">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center gap-4"
            >
              <div className="sm:w-[300px] w-[280px] sm:min-w-[300px] min-w-[280px] sm:h-[347px] h-[300px] overflow-hidden rounded-[20px]">
                {/* Using a div with background-image for better image control */}
                <img
                  src={member.image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-center">
                <h3 className="md:text-[24px] text-[20px] font-[400] mb-[3px]">
                  {member.name}
                </h3>
                <p className="md:text-[18px] text-[16px] font-[300]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
