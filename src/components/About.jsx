import React, { useState } from "react";

export function About({ onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    const closeAbout = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            {/* Main About Div */}
            <div className="fixed bg-[#F4F4F4] rounded-lg shadow-lg p-6 md:left-12 p-8 w-3/4 h-3/4 animate-slideUp top-32 sm:left-12 ml-9 lg:left-40">

                {/* Close Button */}
                <img
                    src="/assets/close.png"
                    alt="Close"
                    className="w-6 h-6 cursor-pointer absolute top-4 right-4"
                    onClick={closeAbout}
                />

                {/* Profile Section */}
                <div className="flex flex-col items-center">
                    <img
                        src="/assets/profilepic.png"
                        alt="Profile"
                        className="w-20 h-20 rounded-full"
                    />
                    <h5 className="text-lg font-poppins font-semibold mt-4">
                        Sadia Khan
                    </h5>
                </div>

                {/* Scrollable Content Section */}
                <div className="mt-6 overflow-y-auto h-[calc(100%-150px)] custom-scrollbar px-4">
                    <p className="text-justify text-black text-opacity-50">
                        Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.
                        Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
                        Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
                        Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
                    </p>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx="true">{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #e0e0e0; /* Light gray track */
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #7fcfe8; /* Highlight color */
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #4ca9c6; /* Darker highlight on hover */
                }
            `}</style>
        </>
    );
}
