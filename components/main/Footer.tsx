import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/shreyaskar-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            <a
              href="https://leetcode.com/your-leetcode-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <SiLeetcode />
              <span className="text-[15px] ml-[6px]">LeetCode</span>
            </a>
            <a
              href="https://www.youtube.com/your-youtube-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.linkedin.com/in/shreyaskar-upadhyay-3828ab275/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/say_yyaass/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/say_yasss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Full Stack Developer passionate <br /> about building scalable<br />
                web solutions and mentoring <br /> aspiring developers.
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] ml-[-40px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">shreyaskar21@gmail.com</span>
            </p>
          </div>
        </div>

        {/* White line separator */}
        <div className="w-full h-px bg-white my-[20px]" />

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Shreyaskar 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
