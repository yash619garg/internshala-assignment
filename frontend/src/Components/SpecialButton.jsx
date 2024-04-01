import React from "react";
import { MdArrowOutward } from "react-icons/md";
const SpecialButton = ({ title }) => {
  return (
    <div>
      <button className="w-[266px] h-[54px] flex group  items-center">
        <div className="gradientBg py-3 relative bg-clip-text capitalize text-[16px] gap-1 rounded-[162.5px] border-[2px] transition-all duration-700  md:border-2  border-[#11998E] w-[212px] h-[54px]">
          {" "}
          <span className="my-auto transition-none">{title}</span>
        </div>
        <span className="h-[54px] py-3 relative group-hover:absolute group-hover:w-[212px] transition-all duration-700 delay-[-250ms] px-3 group-hover:px-[75px] w-[54px] gradientBg z-10 rounded-full">
          <MdArrowOutward className="text-white text-3xl" />
        </span>
      </button>
    </div>
  );
};

export default SpecialButton;
