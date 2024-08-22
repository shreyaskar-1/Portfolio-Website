"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full h-full">
      <div className="absolute top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[32px] md:text-[40px] font-medium text-center text-gray-200"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Performance{" "}
          </span>
          &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Security
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-30px] md:translate-y-[-50px] absolute z-[20] w-auto h-auto mt-14">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={40}
            height={40}
            className="w-[40px] md:w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={60}
            height={60}
            className="z-10 md:w-[80px] md:h-[80px]"
          />
        </div>

        <div className="Welcome-box px-[10px] py-[4px] z-[20] border my-[15px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] md:text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-0 px-[5px] md:bottom-[10px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Protect Your Data with Advanced Encryption
        </div>
      </div>


      <div className="absolute inset-0 flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-[100vh] object-cover lg:h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
