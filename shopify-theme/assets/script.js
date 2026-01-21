// 1. Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 2. Navbar Scroll Effect
const nav = document.querySelector('.sticky-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    } else {
        nav.style.padding = '1rem 5%';
        nav.style.background = 'rgba(253, 251, 247, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// 3. Hero Animations (Entrance)
window.onload = () => {
    const tl = gsap.timeline();

    tl.from(".hero-text > *", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
    })
        .from(".hero-main-img", {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)"
        }, "-=0.8")
        .from(".hero-small-img", {
            x: 50,
            opacity: 0,
            duration: 1
        }, "-=1")
        .from(".blob-bg", {
            scale: 0,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1.5");
};

// 4. Product Stagger Reveal
gsap.from(".product-card-fun", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".shop-section",
        start: "top 70%"
    }
});

// 5. Process Steps Connector
gsap.from(".step", {
    x: -30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".process-steps",
        start: "top 80%"
    }
});

// 6. Blog Reveal
gsap.from(".blog-post", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".blog-section",
        start: "top 75%"
    }
});

// 7. Interactive Category Pills
const pills = document.querySelectorAll('.pill');
pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
        e.preventDefault();
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        // In a real app, this would filter the grid
    });
});

// 8. Mobile Menu Toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    }
});
