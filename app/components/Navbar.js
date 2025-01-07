"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import { RiMenu2Fill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex h-[63px] w-1"></div>
      <nav
        className={`fixed top-0 w-full z-50 md:py-4 py-2 shadow-lg px-4 transition-all ${
          scrolled ? "bg-[#141414]" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-2">
          {/* Logo */}
          <Link
            href="/"
            className="text-white md:text-[34px] text-[28px] font-[400] font-future"
          >
            Digitel
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center xl:space-x-[44px] space-x-[32px] xl:px-[54px] px-[44px] py-[16px] rounded-full border border-[#FFFFFF33]"
            style={{
              background:
                "linear-gradient(166.27deg, rgba(38, 38, 38, 0.2) 69.2%, #363636 102.23%)",
            }}
          >
            <Link
              href="/"
              className="text-white md:text-[18px] font-[300] hover:border-white border-b border-transparent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/company"
              className="text-white md:text-[18px] font-[300] hover:border-white border-b border-transparent transition-colors"
            >
              Company
            </Link>
            <Link
              href="/technology"
              className="text-white md:text-[18px] font-[300] hover:border-white border-b border-transparent transition-colors"
            >
              Technology
            </Link>
            <Link
              href="/solutions"
              className="text-white md:text-[18px] font-[300] hover:border-white border-b border-transparent transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-white md:text-[18px] font-[300] hover:border-white border-b border-transparent transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="hidden lg:block bg-purple hover:bg-[#5726a6] md:text-[18px] font-[400] text-white px-6 py-[15.5px] rounded-full transition-colors"
          >
            Login/Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiMenu2Fill size={26} />
          </button>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full md:max-w-[320px] max-w-[260px] w-full bg-[#1a1a1a] z-40 transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-8 mobile-menu relative">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <IoClose size={26} />
            </button>

            <Link
              href="/"
              className="text-white hover:border-white border-b border-transparent w-fit"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/company"
              className="text-white hover:border-white border-b border-transparent w-fit"
              onClick={() => setIsOpen(false)}
            >
              Company
            </Link>
            <Link
              href="/technology"
              className="text-white hover:border-white border-b border-transparent w-fit"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/solutions"
              className="text-white hover:border-white border-b border-transparent w-fit"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:border-white border-b border-transparent w-fit"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="bg-purple hover:bg-[#5726a6] text-white px-6 py-4 rounded-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Login/Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
