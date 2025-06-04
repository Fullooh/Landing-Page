"use client";

import React from 'react';
import { motion } from "framer-motion";
import { BackgroundGradient } from './BackgroundGradient';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen snap-start flex items-center justify-center relative">
      <div className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
            Introduction
          </div>
          <h2 className="text-white font-black text-[30px] xs:text-[35px] sm:text-[50px] md:text-[60px] text-center mt-2">Who Am I?</h2>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
          className="mt-4 max-w-3xl text-center px-2"
        >
          <p className="text-white text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px]">
            I'm Angst Gregory, a dedicated and ambitious individual currently pursuing a Bachelor's degree in Computer Science. 
            With an Associate's degree in Business Management already under my belt, I bring a unique blend of business acumen 
            and technical expertise to the table. When I'm not buried in my studies or working on coding projects, I enjoy 
            watching baseball, playing video games, and spending quality time with friends. My favorite game to unwind with is 
            Valorant, but I'm always open to exploring new titles and experiences.
          </p>
          <p className="text-white text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] mt-4">
            My ultimate goal is to become a proficient software developer or engineer. I aspire to earn enough to self-sustain 
            and eventually work my way up to a comfortable living. My passion lies in creating solutions that not only meet 
            technical requirements but also provide meaningful value to users. I believe in the power of technology to transform 
            ideas into reality, and I'm excited to be part of that transformation.
          </p>
          <p className="text-white text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] mt-4">
            Whether it's developing web applications, working on data analysis, or exploring new programming languages, I approach 
            every challenge with curiosity and determination. I'm particularly interested in full-stack development and the 
            intersection of business strategy and technology implementation.
          </p>
        </motion.div>

        {/* Responsive Cards Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          className="mt-12 sm:mt-20 w-full max-w-6xl"
        >
          {/* Mobile: 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:hidden">
            <motion.div variants={fadeIn} className="w-full">
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-3 xs:p-4 h-[200px] xs:h-[240px] flex flex-col items-center justify-center text-center space-y-2">
                  <img 
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5rY2lkaXVxeXBqYjhxdWdiODJtbTllcGpzdHNyNjhxdWMyNWlzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTzh3zw4mj1XpjjiIb/giphy.gif" 
                    alt="Web Development" 
                    className="w-16 xs:w-20 h-12 xs:h-16 rounded-lg object-cover" 
                  />
                  <div className="space-y-1">
                    <h3 className="text-white text-sm xs:text-base font-bold">Web Development</h3>
                    <p className="text-gray-300 text-xs">Creating innovative solutions</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            <motion.div variants={fadeIn} className="w-full">
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-3 xs:p-4 h-[200px] xs:h-[240px] flex flex-col items-center justify-center text-center space-y-2">
                  <img 
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2R5d3ltMTE4NmtpYzZya29wNnJ2dmVpc3NpdW9raXBndHF1Ym5sbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2Y0D4uUa4I0nrKIaNq/giphy.gif" 
                    alt="Gaming" 
                    className="w-16 xs:w-20 h-12 xs:h-16 rounded-lg object-cover" 
                  />
                  <div className="space-y-1">
                    <h3 className="text-white text-sm xs:text-base font-bold">Gamer</h3>
                    <p className="text-gray-300 text-xs">Enjoy gaming in my free time</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            <motion.div variants={fadeIn} className="w-full">
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-3 xs:p-4 h-[200px] xs:h-[240px] flex flex-col items-center justify-center text-center space-y-2">
                  <img 
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamN6dHFocmZsMmExYjN2MnUxaHhtMDJocGozY24yZTlxd2Vsazk0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3fQlLpXPmtLkmwU0/giphy.gif" 
                    alt="Baseball" 
                    className="w-16 xs:w-20 h-12 xs:h-16 rounded-lg object-cover" 
                  />
                  <div className="space-y-1">
                    <h3 className="text-white text-sm xs:text-base font-bold">Baseball</h3>
                    <p className="text-gray-300 text-xs">Love watching baseball</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            <motion.div variants={fadeIn} className="w-full">
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-3 xs:p-4 h-[200px] xs:h-[240px] flex flex-col items-center justify-center text-center space-y-2">
                  <img 
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczg4dWt6dm0wb3ZwYjg5ZzN3bXQ2bTJzbzQwcWlueDI5YjdoMTY4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vcdbi5o470i9FACaZO/giphy.gif" 
                    alt="Software Developer" 
                    className="w-16 xs:w-20 h-12 xs:h-16 rounded-lg object-cover" 
                  />
                  <div className="space-y-1">
                    <h3 className="text-white text-sm xs:text-base font-bold">Software Developer</h3>
                    <p className="text-gray-300 text-xs">Building innovative solutions</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          </div>

          {/* Desktop: Side by Side with Staggered Heights (sm and up) */}
          <div className="hidden sm:flex justify-center gap-6 w-full">
            {/* Web Development Card - Lower */}
            <motion.div
              variants={fadeIn}
              className="w-[180px] md:w-[220px] mt-8"
            >
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-4 md:p-6 h-[250px] md:h-[280px] flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
                  <img 
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5rY2lkaXVxeXBqYjhxdWdiODJtbTllcGpzdHNyNjhxdWMyNWlzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTzh3zw4mj1XpjjiIb/giphy.gif" 
                    alt="Web Development" 
                    className="w-24 md:w-32 h-18 md:h-24 rounded-lg object-cover" 
                  />
                  <div className="space-y-2">
                    <h3 className="text-white text-lg md:text-xl font-bold">Web Development</h3>
                    <p className="text-gray-300 text-xs md:text-sm">Passionate about creating innovative solutions through code</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            {/* Gaming Card - Higher */}
            <motion.div
              variants={fadeIn}
              className="w-[180px] md:w-[220px]"
            >
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-4 md:p-6 h-[250px] md:h-[280px] flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
                  <img 
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2R5d3ltMTE4NmtpYzZya29wNnJ2dmVpc3NpdW9raXBndHF1Ym5sbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2Y0D4uUa4I0nrKIaNq/giphy.gif" 
                    alt="Gaming" 
                    className="w-24 md:w-32 h-18 md:h-24 rounded-lg object-cover" 
                  />
                  <div className="space-y-2">
                    <h3 className="text-white text-lg md:text-xl font-bold">Gamer</h3>
                    <p className="text-gray-300 text-xs md:text-sm">Enjoy gaming in my free time</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            {/* Baseball Card - Lower */}
            <motion.div
              variants={fadeIn}
              className="w-[180px] md:w-[220px] mt-8"
            >
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-4 md:p-6 h-[250px] md:h-[280px] flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
                  <img 
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamN6dHFocmZsMmExYjN2MnUxaHhtMDJocGozY24yZTlxd2Vsazk0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3fQlLpXPmtLkmwU0/giphy.gif" 
                    alt="Baseball" 
                    className="w-24 md:w-32 h-18 md:h-24 rounded-lg object-cover" 
                  />
                  <div className="space-y-2">
                    <h3 className="text-white text-lg md:text-xl font-bold">Baseball</h3>
                    <p className="text-gray-300 text-xs md:text-sm">Love watching America's favorite pastime</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            {/* Software Developer Card - Higher */}
            <motion.div
              variants={fadeIn}
              className="w-[180px] md:w-[220px]"
            >
              <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary rounded-[18px] p-4 md:p-6 h-[250px] md:h-[280px] flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
                  <img 
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczg4dWt6dm0wb3ZwYjg5ZzN3bXQ2bTJzbzQwcWlueDI5YjdoMTY4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vcdbi5o470i9FACaZO/giphy.gif" 
                    alt="Software Developer" 
                    className="w-24 md:w-32 h-18 md:h-24 rounded-lg object-cover" 
                  />
                  <div className="space-y-2">
                    <h3 className="text-white text-lg md:text-xl font-bold">Software Developer</h3>
                    <p className="text-gray-300 text-xs md:text-sm">Passionate about building innovative solutions</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 