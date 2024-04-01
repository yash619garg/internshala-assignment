import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PageTags = ({ title }) => {
  return (
    <div>
      <div className="uppercase text-xl flex items-center gap-2  ">
        <span>
          {" "}
          <FaArrowRight className="text-[#11998E]" />
        </span>
        <span className="gradientBg text-lg bg-clip-text md:font-semibold ">
          {title}
        </span>
      </div>
    </div>
  );
};

export default PageTags;
