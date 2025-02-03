class Portfolio {
    constructor() {
        this.initVanta();
        this.createContent();
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

    createContent() {
        const mainContainer = document.querySelector('.main-container');
        if (!mainContainer) {
            const main = document.createElement('main');
            main.className = 'main-container';
            document.body.appendChild(main);
        }
        
        // Create and append navigation
        const navigation = this.createNavigation();
        document.body.appendChild(navigation);
        
        // Create and append sections
        const heroSection = this.createHeroSection();
        const aboutSection = this.createAboutSection();
        const experienceSection = this.createExperienceSection();
        
        const container = document.querySelector('.main-container');
        container.appendChild(heroSection);
        container.appendChild(aboutSection);
        container.appendChild(experienceSection);
    }

    createHeroSection() {
        const section = document.createElement('section');
        section.id = 'hero';
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
                <a href="#hero" class="nav-dot active" data-section="hero">
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
                <div class="mb-10">
                    <p class="text-[14px] text-gray-400 uppercase tracking-wider text-center">What I have done so far</p>
                    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Work Experience</h2>
                </div>

                <div class="mt-20 flex flex-col">
                    <div class="vertical-timeline">
                        <!-- CodeDay Labs x EBSCO -->
                        <div class="vertical-timeline-element">
                            <div class="vertical-timeline-element-content">
                                <div class="bg-[#1d1836] p-8 rounded-2xl">
                                    <div class="flex flex-col">
                                        <h3 class="text-white text-[24px] font-bold">Open-Source Software Engineering Intern</h3>
                                        <span class="vertical-timeline-element-date">Oct 2024 – Present</span>
                                        <p class="text-secondary text-[16px] font-semibold mt-1">CodeDay Labs x EBSCO | Seattle, WA (Remote)</p>
                                    </div>
                                    <ul class="mt-5 list-disc ml-5 space-y-2">
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Developed comprehensive Customer Relationship Management (CRM) application to streamline client data management and enhance user engagement
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
                        <div class="vertical-timeline-element">
                            <div class="vertical-timeline-element-content">
                                <div class="bg-[#1d1836] p-8 rounded-2xl">
                                    <div class="flex flex-col">
                                        <h3 class="text-white text-[24px] font-bold">Software Engineering Fellow</h3>
                                        <span class="vertical-timeline-element-date">Aug 2024 – Sept 2024</span>
                                        <p class="text-secondary text-[16px] font-semibold mt-1">Headstarter | New York, NY</p>
                                    </div>
                                    <ul class="mt-5 list-disc ml-5 space-y-2">
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Built and deployed 4 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CICD practices
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Led development on SyncUp, a social platform for software engineers and developers built with React, Firebase, and Next.js, focusing on swipe-based interactions and real-time chat functionality
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Participated in weekly mentorship sessions with engineers from Google, Y Combinator, Stanford, Amazon, and venture-backed startups
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- CodeDay Labs 2023 -->
                        <div class="vertical-timeline-element">
                            <div class="vertical-timeline-element-content">
                                <div class="bg-[#1d1836] p-8 rounded-2xl">
                                    <div class="flex flex-col">
                                        <h3 class="text-white text-[24px] font-bold">Open-Source Software Engineering Intern</h3>
                                        <span class="vertical-timeline-element-date">Jul 2023 – Aug 2023</span>
                                        <p class="text-secondary text-[16px] font-semibold mt-1">CodeDay Labs | Seattle, WA (Remote)</p>
                                    </div>
                                    <ul class="mt-5 list-disc ml-5 space-y-2">
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Collaborated in conceptualizing and developing 'Resume Talk', an AI-driven application that automates interview question generation via a drag-and-drop interface
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Spearheaded the front-end development through designing the UI layout and integrating it with the backend to enhance user interaction and experience
                                        </li>
                                        <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                                            Implemented quality-of-life improvements, contributing to a more intuitive and responsive front-end design
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return section;
    }

    setupScrollNavigation() {
        // Define sections array
        this.sections = [
            { id: 'hero' },
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
}

// Initialize portfolio when DOM is loaded
window.addEventListener('load', () => {
    if (window.VANTA) {
        new Portfolio();
    } else {
        console.error('Vanta not loaded');
    }
});