import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me" className="border-2 border-black shadow-xl container">
        <h2 className="text-3xl font-bold text-center pb-9">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image className="w-[500px] h-[500px] md:h-[600px] lg:h-[500px]"
            src="/assets/computer.webp"
            alt="computer"
            width={550}
            height={500}
          />

        </div>
        <div className=" ">
        <div className="leading-normal text-lg ">
            Hi, This is Sujon Roy, and I am a
        dedicated and passionate Frontend Developer with a proven track record
        of building dynamic, efficient, and scalable web applications.I am a self-motivated programmer who thrives on continuous
        learning and exploration of emerging technologies. With a strong
        foundation in JavaScript, I take pride in leveraging its versatility to
        craft robust solutions, ensuring a user-centric and performance-driven
        approach. In addition to my technical skills, I possess a
        problem-solving mindset and an eagerness to tackle challenges head-on. I
        am committed to enhancing my expertise while contributing to meaningful
        projects that align with my skill and interests. I am open to exciting
        job opportunities where I can apply my skills, grow professionally, and
        contribute to the success of innovative teams. Let’s collaborate to
        bring impactful ideas to life!
        </div>
        <Image className="flex justify-center items-center mx-auto md:justify-start py-4" src="/assets/mernstack.webp" alt="mern" width={200} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
