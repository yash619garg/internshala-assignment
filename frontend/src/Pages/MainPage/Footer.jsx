import React from "react";
import girl from "../../images/n4-img-1 1.png";
import logo from "../../images/PNG 1.png";
import pay from "../..//images/gto-footer-2-payment 1.png";
import { Link } from "react-router-dom";

const Down = () => {
  return (
    <div className="w-full h-[806px] smd:min-h-[1006px] mt-28 relative bg-[#00425A] flex flex-col items-center">
      <div className="w-full h-1/2 flex justify-center relative">
        <div className="w-[90%] gradientBg flex h-[446px] absolute top-[-40px] rounded-2xl ">
          <div className="w-1/2 h-full flex justify-center md:hidden">
            <div className="absolute bottom-0  ">
              <img src={girl} alt="" />
            </div>
          </div>
          <div className="text-white w-1/2 md:w-full md:px-10 smd:px-4 p-3 flex flex-col justify-evenly  ">
            <h1 className="text-[40px] font-bold">
              Subscribe To Our Newsletter!
            </h1>
            <p className="text-[18px] font-medium">
              We are 100+ professional software engineers with more than 10
              years in delive ring super products it because you've seen it.
            </p>
            <div className="w-full flex  h-[54px] bg-white">
              <input
                type="text"
                className="w-[85%] h-full focus:outline-none text-[#4F7396] text-[20px] px-4"
              />
              <div className="w-[15%] min-w-[100px] px-1 py-1">
                <button className=" w-full h-full px-2 text-white gradientBg">
                  <span className="text-white">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex h-1/2 py-10 px-5 smd:flex-col gap-5 smd:justify-start">
        <div className="w-1/3 smd:w-full justify-center  gap-4 flex flex-col">
          <img src={logo} alt="" className="w-[147px] h-[60px]" />
          <p className="text-white font-medium text-[20px]">
            Improve Efficiency, Provide A Better Customer Experience With Modern
            Technolo Services Available
          </p>
          <img src={pay} alt="" className="w-[147px] h-[40px]" />
        </div>
        <div className="w-2/3 smd:w-full flex justify-around  px-10 smd:px-2">
          <div className="w-1/3 flex flex-col justify-center gap-2">
            <h1 className="text-white font-bold text-[22px] sm:text-[18px] ">
              Resources
            </h1>
            <Link className="text-white text-[18px] sm:text-[14px]  font-medium">
              Career
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              About us
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Features
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Services
            </Link>
          </div>
          <div className="w-1/3 flex flex-col justify-center gap-2">
            <h1 className="text-white font-bold text-[22px] sm:text-[18px] ">
              Company
            </h1>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Blog
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Developers
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Our Story
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              About us
            </Link>
          </div>
          <div className="w-1/3 flex flex-col justify-center gap-2">
            <h1 className="text-white font-bold text-[22px] sm:text-[18px] ">
              Help Pages
            </h1>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Customer
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Developers
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              Our Story
            </Link>
            <Link className="text-white text-[18px] sm:text-[14px] font-medium">
              About us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Down;
