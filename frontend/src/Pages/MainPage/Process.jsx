import React from "react";
import { pro } from "../../data";
import PageTags from "../../Components/PageTags";

const Process = () => {
  const { pros, title, caption } = pro;
  return (
    <div className="w-full bg-white flex flex-col items-center my-20 gap-7">
      <PageTags title={title} />
      <div className="text-[54px] w-[717px] text-[#0D141C] text-center font-bold smd:w-full px-6 sm:px-3 sm:text-[30px] smd:text-[44px]">
        {caption}
      </div>
      <div className="flex justify-evenly flex-wrap mt-5 gap-8 ">
        {pros.map((process) => {
          const { image, heading, description } = process;
          return (
            <div className="w-[373px] vsm:w-[320px] flex flex-col items-center gap-5">
              <img src={image} alt="" className="w-[260px] h-[260px]" />
              <div className="flex flex-col items-center">
                <h1 className="text-[#0D141C] text-center text-[28px] font-bold">
                  {heading}
                </h1>
                <p className="text-[#4F7396] text-center text-[20px] font-medium  ">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
