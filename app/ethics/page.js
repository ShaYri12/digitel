import React from "react";
import OurPledge from "./OurPledge";
import CardWithText from "./CardWithText";
import EthicalSteeringCommittee from "./EthicalSteeringCommittee";
import Image from "next/image";

const Ethics = () => {
  return (
    <main className="relative min-h-screen md:pt-12 pt-8 md:px-6 px-4 pb-[200px]">
      <div className="max-w-[1280px] mx-auto text-white">
        <h1 className="mb-[30px] xl:text-[92px] lg:text-[70px] md:text-[60px] text-[50px] font-[400]">
          Ethics
        </h1>
        <div className="space-y-[17px] mb-[21px]">
          <CardWithText
            title="Commitment to Ethical Practices in AI-Driven Communication"
            para="As early adopters of  AI-powered call technology, we understand the transformative potential of this technology. AI systems enhance efficiency, improve customer interactions, and drive operational savings, enabling businesses to provide seamless and personalized communication experiences.However, as with any powerful tool, there are associated risks. These include potential biases in AI responses, misuse by malicious actors, and concerns about data privacy and trust."
          />
          <CardWithText
            title="Responsible Use of Our Technology"
            para="Our mission is to deploy AI responsibly, ensuring that our solutions contribute positively to the communication landscape. We are dedicated to setting and upholding ethical standards that promote fairness, transparency, and trust within our industry. As the adoption of AI-driven call solutions grows, there is a critical need for clear and actionable guidelines to govern its use. To meet this need, we have partnered with leading privacy experts and ethicists to establish comprehensive ethical frameworks and codes of conduct. This collaboration reflects our unwavering commitment to responsible AI deployment and transparency in all interactions."
          />
          <CardWithText
            title="Our Ethical Commitment"
            para="We have made a public commitment to operate with integrity, ensuring our AI solutions align with ethical principles. Moreover, we call on others in the industry to adopt similar practices.This commitment is not static; it marks the start of an ongoing journey. Through dialogue with our customers, industry partners, regulators, and consumers, we aim to refine and strengthen these principles. Our goal is to adapt and grow in response to evolving needs while maintaining the highest ethical standards.We invite partners across the industry to join us in building a trustworthy future for AI-driven communication. Together, we can foster consumer trust and create a sustainable, ethical foundation for the future of AI-powered solutions."
          />
        </div>
        <EthicalSteeringCommittee />
        <OurPledge />
        <CardWithText
          title="Our Commitment to Action"
          para="This pledge underscores our dedication to leading the real-time interactive avatar industry with integrity. It represents our vision of creating a future where avatars enhance communication, empower users, and inspire trust. By inviting others to join us in this mission, we aim to ensure that innovation and ethics work in harmony to benefit society as a whole."
        />
      </div>
      <Image
        src="/assets/dots.png"
        alt="dots"
        width={330}
        height={208}
        className="absolute right-0 md:bottom-[-150px] bottom-[-120px] z-1 md:w-[330px] w-[290px]"
      />
    </main>
  );
};

export default Ethics;
