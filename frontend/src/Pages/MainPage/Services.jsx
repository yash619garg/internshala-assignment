import React from "react";
import { services } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import cornerRT from "../../images/Group 2.png";
import cornerLB from "../../images/Vector.png";
import bg1 from "../../images/Group 18.png";
import { MdArrowOutward } from "react-icons/md";
import SpecialButton from "../../Components/SpecialButton";
import PageTags from "../../Components/PageTags";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full bg-white flex flex-col items-center mt-11 gap-8  "
    >
      <PageTags title="OUR BEST SERVICES" />
      <div className="text-[54px] text-[#0D141C] text-center">
        We Provide Best Services
      </div>
      <div className="flex w-full flex-wrap gap-8 justify-evenly ">
        {services.map((service) => {
          const { id, image, caption, title, link } = service;
          return (
            <div
              className="flex group w-[400px] min-h-[450px] vsm:w-[95vw] [perspective:1000px] relative "
              key={id}
            >
              <div className="w-[400px] min-h-[450px]  rounded-3xl transition-all duration-500 [transform-style:preserve-3d] [backface-visibility:hidden]  vsm:w-[95vw] group-hover:[transform:rotateY(180deg)] shadow-slate-400 shadow-md">
                <div className="absolute bg-white flex flex-col items-center justify-center w-[400px] min-h-[450px]  object-cover gap-3 rounded-3xl overflow-hidden vsm:w-[95vw] ">
                  <img
                    src={cornerRT}
                    alt=""
                    className="absolute right-0 top-0"
                  />
                  <img
                    src={cornerLB}
                    alt=""
                    className="absolute left-0 bottom-0"
                  />
                  <img src={image} alt="" className=" bg-transparent" />
                  <h1 className="text-2xl">{title}</h1>
                  <p className="logo text-[#4F7396] text-center">{caption}</p>
                  <button className="w-[220px] h-[54px] flex items-center justify-center">
                    <span className="h-[54px] py-3 relative transition-all duration-700 px-3 w-[54px] gradientBg rounded-full">
                      <MdArrowOutward className="text-white text-3xl" />
                    </span>
                  </button>
                </div>
                <div className="absolute bg-white flex gap-3 flex-col items-center justify-center w-[400px] min-h-[450px] rounded-3xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] vsm:w-[95vw] shadow-slate-400 shadow-md">
                  <img
                    src={cornerRT}
                    alt=""
                    className="absolute right-0 top-0"
                  />
                  <img
                    src={cornerLB}
                    alt=""
                    className="absolute left-0 bottom-0"
                  />
                  <img src={image} alt="" className="bg-transparent " />
                  <h1 className="text-2xl ">{title}</h1>
                  <p className="logo text-[#4F7396] text-center">{caption}</p>
                  <button className="w-[220px] h-[54px] flex items-center justify-center">
                    <span className="h-[54px] py-3 relative transition-all duration-700 px-3  w-[54px] gradientBg rounded-full">
                      <MdArrowOutward className="text-white text-3xl" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <SpecialButton title="view all services" />
      </div>
    </div>
  );
};

export default Services;
