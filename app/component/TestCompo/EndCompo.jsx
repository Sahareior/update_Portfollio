import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaCode, FaTools, FaDatabase, FaCloud, FaUser, FaHeart } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiGit } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);


const EndCompo = () => {



    
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      
      {/* About Me Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center">
            <FaUser className="mr-3 text-blue-400" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Passionate developer with expertise in modern web technologies. 
                I create efficient, scalable solutions with clean code and best practices.
                Always eager to learn new technologies and tackle challenging problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, 
                writing technical articles, and exploring the latest trends in tech.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">My Philosophy</h3>
              <p className="text-gray-300 mb-4">
                I believe in writing code that's not just functional but also maintainable and elegant.
              </p>
              <div className="flex items-center text-yellow-300">
                <FaHeart className="mr-2" />
                <span className="font-medium">Clean Code + Best Practices = Great Software</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20 bg-gray-800/50">
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

            {/* Backend Skills */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-900/30 rounded-lg mr-4">
                  <FaTools className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold">Backend</h3>
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

      {/* Contact Me Section */}
      <section id="contact" className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center">
            <FaEnvelope className="mr-3 text-red-400" />
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="p-3 bg-red-900/30 rounded-lg mr-4">
                    <FaEnvelope className="text-xl text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="p-3 bg-green-900/30 rounded-lg mr-4">
                    <FaPhone className="text-xl text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg">+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="p-3 bg-blue-900/30 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-xl text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-4 text-gray-300">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors">
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YourName
              </h3>
              <p className="text-gray-400 mt-2">Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} All rights reserved. Made with ❤️ and React.</p>
            <p className="mt-2">Built with Tailwind CSS & React Icons</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EndCompo;