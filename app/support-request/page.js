"use client";
import React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BiSolidPhoneOutgoing } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const SupportRequest = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    browser: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    const body = document.body;
    if (
      pathname === "/support-request" ||
      pathname === "/" ||
      pathname === "/about"
    ) {
      body.classList.add("bg-grid-white");
    } else {
      body.classList.remove("bg-grid-white");
    }
  }, [pathname]);
  return (
    <section className="min-h-screen md:py-12 py-8 px-4">
      <div className="xl:max-w-[1024px] max-w-[800px] mx-auto">
        <h1 className="text-white xl:text-[92px] lg:text-[80px] lg:text-[70px] md:text-[60px] sm:text-[50px] text-[40px] font-[400] md:mb-[35px] mb-[26px] text-center">
          Support Request
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:gap-[32px] gap-[20px]"
        >
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-[20px]">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white md:text-[18px] font-[300] mb-[8px]"
              >
                First Name
              </label>
              <div
                className="p-[1px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(176, 174, 174, 0) 0%, #B0AEAE 100%)",
                }}
              >
                <div className="bg-[#FFFFFF0D] rounded-full">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-[#242424] text-white placeholder:text-[#FFFFFF5C] placeholder:font-[300] font-[400] rounded-full md:px-7 px-5 md:py-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple"
                    placeholder="Your name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white md:text-[18px] font-[300] mb-[8px]"
              >
                Last Name
              </label>
              <div
                className="p-[1px] rounded-full"
                style={{
                  background:
                    "linear-gradient(269.57deg, rgba(176, 174, 174, 0) -2.36%, #B0AEAE 99.81%)",
                }}
              >
                <div className="bg-[#FFFFFF0D] rounded-full">
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-[#242424] text-white placeholder:text-[#FFFFFF5C] placeholder:font-[300] font-[400] rounded-full md:px-7 px-5 md:py-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple"
                    placeholder="Your name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Browser Selection */}
          <div>
            <label
              htmlFor="browser"
              className="block text-white md:text-[18px] font-[300] mb-[8px]"
            >
              Which Browser are you using?
            </label>
            <div
              className="p-[1px] rounded-full"
              style={{
                background:
                  "linear-gradient(269.57deg, rgba(176, 174, 174, 0) -2.36%, #B0AEAE 99.81%)",
              }}
            >
              <div className="bg-[#FFFFFF0D] rounded-full relative">
                <select
                  id="browser"
                  className={`w-full bg-[#242424] cursor-pointer text-white ${
                    formData.browser === "" &&
                    "text-[#FFFFFF5C] font-[200] text-opacity-[0.5]"
                  } rounded-full md:px-7 px-5 md:py-4 py-3 font-[400] appearance-none focus:outline-none focus:ring-1 focus:ring-purple`}
                  value={formData.browser}
                  onChange={(e) =>
                    setFormData({ ...formData, browser: e.target.value })
                  }
                >
                  <option value="">Please Select</option>
                  <option value="chrome">Chrome</option>
                  <option value="firefox">Firefox</option>
                  <option value="safari">Safari</option>
                  <option value="edge">Edge</option>
                </select>
                <IoIosArrowDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white" />
              </div>
            </div>
          </div>

          {/* Country Selection */}
          <div>
            <label
              htmlFor="country"
              className="block text-white md:text-[18px] font-[300] mb-[8px]"
            >
              Country/Region
            </label>
            <div
              className="p-[1px] rounded-full"
              style={{
                background:
                  "linear-gradient(269.57deg, rgba(176, 174, 174, 0) -2.36%, #B0AEAE 99.81%)",
              }}
            >
              <div className="bg-[#FFFFFF0D] rounded-full relative">
                <select
                  id="country"
                  className={`w-full bg-[#242424] cursor-pointer ${
                    formData.country === "" &&
                    "text-[#FFFFFF5C] font-[200] text-opacity-[0.5]"
                  } text-white rounded-full md:px-7 px-5 md:py-4 py-3 font-[400] appearance-none focus:outline-none focus:ring-1 focus:ring-purple`}
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                >
                  <option value="">Please Select</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <IoIosArrowDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple hover:bg-[#5726a6] md:text-[18px] text-white max-w-[175px] w-full px-7 py-[15.5px] rounded-full transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Call Option */}
        <div className="mt-[27px] text-center">
          <p className="text-white md:text-[18px] font-[300] mb-[10px]">
            Or Call me Instead
          </p>
          <button className="bg-white hover:bg-gray-100 text-black md:text-[20px] font-[300] rounded-full max-w-[328px] w-full px-6 py-[12px] flex items-center justify-center space-x-[12px] mx-auto transition-colors">
            <span className="md:w-[34px] w-[28px] md:h-[34px] h-[28px] flex items-center justify-center rounded-full text-white bg-[#199A37]">
              <BiSolidPhoneOutgoing className="md:w-[18px] w-[16px] md:h-[18px] h-[16px] text-white" />
            </span>
            <span>Slide To Call</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportRequest;
