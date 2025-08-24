import Image from "next/image";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const FirstProject = () => {
  return (
    <div className="container py-9">
      <p className="text-center text-4xl font-bold">
        Recent <span className="text-teal-500">Projects</span>
      </p>
      <p className="text-center py-2">Something I have build</p>
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2  py-8">
        <div>
          <Image src="/assets/discount.png" alt="sum" height={100} width={500} className="w-[500px] h-[400px] md:h-[530px] lg:h-[400px] rounded-lg"/>
        </div>
        <div>
          <p className="text-3xl font-bold text-center md:text-start lg:text-start text-indigo-400 py-4">Discount-me</p>
          <p className="py-4 text-justify">
            This is a restaurant and e-commerce themed UI layout showcasing
            features like food booking, discounts, free delivery, secure
            payment, 24/7 support, and restaurant listings. It includes product
            displays (like shoes), navigation menu, and quick links for login,
            cart, wishlist support, and contact details for user convenience.
            er banga;
          </p>
          <div className="flex gap-5 justify-center items-center mx-auto md:justify-start lg:items-start">
      <a 
      target="_blank"
              href="https://github.com/SujonRoyBD">
        
            <div>
             <div className="border border-white rounded-full px-2 py-2">
             <IoLogoGithub className="text-4xl text-blue-600"/>
           </div>
           <p className="scroll-pl-12">Github</p>
          </div>
      </a>
          <a
          target="_blank"
              href="https://discount-me-lyart.vercel.app/">
              <div>
                <div className="border border-white rounded-full px-2 py-2">
                <TbWorld className="text-4xl text-blue-600"/>
                
            </div>
            <p className="pl-3">Live</p>
            </div>
          </a>

          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-9 py-7">
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">JavaScript</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">React Js</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">Redux</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">Swiper Js</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstProject;
