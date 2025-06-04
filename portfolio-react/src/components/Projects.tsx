import React, { useEffect } from 'react';
import { projects } from '../data/projects';

declare global {
  interface Window {
    VanillaTilt: any;
  }
}

const Projects: React.FC = () => {
  useEffect(() => {
    // Load VanillaTilt for card tilt effects
    const loadVanillaTilt = () => {
      if (!window.VanillaTilt) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js';
        script.onload = () => {
          setTimeout(() => {
            const cards = document.querySelectorAll('.project-card');
            if (window.VanillaTilt && cards.length > 0) {
              window.VanillaTilt.init(cards, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5
              });
            }
          }, 100);
        };
        document.head.appendChild(script);
      }
    };

    loadVanillaTilt();

    // Add event listeners for project cards
    setTimeout(() => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        // Add click handler
        const handleClick = () => {
          const githubUrl = card.getAttribute('data-github');
          console.log('Clicked card, URL:', githubUrl);
          if (githubUrl) {
            window.open(githubUrl, '_blank');
          }
        };
        
        card.addEventListener('click', handleClick);

        // Add hover effects
        card.addEventListener('mouseenter', () => {
          (card as HTMLElement).style.transform = 'translateY(-10px)';
          (card as HTMLElement).style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
          (card as HTMLElement).style.transform = 'translateY(0)';
        });
      });
    }, 100);
  }, []);

  return (
    <section id="projects" className="min-h-screen snap-start flex items-center justify-center relative">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
          <p className="text-secondary text-[17px] uppercase tracking-wider text-center">My work</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2">Projects</h2>
          <p className="text-white text-[17px] leading-[30px] max-w-3xl mt-4 text-center">
            Following projects showcase my skills and experience through real-world examples of my work. 
            Each project is briefly described with links to code repositories. 
            It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>

          <div className="mt-20 flex flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card opacity-100 xs:w-[360px] w-full cursor-pointer"
                data-github={project.github}
              >
                <div className="bg-[#1d1836] p-5 rounded-2xl h-full hover:bg-[#2a2449] transition-all duration-300">
                  <div className="relative w-full h-[230px]">
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
                      <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                        <i className="fab fa-github text-white text-[24px]"></i>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <p key={tagIndex} className="text-[14px] text-sky-300">#{tag}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 