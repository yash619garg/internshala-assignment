import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

import logo from "../images/PNG 1.png";

const Navbar = () => {
  const [showLink, setShow] = useState(false);
  console.log(showLink);
  return (
    <>
      <div className="flex w-full bg-gradient-to-l from-[#ddf4ddfc]  via-navBg0 to-navBg2 justify-between px-[9px] py-[19px] left-0 top-0 mb-0 min-h-[10vh] items-center md:flex-col border-b-2 z-10 ">
        <div className="flex justify-start items-center text-secondary md:w-full md:justify-between md:px-20 md:h-[10vh] sm:px-5 ">
          <div className="flex text-3xl tracking-wider logo justify-start">
            <img src={logo} className="w-[115px] h-[47.5px]" alt="" />
          </div>
          <button
            className="hidden text-3xl md:flex justify-center items-center font-semibold text-[14px] gap-1 rounded-[162.5px] border-[1px] w-[134px] h-[44px] bg-gradient-to-l from-[#38EF7D] to-[#11998E] border-black text-white"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            Menu{" "}
          </button>
        </div>
        <div
          className={`flex text-md gap-6 text-text1 font-[17px] transition-all duration-1000 md:h-0 overflow-hidden smd:bg-forth md:text-secondary md:w-full md:justify-center md:gap-3 md:flex-col vsm:text-base px-4 ${
            showLink && "md:min-h-[40vh] "
          }`}
        >
          <button
            className=" cursor-pointer list-none"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#home" className="">
              Home{" "}
            </a>
          </button>
          <button
            className=" cursor-pointer list-none"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#about">about</a>
          </button>
          <button
            className=" cursor-pointer list-none"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#upcomingEvents">Events</a>
          </button>
          <button
            className=" cursor-pointer list-none "
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#pages">Pages</a>
          </button>
          <button
            className=" cursor-pointer list-none "
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#services">Services</a>
          </button>
          <button
            className=" cursor-pointer list-none "
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#ContactUs">News and Events</a>
          </button>
          <button
            className=" cursor-pointer list-none "
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#ContactUs">Contact Us</a>
          </button>
        </div>
        <div
          className={`flex text-md gap-6 text-text1 font-[17px] transition-all duration-700 md:h-0 overflow-hidden md:bg-forth smd:text-secondary md:w-full md:justify-center md:gap-3 md:flex-col vsm:text-base px-4 ${
            showLink && "md:h-[220px]"
          }`}
        >
          <button>
            <AiOutlineShopping className="w-[24px] h-[24px]" />
          </button>
          <button>
            <AiOutlineSearch className="w-[24px] h-[24px]" />
          </button>
          <button className=" flex justify-center items-center font-semibold text-[14px] gap-1 rounded-[162.5px] border-[1px] w-[134px] h-[44px] bg-gradient-to-l from-[#38EF7D] to-[#11998E] border-black text-white">
            GET QUOTE{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
