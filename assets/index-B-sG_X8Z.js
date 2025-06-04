(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();class c{constructor(){this.initVanta(),this.initializePortfolio(),this.setupScrollNavigation()}initVanta(){window.VANTA.TRUNK({el:"#background",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:window.innerHeight,minWidth:window.innerWidth,scale:1,scaleMobile:1,color:16711755,backgroundColor:141130,spacing:1,chaos:1.75,speed:1.5})}initializePortfolio(){const i=document.querySelector(".main-container"),n=this.createHeroSection(),t=this.createAboutSection(),e=this.createExperienceSection(),a=this.createProjectsSection(),s=this.createContactSection(),l=this.createNavigation();i.appendChild(n),i.appendChild(t),i.appendChild(e),i.appendChild(a),i.appendChild(s),i.appendChild(l)}createHeroSection(){const i=document.createElement("section");return i.id="home",i.className="hero-section min-h-screen snap-start flex items-center justify-center relative",i.innerHTML=`
            <div class="hero-content">
                <div class="overflow-hidden">
                    <h1 class="hero-title">Angst Gregory</h1>
                </div>
                <div class="overflow-hidden">
                    <h2 class="hero-subtitle">Aspiring Software Engineer</h2>
                </div>
                <div class="overflow-hidden">
                    <p class="hero-description">Turning creative ideas into interactive experiences</p>
                </div>
            </div>
            <div class="scroll-container">
                <a href="#about" class="scroll-indicator">
                    <div class="scroll-dot"></div>
                </a>
            </div>
        `,setTimeout(()=>{const n=i.querySelector(".hero-title"),t=i.querySelector(".hero-subtitle"),e=i.querySelector(".hero-description");n.classList.add("animate-fade-in"),t.classList.add("animate-fade-in-delay-1"),e.classList.add("animate-fade-in-delay-2"),window.gsap&&gsap.to(i.querySelector(".scroll-dot"),{y:24,duration:1.5,repeat:-1,yoyo:!0,ease:"power1.inOut"})},100),i}createNavigation(){const i=document.createElement("nav");return i.className="navigation",i.innerHTML=`
            <div class="flex flex-col space-y-4">
                <a href="#home" class="nav-dot active" data-section="home">
                    <span class="bg-white px-2 py-1 rounded-md text-black text-xs">Home</span>
                </a>
                <a href="#about" class="nav-dot" data-section="about">
                    <span class="bg-white px-2 py-1 rounded-md text-black text-xs">About</span>
                </a>
                <a href="#experience" class="nav-dot" data-section="experience">
                    <span class="bg-white px-2 py-1 rounded-md text-black text-xs">Experience</span>
                </a>
                <a href="#projects" class="nav-dot" data-section="projects">
                    <span class="bg-white px-2 py-1 rounded-md text-black text-xs">Projects</span>
                </a>
                <a href="#contact" class="nav-dot" data-section="contact">
                    <span class="bg-white px-2 py-1 rounded-md text-black text-xs">Contact</span>
                </a>
            </div>
        `,i}createAboutSection(){const i=document.createElement("section");return i.id="about",i.innerHTML=`
            <div class="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
                <p class="text-secondary text-[17px] uppercase tracking-wider text-center">Introduction</p>
                <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2">Who Am I?</h2>
                
                <div class="mt-4 max-w-3xl text-center">
                    <p class="text-white text-[17px] leading-[30px]">
                        I'm Angst Gregory, a dedicated and ambitious individual currently pursuing a Bachelor's degree in Computer Science. 
                        With an Associate's degree in Business Management already under my belt, I bring a unique blend of business acumen 
                        and technical expertise to the table. When I'm not buried in my studies or working on coding projects, I enjoy 
                        watching baseball, playing video games, and spending quality time with friends. My favorite game to unwind with is 
                        Valorant, but I'm always open to exploring new titles and experiences.
                    </p>
                    <p class="text-white text-[17px] leading-[30px] mt-4">
                        My ultimate goal is to become a proficient software developer or engineer. I aspire to earn enough to self-sustain 
                        and invest in myself, allowing me to grow my capital and delve into hobbies and interests that I've yet to explore. 
                        I believe in continuous learning and self-improvement, and I'm eager to see where my journey in the tech world will 
                        take me. Whether it's coding, strategizing in a game, or enjoying a baseball match, I strive to bring my best to 
                        everything I do. Thank you for visiting my website, and I hope you find my projects and experiences as exciting as I do!
                    </p>
                </div>
                
                <div class="mt-20 flex flex-wrap gap-10">
                    <div class="xs:w-[250px] w-full animate-card mt-8" style="--index: 0">
                        <div class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-105 transition-transform duration-300">
                            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5rY2lkaXVxeXBqYjhxdWdiODJtbTllcGpzdHNyNjhxdWMyNWlzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTzh3zw4mj1XpjjiIb/giphy.gif" 
                                    alt="Web Development" 
                                    class="w-28 h-28 object-contain" />
                                <h3 class="text-white text-[20px] font-bold text-center">Web Development</h3>
                                <p class="text-secondary text-[14px] text-center">Passionate about creating innovative solutions through code</p>
                            </div>
                        </div>
                    </div>

                    <div class="xs:w-[250px] w-full animate-card" style="--index: 1">
                        <div class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-105 transition-transform duration-300">
                            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2R5d3ltMTE4NmtpYzZya29wNnJ2dmVpc3NpdW9raXBndHF1Ym5sbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2Y0D4uUa4I0nrKIaNq/giphy.gif" 
                                    alt="Gaming" 
                                    class="w-32 h-32 object-contain" />
                                <h3 class="text-white text-[20px] font-bold text-center">Gamer</h3>
                                <p class="text-secondary text-[14px] text-center">Enjoy gaming in my free time</p>
                            </div>
                        </div>
                    </div>

                    <div class="xs:w-[250px] w-full animate-card mt-8" style="--index: 2">
                        <div class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-105 transition-transform duration-300">
                            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamN6dHFocmZsMmExYjN2MnUxaHhtMDJocGozY24yZTlxd2Vsazk0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3fQlLpXPmtLkmwU0/giphy.gif" 
                                    alt="Baseball" 
                                    class="w-32 h-32 object-contain" />
                                <h3 class="text-white text-[20px] font-bold text-center">Baseball</h3>
                                <p class="text-secondary text-[14px] text-center">Love watching America's favorite pastime</p>
                            </div>
                        </div>
                    </div>

                    <div class="xs:w-[250px] w-full animate-card" style="--index: 3">
                        <div class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-105 transition-transform duration-300">
                            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczg4dWt6dm0wb3ZwYjg5ZzN3bXQ2bTJzbzQwcWlueDI5YjdoMTY4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vcdbi5o470i9FACaZO/giphy.gif" 
                                    alt="Software Developer" 
                                    class="w-28 h-28 object-contain" />
                                <h3 class="text-white text-[20px] font-bold text-center">Software Developer</h3>
                                <p class="text-secondary text-[14px] text-center">Passionate about building innovative solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,i}createExperienceSection(){const i=document.createElement("section");return i.id="experience",i.className="experience-section relative z-10 min-h-screen px-4",i.innerHTML=`
            <div class="max-w-7xl mx-auto">
                <div class="mb-10 opacity-0">
                    <p class="text-[14px] text-gray-400 uppercase tracking-wider text-center">What I have done so far</p>
                    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Work Experience</h2>
                </div>

                <div class="mt-20 flex flex-col">
                    <div class="vertical-timeline">
                        <!-- CodeDay Labs x EBSCO -->
                        <div class="vertical-timeline-element opacity-0">
                            <div class="vertical-timeline-element-content">
                                <div class="bg-[#1d1836] p-8 rounded-2xl">
                                    <div class="flex flex-col">
                                        <h3 class="text-white text-[24px] font-bold">Open-Source Software Engineering Intern</h3>
                                        <span class="vertical-timeline-element-date">Oct 2024 – Present</span>
                                        <p class="text-secondary text-[16px] font-semibold mt-1">CodeDay Labs x EBSCO | Seattle, WA (Remote)</p>
                                    </div>
                                    <ul class="mt-5 list-disc ml-5 space-y-2">
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Develops comprehensive Customer Relationship Management (CRM) application to streamline client data management and enhance user engagement
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Enhance the UIUX by improving the frontend design, resulting in a more intuitive and responsive interface for users
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Implement dynamic, scalable widgets on the dashboard, allowing for personalized user experiences and improved data visualization
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Headstarter -->
                        <div class="vertical-timeline-element opacity-0">
                            <div class="vertical-timeline-element-content">
                                <div class="bg-[#1d1836] p-8 rounded-2xl">
                                    <div class="flex flex-col">
                                        <h3 class="text-white text-[24px] font-bold">Software Engineering Fellow</h3>
                                        <span class="vertical-timeline-element-date">Aug 2024 – Sept 2024</span>
                                        <p class="text-secondary text-[16px] font-semibold mt-1">Headstarter | New York, NY</p>
                                    </div>
                                    <ul class="mt-5 list-disc ml-5 space-y-2">
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Built and deployed 4 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Led development on SyncUp, a social platform for software engineers and developers
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Participated in weekly mentorship sessions with engineers from Google, Y Combinator, Stanford, Amazon
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- CodeDay Labs 2023 -->
                        <div class="vertical-timeline-element opacity-0">
                            <div class="vertical-timeline-element-content">
                                <div class="bg-[#1d1836] p-8 rounded-2xl">
                                    <div class="flex flex-col">
                                        <h3 class="text-white text-[24px] font-bold">Open-Source Software Engineering Intern</h3>
                                        <span class="vertical-timeline-element-date">Jul 2023 – Aug 2023</span>
                                        <p class="text-secondary text-[16px] font-semibold mt-1">CodeDay Labs | Seattle, WA (Remote)</p>
                                    </div>
                                    <ul class="mt-5 list-disc ml-5 space-y-2">
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Collaborated in conceptualizing and developing 'Resume Talk', an AI-driven application
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Spearheaded the front-end development through designing the UI layout
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Implemented quality-of-life improvements for intuitive front-end design
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,setTimeout(()=>{window.gsap&&(gsap.registerPlugin(ScrollTrigger),gsap.to(i.querySelector(".mb-10"),{scrollTrigger:{trigger:i,start:"top center+=100",toggleActions:"play none none reverse"},opacity:1,y:0,duration:.8}),i.querySelectorAll(".vertical-timeline-element").forEach((n,t)=>{gsap.to(n,{scrollTrigger:{trigger:n,start:"top center+=200",toggleActions:"play none none reverse"},opacity:1,x:0,duration:1,delay:t*.3})}))},100),i}createProjectsSection(){const i=document.createElement("section");return i.id="projects",i.innerHTML=`
            <div class="w-full flex flex-col items-center justify-center">
                <div class="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
                    <p class="text-secondary text-[17px] uppercase tracking-wider text-center">My work</p>
                    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2">Projects</h2>
                    <p class="text-white text-[17px] leading-[30px] max-w-3xl mt-4 text-center">
                        Following projects showcase my skills and experience through real-world examples of my work. 
                        Each project is briefly described with links to code repositories. 
                        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    </p>

                    <div class="mt-20 flex flex-wrap gap-7 justify-center">
                        ${d.map((n,t)=>`
                            <div class="project-card opacity-0 xs:w-[360px] w-full" data-github="${n.github}">
                                <div class="bg-[#1d1836] p-5 rounded-2xl h-full hover:bg-[#2a2449] transition-all duration-300">
                                    <div class="relative w-full h-[230px]">
                                        <img src="${n.image}" 
                                             alt="${n.title}" 
                                             class="w-full h-full object-cover rounded-2xl"
                                             onerror="this.onerror=null; this.src='https://placehold.co/600x400/1d1836/ffffff?text=Project+Image'"
                                        />
                                        <div class="absolute top-3 right-3">
                                            <div class="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                                                <i class="fab fa-github text-white text-[24px]"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-5">
                                        <h3 class="text-white font-bold text-[24px]">${n.title}</h3>
                                        <p class="mt-2 text-secondary text-[14px]">${n.description}</p>
                                    </div>

                                    <div class="mt-4 flex flex-wrap gap-2">
                                        ${n.tags.map(e=>`
                                            <p class="text-[14px] text-sky-300">#${e}</p>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `,setTimeout(()=>{const n=i.querySelectorAll(".project-card");n.forEach(t=>{t.addEventListener("click",function(){const e=this.getAttribute("data-github");console.log("Clicked card, URL:",e),e&&window.open(e,"_blank")}),t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-10px)",t.style.transition="all 0.3s ease"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"})}),VanillaTilt.init(n,{max:25,speed:400,glare:!0,"max-glare":.5})},100),i}createContactSection(){const i=document.createElement("section");return i.id="contact",i.innerHTML=`
            <div class="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
                <p class="text-secondary text-[17px] uppercase tracking-wider text-center">Get in touch</p>
                <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2">Contact</h2>
                
                <div class="w-full flex flex-col md:flex-row gap-10 mt-12">
                    <!-- Contact Info -->
                    <div class="flex-1 flex flex-col gap-4 contact-links">
                        <div class="flex items-center gap-4">
                            <a href="mailto:angstgregory@gmail.com" 
                               class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer">
                                <i class="fas fa-envelope text-[#915eff] text-[24px]"></i>
                            </a>
                            <p class="text-white text-[16px]">angstgregory@gmail.com</p>
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/angst-gregory-970837199/" 
                               target="_blank"
                               class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer">
                                <i class="fab fa-linkedin text-[#915eff] text-[24px]"></i>
                            </a>
                            <p class="text-white text-[16px]">linkedin.com/in/angst-gregory</p>
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <a href="https://github.com/Fullooh" 
                               target="_blank"
                               class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer">
                                <i class="fab fa-github text-[#915eff] text-[24px]"></i>
                            </a>
                            <p class="text-white text-[16px]">github.com/Fullooh</p>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="flex-1">
                        <form 
                            method="POST" 
                            action="https://getform.io/f/6bc4473f-0745-44e7-a97b-07129537fcbd"
                            class="flex flex-col gap-6 contact-form"
                        >
                            <div>
                                <label class="text-white text-[16px] mb-2 block">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    class="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                                    placeholder="What's your name?"
                                    style="pointer-events: auto;"
                                />
                            </div>
                            <div>
                                <label class="text-white text-[16px] mb-2 block">Your Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    class="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                                    placeholder="What's your email?"
                                    style="pointer-events: auto;"
                                />
                            </div>
                            <div>
                                <label class="text-white text-[16px] mb-2 block">Your Message</label>
                                <textarea 
                                    name="message"
                                    rows="7" 
                                    required
                                    class="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none resize-none"
                                    placeholder="What do you want to say?"
                                    style="pointer-events: auto;"
                                ></textarea>
                            </div>
                            <button type="submit" 
                                    class="bg-[#915eff] py-3 px-8 text-white font-bold shadow-md rounded-xl hover:bg-[#7c4dff] transition-colors"
                                    style="pointer-events: auto;">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `,i}setupScrollNavigation(){this.sections=[{id:"home"},{id:"about"},{id:"experience"},{id:"projects"},{id:"contact"}];const i={root:null,threshold:.5,rootMargin:"0px"},n=new IntersectionObserver(t=>{t.forEach(e=>{if(e.isIntersecting){const a=e.target.id;document.querySelectorAll(".nav-dot").forEach(l=>{l.classList.remove("active")});const s=document.querySelector(`[data-section="${a}"]`);s&&s.classList.add("active")}})},i);document.querySelectorAll(".nav-dot").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const a=t.getAttribute("data-section"),s=document.getElementById(a);console.log("Clicking dot for section:",a),console.log("Found section:",s),s&&s.scrollIntoView({behavior:"smooth"})})}),this.sections.forEach(({id:t})=>{const e=document.getElementById(t);e&&n.observe(e)})}createNavDots(){const i=document.createElement("nav");i.className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50",i.innerHTML=`
            <div class="flex flex-col gap-3">
                <a href="#home" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="home"></a>
                <a href="#about" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="about"></a>
                <a href="#projects" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="projects"></a>
                <a href="#contact" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="contact"></a>
            </div>
        `;const n=["home","about","projects","contact"],t={root:null,rootMargin:"0px",threshold:.5},e=new IntersectionObserver(a=>{a.forEach(s=>{if(s.isIntersecting){const l=s.target.id;document.querySelectorAll(".nav-dot").forEach(r=>{r.getAttribute("data-section")===l?(r.classList.add("bg-[#915eff]"),r.classList.remove("bg-[#1d1836]")):(r.classList.remove("bg-[#915eff]"),r.classList.add("bg-[#1d1836]"))})}})},t);return n.forEach(a=>{const s=document.getElementById(a);s&&e.observe(s)}),i.querySelectorAll(".nav-dot").forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const l=a.getAttribute("data-section"),r=document.getElementById(l);r&&r.scrollIntoView({behavior:"smooth"})})}),i}}window.addEventListener("load",()=>{window.VANTA?new c:console.error("Vanta not loaded")});const d=[{title:"Resume Talk",description:"AI-powered application that helps users create and improve their resumes through interactive conversations and real-time feedback.",tags:["React","OpenAI","Node.js","React"],image:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",github:"https://github.com/Fullooh/CodeDays"},{title:"HackRU",description:"Grocery Editor Application built during HackRU 2025",tags:["React","Tailwind","Java"],image:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",github:"https://github.com/ebm/hackru"},{title:"Prescience",description:"An AI-powered CRM system that streamlines customer relationship management through intelligent automation and intuitive design.",tags:["Next.js","React","OpenAI API","Tailwind"],image:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",github:"https://github.com/aliiyuu/ebsco-ai"}];
