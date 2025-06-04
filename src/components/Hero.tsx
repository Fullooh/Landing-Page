import React, { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
  }
}

const Hero: React.FC = () => {
  useEffect(() => {
    // Load GSAP
    const loadGSAP = async () => {
      if (!window.gsap) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
        script.onload = () => {
          // Initialize scroll dot animation with GSAP
          setTimeout(() => {
            if (window.gsap) {
              const scrollDot = document.querySelector('.scroll-dot');
              if (scrollDot) {
                window.gsap.to(scrollDot, {
                  y: 24,
                  duration: 1.5,
                  repeat: -1,
                  yoyo: true,
                  ease: "power1.inOut"
                });
              }
            }
          }, 100);
        };
        document.head.appendChild(script);
      }
    };

    loadGSAP();

    // Add animations after a brief delay to ensure DOM is ready
    setTimeout(() => {
      const title = document.querySelector('.hero-title');
      const subtitle = document.querySelector('.hero-subtitle');
      const description = document.querySelector('.hero-description');
      
      if (title) title.classList.add('animate-fade-in');
      if (subtitle) subtitle.classList.add('animate-fade-in-delay-1');
      if (description) description.classList.add('animate-fade-in-delay-2');
    }, 100);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen snap-start flex items-center justify-center relative">
      <div className="hero-content text-center text-white z-10 relative max-w-2xl mx-auto px-4">
        <div className="overflow-hidden">
          <h1 className="hero-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3">Angst Gregory</h1>
        </div>
        <div className="overflow-hidden">
          <h2 className="hero-subtitle text-lg xs:text-xl sm:text-2xl md:text-3xl mb-2">Aspiring Software Engineer</h2>
        </div>
        <div className="overflow-hidden">
          <p className="hero-description text-sm xs:text-base sm:text-lg px-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Turning creative ideas into interactive experiences
          </p>
        </div>
      </div>
      <div className="scroll-container absolute w-full flex justify-center items-center bottom-8 xs:bottom-16 sm:bottom-32">
        <button onClick={scrollToAbout} className="scroll-indicator w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2" style={{ transition: 'opacity 0.3s ease' }}>
          <div className="scroll-dot w-3 h-3 rounded-full bg-white mb-1" style={{ transform: 'translateY(0)' }}></div>
        </button>
      </div>
    </section>
  );
};

export default Hero; 