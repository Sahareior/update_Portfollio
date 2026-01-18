import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Galaxy from './ParticleSystem';
import { FaCloud, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { SiGit, SiJavascript, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
import UpdatedScroll from './UpdatedScroll/UpdatedScroll';

gsap.registerPlugin(ScrollTrigger, Flip);

const OpScroll = () => {
    const [ison2nd, setIsOn2nd] = useState(false)
    const animationContainerRef = useRef(null);
    
 useLayoutEffect(() => {
  const secondState = Flip.getState('.second', { props: 'all' });
  const thirdState = Flip.getState('.third', { props: 'all' });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: animationContainerRef.current,
      start: 'top top',
      end: '+=300%', // 🔥 critical
      scrub: 1,
      markers: true,
      invalidateOnRefresh: true,
    },
  });

  tl.to({}, { duration: 0.2 })
    .add(
      Flip.fit('.sword', secondState, {
        absolute: true,
        ease: 'none',
        duration: 0.3,
        onComplete: () => setIsOn2nd(true),
      })
    )
    .to({}, { duration: 0.2 })
    .add(
      Flip.fit('.sword', thirdState, {
        absolute: true,
        ease: 'none',
        duration: 0.3,
      })
    );

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}, []);


    return (
    <div>
            {/* Hero Section - Outside animation */}
   <div 
        className=" h-[90vh] bg-gray-800/10" 
        // ref={nextBlockRef}
      
      >
{/* <Galaxy /> */}

<div className='absolute text-white  top-1/4 space-y-5 left-[13%]'>
<div className="flex gap-3 items-stretch">
  <div className="bg-emerald-400 w-1.25" />
  <div>
    <p className='   text-5xl z-20 mb-7'>Sahareior Sijan</p>
<p className=' z-20 mt-3 '>FullStack Developer</p>
</div>
</div>
</div>
      </div>

            {/* Animation Container - Wrap sections where animation happens */}
            <div className='animation-container relative'>
                {/* First Section - Starting position */}
                <section className='min-h-screen bg-gray-800/10 py-16 px-8 flex flex-col items-center justify-center'>
                    <h2 className='text-3xl font-semibold mb-8 text-center'>Location 1</h2>
                    <div className='flex items-center justify-center gap-4'>
                        <p className='text-gray-600'>The animated element starts here</p>
                        <div className=' w-16 h-16 rounded-full bg-linear-to-br from-amber-400 to-orange-500 shadow-lg' />
                        <img className='sword' src="/images/sword.png" alt="" />
                    </div>
                </section>

                {/* Middle Section - like your Carousel */}
       <section id="skills" className="py-20 px-6 md:px-20 min-h-screen bg-gray-800/10">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-10 flex items-center">
                            <FaCode className="mr-3 text-green-400" />
                            Skills & Technologies
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {/* Frontend Skills */}
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-green-900/30 rounded-lg mr-4">
                                        <FaCode className="text-2xl text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">Frontend</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <SiJavascript className="mr-2 text-yellow-400" /> JavaScript
                                    </span>
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <SiReact className="mr-2 text-blue-400" /> React
                                    </span>
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <SiTailwindcss className="mr-2 text-teal-400" /> Tailwind
                                    </span>
                                </div>
                            </div>

                            {/* Backend Skills - This card will grow */}
                            <div 
                                className={`bg-gray-900 p-6 rounded-xl border transition-all duration-300 ${
                                    ison2nd ? 'border-blue-500 shadow-2xl shadow-blue-500/30' : 'border-gray-700 hover:border-blue-500'
                                }`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-blue-900/30 rounded-lg mr-4">
                                        <FaTools className="text-2xl text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">Backend</h3>
                                    <div className='second w-16 h-16 rounded-full border-4 border-dashed border-purple-400 ml-4' />
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <SiNodedotjs className="mr-2 text-green-500" /> Node.js
                                    </span>
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <SiPython className="mr-2 text-yellow-500" /> Python
                                    </span>
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <FaDatabase className="mr-2 text-purple-400" /> Databases
                                    </span>
                                </div>
                                {ison2nd && (
                                    <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-700/50">
                                        <p className="text-blue-300 text-sm flex items-center">
                                            <span className="animate-pulse mr-2">⚡</span>
                                            Element has arrived here!
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Tools & Others */}
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-purple-900/30 rounded-lg mr-4">
                                        <FaCloud className="text-2xl text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">Tools & DevOps</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <SiGit className="mr-2 text-orange-500" /> Git
                                    </span>
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <FaTools className="mr-2 text-gray-400" /> CI/CD
                                    </span>
                                    <span className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
                                        <FaCloud className="mr-2 text-blue-300" /> Cloud
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* About Section */}
  

                {/* Third Section - Final animation target */}
                <section className='min-h-screen bg-gray-800/10 py-16 px-8 flex flex-col items-center justify-center'>
                    <h2 className='text-3xl font-semibold mb-8 text-center'>Location 3</h2>
                    <div className='flex items-center justify-center gap-4'>
                        <p className='text-gray-600'>Finally lands here</p>
                        <div className='third w-16 h-16 rounded-full border-4 border-dashed border-green-400' />
                    </div>
                </section>
            </div>


           

            {/* Footer - Outside animation */}
            <footer className='bg-gray-800 text-white py-12 px-8'>
                <div className='max-w-6xl mx-auto text-center'>
                    <h3 className='text-2xl font-semibold mb-4'>Footer Section</h3>
                    <p className='text-gray-400'>© 2026 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default OpScroll;