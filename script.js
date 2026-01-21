// Initialize Lenis
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger, Draggable);

// Loader Animation
window.onload = () => {
    const tl = gsap.timeline();

    tl.to(".loader-circle", {
        scale: 50,
        duration: 1.2,
        ease: "power2.inOut"
    })
        .to(".loader-overlay", {
            opacity: 0,
            duration: 0.5,
            pointerEvents: "none"
        })
        .from(".hero-img-inner", {
            scale: 1.5,
            y: 100,
            duration: 1.5,
            ease: "expo.out"
        }, "-=1")
        .from(".line-reveal", {
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out"
        }, "-=1");
}

// Hero Mouse Move Parallax
const heroSection = document.querySelector('.hero-heritage');
const heroArch = document.querySelector('#heroArch');

if (heroSection && heroArch) {
    heroSection.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(heroArch, {
            x: x,
            y: y,
            duration: 1,
            ease: "power2.out"
        });
    });
}

// Parallax Banner
gsap.to(".parallax-bg", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".ingredients-banner",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Horizontal Gallery Scroll
gsap.to(".gallery-track", {
    xPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});

// Stagger Reveals for Journal
gsap.from(".journal-card", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".journal-grid",
        start: "top 80%"
    }
});

// Testimonial Fade Up
gsap.from(".testimonial-card", {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%"
    }
});
