"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { CardContainer, CardItem } from "./CardComponents";
import Image from "next/image";

const HeroContent: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FullStack Developer", "MernStack Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-2 mt-[60rem] gap-5 w-full z-[20] md:gap-0 md:flex-row lg:flex-row md:px-10  lg:px-20 md:mt-40"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center m-auto text-start order-2 md:order1 md:items-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I&apos;m A
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              {text}{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          This is Shreyaskar Upadhyay, and I&apos;m a Full Stack Developer focused on
          building scalable, user-centric digital solutions. Explore my projects and
          skills to see how I turn complex ideas into efficient applications.
        </motion.p>

        <motion.a
          href="/Shreyaskar Upadhyay Resume.pdf"
          download
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[220px] max-w-[260px]"
        >
          Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center order-1 md:order-2"
      >
        <CardContainer className="inter-var">
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateY={20}
            rotateZ={0}
            className="w-[18rem] h-[25rem] mt-0 lg:w-[25rem] lg:h-[38rem] lg:mt-10"
          >
            <Image
              src="/shrey_sit.jpg"
              height={1000}
              width={1000}
              className="h-full w-full object-cover rounded-full group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardContainer>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
