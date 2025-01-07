import Image from "next/image";

export default function EthicalSteeringCommittee() {
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
      image: "/assets/ethics-img1.jpg",
    },
  ];

  return (
    <section
      className="mb-[34px] md:rounded-[31px] rounded-[25px] border border-[#FFFFFF33] lg:px-[70px] md:px-[40px] px-4 md:py-[50px] py-[30px]"
      style={{
        background:
          "linear-gradient(166.27deg, rgba(38, 38, 38, 0.2) 69.2%, #363636 102.23%)",
      }}
    >
      <h2 className="md:text-[32px] text-[24px] font-[400] mb-[34px]">
        Ethical Steering Committee
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {committeeMembers.map((member, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-[177px] min-w-[177px] h-[240px] overflow-hidden rounded-[20px]">
              {/* Using a div with background-image for better image control */}
              <img
                src={member.image}
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="md:text-[24px] text-[20px] font-[400] mb-[6px]">
                {member.name}
              </h3>
              <p className="md:text-[18px] text-[16px] font-[400]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
