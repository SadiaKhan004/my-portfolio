import React, { useState } from "react";
// import { About } from "./About";
import { HeroSection } from "./HeroSection";

export function Home() {
    // const [showAbout, setShowAbout] = useState(false);

    // const showAboutSection = () => {
    //     setShowAbout(true); // Show the About section
    // };

    const [selectedPage, setSelectedPage] = useState("home");
    
      const handleCardClick = (page) => {
        setSelectedPage(page);
      };
    
      if (selectedPage === "Hero") return <HeroSection />;


    return (
        <>
            <div className="text-6xl font-righteous font-medium bg-gradient-to-br from-[#F4F4F4] to-[#05C5D7] bg-clip-text text-transparent mx-auto flex justify-center mt-40 sm:mt-40 animate-reveal sm:text-6xl lg:text-7xl">
                <p>Sadia Khan</p>
            </div>

            <div className="text-3xl font-righteous animate-reveal font-medium text-[#F4F4F4] bg-clip-text mx-auto flex justify-center mt-10 sm: text-2xl mt-8">
                <p>Mern Stack Developer</p>
            </div>

            <div className="text-3xl font-righteous animate-reveal font-medium text-[#F4F4F4] bg-clip-text mx-auto flex justify-center mt-12 sm: text-2xl mt-6">
                <p>AI & ML Developer</p>
            </div>

            <div className="bg-[#000000] w-16 h-28 mx-auto flex justify-center pt-14 mt-10 rounded-full bg-gradient-to-r from-[#05C5D7] to-[#036871] sm: mt-8 w-14 h-24 animate-fadeIn transition-transform transform hover:translate-y-[-5px] ">
                <a onClick={() => handleCardClick("Hero")} href="#">
                    <img src={"assets/down-arrow.png"} alt="next-section" className="w-12 h-12 sm: w-10 h-10" />
                </a>
            </div>

            {/* Conditionally render the About component */}
            {/* {showAbout && <HeroSection/>} */}
        </>
    );
}
