import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { about } from "../../data";
import image from "../../images/Group 16.png";
import PageTags from "../../Components/PageTags";

const About = () => {
  const { title, caption, description, experience, qualities, link, imgUrl } =
    about[0];
  console.log(about);
  return (
    <div className="w-full flex px-[30px] justify-evenly  py-6 gap-6 flex-wrap bg-white mt-10">
      <div className="w-[512px] sm:w-[450px] vsm:w-[320px] md:w-full min-h-[617.94px]">
        <PageTags title={title} />
        <div className="text-[#0D141C] text-[54px] font-bold tracking-wider ">
          {caption}
        </div>
        <div className="text-[#4F7396] text-[20px] font-medium">
          {description}
        </div>
        <div className="flex w-[507px] sm:w-[420px] vsm:w-[320px] flex-wrap sm:gap-10">
          <div className="flex flex-col w-[220px] min-h-[313px] justify-between">
            <span className="text-[108px] ml-2 font-bold gradientBg bg-clip-text">
              {experience}
            </span>
            <div className="flex flex-col">
              <span className="text-[#4F7396] ml-2 capitalize text-[26.6px] font-bold">
                year
              </span>
              <span className="text-[#4F7396] ml-2 capitalize text-[26.6px] font-bold">
                Experience
              </span>
            </div>
            <div className="">
              <button className="w-[220px] h-[54px] flex group  items-center">
                <div className="gradientBg py-3 relative bg-clip-text capitalize text-[16px] gap-1 rounded-[162.5px] border-[2px]  md:border-2 border-[#11998E] w-[165px] h-[54px]">
                  {" "}
                  <span className="my-auto">get started</span>
                </div>
                <span className="h-[54px] py-3 relative group-hover:absolute group-hover:w-[165px] transition-all duration-700 px-3 w-[54px] group-hover:px-[75px]  gradientBg rounded-full">
                  <MdArrowOutward className="text-white text-3xl " />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col  justify-center gap-4">
            {qualities.map((service) => {
              return (
                <div className="flex items-center gap-[15px]">
                  <span className="text-[18px] text-navBg">
                    <FaCheckCircle className="w-[28px] h-[28px]" />
                  </span>
                  <span className="font-semibold text-[18px] capitalize text-[#0D141C]">
                    {service}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[512px] h-[673.88px] md:w-full sm:h-[500px] flex items-center md:items-start sm:items-center">
        <img
          src={image}
          alt=""
          className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-[512px] sm:w-[430px] h-[587px] sm:h-[480px] md:h-[641px] md:w-[580px] "
        />
        {/* <img src={imgUrl} alt="" className="w-[582px] h-[591px]" /> */}
      </div>
    </div>
  );
};

export default About;
