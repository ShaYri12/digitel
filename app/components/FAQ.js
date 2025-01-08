"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Digital.ai, and how does it work?",
      answer:
        "Digital.ai is an AI-powered platform that automates customer interactions using customizable voice agents. It handles both inbound (responsive) and outbound (proactive) calls for tasks such as lead qualification, customer support, and appointment scheduling. With no-code tools and flexible deployment options, Digital.ai delivers seamless, personalized, and efficient communication at scale.",
    },
    {
      question: "Can AI make phone calls?",
      answer:
        "Yes, Digitel is designed to make millions of phone calls that sound human-like. It uses advanced AI to replicate natural conversations, making it ideal for customer support, sales, and lead qualification.",
    },
    {
      question: "Do I need expertise to use Digital.ai effectively?",
      answer:
        "No, Digitel is user-friendly and requires no prior expertise. Its intuitive interface and built-in tools simplify the setup process, allowing anyone to get started quickly and efficiently.",
    },
    {
      question: "Can I set up automations with Digitel?",
      answer:
        "Absolutely, Digitel lets you set up powerful automations to handle repetitive tasks like customer support, lead qualification, and follow-ups. This ensures efficiency and scalability for your business processes.",
    },
    {
      question: "How does Digitel ensure data security?",
      answer:
        "Digitel prioritizes data security with industry-standard encryption and compliance measures. Your data is stored and processed securely, ensuring confidentiality and protection against unauthorized access.",
    },
    {
      question:
        "How does Digitel deliver lifelike conversations in multiple languages?",
      answer:
        "Digitel leverages cutting-edge natural language processing (NLP) and text-to-speech technology to deliver lifelike conversations. It supports multiple languages, enabling seamless communication with a diverse audience.",
    },
  ];

  return (
    <section className="bg-[#141414] w-full text-white md:py-12 py-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white">
        <h2 className="md:text-[62px] text-[40px] font-[400] text-center mb-[18px]">
          Frequeintly Asked Questions
        </h2>

        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div key={index} className="border-t-[2px] border-[#3030305C]">
              <button
                onClick={() => toggleItem(index)}
                className="flex items-center justify-between w-full text-left py-4 focus:outline-none group"
              >
                <span className="md:text-[24px] text-[19px] font-[400]">
                  {item.question}
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
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
