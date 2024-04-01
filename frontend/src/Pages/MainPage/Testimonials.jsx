import React, { useRef, useState } from "react";
import { testimonials } from "../../data";
import PageTags from "../../Components/PageTags";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Testimonials = () => {
  const reviewContainer = useRef(null);
  const [CountRight, setCountRight] = useState(testimonials.reviews.length);
  const [CountLeft, setCountLeft] = useState(0);
  // const [translate, setTranslate] = useState(1);

  const [transitionValue, setTransitionValue] = useState(0);

  const moveRight = () => {
    console.log(testimonials.reviews.length);
    if (CountRight > 1) {
      reviewContainer.current.style.transform = `translateX(${
        transitionValue - 532
      }px)`;
      setTransitionValue(transitionValue - 532);
      setCountLeft(CountLeft + 1);
      setCountRight(CountRight - 1);
    }
  };
  const moveLeft = () => {
    if (CountLeft > 0) {
      reviewContainer.current.style.transform = `translateX(${
        transitionValue + 532
      }px)`;
      setTransitionValue(transitionValue + 532);
      setCountLeft(CountLeft - 1);
      setCountRight(CountRight + 1);
    }
  };
  const { reviews, title, caption } = testimonials;
  return (
    <div className="w-full bg-white flex flex-col items-center my-20 gap-7">
      <PageTags title={title} />
      <div className="text-[54px] w-[717px] text-[#0D141C] text-center font-bold smd:w-full px-6 sm:px-3 sm:text-[30px] smd:text-[44px]">
        {caption}
      </div>
      <div className="flex w-full  justify-evenly mt-5 gap-8 overflow-hidden">
        <div
          className="flex transition-all w-full duration-700 px-6 py-4 gap-8"
          ref={reviewContainer}
        >
          {reviews.map((review) => {
            const { image, name, job, id, description, rating } = review;
            return (
              <div
                key={id}
                className="min-w-[532px] min-h-[329px] sm:w-[90vw] sm:h-auto sm:overflow-hidden py-4 rounded-md bg-white shadow-md shadow-slate-500  vsm:w-[320px] flex flex-col items-center gap-5"
              >
                <div className="flex border-b-[1px] gap-3 border-black w-full flex-wrap ">
                  <div className="w-[188px] flex justify-center h-[272px] sm:w-[90vw]">
                    <img
                      src={image}
                      alt=""
                      className="w-[188px] h-[272px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.10)]"
                    />
                  </div>
                  <div className="w-[306px] flex justify-center gap-3 py-3 items-center flex-col sm:w-[90vw] px-3">
                    <span>
                      <img src={rating} alt="" />
                    </span>
                    <p className="text-center text-text3">{description}</p>
                  </div>
                </div>
                <div className="sm:w-full flex w-full">
                  <div className="flex items-center w-full justify-between flex-wrap vsm:justify-center gap-3 sm:w-[90vw] px-3">
                    <span className="text-text3">{name}</span>
                    <span className="gradientBg bg-clip-text">{job}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-6">
        <button
          className="w-[54px] h-[54px] flex items-center justify-center"
          onClick={moveLeft}
        >
          <span className="h-[54px] py-3 relative transition-all duration-700 px-3  w-[54px] gradientBg rounded-full">
            <FaArrowLeft className="text-white text-3xl" />
          </span>
        </button>
        <button
          className="w-[54px] h-[54px] flex items-center justify-center"
          onClick={moveRight}
        >
          <span className="h-[54px] py-3 relative transition-all duration-700 px-3  w-[54px] gradientBg rounded-full">
            <FaArrowRight className="text-white text-3xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
