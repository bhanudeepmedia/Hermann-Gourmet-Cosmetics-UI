try {
    // 1. Initialize Lenis for Smooth Scroll
    // Wrap in try-catch in case external script fails to load
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

    // 2. Register GSAP Plugins (ScrollTrigger only)
    gsap.registerPlugin(ScrollTrigger);

    // 3. Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (cursorDot && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(cursorFollower, { x: e.clientX, y: e.clientY, duration: 0.1 });
        });
    }

    // 4. Intro Sequence (Robust Version)
    window.addEventListener('load', () => {
        const overlay = document.querySelector('.intro-overlay');
        const overlayText = document.querySelector('.intro-counter');
        const overlayLine = document.querySelector('.intro-line');

        // Force remove function
        const removeOverlay = () => {
            if (overlay) {
                gsap.to(overlay, {
                    yPercent: -100,
                    duration: 1,
                    ease: 'power4.inOut',
                    onComplete: () => { overlay.style.display = 'none'; }
                });
            }
            // Animate Hero Elements
            gsap.from('.hero-title span', {
                y: 100, opacity: 0, stagger: 0.2, duration: 1.5, ease: 'power3.out', delay: 0.5
            });
            gsap.from('.hero-bottom-row', { opacity: 0, duration: 1, delay: 1 });
        };

        if (overlayText && overlayLine) {
            let counter = { val: 0 };
            gsap.to(counter, {
                val: 100,
                duration: 2,
                onUpdate: () => {
                    overlayText.innerText = Math.floor(counter.val) + "%";
                },
                onComplete: removeOverlay
            });
            gsap.to(overlayLine, { width: '100%', duration: 1.5 });
        } else {
            console.warn("Loader elements missing, forcing entry");
            removeOverlay();
        }
    });

    // 5. Horizontal Scroll (Museum)
    const sections = gsap.utils.toArray('.museum-panel');
    if (sections.length > 0) {
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".museum-section",
                pin: true,
                scrub: 1,
                // Adjust speed: Make it scroll longer for smoother feel
                end: "+=" + (sections.length * 500),
            }
        });
    }

    // 6. Parallax Effect (Simple)
    const parallaxImg = document.querySelector(".parallax-layer.bg img");
    if (parallaxImg) {
        gsap.to(parallaxImg, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".immersive-story",
                scrub: true
            }
        });
    }

    // 7. 3D Tilt Effect on Cards
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Limit rotation to avoid glitches
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            const inner = card.querySelector('.card-3d-inner');
            if (inner) {
                inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            const inner = card.querySelector('.card-3d-inner');
            if (inner) {
                inner.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
            }
        });
    });

} catch (e) {
    console.error("Critical JS Error:", e);
    // If anything fatal happens, force hide the overlay so user can at least see the site
    const overlay = document.querySelector('.intro-overlay');
    if (overlay) overlay.style.display = 'none';
}
