"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { experiences } from '../data/experiences';
import { BackgroundGradient } from './BackgroundGradient';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

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

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Transform experiences data to Timeline format
  const timelineData: TimelineEntry[] = experiences.map((experience) => ({
    title: experience.date,
    content: (
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-6 sm:mb-8"
      >
        <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
          <div className="bg-[#1d1836] rounded-[18px] p-4 sm:p-6 shadow-lg">
            <h3 className="text-white text-[20px] sm:text-[24px] font-bold mb-2">{experience.title}</h3>
            <p className="text-indigo-400 text-[14px] sm:text-[16px] font-semibold mb-3 sm:mb-4">
              {experience.company_name} | {experience.location}
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex} className="text-gray-300 text-[12px] sm:text-[14px] leading-relaxed flex items-start">
                  <span className="text-indigo-400 mr-2 text-base sm:text-lg">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </BackgroundGradient>
      </motion.div>
    ),
  }));

  return (
    <section id="experience" className="min-h-screen snap-start relative">
      <div
        className="w-full bg-transparent font-sans px-4 sm:px-6 md:px-10"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-2 sm:px-4 md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-6 sm:mb-8"
          >
            <div className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
              What I have done so far
            </div>
            <h2 className="text-white font-black text-[30px] xs:text-[35px] sm:text-[50px] md:text-[60px] text-center mt-2">Work Experience</h2>
          </motion.div>
        </div>

        <motion.div 
          ref={ref} 
          className="relative max-w-7xl mx-auto pb-12 sm:pb-16 lg:pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              }
            }
          }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              className="flex justify-start pt-6 sm:pt-10 md:pt-40 gap-4 sm:gap-6 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-8 w-8 sm:h-10 sm:w-10 absolute left-2 md:left-3 rounded-full bg-black flex items-center justify-center">
                  <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-indigo-500 border border-indigo-400 p-1 sm:p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-400">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-12 sm:pl-16 md:pl-4 pr-2 sm:pr-4 w-full">
                <h3 className="md:hidden block text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-left font-bold text-gray-400">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </motion.div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-6 sm:left-7 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-600 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 