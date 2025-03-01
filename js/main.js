class Portfolio {
    constructor() {
        this.initVanta();
        this.initializePortfolio();
        this.setupScrollNavigation();
    }

    initVanta() {
        const isMobile = window.innerWidth < 768;
        
        window.VANTA.TRUNK({
            el: "#background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: isMobile ? 0.7 : 1,
            scaleMobile: 0.5,
            color: 0xff004b,       // Red color in hex
            backgroundColor: 0x022448, // Dark blue background
            spacing: isMobile ? 2 : 1,
            chaos: isMobile ? 1 : 1.75,
            speed: isMobile ? 1 : 1.5,
            quantity: isMobile ? 50 : 100, // Reduce the number of elements on mobile
        });
        
        // Handle resize to ensure background scales correctly
        window.addEventListener('resize', () => {
            if (window.VANTA) {
                if (window.innerWidth < 768 && !window._vantaEffect._mobile) {
                    window.VANTA.destroy();
                    this.initVanta();
                } else if (window.innerWidth >= 768 && window._vantaEffect._mobile) {
                    window.VANTA.destroy();
                    this.initVanta();
                }
            }
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
        section.innerHTML = `
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
        `;

        return section;
    }

    createExperienceSection() {
        const section = document.createElement('section');
        section.id = 'experience';
        section.innerHTML = `
            <div class="w-full flex flex-col items-center justify-center py-10">
                <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p class="text-secondary text-[17px] uppercase tracking-wider text-center">What I have done so far</p>
                    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Work Experience.</h2>
                    
                    <!-- Mobile Timeline -->
                    <div class="md:hidden mt-10 flex flex-col space-y-8">
                        ${experiences.map((experience, index) => `
                            <div class="experience-card w-full p-2 relative">
                                <div class="absolute h-full w-0.5 bg-[#ff004b] left-0 top-0"></div>
                                <div class="ml-4">
                                    <span class="inline-block bg-[#1d1836] text-white px-3 py-1 rounded-full text-sm mb-3">
                                        ${experience.date}
                                    </span>
                                    <div class="bg-[#1d1836] p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                        <h3 class="text-white text-[20px] font-bold">${experience.title}</h3>
                                        <p class="text-secondary text-[14px] font-semibold mt-1">${experience.company_name}</p>
                                        <ul class="mt-3 list-disc ml-5 space-y-1">
                                            ${experience.points.map((point) => `
                                                <li class="text-white-100 text-[13px] pl-1 tracking-wider">${point}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <!-- Desktop Timeline -->
                    <div class="hidden md:block mt-10 relative">
                        <!-- Timeline Line -->
                        <div class="absolute left-1/2 h-full w-0.5 bg-[#ff004b] transform -translate-x-1/2"></div>
                        
                        <!-- Experience Cards -->
                        ${experiences.map((experience, index) => `
                            <div class="experience-card flex mb-16 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
                                <div class="w-1/2 pr-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}">
                                    <div class="bg-[#1d1836] p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                        <h3 class="text-white text-[24px] font-bold">${experience.title}</h3>
                                        <p class="text-secondary text-[16px] font-semibold mt-2">${experience.company_name}</p>
                                        <ul class="mt-5 list-disc ${index % 2 === 0 ? 'mr-5 text-right' : 'ml-5 text-left'} space-y-2">
                                            ${experience.points.map((point) => `
                                                <li class="text-white-100 text-[14px] ${index % 2 === 0 ? 'pr-1' : 'pl-1'} tracking-wider">${point}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-[25px] h-[25px] rounded-full bg-[#ff004b] z-10"></div>
                                <div class="w-1/2 pl-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}">
                                    <span class="bg-[#1d1836] text-white px-4 py-2 rounded-full text-sm">
                                        ${experience.date}
                                    </span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
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
                        Each project is briefly described with links to code repositories. 
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
                    <div class="flex-1 flex flex-col gap-4 contact-links">
                        <div class="flex items-center gap-4">
                            <a href="mailto:angstgregory@gmail.com" 
                               class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer">
                                <i class="fas fa-envelope text-[#ff004b] text-[24px]"></i>
                            </a>
                            <p class="text-white text-[16px]">angstgregory@gmail.com</p>
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/angst-gregory-970837199/" 
                               target="_blank"
                               class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer">
                                <i class="fab fa-linkedin text-[#ff004b] text-[24px]"></i>
                            </a>
                            <p class="text-white text-[16px]">linkedin.com/in/angst-gregory</p>
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <a href="https://github.com/Fullooh" 
                               target="_blank"
                               class="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d1836] hover:bg-[#2a2449] transition-colors cursor-pointer">
                                <i class="fab fa-github text-[#ff004b] text-[24px]"></i>
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
                                    class="bg-[#ff004b] py-3 px-8 text-white font-bold shadow-md rounded-xl hover:bg-[#d10040] transition-colors"
                                    style="pointer-events: auto;">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;

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