import React from "react";

export function HeroSection() {
    return (
        <>
            <div className="relative lg:mt-20 lg:ml-40 animate-reveal flex-col animate-reveal lg:flex lg:flex-row">
                <div>
                    <p className="text-md text-[#F4F4F4] font-righteous font-medium lg:text-4xl lg:ml-10"><span className="text-[#05C5D7] font-righteous font-medium text-4xl">D</span>esign. <span className="text-[#05C5D7] font-righteous font-medium text-4xl">C</span>ode. <span className="text-[#05C5D7] font-righteous font-medium text-4xl">I</span>ntelligence</p>
                    <p className=" relative top-52 lg:top-0 text-sm w-52 mt-2 text-[#F4F4F4] font-poppins lg:font-bold lg:text-lg lg:w-96 lg:ml-10 lg:mt-4">I bring ideas to life with sleek design, scalable code, and a spark of AI & Machine learning.</p>
                    <div className="relative top-52 lg:top-0">
                        <img
                            src={"assets/resume_button.svg"}
                            alt=""
                            className="w-20 ml-28 mt-5 lg:w-40 lg:mt-3 lg:ml-60 relative z-20 transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                        <img
                            src={"assets/rectangle.svg"}
                            alt=""
                            className="w-20 lg:w-40 -mt-6 ml-40 relative z-10"
                        />
                         <img
                            src={"assets/about_me.svg"}
                            alt=""
                            className="w-20 lg:w-40 -mt-6 ml-10 relative z-10 transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
                <div className="relative top-10 lg:top-0">
                    <img
                            src={"assets/hero.svg"}
                            alt=""
                            className="w-40 -top-48 ml-5 relative z-10 lg:w-64 lg:ml-10 lg:top-0"
                        />
                </div>
            </div>
        </>
    )
}
