class Portfolio {
    constructor() {
        this.initVanta();
        this.initializePortfolio();
        this.setupScrollNavigation();
    }

    initVanta() {
        window.VANTA.TRUNK({
            el: "#background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff004b,        // Trunk color (pink)
            backgroundColor: 0x2274a, // Background color (blue)
            spacing: 1.00,
            chaos: 1.75,
            speed: 1.50
        });
    }

    initializePortfolio() {
        const container = document.querySelector('.main-container');
        const heroSection = this.createHeroSection();
        const aboutSection = this.createAboutSection();
        const experienceSection = this.createExperienceSection();
        const projectsSection = this.createProjectsSection();
        const contactSection = this.createContactSection();
        const nav = this.createNavigation();

        container.appendChild(heroSection);
        container.appendChild(aboutSection);
        container.appendChild(experienceSection);
        container.appendChild(projectsSection);
        container.appendChild(contactSection);
        container.appendChild(nav);
    }

    createHeroSection() {
        const section = document.createElement('section');
        section.id = 'home';
        section.className = 'hero-section min-h-screen snap-start flex items-center justify-center relative';
        
        section.innerHTML = `
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
        `;

        // Add animations after a brief delay to ensure DOM is ready
        setTimeout(() => {
            const title = section.querySelector('.hero-title');
            const subtitle = section.querySelector('.hero-subtitle');
            const description = section.querySelector('.hero-description');
            
            title.classList.add('animate-fade-in');
            subtitle.classList.add('animate-fade-in-delay-1');
            description.classList.add('animate-fade-in-delay-2');

            // Initialize scroll dot animation with GSAP
            if (window.gsap) {
                gsap.to(section.querySelector('.scroll-dot'), {
                    y: 24,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }
        }, 100);
        
        return section;
    }

    createNavigation() {
        const nav = document.createElement('nav');
        nav.className = 'navigation';
        
        nav.innerHTML = `
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
        `;

        return nav;
    }

    createAboutSection() {
        const section = document.createElement('section');
        section.id = 'about';
        section.className = 'about-section relative z-10 min-h-screen px-4';
        
        section.innerHTML = `
            <div class="about-container max-w-7xl mx-auto">
                <div class="about-header mb-10">
                    <p class="text-[14px] text-gray-400 uppercase tracking-wider text-center">Introduction</p>
                    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me</h2>
                </div>

                <p class="about-description mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]">
                    I'm Angst Gregory, a dedicated and ambitious individual currently pursuing a Bachelor's degree in Computer Science. With an Associate's degree in Business Management already under my belt, I bring a unique blend of business acumen and technical expertise to the table. When I'm not buried in my studies or working on coding projects, I enjoy watching baseball, playing video games, and spending quality time with friends. My favorite game to unwind with is Valorant, but I'm always open to exploring new titles and experiences. My ultimate goal is to become a proficient software developer or engineer. I aspire to earn enough to self-sustain and invest in myself, allowing me to grow my capital and delve into hobbies and interests that I've yet to explore. I believe in continuous learning and self-improvement, and I'm eager to see where my journey in the tech world will take me. Whether it's coding, strategizing in a game, or enjoying a baseball match, I strive to bring my best to everything I do. Thank you for visiting my website, and I hope you find my projects and experiences as exciting as I do!
                </p>

                <div class="mt-20 flex flex-wrap gap-10 justify-center items-start">
                    <div class="service-card xs:w-[250px] w-full">
                        <div class="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                <img 
                                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" 
                                    alt="Web Development" 
                                    class="w-24 h-24 object-cover rounded-lg"
                                >
                                <h3 class="text-white text-[20px] font-bold text-center">Web Development</h3>
                            </div>
                        </div>
                    </div>

                    <div class="service-card xs:w-[250px] w-full mt-16">
                        <div class="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                <img 
                                    src="https://media1.tenor.com/m/GVk4jB2u_i8AAAAd/devoloper.gif" 
                                    alt="Software Developer" 
                                    class="w-24 h-24 object-cover rounded-lg"
                                >
                                <h3 class="text-white text-[20px] font-bold text-center">Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div class="service-card xs:w-[250px] w-full">
                        <div class="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                <img 
                                    src="https://media1.tenor.com/m/8pCPySZScZkAAAAC/matching-pfp-valorant.gif" 
                                    alt="Valorant Gaming" 
                                    class="w-24 h-24 object-cover rounded-lg"
                                >
                                <h3 class="text-white text-[20px] font-bold text-center">Gamer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Initialize tilt effect
        setTimeout(() => {
            const cards = section.querySelectorAll('.service-card');
            VanillaTilt.init(cards, {
                max: 45,
                scale: 1,
                speed: 450,
                glare: true,
                "max-glare": 0.5
            });
        }, 100);

        return section;
    }

    createExperienceSection() {
        const section = document.createElement('section');
        section.id = 'experience';
        section.className = 'experience-section relative z-10 min-h-screen px-4';
        
        section.innerHTML = `
            <div class="max-w-7xl mx-auto">
                <div class="mb-10 opacity-0">
                    <p class="text-[14px] text-gray-400 uppercase tracking-wider text-center">What I have done so far</p>
                    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Work Experience.</h2>
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
        `;

        // Add animation after the section is created
        setTimeout(() => {
            if (window.gsap) {
                gsap.registerPlugin(ScrollTrigger);
                
                // Animate the header
                gsap.to(section.querySelector('.mb-10'), {
                    scrollTrigger: {
                        trigger: section,
                        start: "top center+=100",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                });

                // Animate each timeline element
                const elements = section.querySelectorAll('.vertical-timeline-element');
                elements.forEach((element, index) => {
                    gsap.to(element, {
                        scrollTrigger: {
                            trigger: element,
                            start: "top center+=200",
                            toggleActions: "play none none reverse"
                        },
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        delay: index * 0.3
                    });
                });
            }
        }, 100);

        return section;
    }

    createProjectsSection() {
        const section = document.createElement('section');
        section.id = 'projects';
        section.innerHTML = `
            <div class="w-full flex flex-col items-center justify-center">
                <div class="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
                    <p class="text-secondary text-[17px] uppercase tracking-wider text-center">My work</p>
                    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2">Projects</h2>
                    <p class="text-white text-[17px] leading-[30px] max-w-3xl mt-4 text-center">
                        Following projects showcase my skills and experience through real-world examples of my work. 
                        Each project is briefly described with links to code repositories and live demos. 
                        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    </p>

                    <div class="mt-20 flex flex-wrap gap-7 justify-center">
                        ${projects.map((project, index) => `
                            <div class="project-card opacity-0 xs:w-[360px] w-full" data-github="${project.github}">
                                <div class="bg-[#1d1836] p-5 rounded-2xl h-full hover:bg-[#2a2449] transition-all duration-300">
                                    <div class="relative w-full h-[230px]">
                                        <img src="${project.image}" 
                                             alt="${project.title}" 
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
                                        <h3 class="text-white font-bold text-[24px]">${project.title}</h3>
                                        <p class="mt-2 text-secondary text-[14px]">${project.description}</p>
                                    </div>

                                    <div class="mt-4 flex flex-wrap gap-2">
                                        ${project.tags.map(tag => `
                                            <p class="text-[14px] text-sky-300">#${tag}</p>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Add event listeners after creating the elements
        setTimeout(() => {
            const cards = section.querySelectorAll('.project-card');
            cards.forEach(card => {
                // Add click handler
                card.addEventListener('click', function() {
                    const githubUrl = this.getAttribute('data-github');
                    console.log('Clicked card, URL:', githubUrl); // Debug log
                    if (githubUrl) {
                        window.open(githubUrl, '_blank');
                    }
                });

                // Add hover effects
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                    card.style.transition = 'all 0.3s ease';
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });

            VanillaTilt.init(cards, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5
            });
        }, 100);

        return section;
    }

    createContactSection() {
        const section = document.createElement('section');
        section.id = 'contact';
        section.innerHTML = `
            <div class="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
                <p class="text-secondary text-[17px] uppercase tracking-wider text-center">Get in touch</p>
                <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2">Contact</h2>
                
                <div class="w-full flex flex-col md:flex-row gap-10 mt-12">
                    <!-- Contact Info -->
                    <div class="flex-1 flex flex-col gap-4">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836]">
                                <i class="fas fa-envelope text-[#915eff] text-[24px]"></i>
                            </div>
                            <p class="text-white text-[16px]">angstgregory@gmail.com</p>
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836]">
                                <i class="fab fa-linkedin text-[#915eff] text-[24px]"></i>
                            </div>
                            <a href="https://www.linkedin.com/in/angst-gregory" target="_blank" class="text-white text-[16px] hover:text-[#915eff] transition-colors">
                                linkedin.com/in/angst-gregory
                            </a>
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836]">
                                <i class="fab fa-github text-[#915eff] text-[24px]"></i>
                            </div>
                            <a href="https://github.com/Fullooh" target="_blank" class="text-white text-[16px] hover:text-[#915eff] transition-colors">
                                github.com/Fullooh
                            </a>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="flex-1">
                        <form class="flex flex-col gap-6">
                            <div>
                                <label class="text-white text-[16px] mb-2 block">Your Name</label>
                                <input type="text" 
                                       class="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                                       placeholder="What's your name?"
                                />
                            </div>
                            <div>
                                <label class="text-white text-[16px] mb-2 block">Your Email</label>
                                <input type="email" 
                                       class="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                                       placeholder="What's your email?"
                                />
                            </div>
                            <div>
                                <label class="text-white text-[16px] mb-2 block">Your Message</label>
                                <textarea rows="7" 
                                          class="bg-[#1d1836] py-4 px-6 text-white rounded-lg w-full outline-none border-none resize-none"
                                          placeholder="What do you want to say?"
                                ></textarea>
                            </div>
                            <button type="submit" 
                                    class="bg-[#915eff] py-3 px-8 text-white font-bold shadow-md rounded-xl hover:bg-[#7c4dff] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        // Add form submission handler
        const form = section.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here if needed
            console.log('Form submitted');
        });

        return section;
    }

    setupScrollNavigation() {
        // Define sections array
        this.sections = [
            { id: 'home' },
            { id: 'about' },
            { id: 'experience' },
            { id: 'projects' },
            { id: 'contact' }
        ];

        const observerOptions = {
            root: null,
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    document.querySelectorAll('.nav-dot').forEach(dot => {
                        dot.classList.remove('active');
                    });
                    const currentDot = document.querySelector(`[data-section="${sectionId}"]`);
                    if (currentDot) {
                        currentDot.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        // Update click handlers for the dots
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = dot.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                console.log('Clicking dot for section:', sectionId); // Debug log
                console.log('Found section:', section); // Debug log
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Observe all sections
        this.sections.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });
    }

    createNavDots() {
        const nav = document.createElement('nav');
        nav.className = 'fixed right-5 top-1/2 transform -translate-y-1/2 z-50';
        nav.innerHTML = `
            <div class="flex flex-col gap-3">
                <a href="#home" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="home"></a>
                <a href="#about" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="about"></a>
                <a href="#projects" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="projects"></a>
                <a href="#contact" class="nav-dot w-3 h-3 rounded-full border-2 border-[#915eff] bg-[#1d1836] transition-all duration-300" data-section="contact"></a>
            </div>
        `;

        // Add intersection observer to track sections
        const sections = ['home', 'about', 'projects', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentSection = entry.target.id;
                    // Update nav dots
                    document.querySelectorAll('.nav-dot').forEach(dot => {
                        if (dot.getAttribute('data-section') === currentSection) {
                            dot.classList.add('bg-[#915eff]');
                            dot.classList.remove('bg-[#1d1836]');
                        } else {
                            dot.classList.remove('bg-[#915eff]');
                            dot.classList.add('bg-[#1d1836]');
                        }
                    });
                }
            });
        }, observerOptions);

        // Observe each section
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) observer.observe(section);
        });

        // Add smooth scrolling to nav dots
        nav.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = dot.getAttribute('data-section');
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        return nav;
    }
}

// Initialize portfolio when DOM is loaded
window.addEventListener('load', () => {
    if (window.VANTA) {
        new Portfolio();
    } else {
        console.error('Vanta not loaded');
    }
});

const projects = [
    {
        title: "Resume Talk",
        description: "AI-powered application that helps users create and improve their resumes through interactive conversations and real-time feedback.",
        tags: ["React", "OpenAI", "Node.js", "React"],
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
        github: "https://github.com/Fullooh/CodeDays"
    },
    {
        title: "HackRU",
        description: "Grocery Editor Application built during HackRU 2025",
        tags: ["React", "Tailwind", "Java"],
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
        github: "https://github.com/ebm/hackru"
    },
    {
        title: "Prescience",
        description: "An AI-powered CRM system that streamlines customer relationship management through intelligent automation and intuitive design.",
        tags: ["Next.js", "React", "OpenAI API", "Tailwind"],
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
        github: "https://github.com/aliiyuu/ebsco-ai"
    }
];