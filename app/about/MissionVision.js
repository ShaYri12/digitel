const DataWithImage = ({
  title,
  heading,
  description,
  imgSrc,
  reversed = false,
}) => {
  return (
    <div
      className={`flex flex-col xl:gap-[160px] lg:gap-[100px] md:gap-[50px] gap-[30px] items-center ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Text Content */}
      <div className="flex-1">
        <h2 className="md:text-[24px] text-[18px] font-[400] mb-3">{title}</h2>
        <h3 className="md:text-[62px] text-[40px] font-[400] mb-[18px] md:leading-[62px] leading-[48px]">
          {heading}
        </h3>
        <p className="md:text-[18px] font-[300]">{description}</p>
      </div>

      {/* Image */}
      <div className="flex-1 md:w-full sm:w-[50%] w-full">
        <div className="rounded-3xl overflow-hidden w-full md:h-[393px] h-[300px]">
          <img
            src={imgSrc}
            alt="Visual representation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Our Mission",
    heading: "Simplifying Conversations, Amplifying Results",
    description:
      "That Makes Millions of calls, sounds human, available 24/7, cuts costs, accelerates sales, provides customer support, qualifies leads, enhances your business growth.",
    imgSrc: "/assets/mission-img.jpg",
    reversed: false,
  },
  {
    title: "Our Vision",
    heading: "Empowering businesses worldwide ",
    description:
      "That Makes Millions of calls, sounds human, available 24/7, cuts costs, accelerate sales , provides customer support, qualify leads, enhance your business growth",
    imgSrc: "/assets/vision-img.jpg",
    reversed: true,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#141414] w-full text-white pt-2 md:pb-12 pb-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white md:space-y-[120px] space-y-[60px]">
        {data.map((item, index) => (
          <DataWithImage
            key={index}
            title={item.title}
            heading={item.heading}
            description={item.description}
            imgSrc={item.imgSrc}
            reversed={item.reversed}
          />
        ))}
      </div>
    </section>
  );
}
