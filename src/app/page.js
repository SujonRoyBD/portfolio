
import Project from '@/components/(project)/projects/page';
import AboutMe from '@/components/(website)/about-me/page';
import Banner from '@/components/(website)/banner/page';
import ContactMe from '@/components/(website)/contact-me/page';
import MySkill from '@/components/(website)/skills/page';
import React from 'react';

const page = () => {
  return (
    <div className=''>
      <Banner/>
      <AboutMe/>
      <MySkill/>
      <Project/>
      <ContactMe/>
      
    </div>
  );
};

export default page;