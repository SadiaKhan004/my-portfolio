import React from "react";

export function Skills() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center sm:ml-0 mt-12 lg:ml-40 mt-20 lg:w-3/4">
          <p className="font-righteous font-thin text-center text-[#F4F4F4] opacity-0 animate-fadeIn lg:text-xl sm:text-xs">
            I specialize in the MERN stack, with a focus on seamless user
            experiences and efficient backend solutions. I bring ideas to life by
            leveraging the power of modern web technologies.
          </p>
        </div>

        <div className="flex items-center justify-center mt-10 lg:ml-40 sm: ml-14">
          <div className="p-0 w-full">
            {/* First row of skills */}
            <ul className="flex font-poppins gap-4 font-semibold animate-fadeIn lg:flex-row text-xl lg:ml-20 sm: flex-col ml-4 lg:gap-1">
              <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                HTML
                <img
                  src={"assets/html.svg"}
                  alt=""
                  className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
              <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                CSS
                <img
                  src={"assets/css3.svg"}
                  alt=""
                   className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
              <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                JavaScript
                <img
                  src={"assets/js.svg"}
                  alt=""
                   className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
              <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                React.Js
                <img
                  src={"assets/react.svg"}
                  alt=""
                   className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
            </ul>

            {/* Second row of skills */}
            <ul className="flex font-poppins font-semibold animate-fadeIn mt-5 lg:flex-row  gap-4  text-xl lg:ml-20 sm: flex-col ml-4 lg:gap-1 lg:mt-1">
            <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                Node.Js
                <img
                  src={"assets/nodejs.svg"}
                  alt=""
                   className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
              <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                MongoDB
                <img
                  src={"assets/mongodb.svg"}
                  alt=""
                   className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
              <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                TailwindCSS
                <img
                  src={"assets/tailwind.svg"}
                  alt=""
                   className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
              <li className="bg-[#000C1C] rounded-md text-center text-[#05C5D7]  w-40 h-40 transition-transform transform hover:translate-y-[-5px] hover:bg-[#F4F4F4] z-index: 10 lg:shadow-custom1 sm: shadow-custom3 lg:w-40 h-40 sm: w-52 h-50">
                Git
                <img
                  src={"assets/git.svg"}
                  alt=""
                  className="ml-20 mt-8 lg: w-14 h-14 lg:ml-14"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
