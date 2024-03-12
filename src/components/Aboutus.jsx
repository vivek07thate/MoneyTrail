import { useState } from "react";
import { quotes } from "../assets";

const AboutUs = ({ content, title, img }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
      onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
    >
      <h4 className="font-poppins font-normal text-[26px] leading-[24px] text-dimWhite mb-2">
        {title}
      </h4>
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[72px] h-[48px] object-contain"
      />
      {/* Adjust the width and height values above for the quotes image */}
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-">
        {content}
      </p>

      <div className="flex flex-row">
        <img
          src={img}
          alt={title}
          className="w-[200px] h-[200px] rounded-full"
        />
        {/* Adjust the width and height values above for the profile image */}
      </div>
    </div>
  );
};

export default AboutUs;


