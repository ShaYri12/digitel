"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  // Add more country codes as needed
];

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    countryCode: "+1",
    phone: "",
    languagePreferences: [],
    useCase: "",
    callVolume: "",
  });

  const handleLanguagePreferenceChange = (preference) => {
    setFormData((prev) => {
      const currentPreferences = [...prev.languagePreferences];
      if (currentPreferences.includes(preference)) {
        return {
          ...prev,
          languagePreferences: currentPreferences.filter(
            (p) => p !== preference
          ),
        };
      } else {
        return {
          ...prev,
          languagePreferences: [...currentPreferences, preference],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen md:py-12 py-8 px-4">
      <div className="xl:max-w-[1046px] max-w-[800px] mx-auto text-white">
        <h1 className="font-future md:text-[58px] text-[45px] font-[400] md:mb-[26px] mb-[18px] text-center">
          Digitel
        </h1>
        <p className="max-w-[821px] mx-auto md:text-[24px] text-[18px] font-[400] md:mb-[60px] mb-[28px] text-center">
          We&apos;re excited to learn more about your needs! Fill out the
          details below to help us provide the perfect AI solution for your
          organization.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-white md:text-[18px] font-[300] mb-[8px]"
              >
                What&apos;s your name?
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
                    id="name"
                    placeholder="Blandy from Bland"
                    className="w-full bg-[#242424] text-white placeholder:text-[#FFFFFF5C] placeholder:font-[300] font-[400] rounded-full md:px-7 px-5 md:py-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white md:text-[18px] font-[300] mb-[8px]"
              >
                What&apos;s your email?
              </label>

              <div
                className="p-[1px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(176, 174, 174, 0) 0%, #B0AEAE 100%)",
                }}
              >
                <div className="bg-[#FFFFFF0D] rounded-full"></div>
                <input
                  type="email"
                  id="email"
                  placeholder="blandy@bland.ai"
                  className="w-full bg-[#242424] text-white placeholder:text-[#FFFFFF5C] placeholder:font-[300] font-[400] rounded-full md:px-7 px-5 md:py-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Website and Phone */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="website"
                className="block text-white md:text-[18px] font-[300] mb-[8px]"
              >
                What&apos;s your company&apos;s website?
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
                    type="url"
                    id="website"
                    placeholder="bland.ai"
                    className="w-full bg-[#242424] text-white placeholder:text-[#FFFFFF5C] placeholder:font-[300] font-[400] rounded-full md:px-7 px-5 md:py-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-white md:text-[18px] font-[300] mb-[8px]"
              >
                What&apos;s Your Phone Number
              </label>
              <div
                className="flex p-[1px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(176, 174, 174, 0) 0%, #B0AEAE 100%)",
                }}
              >
                <div className="bg-[#FFFFFF0D] rounded-full relative">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="appearance-none bg-[#2a2a2a] text-[14px] rounded-l-full ps-[18px] pe-7 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <IoIosArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  className="flex-1 bg-[#2a2a2a] rounded-r-full px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple placeholder-gray-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>

          {/* Language Preferences */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-light">
                Language and Regional Preferences
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Please select your region and language preferences
              </p>
            </div>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#2a2a2a] text-purple-600 focus:ring-purple-500"
                  checked={formData.languagePreferences.includes("english")}
                  onChange={() => handleLanguagePreferenceChange("english")}
                />
                <span className="group-hover:text-gray-300 transition-colors">
                  Primarily English & English-speaking region(s)
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#2a2a2a] text-purple-600 focus:ring-purple-500"
                  checked={formData.languagePreferences.includes("mixed")}
                  onChange={() => handleLanguagePreferenceChange("mixed")}
                />
                <span className="group-hover:text-gray-300 transition-colors">
                  English-speaking phone agents preferred, but another language
                  is ideal
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#2a2a2a] text-purple-600 focus:ring-purple-500"
                  checked={formData.languagePreferences.includes("non-english")}
                  onChange={() => handleLanguagePreferenceChange("non-english")}
                />
                <span className="group-hover:text-gray-300 transition-colors">
                  Non-English language required (please specify):
                </span>
              </label>
            </div>
          </div>

          {/* Use Case Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-light">Use Case Details</h3>
            <div className="space-y-2">
              <label
                htmlFor="useCase"
                className="block text-white md:text-[18px] font-[300] mb-[8px]"
              >
                What&apos;s your specific use case for Digital AI phone agents?
              </label>
              <div
                className="p-[1px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(176, 174, 174, 0) 0%, #B0AEAE 100%)",
                }}
              >
                <div className="bg-[#FFFFFF0D] rounded-full relative">
                  <select
                    id="useCase"
                    className={`w-full bg-[#242424] cursor-pointer text-white ${
                      formData.useCase === "" &&
                      "text-[#FFFFFF5C] font-[200] text-opacity-[0.5]"
                    } rounded-full md:px-7 px-5 md:py-4 py-3 font-[400] appearance-none focus:outline-none focus:ring-2 focus:ring-purple`}
                    value={formData.useCase}
                    onChange={(e) =>
                      setFormData({ ...formData, useCase: e.target.value })
                    }
                  >
                    <option value="">Please Select</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                  <IoIosArrowDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Call Volume */}
          <div className="space-y-6">
            <h3 className="text-lg font-light">
              How many phone calls would you like to dispatch or receive per
              month?
            </h3>
            <div className="space-y-[15px]">
              <label className="block cursor-pointer">
                <div
                  className="p-[1px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(176, 174, 174, 0) 0%, #B0AEAE 100%)",
                  }}
                >
                  <div className="flex items-center gap-3 bg-[#242424] w-full rounded-full px-6 py-3.5">
                    <input
                      type="radio"
                      name="callVolume"
                      className="w-4 h-4 border-gray-600 bg-[#242424] text-purple focus:ring-purple"
                      value="less than 5,000"
                      checked={formData.callVolume === "less than 5,000"}
                      onChange={(e) =>
                        setFormData({ ...formData, callVolume: e.target.value })
                      }
                    />
                    <span>less than 5,000</span>
                  </div>
                </div>
              </label>
              <label className="block cursor-pointer">
                <div
                  className="p-[1px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(176, 174, 174, 0) 0%, #B0AEAE 100%)",
                  }}
                >
                  <div className="flex items-center gap-3 bg-[#242424] w-full rounded-full px-6 py-3.5">
                    <input
                      type="radio"
                      name="callVolume"
                      className="w-4 h-4 border-gray-600 bg-[#2a2a2a] text-purple-600 focus:ring-purple-500"
                      value="5,000 - 10,000"
                      checked={formData.callVolume === "5,000 - 10,000"}
                      onChange={(e) =>
                        setFormData({ ...formData, callVolume: e.target.value })
                      }
                    />
                    <span>5,000 - 10,000</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
