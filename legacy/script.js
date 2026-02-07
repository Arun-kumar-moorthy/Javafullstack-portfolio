document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Fade-In Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to all fade-in elements
    document.querySelectorAll('.fade-in, .glass-card, .skill-category').forEach(el => {
        el.classList.add('fade-in'); // Ensure the base class is there
        observer.observe(el);
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Parallax Effect for Hero Background Shapes
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const x = (e.clientX - window.innerWidth / 2) / 100;
        const y = (e.clientY - window.innerHeight / 2) / 100;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 2;
            shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // 5. Typewriter Effect (Simulated for Hero)
    const heroTitle = document.querySelector('.hero h1');
    const fullText = "Hi, I'm Arun Kumar";
    let charIndex = 0;

    heroTitle.innerHTML = ""; // Clear for animation

    function typeEffect() {
        if (charIndex < fullText.length) {
            heroTitle.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            // Re-apply highlight class to the name part
            const namePart = "Arun Kumar";
            const restPart = "Hi, I'm ";
            heroTitle.innerHTML = restPart + `<span class="highlight">${namePart}</span>`;
        }
    }

    setTimeout(typeEffect, 500);
});
