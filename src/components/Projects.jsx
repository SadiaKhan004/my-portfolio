import React, { useRef } from "react";
import { useState } from "react";
export function Projects() {
  const sliderRef = useRef(null);

  const scrollAmount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) return 270; // Small screens
    if (screenWidth < 1024) return 340; // Medium screens
    return 350; // Large screens
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  };


  return (
    <>
    <div className="flex items-center justify-center mt-32">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="w-20 h-12 lg:w-24 lg:h-12 rounded-full flex bg-gradient-to-r from-[#05C5D7] to-[#036871] items-center justify-center -mr-2 lg:mr-6 transition-transform transform hover:translate-y-[-5px]"
      >
        <img
          src="/left-arrow.png"
          alt="Scroll Left"
          className="w-7 h-7 lg:w-8 lg:h-8 lg:mr-8"
        />
      </button>

      {/* Project Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll font-semibold scroll-smooth gap-5 hide-scrollbar w-full max-w-3xl max-h-96 p-5 "
      >
        <div className="bg-[#000C1C] rounded-3xl text-center text-[#05C5D7] w-60 h-70 transition-transform transform hover:-translate-y-5 shadow-custom3 pt-3 flex-shrink-0 lg:w-60 h-80">
          Blood Donation System
          <img
            src={"/VitalVeins1.jpg"}
            alt="Blood Donation System"
            className="mx-auto mt-8  pb-2 w-42 h-52 rounded-3xl shadow-custom4 lg:w-52 lg:h-60 sm:w-42 h-52"
          />
        </div>

        <div className="bg-[#000C1C] rounded-3xl text-center text-[#05C5D7] w-60 h-70 transition-transform transform hover:-translate-y-5 shadow-custom3 pt-3 flex-shrink-0 lg:w-60 h-80">
          Personalized Cancer Treatment Plan Generator
          <img
            src={"/onco.png"}
            alt="Cancer Treatment"
            className="mx-auto mt-2 w-42 h-52 pb-2 rounded-3xl shadow-custom5 lg:w-52 lg:h-60 sm:w-42 h-52"
          />
        </div>

        <div className="bg-[#000C1C] rounded-3xl text-center text-[#05C5D7] w-60 h-70 transition-transform transform hover:-translate-y-5 shadow-custom3 pt-3 flex-shrink-0 lg:w-60 h-80">
          Orrery Web Application
          <img
            src={"/orbitexp.png"}
            alt="Orrery Web Application"
            className="mx-auto mt-8 w-42 h-52 pb-2 rounded-3xl shadow-custom6 lg:w-52 lg:h-60 sm:w-42 h-52"
          />
        </div>

        <div className="bg-[#000C1C] rounded-3xl text-center text-[#05C5D7] w-60 h-70 transition-transform transform hover:-translate-y-5 shadow-custom3 pt-3 flex-shrink-0 lg:w-60 h-80">
          E-comerce Application
          <img
            src={"/sakh.png"}
            alt="Sakhi Application"
            className="mx-auto mt-8 w-42 h-52 pb-2 rounded-3xl shadow-custom7 lg:w-52 lg:h-60 sm:w-42 h-52"
          />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="w-20 h-12 rounded-full flex items-center justify-center ml:2 lg:ml-4 bg-gradient-to-r from-[#036871] to-[#05C5D7] transition-all transition-transform transform hover:translate-y-[-5px] lg:w-24 lg:h-12"
      >
        <img
          src="/right-arrow.png"
          alt="Scroll Right"
          className="w-7 h-7 ml-0 lg:ml-6 lg:w-8 lg:h-8"
        />
      </button>
    </div>
    <style jsx="true">{`
               .hide-scrollbar {
               scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* IE and Edge */
              }

              .hide-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome, Safari, and Edge */
              }
            `}</style>
    </>
  );
}
