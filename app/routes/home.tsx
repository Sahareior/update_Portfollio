import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OpScroll from './../component/homepage/OpScroll';
import UpdatedScroll from './../component/homepage/UpdatedScroll/UpdatedScroll';
import Galaxy from './../component/homepage/ParticleSystem';
import Hero from './../component/homepage/Hero';
import Component1 from './../component/TestCompo/Component1';

const home = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after both components have mounted
    ScrollTrigger.refresh();
  }, []);

  return (
    <div>
      <Galaxy />
      <OpScroll />
      <UpdatedScroll />
      <Hero />
      <Component1 />
    </div>
  );
};

export default home;