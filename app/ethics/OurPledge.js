"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export default function OurPledge() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const pledgeItems = [
    {
      title: "Promoting Transparency in AI Interactions",
      content:
        "We believe that trust starts with transparency. Customers will always be informed when they are interacting with AI-powered systems. We will clearly explain how our AI works, the data it uses, and provide options for escalating interactions to human representatives when needed. By prioritizing openness, we aim to empower customers to make informed decisions.",
    },
    {
      title: "Upholding Privacy and Data Protection",
      content:
        "We maintain the highest standards of data protection and privacy. All customer interactions are encrypted, and personal information is handled in compliance with global privacy regulations. We only collect and process data that is necessary for service improvement and with explicit user consent.",
    },
    {
      title: "Preventing Bias and Ensuring Fairness",
      content:
        "We actively work to identify and eliminate potential biases in our AI systems. Our development process includes rigorous testing and continuous monitoring to ensure fair treatment of all users regardless of their background, language, or region.",
    },
    {
      title: "Collaborating on Industry Standards",
      content:
        "We actively participate in industry initiatives to develop and promote ethical AI standards. By sharing best practices and learning from others, we contribute to the responsible advancement of AI technology in customer service.",
    },
    {
      title: "Fostering Ongoing Dialogue and Improvement",
      content:
        "We maintain open channels of communication with our users and stakeholders. Their feedback helps us continuously improve our AI systems and ensure they meet evolving needs and expectations.",
    },
    {
      title: "Enhancing Accessibility and Inclusivity",
      content:
        "Our AI systems are designed to be accessible to users of all abilities. We follow WCAG guidelines and continuously work to improve the inclusivity of our services through multiple language support and adaptive interfaces.",
    },
    {
      title: "Ensuring Accountability and Transparency in AI Development",
      content:
        "We maintain clear documentation of our AI development processes and decision-making systems. Regular audits and assessments ensure our AI systems continue to meet our ethical standards and operational requirements.",
    },
  ];

  return (
    <section
      className="mb-[36px] md:rounded-[31px] rounded-[25px] border border-[#FFFFFF33] lg:px-[70px] md:px-[40px] px-4 md:py-[50px] py-[30px]"
      style={{
        background:
          "linear-gradient(166.27deg, rgba(38, 38, 38, 0.2) 69.2%, #363636 102.23%)",
      }}
    >
      <h2 className="md:text-[32px] text-[24px] font-[400] mb-[21px]">
        Our Pledge
      </h2>

      <p className="md:text-[18px] font-[300] mb-[37px]">
        At Digitel, we are dedicated to harnessing the transformative power of
        AI call technology responsibly and ethically. Our pledge outlines the
        guiding principles that ensure fairness, transparency, and trust in
        every aspect of our operation
      </p>

      <h2 className="md:text-[24px] text-[18px] font-[400] mb-[21px]">
        Promoting Transparency in AI Interactions
      </h2>

      <p className="md:text-[18px] font-[300] mb-[23px]">
        We believe that trust starts with transparency. Customers will always be
        informed when they are interacting with AI-powered systems. We will
        clearly explain how our AI works, the data it uses, and provide options
        for escalating interactions to human representatives when needed. By
        prioritizing openness, we aim to empower customers to make informed
        decisions.
      </p>

      <div className="space-y-0">
        {pledgeItems.map((item, index) => (
          <div key={index} className="border-t-[2px] border-[#3030305C]">
            <button
              onClick={() => toggleItem(index)}
              className="flex items-center justify-between w-full text-left py-4 focus:outline-none group"
            >
              <span className="md:text-[24px] text-[19px] font-[400]">
                {item.title}
              </span>
              <span className="text-white transition-transform duration-200">
                {openItem === index ? (
                  <FiMinus size={24} />
                ) : (
                  <GoPlus size={24} />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out pe-[27px] ${
                openItem === index
                  ? "max-h-[500px] opacity-100 pb-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
