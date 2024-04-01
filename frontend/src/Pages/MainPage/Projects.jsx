import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import PageTags from "../../Components/PageTags";
import SpecialButton from "../../Components/SpecialButton";

const Projects = () => {
  return (
    <div className="flex my-16 mt-40 justify-center md:flex-col">
      <div className="flex flex-col w-1/2 px-5 md:w-[70%] sm:w-[80%] ">
        <PageTags title="OUR BEST PROJECTS" />
        <div className="text-[#0D141C] text-[52px] smd:text-[44px] sm:text-[34px]  font-bold">
          Take A Look Our Work Gallery Recent Projects
        </div>
      </div>
      <div className="w-1/2 px-5 flex flex-col justify-center gap-3 md:w-[80%] sm:w-[90%]">
        <div className="text-[#4F7396] text-[20px] font-medium">
          We Are 100+ Professional Software Engineers With More Than 10 Years Of
          Experience In Delivering Superior
        </div>
        <div className="">
          <SpecialButton title="view all services" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
