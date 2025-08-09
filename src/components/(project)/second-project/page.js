import Image from "next/image";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const SecondProject = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 ">
        <div>
          <Image src="/assets/sum-dim-sum.png" alt="sum" height={300} width={500}  className="md:h-[500px] lg:h-[400px]"/>
        </div>
        <div>
          <p className="text-3xl font-bold text-indigo-400 py-4 text-center md:text-start lg:text-start">Sum-food
          </p>
          <p className="py-4">
            This is a restaurant and e-commerce themed UI layout showcasing
            features like food booking, discounts, free delivery, secure
            payment, 24/7 support, and restaurant listings. It includes product
            displays (like shoes), navigation menus, and quick links for login,
            cart, wishlist, support, and contact details for user convenience.
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
          <a target="_blank"
              href="https://sum-dim-sum-tau.vercel.app/">
              <div>
                <div className="border border-white rounded-full px-2 py-2">
                <TbWorld className="text-4xl text-blue-600"/>
                
            </div>
            <p className="pl-3">Live</p>
            </div>
          </a>

          </div>
          <div className="flex gap-9 py-7">
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">JavaScript</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">Next Js</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">Typescript</p>

            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">Shadcn-Ui</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondProject;
