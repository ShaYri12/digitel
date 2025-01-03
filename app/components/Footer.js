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
      <div className="max-w-[1116px] mx-auto rounded-[29px] bg-purple py-16 mb-[-100px] relative z-[2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-4">
            Stay Connected With Our News
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Stay up to date with the latest news and innovations in phone call
            automation. Subscribe now to receive exclusive tips, product
            updates, and special offers directly to your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 bg-purple-800/50 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full md:px-6 px-4 md:pb-[25px] pb-4">
        <div className="bg-[#FFFFFF0A] rounded-[29px]">
          <div className="max-w-[1280px] mx-auto w-full pt-[150px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link href="/" className="text-3xl font-bold mb-6 block">
                  Digitel
                </Link>
                <p className="text-gray-400 mb-6">
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
                <h3 className="text-xl font-semibold mb-4">Digitel</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-white"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookies"
                      className="text-gray-400 hover:text-white"
                    >
                      Cookies Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ethics"
                      className="text-gray-400 hover:text-white"
                    >
                      Ethics and Security
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Platform</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/try"
                      className="text-gray-400 hover:text-white"
                    >
                      Try for free
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-gray-400 hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="text-gray-400 hover:text-white"
                    >
                      Sign up now
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login"
                      className="text-gray-400 hover:text-white"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/newsletter"
                      className="text-gray-400 hover:text-white"
                    >
                      Subscribe to the newsletter
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Industries</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-white"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/call-center"
                      className="text-gray-400 hover:text-white"
                    >
                      Call center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/real-estate"
                      className="text-gray-400 hover:text-white"
                    >
                      Real estate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/online-stores"
                      className="text-gray-400 hover:text-white"
                    >
                      Online stores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/medical"
                      className="text-gray-400 hover:text-white"
                    >
                      Medical
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="mt-[50px] pt-8 border-t-[2px] border-[#3030305C]">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="hover:text-purple-500 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-500 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-500 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-500 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-500 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-500 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-6">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="ISO Certification"
                  width={40}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="GDPR Compliance"
                  width={40}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="AICPA SOC"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="border-t-[2px] border-[#3030305C] py-[24px]">
              <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between flex-wrap gap-4">
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
