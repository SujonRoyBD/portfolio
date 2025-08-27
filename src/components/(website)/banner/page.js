"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
const Banner = () => {
  return (
    <div className="py-16 container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-4">
          <p className="text-red-300">Hi there,</p>
          <h2 className="font-bold text-5xl leading-normal">I&apos;m Sujon</h2>

          {/* ✅ Typing animation */}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "React Developer",
              1000,
              "Web Designer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl text-white font-semibold"
          />
          <div className="flex gap-5 py-4">
            <div className="border border-white rounded-full">
              <FaFacebookF className="text-white px-1 py-1 text-2xl" />
            </div>
            <div className="border border-white rounded-full">
              <CiLinkedin className="text-white px-1 py-1 text-2xl" />
            </div>

            <div className="border border-white rounded-full">
              <FaGithub className="text-white px-1 py-1 text-2xl" />
            </div>
          </div>
          <div className="lg:flex gap-4 text-center">
            <div className="py-4">
             <div>
               <a
              href="#contact"
              className="flex gap-2 border border-cyan-400 px-5 py-2 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition text-center justify-center items-center"
            >
              Contact Me
              <IoIosContact className="mt-1" />
            </a>
             </div>
            </div>

           <div className="md:mt-4">
             <a
              target="_blank"
              href="/assets/Personal.pdf"
              // download
              className=" flex gap-2 border border-cyan-400 px-5 py-2 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition text-center justify-center items-center"
            >
              Download Resume
              <IoMdDownload className="mt-1" />
            </a>
           </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/download1.jpg"
            alt="my"
            width={300}
            height={300}
            className="rounded-full w-[300px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
