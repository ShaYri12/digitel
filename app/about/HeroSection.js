export default function HeroSection() {
  return (
    <section className="w-full text-white md:py-12 py-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white">
        <h1 className="text-white xl:text-[92px] lg:leading-[91.54px] lg:text-[80px] md:text-[60px] md:leading-[70px] sm:text-[50px] sm:leading-[60px] text-[34px] leading-[37px] font-[400] md:mb-[62px] mb-[26px]">
          We Believe In Good Ideas Flexibility & Precision
        </h1>

        <div className="grid md:grid-cols-[auto_auto_1fr] lg:grid-cols-[1fr_1fr_1.2fr] items-stretch gap-6">
          {/* Founded Card */}
          <div
            className="backdrop-blur-sm rounded-3xl border border-[#FFFFFF33] xl:px-[46px] md:px-[28px] px-4 md:py-[32px] py-[20px]"
            style={{
              background:
                "linear-gradient(166.27deg, rgba(38, 38, 38, 0.2) 69.2%, #363636 102.23%)",
            }}
          >
            <div className="md:mb-[20px] mb-4">
              <div className="text-[33px] font-bold leading-[32.84px] mb-1">
                2024
              </div>
              <div className="md:text-[18px] font-[300]">Founded</div>
            </div>
            <p className="md:text-[18px] font-[300]">
              We started with a mission to help enterprises be closer to their
              customers and interact naturally.
            </p>
          </div>

          {/* Team Members Card */}
          <div
            className="backdrop-blur-sm rounded-3xl border border-[#FFFFFF33] xl:px-[46px] md:px-[28px] px-4 md:py-[32px] py-[20px]"
            style={{
              background:
                "linear-gradient(166.27deg, rgba(38, 38, 38, 0.2) 69.2%, #363636 102.23%)",
            }}
          >
            <div className="md:mb-[20px] mb-4">
              <div className="text-[33px] font-bold leading-[32.84px] mb-1">
                20+
              </div>
              <div className="md:text-[18px] font-[300]">Team Members</div>
            </div>
            <p className="md:text-[18px] font-[300]">
              Our team has the best AI minds obsessed with enabling businesses
              to accomplish great things.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative max-h-auto h-[225px] rounded-3xl overflow-hidden md:col-span-2 lg:col-span-1">
            <img
              src="/assets/about-hero.jpg"
              alt="Team members collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
