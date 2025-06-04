import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/6bc4473f-0745-44e7-a97b-07129537fcbd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen snap-start flex items-center justify-center relative">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-8 sm:gap-10 lg:flex-row lg:gap-20">
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:gap-10 max-w-sm mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300 mb-4">
                Get in touch
              </div>
              <h1 className="text-white font-black text-[30px] xs:text-[35px] sm:text-[50px] md:text-[60px] mb-4">
                Contact
              </h1>
              <p className="text-gray-300 text-[15px] xs:text-[17px] leading-[26px] xs:leading-[30px] px-2 lg:px-0">
                I'm available for questions, feedback, or collaboration opportunities. Let me know how I can help!
              </p>
            </div>
            
            <div className="w-fit mx-auto lg:mx-0">
              <h3 className="mb-4 sm:mb-6 text-center text-xl sm:text-2xl font-semibold text-white lg:text-left">
                Contact Details
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center gap-3 sm:gap-4">
                  <a 
                    href="mailto:angstgregory@gmail.com" 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer"
                  >
                    <i className="fas fa-envelope text-[#ff004b] text-[16px] sm:text-[20px]"></i>
                  </a>
                  <div>
                    <span className="font-bold text-white text-sm sm:text-base">Email: </span>
                    <a href="mailto:angstgregory@gmail.com" className="text-indigo-300 hover:text-indigo-200 underline text-sm sm:text-base break-all">
                      angstgregory@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 sm:gap-4">
                  <a 
                    href="https://www.linkedin.com/in/angst-gregory-970837199/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-[#ff004b] text-[16px] sm:text-[20px]"></i>
                  </a>
                  <div>
                    <span className="font-bold text-white text-sm sm:text-base">LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/angst-gregory-970837199/" target="_blank" className="text-indigo-300 hover:text-indigo-200 underline text-sm sm:text-base break-all">
                      linkedin.com/in/angst-gregory
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 sm:gap-4">
                  <a 
                    href="https://github.com/Fullooh" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer"
                  >
                    <i className="fab fa-github text-[#ff004b] text-[16px] sm:text-[20px]"></i>
                  </a>
                  <div>
                    <span className="font-bold text-white text-sm sm:text-base">GitHub: </span>
                    <a href="https://github.com/Fullooh" target="_blank" className="text-indigo-300 hover:text-indigo-200 underline text-sm sm:text-base break-all">
                      github.com/Fullooh
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col gap-4 sm:gap-6 rounded-lg border border-gray-600 bg-[#1d1836]/50 backdrop-blur-sm p-6 sm:p-8 lg:p-10 max-w-screen-md mx-auto lg:mx-0 flex-1">
            
            {/* Success Message */}
            {isSubmitted && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 sm:p-4 mb-2 sm:mb-4">
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <p className="text-green-300 font-medium text-sm sm:text-base">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname" className="text-white text-sm sm:text-base">First Name</Label>
                  <Input 
                    type="text" 
                    id="firstname" 
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                    className="bg-[#0f0f23] border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname" className="text-white text-sm sm:text-base">Last Name</Label>
                  <Input 
                    type="text" 
                    id="lastname" 
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                    className="bg-[#0f0f23] border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="text-white text-sm sm:text-base">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com" 
                  className="bg-[#0f0f23] border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 text-sm sm:text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject" className="text-white text-sm sm:text-base">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?" 
                  className="bg-[#0f0f23] border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 text-sm sm:text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message" className="text-white text-sm sm:text-base">Message</Label>
                <Textarea 
                  placeholder="Type your message here..." 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-[#0f0f23] border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff004b] hover:bg-[#d10040] text-white font-semibold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 