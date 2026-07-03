document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE RESPONSIVE NAVIGATION CONTROLLER
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Autoclose navigation sheet upon mobile element execution
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. MATHEMATICAL 3D GLASSMORPHIC HOVER TILT ENGINE
    const courseCards = document.querySelectorAll('.program, .faculty-card');

    courseCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            
            // Derive mouse layout coordinates relative to object origin center points
            const mouseX = e.clientX - rect.left - (width / 2);
            const mouseY = e.clientY - rect.top - (height / 2);
            
            // Calculate absolute axis constraints (Restricted to an elegant max 10 degrees)
            const rotateX = (-(mouseY / height) * 10).toFixed(2);
            const rotateY = ((mouseX / width) * 10).toFixed(2);

            // Dynamically inject computational transform values
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseenter', () => {
            // Nullify tracking transitions during runtime execution to ensure 1:1 fluid rendering
            card.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            // Re-apply smooth physics on exit transitions to prevent jerky snaps
            card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease';
            card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // 3. STATISTICAL INCREMENTAL COUNTER ENGINE
    const counters = document.querySelectorAll('.counter');
    const animationSpeed = 200; // Multiplier denominator asset control constant

    const runCounterAnimation = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const currentCount = +counter.innerText;
                const incrementStep = target / animationSpeed;

                if (currentCount < target) {
                    counter.innerText = Math.ceil(currentCount + incrementStep);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target.toLocaleString() + "+";
                }
            };
            updateCount();
        });
    };

    // Trigger stats counter immediately on render
    if (counters.length > 0) {
        runCounterAnimation();
    }

    // 4. AUTONOMOUS TESTIMONIAL SLIDER INTERNALS
    const slides = document.querySelectorAll('.testimonial');
    let currentSlideIndex = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlideIndex].classList.remove('testimonial-active');
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            slides[currentSlideIndex].classList.add('testimonial-active');
        }, 5000); // Transitions slide states seamlessly every 5000ms
    }

    // 5. HARDWARE-ACCELERATED ELEMENT GLIDE ENGINE
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    if (animatedElements.length > 0) {
        // Setting up structural threshold parameters for safe visibility mapping
        const executionOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const coreObserver = new IntersectionObserver((detectedEntries, selfObserver) => {
            detectedEntries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Injects execution state cleanly into style sheet matrix rules
                    entry.target.classList.add('glide-active');
                    // Halts runtime tracking to reduce background loop calculations
                    selfObserver.unobserve(entry.target);
                }
            });
        }, executionOptions);

        animatedElements.forEach(element => coreObserver.observe(element));
    }
});


