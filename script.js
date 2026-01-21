// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Loader Animation
window.addEventListener("load", () => {
    const tl = gsap.timeline();

    tl.to(".loader-bar", {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut"
    })
        .to(".loader-text", {
            y: -50,
            opacity: 0,
            duration: 0.5
        })
        .to(".loader", {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut"
        }, "-=0.2")
        .from(".hero-title .word", {
            y: 150,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=0.5")
        .from(".hero-img", {
            scale: 1.2,
            duration: 2,
            ease: "expo.out"
        }, "-=1.5");
});

// Parallax Hero
gsap.to(".hero-img", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Horizontal Scroll for Menu
let sections = gsap.utils.toArray(".scroller-card");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".menu-scroller",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3000", /* Controls the speed of scroll */
    }
});

// Curtain Reveal
gsap.timeline({
    scrollTrigger: {
        trigger: ".philosophy",
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
})
    .to(".curtain-l", { width: "0%" })
    .to(".curtain-r", { width: "0%" }, "<"); // Run simultaneously

// Footer Text Reveal
gsap.from(".footer-title", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".footer-royal",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});
