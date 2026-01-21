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

gsap.registerPlugin(ScrollTrigger);

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

// Parallax for Hero Arch
gsap.to(".hero-arch-window", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-heritage",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Geometric Gallery Parallax
gsap.to(".circle-shape", {
    y: -100,
    scrollTrigger: {
        trigger: ".geo-gallery",
        scrub: 1.5
    }
});

gsap.to(".arch-shape", {
    y: 50,
    scrollTrigger: {
        trigger: ".geo-gallery",
        scrub: 1
    }
});

// Recipe Cards Stagger Reveal
gsap.from(".recipe-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".recipe-cards-section",
        start: "top 70%"
    }
});
