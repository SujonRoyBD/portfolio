import Image from "next/image";
import React from "react";

const MySkill = () => {
  return (
    <div className="shadow-lg shadow-gray-700">
        <p className="text-center pt-12 text-3xl font-bold">Skills & Expertise</p>
      <div className="lg:ml-8 md:ml-0">
        <div className="grid grid-cols-2 md:grid-cols-5 px-14 gap-[50px] py-12 container">
          <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-9 py-6 shadow-xl">
            <Image src="/assets/html.webp" alt="html" width={60} height={60} />
            <p className="text-center py-2">HTML</p>
          </div>
          <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-4 py-4 shadow-xl">
            <Image src="/assets/css.png" alt="css" width={120} height={120} />
            <p className="text-center py-2">CSS</p>
          </div>
          <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-6 py-7 shadow-xl">
            <Image
              src="/assets/javas.png"
              alt="javascript"
              width={90}
              height={90}
            />
            <p className="text-center py-2">Javascript</p>
          </div>
          <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-8 py-5 shadow-xl">
            <Image
              src="/assets/boot.png"
              alt="bootstrap"
              width={60}
              height={60}
            />
            <p className="text-center ">Bootstrap</p>
          </div>
          <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-8 py-6 shadow-xl ">
            <Image
              src="/assets/tail.png"
              alt="tailwind"
              width={60}
              height={60}
            />
            <p className="text-center pb-2 ">Tailwind </p>
          </div>
          <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-10 py-6 shadow-xl">
            <Image
              src="/assets/rsact.png"
              alt="tailwind"
              width={60}
              height={60}
            />
            <p className=" py-2 justify-center -ml-3">React.Js</p>
          </div>
          <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-6 py-6 shadow-xl">
              <Image
                src="/assets/mongo.png"
                alt="html"
                width={50}
                height={40}
              />
              <p className="">MongoDB</p>
            </div>
            <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-4 py-4 shadow-xl">
              <Image src="/assets/imagest.png" alt="css" width={80} height={80} />
              <p className="text-center py-2">Node.Js</p>
            </div>
            <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-4 py-7 shadow-xl">
              <Image
                src="/assets/expresss.png"
                alt="javascript"
                width={100}
                height={120}
              />
              <p className="text-center py-2">Express.Js</p>
            </div>
            <div className="border-2 h-[120px] w-[120px] border-blue-500 rounded-full px-10 py-6 shadow-xl">
              <Image
                src="/assets/next.jpg"
                alt="bootstrap"
                width={60}
                height={60}
              />
              <p className="text-center py-2">Next.Js</p>
            </div>
            
          
        </div>
      </div>
    </div>
  );
};

export default MySkill;
