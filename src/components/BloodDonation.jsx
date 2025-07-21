import React from "react";
import { useState } from "react";

function Dropdown({ title, children, isOpen, onClick }) {
    return (
        <div className="mx-10 my-4">
            <button
                onClick={onClick}
                className="w-full h-10 text-left pl-5 pt-1 text-xl font-righteous font-medium bg-gradient-to-br from-[#05C5D7] to-[#F4F4F4] rounded-lg text-[#000C1C] font-bold border-b-2 border-[#05C5D7] pb-1"
            >
                {title}
            </button>
            {isOpen && <div className="mt-2 text-gray-700">{children}</div>}
        </div>
    );
}

export function BloodDonation() {
    const [OpenSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(OpenSection === section ? null : section);
    }

    return (
        <><div>
            {/* text-6xl font-righteous font-medium bg-gradient-to-br from-[#F4F4F4] to-[#05C5D7] bg-clip-text text-transparent mx-auto flex justify-center mt-40 sm:mt-40 animate-reveal sm:text-6xl lg:text-7xl */}
            {/* <p className="text-4xl font-righteous font-medium bg-gradient-to-br from-[#F4F4F4] to-[#05C5D7] bg-clip-text text-transparent mx-auto flex mt-10 ml-10 sm:mt-10 sm:text-4xl lg:text-5xl">Vital Veins</p> */}
            <div className="flex-col animate-reveal lg:flex lg:flex-row">
                <div>
                    <video
                        autoPlay
                        muted
                        loop
                        className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl shadow-xl mt-6 lg:mt-8 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_#7fcfe8] border border-white/20"
                        style={{ boxShadow: "0 0 10px #999" }}
                    >
                        <source src="assets/VitalVeins.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>

                <div className="w-full sm:full lg:w-1/2 ml-auto">
                    <p className="text-4xl font-righteous font-medium bg-gradient-to-br from-[#F4F4F4] to-[#05C5D7] bg-clip-text text-transparent mx-auto flex mt-10 ml-10 sm:mt-10 sm:text-4xl lg:text-5xl">
                        Vital Veins</p>

                    <p className="text-[#F4F4F4] font-poppins font-bold mb-3 ml-10 mr-12 mt-5 text-justify">
                        A full-featured web application that connects blood donors, receivers, and hospitals through a centralized digital platform, while raising awareness and educating users about blood donation</p>
                    <Dropdown
                        title="Project Summary"
                        isOpen={OpenSection === "summary"}
                        onClick={() => toggleSection("summary")}
                    >
                        <p className="font-poppins text-[#F4F4F4] text-justify animate-reveal">
                            Vital Veins is a web application that connects blood donors, receivers, and hospitals. It promotes awareness while offering donation forms, appointment booking, eligibility testing, and educational content to streamline blood donation in a single digital space.
                        </p>
                    </Dropdown>
                    <Dropdown
                        title="Key Features"
                        isOpen={OpenSection === "features"}
                        onClick={() => toggleSection("features")}
                    >
                        <ul className="list-none ml-5 space-y-1 text-[#F4F4F4] font-poppins text-md">
                            {[
                                "Donor Registration Form",
                                "Receiver Request Form",
                                "Eligibility Test for Blood Donation",
                                "Appointment Booking System",
                                "Informational Section on Blood Donation",
                                "Awareness Articles & Visuals",
                                "Contact Form for Queries"
                            ].map((item, index) => (
                                <li key={index} className="relative pl-6 animate-reveal">
                                    <span className="absolute left-0 top-2 w-2 h-2 bg-[#05C5D7]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </Dropdown>

                    <Dropdown
                        title="Tech Stack"
                        isOpen={OpenSection === "Tech"}
                        onClick={() => toggleSection("Tech")}
                    >
                        <ul className="list-none ml-5 space-y-1 text-[#F4F4F4] font-poppins text-md animate-reveal">
                            <li className="flex text-[#F4F4F4] w-5 h-5">
                                <img
                                    src={"assets/html.svg"}
                                    alt=""
                                    className="w-5 h-5 mt-1 mr-2"
                                />
                                HTML
                            </li>
                            <li className="flex text-[#F4F4F4] w-5 h-5">
                                <img
                                    src={"assets/css3.svg"}
                                    alt=""
                                    className="w-5 h-5 mt-1 mr-2"
                                />
                                CSS
                            </li>
                            <li className="flex text-[#F4F4F4] w-5 h-5">
                                <img
                                    src={"assets/js.svg"}
                                    alt=""
                                    className="w-5 h-5 mt-1 mr-2"
                                />
                                JavaScript
                            </li>
                            <li className="flex text-[#F4F4F4] w-5 h-5">
                                <img
                                    src={"assets/nodejs.svg"}
                                    alt=""
                                    className="w-5 h-5 mt-1 mr-2"
                                />
                                Node.js
                            </li>

                        </ul>

                    </Dropdown>


                </div>

            </div>


        </div></>
    )
}