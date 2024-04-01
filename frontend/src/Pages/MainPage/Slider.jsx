import React from "react";
import img1 from "../../images/Group 22.png";

const Slider = () => {
  return (
    <marquee className="gradientBg w-full flex items-center overflow-hidden h-[190px] px-5">
      <div className="flex h-full items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[84px] font-bold text-white ">JYUTH</span>
          <span className="">
            <img src={img1} className="w-[284px] h-[84px]" alt="" />
          </span>
        </div>
        <div className="flex items-center ">
          <span className="text-[84px] font-bold text-white ">Creative</span>
          <span className="">
            <img src={img1} className="w-[284px] h-[84px]" alt="" />
          </span>
        </div>
        <div className="flex items-center ">
          <span className="text-[84px] font-bold text-white ">Digital</span>
          <span className="">
            <img src={img1} className="w-[284px] h-[84px]" alt="" />
          </span>
        </div>
        <div className="flex items-center ">
          <span className="text-[84px] font-bold text-white ">Agency</span>
          <span className="">
            <img src={img1} className="w-[284px] h-[84px]" alt="" />
          </span>
        </div>
      </div>
    </marquee>
  );
};

export default Slider;
