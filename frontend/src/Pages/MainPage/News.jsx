import React from "react";
import { news } from "../../data";
import SpecialButton from "../../Components/SpecialButton";
import PageTags from "../../Components/PageTags";
import { MdArrowOutward } from "react-icons/md";

const News = () => {
  const { title, caption, description, updates } = news;
  return (
    <div className="w-full flex justify-evenly flex-wrap bg-white mt-10">
      <div className="w-1/3 px-5 sm:w-[450px] vsm:w-[320px] md:py-10 md:w-full">
        <PageTags title={title} />
        <div className="text-[#0D141C] text-[54px] font-bold tracking-wider ">
          {caption}
        </div>
        <div className="text-[#4F7396] text-[20px] font-medium">
          {description}
        </div>
        <div className="mt-5">
          <SpecialButton title="view all blogs" />
        </div>
      </div>
      <div className="w-2/3 min-h-[673.88px] md:w-full sm:min-h-[500px] flex flex-col gap-[38px] items-center md:items-start sm:items-center">
        {updates.map((update) => {
          const { image, description1, head, date, tag } = update;
          return (
            <div className="flex w-full justify-center group  md:px-5 sm:flex-col  gap-5 ">
              <div className="w-1/4 relative md:w-1/3 sm:w-full sm:h-[250px] flex justify-center">
                <img src={image} alt="" className="w-full" />
                <div className="absolute right-0 top-0 bottom-0 left-0 gradientBg3 flex justify-center items-center w-0 group-hover:w-full transition-all duration-200 rounded-xl">
                  <MdArrowOutward className="text-white text-5xl border-2 border-white rounded-full  hidden group-hover:flex " />
                </div>
              </div>
              <div className="w-2/4 md:w-2/3 sm:w-full sm:gap-5 border-2  border-gray rounded-[20px] md:p-4 flex flex-col justify-evenly p-3">
                <div className="w-full flex justify-between">
                  <button className="bg-[#b1ead4] rounded-md px-3">
                    <span className="gradientBg bg-clip-text">{tag}</span>
                  </button>
                  <span className="text-[14px] font-medium">{date}</span>
                </div>
                <h1 className="text-[#0D141C] text-[26px] font-semibold">
                  {head}
                </h1>
                <p className="text-text3 text-[14px] font-medium">
                  {description1}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
