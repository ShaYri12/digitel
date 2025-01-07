"use client";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners"; // Import the new spinner

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true); // Local state to manage visibility

  useEffect(() => {
    // Set a timeout to hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide splash screen locally after 2 seconds
    }, 2000); // 2 seconds

    // Cleanup the timer if the component is unmounted before the timeout is reached
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="bg-[#141414] fixed inset-0 flex flex-col justify-center items-center z-50 transition-opacity duration-1000 opacity-100">
        {/* Fade-in and fade-out effect */}
        <h1 className="text-white text-[70px] font-bold mb-4 animate__animated animate__fadeIn">
          Digitel
        </h1>
        {/* Pulse Spinner */}
        <PulseLoader color="#ffffff" size={15} />
      </div>
    )
  );
};

export default SplashScreen;
