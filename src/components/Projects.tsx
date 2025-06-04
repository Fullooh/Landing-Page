import React from 'react';
import { projects } from '../data/projects';
import { BackgroundGradient } from './BackgroundGradient';

const Projects: React.FC = () => {
  const handleProjectClick = (githubUrl: string) => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="min-h-screen snap-start flex items-center justify-center relative">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-8">
          <p className="text-secondary text-[15px] xs:text-[17px] uppercase tracking-wider text-center">My work</p>
          <h2 className="text-white font-black text-[30px] xs:text-[35px] sm:text-[50px] md:text-[60px] text-center mt-2">Projects</h2>
          <p className="text-white text-[15px] xs:text-[17px] leading-[26px] xs:leading-[30px] max-w-3xl mt-4 text-center px-2">
            Following projects showcase my skills and experience through real-world examples of my work. 
            Each project is briefly described with links to code repositories. 
            It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>

          <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 w-full max-w-6xl">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="w-full cursor-pointer"
                onClick={() => handleProjectClick(project.github)}
              >
                <BackgroundGradient className="rounded-[22px] shadow-card hover:scale-105 transition-transform duration-300">
                  <div className="bg-[#1d1836] rounded-[18px] p-4 sm:p-5 h-full">
                    <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[230px]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/600x400/1d1836/ffffff?text=Project+Image';
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <div className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center">
                          <i className="fab fa-github text-white text-[18px] sm:text-[24px]"></i>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-5">
                      <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{project.title}</h3>
                      <p className="mt-2 text-secondary text-[12px] sm:text-[14px] leading-relaxed">{project.description}</p>
                    </div>

                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <p key={tagIndex} className="text-[12px] sm:text-[14px] text-sky-300">#{tag}</p>
                      ))}
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 