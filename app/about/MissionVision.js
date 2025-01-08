const DataWithImage = ({
  title,
  heading,
  description,
  imgSrc,
  reversed = false,
}) => {
  return (
    <div
      className={`flex flex-col gap-8 items-center ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl text-gray-300">{title}</h2>
          <h3 className="text-5xl md:text-6xl font-light leading-tight">
            {heading}
          </h3>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl">{description}</p>
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={imgSrc}
            alt="Visual representation"
            className="w-full h-[393px] object-cover"
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
    heading: "Innovating the Future of Communication",
    description:
      "We aim to redefine customer interactions with AI-driven solutions, making every connection meaningful and impactful.",
    imgSrc: "/assets/vision-img.jpg",
    reversed: true,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#141414] w-full text-white pt-2 md:pb-12 pb-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white md:space-y-[100px] space-y-[50px]">
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
