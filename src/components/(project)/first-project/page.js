import Image from "next/image";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const FirstProject = () => {
  return (
    <div className="container py-4">
      <p className="text-center text-4xl font-bold">
        Recent <span className="text-teal-500">Projects</span>
      </p>
      <p className="text-center py-2">Something I have build</p>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>project</div>
        <div>
          <p className="text-3xl font-bold text-indigo-400 py-4">Discount Me</p>
          <p className="py-4">
            This is a restaurant and e-commerce themed UI layout showcasing
            features like food booking, discounts, free delivery, secure
            payment, 24/7 support, and restaurant listings. It includes product
            displays (like shoes), navigation menus, and quick links for login,
            cart, wishlist, support, and contact details for user convenience.
            er banga;
          </p>
          <div className="flex gap-5">
          <div>
             <div className="border border-white rounded-full px-2 py-2">
             <IoLogoGithub className="text-4xl text-blue-600"/>
           </div>
           <p className="scroll-pl-12">Github</p>
          </div>
            <div>
                <div className="border border-white rounded-full px-2 py-2">
                <TbWorld className="text-4xl text-blue-600"/>
                
            </div>
            <p className="pl-3">Live</p>
            </div>

          </div>
          <div className="flex gap-9 py-7">
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">JavaScript</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">React.Js</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">Redux</p>
            <p className="text-violet-500 border rounded-xl border-gray-400 px-2 py-1">Shadcn-Ui</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstProject;
