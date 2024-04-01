import React from "react";
import { team } from "../../data";
import design1 from "../../images/Subtract.png";
import design2 from "../../images/Subtract (1).png";
import profile1 from "../../images/t4-img-1 1.png";
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import SpecialButton from "../../Components/SpecialButton";

const Team = () => {
  return (
    <div className="flex w-full flex-col items-center py-5">
      <div className="w-full bg-white flex gap-5 justify-around flex-wrap my-10">
        {team.map((member) => {
          const { logo, name, role } = member;
          return (
            <div className="flex flex-col gap-3 items-center relative group hover:cursor-pointer overflow-hidden justify-center gradientBg w-[320px] h-[481px] transition-all duration-500  rounded-[408px] shadow-lg shadow-slate-400">
              <img
                src={logo}
                alt=""
                className="w-[204px] h-[204px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:translate-y-[-15px] transition-all duration-500"
              />
              <h1 className="text-white text-[26.11px] font-bold group-hover:translate-y-[-15px] transition-all duration-500">
                {name}
              </h1>
              <div className="text-white text-[14.61px] font-medium group-hover:translate-y-[-15px] transition-all duration-500">
                {role}
              </div>
              <div className="flex translate-y-[100px] text-white text-[26.11px] gap-3 group-hover:translate-y-[-10px] transition-all duration-500 ">
                <span className="">
                  <FaFacebook />
                </span>
                <span className="">
                  <FaInstagram />
                </span>
                <span className="">
                  <FiYoutube />
                </span>
                <span className="">
                  <FaLinkedin />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <SpecialButton title="View All Services" />
    </div>
  );
};

export default Team;
