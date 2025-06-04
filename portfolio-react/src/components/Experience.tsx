import React from 'react';
import { experiences } from '../data/experiences';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen snap-start flex items-center justify-center relative">
      <div className="w-full flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary text-[17px] uppercase tracking-wider text-center">What I have done so far</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Work Experience.</h2>
          
          {/* Mobile Timeline */}
          <div className="md:hidden mt-10 flex flex-col space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card w-full relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-2 top-6 w-3 h-3 bg-[#ff004b] rounded-full z-10"></div>
                {/* Timeline line (only show between cards, not on last one) */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-2.5 top-9 w-0.5 h-16 bg-[#ff004b] z-1"></div>
                )}
                <div className="ml-4">
                  <span className="inline-block bg-[#1d1836] text-white px-3 py-1 rounded-full text-sm mb-3">
                    {experience.date}
                  </span>
                  <div className="bg-[#1d1836] p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
                    <p className="text-secondary text-[14px] font-semibold mt-1">{experience.company_name} | {experience.location}</p>
                    <ul className="mt-3 list-disc ml-5 space-y-1">
                      {experience.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-white-100 text-[13px] pl-1 tracking-wider">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block mt-10 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-[#ff004b] transform -translate-x-1/2"></div>
            
            {/* Experience Cards */}
            {experiences.map((experience, index) => (
              <div key={index} className={`experience-card flex mb-16 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 pr-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-[#1d1836] p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                    <p className="text-secondary text-[16px] font-semibold mt-2">{experience.company_name} | {experience.location}</p>
                    <ul className={`mt-5 list-disc ${index % 2 === 0 ? 'mr-5 text-right' : 'ml-5 text-left'} space-y-2`}>
                      {experience.points.map((point, pointIndex) => (
                        <li key={pointIndex} className={`text-white-100 text-[14px] ${index % 2 === 0 ? 'pr-1' : 'pl-1'} tracking-wider`}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-[25px] h-[25px] rounded-full bg-[#ff004b] z-10"></div>
                <div className={`w-1/2 pl-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <span className="bg-[#1d1836] text-white px-4 py-2 rounded-full text-sm">
                    {experience.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 