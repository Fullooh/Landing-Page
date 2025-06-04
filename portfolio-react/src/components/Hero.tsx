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
      <div className="hero-content">
        <div className="overflow-hidden">
          <h1 className="hero-title">Angst Gregory</h1>
        </div>
        <div className="overflow-hidden">
          <h2 className="hero-subtitle">Aspiring Software Engineer</h2>
        </div>
        <div className="overflow-hidden">
          <p className="hero-description">Turning creative ideas into interactive experiences</p>
        </div>
      </div>
      <div className="scroll-container">
        <button onClick={scrollToAbout} className="scroll-indicator">
          <div className="scroll-dot"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero; 