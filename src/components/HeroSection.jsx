import React from "react";

export function HeroSection() {
    return (
        <>
            <div className="relative lg:mt-20 lg:ml-40 animate-reveal flex-col animate-reveal lg:flex lg:flex-row">
                <div>
                    <p className="text-2xl ml-7 text-[#F4F4F4] font-righteous font-medium lg:text-4xl lg:ml-10"><span className="text-2xl text-[#05C5D7] font-righteous font-medium lg:text-4xl">D</span>esign. <span className="text-2xl text-[#05C5D7] font-righteous font-medium lg:text-4xl">C</span>ode. <span className="text-2xl text-[#05C5D7] font-righteous font-medium text-4xl">I</span>ntelligence</p>
                    <p className=" relative top-72 lg:top-0 text-2sm w-62 mt-2 ml-10 text-[#F4F4F4] font-poppins lg:font-bold lg:text-lg lg:w-96 lg:ml-10 lg:mt-4">I bring ideas to life with sleek design, scalable code, and a spark of AI & Machine learning.</p>
                    <div className="relative top-72 lg:top-0">
                        <img
                            src={"assets/resume_button.svg"}
                            alt=""
                            className="w-32 ml-48 mt-5 lg:w-40 lg:mt-3 lg:ml-60 relative z-20 transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                        <img
                            src={"assets/rectangle.svg"}
                            alt=""
                            className="w-32 ml-28 -mt-5 lg:w-40 lg:-mt-6 lg:ml-40 relative z-10"
                        />
                         <img
                            src={"assets/about_me.svg"}
                            alt=""
                            className="w-32 ml-12 -mt-5 lg:w-40 lg:-mt-6 lg:ml-10 relative z-10 transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
                <div className="relative top-20 lg:top-0">
                    <img
                            src={"assets/hero.svg"}
                            alt=""
                            className="w-52 -top-60 ml-16 relative z-10 lg:w-64 lg:ml-10 lg:top-0"
                        />
                </div>
            </div>
        </>
    )
}
