// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(cursorFollower, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

// Intro Sequence
window.onload = () => {
    const tl = gsap.timeline();
    let counter = { val: 0 };

    tl.to(counter, {
        val: 100,
        duration: 2,
        onUpdate: () => {
            document.querySelector('.intro-counter').innerText = Math.floor(counter.val) + "%";
        }
    })
        .to('.intro-line', { width: '100%', duration: 1.5 }, "<")
        .to('.intro-overlay', { yPercent: -100, duration: 1, ease: 'power4.inOut' })
        .from('.hero-title span', { y: 100, opacity: 0, stagger: 0.2, duration: 1.5, ease: 'power3.out' })
        .from('.hero-bottom-row', { opacity: 0, duration: 1 }, "-=1");
};

// Horizontal Scroll (Museum)
const sections = gsap.utils.toArray('.museum-panel');
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".museum-section",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
    }
});

// Parallax Effect
gsap.to(".parallax-layer.bg img", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".immersive-story",
        scrub: true
    }
});

// Magnetic Buttons
document.querySelectorAll('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
    });
});

// 3D Tilt Effect on Cards (Vanilla JS optimized)
document.querySelectorAll('.card-3d').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.querySelector('.card-3d-inner').style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.card-3d-inner').style.transform =
            `perspective(1000px) rotateX(0) rotateY(0)`;
    });
});
