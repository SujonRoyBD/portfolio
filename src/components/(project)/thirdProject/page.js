"use client"
import React, { useRef } from "react";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const ThirdProject = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // শুরু থেকে চালানোর জন্য
    }
  };

  return (
    <div className="container py-6 overflow-hidden">
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 items-center">
        
        {/* Video Section */}
        <div>
          <video
            ref={videoRef}
            src="/assets/record.mp4"
            loop
            muted
            playsInline
            controls={false}
            className="w-[500px] h-[400px] md:h-[500px] lg:h-[400px] rounded-lg object-cover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-3xl text-center md:text-start lg:text-start  font-bold text-indigo-400 py-4">Table-Fresh</p>
          <p className="py-4">
            This is a restaurant and e-commerce themed UI layout showcasing
            features like food booking, discounts, free delivery, secure
            payment, 24/7 support, and restaurant listings. It includes product
            displays (like shoes), navigation menus, and quick links for login,
            cart, wishlist, support, and contact details for user convenience.
          </p>

          {/* Links */}
          <div className="flex gap-5 justify-center items-center mx-auto md:justify-start lg:items-start">
            <a
            target="_blank"
              href="https://github.com/SujonRoyBD">
              <div>
              <div className="border border-white rounded-full px-2 py-2">
                <IoLogoGithub className="text-4xl text-blue-600" />
              </div>
              <p className="scroll-pl-12">Github</p>
            </div>
            </a>
            <a target="_blank"
              href="https://e-commerce-frontend-qs12.vercel.app/">
              <div>
              <div className="border border-white rounded-full px-2 py-2">
                <TbWorld className="text-4xl text-blue-600" />
              </div>
              <p className="pl-3">Live</p>
            </div>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-9 py-7">
               <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1 text-center">Html</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1 text-center">Css</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1 ">Tailwin Css </p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1 text-center">
              JavaScript
            </p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1 text-center">
              Next.Js
            </p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1 text-center">
              Typescript
            </p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1 text-center">
              Shadcn-Ui
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdProject;
