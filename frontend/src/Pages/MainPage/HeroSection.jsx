import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bg from "../../images/Apresentação Modelo - Layer 21.png";
import girl from "../../images/gto-hero-4-img-1 1.png";
import customer from "../../images/Group 12.png";
import { MdArrowOutward } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import PageTags from "../../Components/PageTags";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="w-full flex min-h-[696px] relative justify-center gap-[80px] flex-wrap"
    >
      <img className="absolute left-0 top-0 w-full h-full" src={bg} alt="" />
      <div className="h-full flex flex-col items-center text-center">
        <div className="w-full mt-8">
          <img
            className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] h-[587.07px] w-[551px] sm:w-[450px] sm:h-[480px] vsm:w-[320px] vsm:h-[350px] flex "
            src={girl}
            alt=""
          />
        </div>
        <div className="bg-white justify-center shadow-md shadow-slate-600 items-center gap-3 flex z-[1] h-[117px] w-[387px] vsm:w-[340px]  rounded-[20px] translate-x-[-20px] vsm:translate-x-0 ">
          <div className="">
            <img src={customer} className="" alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="gradientBg bg-clip-text text-[28px] font-semibold ">
              5.4K
            </h1>
            <h1 className="text-[#4F7396]">Clients Satisfaction</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center md:mb-10 sm:w-[90vw] sm:px-3">
        <div className="relative w-[561px] min-h-[455px]  gap-4 sm:gap-3 flex flex-col  justify-between">
          <PageTags title="Welcome to jythu" />
          <div className="text-[68px] sm:text-[40px] gap-1 font-semibold text-white tracking-wider">
            <h1 className="">A Marketing</h1>
            <div>
              <span className="text-[#11998E] underline">Agency</span>{" "}
              <span>To Grow </span>
            </div>
            <h1 className="">Your Business</h1>
          </div>
          <div className="text-text2 ">
            We are 100+ professional software engineers with more than 10 year
            of experience in delivering superior products Believe it because you
            have seen it. Here are real numbers
          </div>
          <div className="flex gap-3 md:font-semibold vsm:gap-5 ">
            <button className="w-[220px] h-[54px] flex group  items-center">
              <div className="gradientBg py-3 relative bg-clip-text capitalize text-[16px] gap-1 rounded-[162.5px] border-[2px]  md:border-2 border-[#11998E] w-[165px] h-[54px]">
                {" "}
                <span className="my-auto">get started</span>
              </div>
              <span className="h-[54px] py-3 relative group-hover:absolute group-hover:w-[165px] transition-all duration-700 px-3 group-hover:px-[75px] w-[54px] gradientBg rounded-full">
                <MdArrowOutward className="text-white text-3xl" />
              </span>
            </button>
            <button className="text-white text-[18px] group font-semibold gap-2 flex items-center h-[54px]">
              <span className="">
                <FaRegCirclePlay className="text-[#11998E] text-5xl " />
              </span>
              <span className=" group-hover:text-[#11998E] transition-colors duration-300 vsm:hidden">
                Watch Video
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
