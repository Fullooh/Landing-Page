class Portfolio {
    constructor() {
        // Initialize loading elements first
        this.loadingBar = document.querySelector('.loading-bar');
        this.loadingContainer = document.querySelector('.loading-container');
        this.loadingText = document.querySelector('.loading-text');
        
        // Start loading sequence
        this.initLoadingScreen();

        this.activeSection = 'hero';
        this.mousePosition = { x: 0, y: 0 };
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
            antialias: true,
        });
        
        // Navigation items
        this.sections = [
            { id: 'hero', position: new THREE.Vector3(0, 0, 0) },
            { id: 'projects', position: new THREE.Vector3(0, -100, 0) },
            { id: 'work', position: new THREE.Vector3(100, 0, 0) },
            { id: 'contact', position: new THREE.Vector3(-100, 0, 0) },
        ];

        this.init();
        this.createNavigation();
        this.createContent();
        this.setupEventListeners();
        this.animate();
    }

    initLoadingScreen() {
        // Initially hide the hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.opacity = '0';
        }
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            
            // Update loading bar width and text
            if (this.loadingBar) {
                this.loadingBar.style.width = `${progress}%`;
            }
            if (this.loadingText) {
                this.loadingText.textContent = `${progress}%`;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                // Hide loading screen
                if (this.loadingContainer) {
                    this.loadingContainer.style.opacity = '0';
                    setTimeout(() => {
                        if (this.loadingContainer) {
                            this.loadingContainer.style.display = 'none';
                        }
                        // Fade in the hero section
                        if (heroSection) {
                            heroSection.style.opacity = '1';
                            heroSection.classList.add('active');
                        }
                    }, 500); // Wait for loading screen to fade out
                }
            }
        }, 20);
    }

    init() {
        // Renderer setup
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x0a0a0a);
        
        // Camera setup
        this.camera.position.z = 15;
        
        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const pointLight = new THREE.PointLight(0x4169e1, 2); // Blue light
        pointLight.position.set(5, 5, 5);
        
        this.scene.add(ambientLight, pointLight);

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.enableZoom = false;
    }

    createNavigation() {
        // Create 3D navigation dots
        this.navigationDots = this.sections.map((section, index) => {
            const geometry = new THREE.SphereGeometry(0.2, 32, 32);
            const material = new THREE.MeshStandardMaterial({ 
                color: 0x4169e1,
                metalness: 0.5,
                roughness: 0.5,
            });
            const dot = new THREE.Mesh(geometry, material);
            
            // Position dots vertically
            dot.position.set(-8, 3 - (index * 2), 0);
            
            // Add hover effect
            dot.userData = { 
                id: section.id,
                originalScale: dot.scale.clone(),
            };
            
            this.scene.add(dot);
            return dot;
        });
    }

    createContent() {
        // Hero Section
        const heroText = this.createTextMesh("Hi, I'm Angst Gregory", 1);
        heroText.position.set(-5, 2, 0);
        this.scene.add(heroText);

        // Create floating particles
        this.particles = new THREE.Group();
        for (let i = 0; i < 200; i++) {
            const particle = this.createParticle();
            this.particles.add(particle);
        }
        this.scene.add(this.particles);

        // Projects Section (Create some 3D project cards)
        this.projectCards = this.createProjectCards();
    }

    createParticle() {
        const geometry = new THREE.SphereGeometry(0.02, 8, 8);
        const material = new THREE.MeshStandardMaterial({
            color: 0x4169e1,
            metalness: 0.5,
            roughness: 0.5,
        });
        const particle = new THREE.Mesh(geometry, material);
        
        // Random position
        particle.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        
        return particle;
    }

    createProjectCards() {
        const cards = [];
        const projects = [
            { title: 'Project One', description: 'A revolutionary web application' },
            { title: 'Project Two', description: 'Mobile-first design system' },
            { title: 'Project Three', description: 'AI-powered analytics platform' },
        ];

        projects.forEach((project, index) => {
            const card = new THREE.Group();
            
            // Create card background
            const geometry = new THREE.BoxGeometry(4, 3, 0.1);
            const material = new THREE.MeshStandardMaterial({
                color: 0x1a1a1a,
                metalness: 0.5,
                roughness: 0.5,
            });
            const mesh = new THREE.Mesh(geometry, material);
            
            card.add(mesh);
            card.position.set(index * 5 - 5, -8, 0);
            this.scene.add(card);
            cards.push(card);
        });

        return cards;
    }

    setupEventListeners() {
        // Mouse move for parallax effect
        document.addEventListener('mousemove', (e) => {
            this.mousePosition.x = (e.clientX / window.innerWidth - 0.5) * 2;
            this.mousePosition.y = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        // Resize handler
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Navigation click handler
        this.renderer.domElement.addEventListener('click', (event) => {
            const mouse = new THREE.Vector2(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            );

            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, this.camera);

            const intersects = raycaster.intersectObjects(this.navigationDots);
            
            if (intersects.length > 0) {
                const dot = intersects[0].object;
                this.navigateToSection(dot.userData.id);
            }
        });
    }

    navigateToSection(sectionId) {
        const section = this.sections.find(s => s.id === sectionId);
        if (section) {
            this.activeSection = sectionId;
            
            // Animate camera movement
            gsap.to(this.camera.position, {
                duration: 1,
                x: section.position.x,
                y: section.position.y,
                z: section.position.z + 15,
                ease: 'power2.inOut'
            });
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Update particles
        this.particles.children.forEach(particle => {
            particle.position.y += 0.01;
            if (particle.position.y > 10) particle.position.y = -10;
        });

        // Parallax effect on camera
        this.camera.position.x += (this.mousePosition.x * 0.5 - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mousePosition.y * 0.5 - this.camera.position.y) * 0.05;

        // Update controls
        this.controls.update();

        // Render
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});