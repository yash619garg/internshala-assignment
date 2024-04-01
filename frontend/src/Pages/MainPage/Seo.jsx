import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { seo } from "../../data";
import img1 from "../../images/Rectangle 14.png";
import img2 from "../../images/Rectangle 15.png";
import img3 from "../../images/Rectangle 16.png";
import SpecialButton from "../../Components/SpecialButton";
import PageTags from "../../Components/PageTags";
const Seo = () => {
  const { title, description, caption, consulting } = seo[0];
  return (
    <div className="w-full flex flex-wrap bg-white my-12 justify-evenly  ">
      <div className=" min-h-[636px] w-[576px] flex gap-5 p-5 md:w-full md:justify-center md:min-h-[676px]">
        <div className="flex flex-col w-1/2 sm:w-full gap-3 ">
          <div className=" w-full">
            <img src={img2} className="w-full" alt="" />
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-end">
            <img
              src={img3}
              alt=""
              className="w-2/3 hover:translate-x-2 hover:translate-y-2 transition-all duration-700"
            />
          </div>
        </div>
        <div className="flex w-1/2 sm:hidden ">
          <img src={img1} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="w-[636px] min-h-[642px] flex flex-col justify-center px-5 md:gap-4 md:w-full md:min-h-[642px] md:p-10 smd:p-5 ">
        <PageTags title={title} />
        <div className="text-[#0D141C] text-[54px] font-bold tracking-wider sm:text-[44px] ">
          {caption}
        </div>
        <div className="text-[#4F7396] text-[20px] font-medium">
          {description}
        </div>
        <div className="flex flex-col gap-5">
          {consulting.map((consult) => {
            const { name, percent } = consult;
            return (
              <>
                <div className="w-full flex justify-between ">
                  <span className="text-[#0D141C] text-[20px] font-medium">
                    {name}
                  </span>
                  <span className="gradientBg bg-clip-text text-[20px] font-medium">
                    {percent}%
                  </span>
                </div>
                <div className="w-full h-3 border-2 relative rounded-md border-[#11998E] bg-white">
                  <div className={`h-2 bg-green-300 w-[80%] absolute`}></div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex gap-3 mt-5 flex-wrap ">
          <SpecialButton title="view all services" />
          <div className="flex gap-3 ">
            <span className="w-[54px] h-[54px]">
              <FaPhoneVolume className="w-full h-full text-[#11998E]" />
            </span>
            <div className="flex flex-col">
              <span className="text-[16px] gradientBg bg-clip-text">
                Call Us Anytime
              </span>
              <span className="text-[#0D141C] text-[26.62px] font-bold">
                0215 6856 9875
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
