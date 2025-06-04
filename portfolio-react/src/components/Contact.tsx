import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen snap-start flex items-center justify-center relative">
      <div className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
        <p className="text-secondary text-[17px] uppercase tracking-wider text-center">Get in touch</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2">Contact</h2>
        
        <div className="w-full flex flex-col md:flex-row gap-10 mt-12">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-4 contact-links">
            <div className="flex items-center gap-4">
              <a 
                href="mailto:angstgregory@gmail.com" 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer"
              >
                <i className="fas fa-envelope text-[#ff004b] text-[24px]"></i>
              </a>
              <p className="text-white text-[16px]">angstgregory@gmail.com</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/angst-gregory-970837199/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer"
              >
                <i className="fab fa-linkedin text-[#ff004b] text-[24px]"></i>
              </a>
              <p className="text-white text-[16px]">linkedin.com/in/angst-gregory</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Fullooh" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer"
              >
                <i className="fab fa-github text-[#ff004b] text-[24px]"></i>
              </a>
              <p className="text-white text-[16px]">github.com/Fullooh</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form 
              method="POST" 
              action="https://getform.io/f/6bc4473f-0745-44e7-a97b-07129537fcbd"
              className="flex flex-col gap-6 contact-form"
            >
              <div>
                <label className="text-white text-[16px] mb-2 block">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                  placeholder="What's your name?"
                  style={{ pointerEvents: 'auto' }}
                />
              </div>
              <div>
                <label className="text-white text-[16px] mb-2 block">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                  placeholder="What's your email?"
                  style={{ pointerEvents: 'auto' }}
                />
              </div>
              <div>
                <label className="text-white text-[16px] mb-2 block">Your Message</label>
                <textarea 
                  name="message"
                  rows={7} 
                  required
                  className="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none resize-none"
                  placeholder="What do you want to say?"
                  style={{ pointerEvents: 'auto' }}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-[#ff004b] py-3 px-8 text-white font-bold shadow-md rounded-xl hover:bg-[#d10040] transition-colors"
                style={{ pointerEvents: 'auto' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 