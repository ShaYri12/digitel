"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#141414] text-white">
      {/* Newsletter Section */}
      <div className="md:px-[48px] px-4 mb-[-100px] relative z-[2]">
        <div className="max-w-[1116px] mx-auto rounded-[29px] bg-purple md:py-[75px] sm:py-[55px] py-[40px] md:px-6 px-4">
          <div className="max-w-[921px] mx-auto text-center">
            <h2 className="lg:text-[62px] md:text-[45px] text-[35px] font-[400] lg:leading-[70px]">
              Stay Connected With Our News
            </h2>
            <p className="md:text-[18px] font-[200] md:mb-[36px] mb-[20px] max-w-[920px] mx-auto">
              Stay up to date with the latest news and innovations in phone call
              automation. Subscribe now to receive exclusive tips, product
              updates, and special offers directly to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex sm:flex-row flex-col flex-wrap max-w-[620px] bg-[#FFFFFF0A] mx-auto sm:rounded-full rounded-[20px] p-[4px] group focus-within:border border border-transparent focus-within:border-white/50"
            >
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent sm:rounded-full rounded-[20px] placeholder:text-[#FFFFFF5C] font-[400] sm:px-5 px-3 py-3 focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#141414] hover:bg-gray-900 text-white px-[25px] py-[14.5px] sm:flex-grow-0 flex-grow sm:rounded-full rounded-[20px] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full md:pb-[25px] md:px-6">
        <div className="bg-[#FFFFFF0A] md:px-4 rounded-[29px]">
          <div className="max-w-[1280px] mx-auto w-full pt-[150px] md:px-0 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[30px]">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link
                  href="/"
                  className="lg:text-[58px] text-3xl font-bold lg:leading-[62px] mb-[18px] block"
                >
                  Digitel
                </Link>
                <p className="text-[15px] font-[300]">
                  Create AI-Powered Phone Agents Without a Single Line of
                  Code!Say hello to Digitel.ai—the ultimate platform to automate
                  incoming and outgoing calls effortlessly. With support for 25+
                  languages, you can deploy fully featured AI phone agents in
                  minutes, no coding skills required. Simplify communication,
                  boost efficiency, and scale your business with ease!
                </p>
              </div>

              {/* Links Sections */}
              <div>
                <h3 className="md:text-[22px] text-[18px] font-[500] mb-5">
                  Digitel
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookies"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Cookies Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ethics"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Ethics and Security
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="md:text-[22px] text-[18px] font-[500] mb-5">
                  Platform
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/try-for-free"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Try for free
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Sign-up-now"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Sign up now
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/subscribe"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Subscribe to the newsletter
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="md:text-[22px] text-[18px] font-[500] mb-5">
                  Digitel Solution
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/see-digitel"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      See Digitel in action
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/use-cases"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Use cases
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/no-code-platform"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      No-code platform
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/available-languages"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Available languages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Frequently asked questions
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="md:text-[22px] text-[18px] font-[500] mb-5">
                  Industries
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/call-center"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Call center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/real-estate"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Real estate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/online-stores"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Online stores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/medical"
                      className="text-[16px] hover:text-purple font-[300]"
                    >
                      Medical
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="mt-[50px]">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-4 border-t-[2px] border-[#3030305C] md:px-6 px-4">
              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="rounded-full hover:bg-purple w-[45px] h-[45px] flex items-center justify-center border border-white"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="rounded-full hover:bg-purple w-[45px] h-[45px] flex items-center justify-center border border-white"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="rounded-full hover:bg-purple w-[45px] h-[45px] flex items-center justify-center border border-white"
                >
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="rounded-full hover:bg-purple w-[45px] h-[45px] flex items-center justify-center border border-white"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="rounded-full hover:bg-purple w-[45px] h-[45px] flex items-center justify-center border border-white"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="rounded-full hover:bg-purple w-[45px] h-[45px] flex items-center justify-center border border-white"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-6">
                <Image
                  src="/assets/iso.png"
                  alt="ISO Certification"
                  width={68}
                  height={56}
                />
                <Image
                  src="/assets/gdpr.png"
                  alt="GDPR Compliance"
                  width={72}
                  height={66}
                />
                <Image
                  src="/assets/aicpa.png"
                  alt="AICPA SOC"
                  width={72}
                  height={66}
                />
              </div>
            </div>
            <div className="border-t-[2px] border-[#3030305C] py-[24px] md:px-6 px-4">
              <div className="max-w-[1280px] mx-auto w-full flex items-center sm:justify-between justify-center sm:flex-row flex-col gap-4">
                {/* Copyright */}
                <p className="text-white md:text-[18px]">
                  © Copyright 2024. All Rights Reserved
                </p>
                <p className="text-white md:text-[18px]">A DynamiX company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
