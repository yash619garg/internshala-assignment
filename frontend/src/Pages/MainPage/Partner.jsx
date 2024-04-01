import React from "react";
import google from "../../images/google.png";
import amazon from "../../images/amazon.png";
import spotify from "../../images/spotify.png";
import slack from "../../images/slack.png";
import linkedIn from "../../images/linkedin.png";
import walmart from "../../images/walmart.png";

const Partner = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-[95px] bg-white my-11">
        <div className="text-[42px] flex font-bold ml-[140px] md:ml-0 md:justify-center sm:hidden">
          <span className="gradientBg bg-clip-text">200+</span>
          <span className="text-[#0D141C]">Trusted Partners</span>
        </div>
        <div className="flex gap-[76px] flex-wrap  ml-[140px] mr-[20px] md:mx-4 md:justify-center">
          <div className="w-[132px] h-[40px]">
            <img src={google} alt="" />
          </div>
          <div className="w-[132px] h-[40px]">
            <img src={amazon} alt="" />
          </div>
          <div className="w-[132px] h-[40px]">
            <img src={spotify} alt="" />
          </div>
          <div className="w-[132px] h-[40px]">
            <img src={slack} alt="" />
          </div>
          <div className="w-[132px] h-[40px]">
            <img src={linkedIn} alt="" />
          </div>
          <div className="w-[132px] h-[40px]">
            <img src={walmart} alt="" />
          </div>
        </div>
      </div>
      <hr className="" />
    </>
  );
};

export default Partner;
