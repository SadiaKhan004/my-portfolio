import React, { useState } from "react";

export function Header({ setActivePage }) {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleActiveItem = (item) => {
    setActiveItem(item);
    setActivePage(item); // Update the active page in the parent component
    setMenuOpen(false); // Close the menu on selection
  };

  return (
    <>
      <nav className="bg-[#000C1C] text-white w-full shadow-[0_0_12px_rgba(15,198,215,2)] z-50">
        {/* Container for the header content */}
        <div className="container mx-auto flex justify-center items-center p-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-3 gap-5 font-poppins text-xl">
            {["home", "about", "skills", "projects", "resume", "contact"].map((item) => (
              <li
                key={item}
                className={`p-2 border-2 rounded-lg ${
                  activeItem === item
                    ? "border-[#000C1C] shadow-[0_2px_4px_rgba(15,198,215,0.5)]"
                    : "border-transparent"
                } hover:border-[#000C1C] hover:shadow-[0_2px_4px_rgba(15,198,215,0.5)] transition-all`}
                onClick={() => handleActiveItem(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden block flex -ml-72"
          >
            <img className="h-6 w-6" src="assets/hamburger.png" alt="menu" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#000C1C] p-4 absolute top-16 w-full z-40">
            <ul className="flex flex-col space-y-3 font-poppins text-xl">
              {["home", "about", "skills", "projects", "resume", "contact"].map((item) => (
                <li
                  key={item}
                  className={`p-2 border-2 rounded-lg cursor-pointer ${
                    activeItem === item
                      ? "border-[#000C1C] shadow-[0_2px_4px_rgba(15,198,215,0.5)]"
                      : "border-transparent"
                  } hover:border-[#000C1C] hover:shadow-[0_2px_4px_rgba(15,198,215,0.5)] transition-all`}
                  onClick={() => handleActiveItem(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
