// =========================================
// HERMANN THEME SCRIPTS
// =========================================

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initQuickAdd();
    initHeader();
});

// 1. GSAP Animations (Check if GSAP exists first)
function initAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Entrance
        const heroTl = gsap.timeline();
        heroTl.from(".hero-content > *", {
            y: 30, opacity: 0, stagger: 0.1, duration: 1, ease: "power2.out"
        })
            .from(".hero-image-container", {
                scale: 0.95, opacity: 0, duration: 1.2, ease: "power2.out"
            }, "-=0.8");

        // Product Grid Stagger
        gsap.from(".product-card", {
            y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
            scrollTrigger: { trigger: ".product-grid-container", start: "top 80%" }
        });

        // Process Steps
        gsap.from(".process-step", {
            y: 30, opacity: 0, stagger: 0.15, duration: 0.8,
            scrollTrigger: { trigger: ".process-grid", start: "top 80%" }
        });
    }
}

// 2. Quick Add Functionality
function initQuickAdd() {
    const buttons = document.querySelectorAll('.quick-add-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Visual feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

            // Simulate/Trigger form submit
            const form = btn.closest('form');
            if (form) {
                // In a real theme, we'd use fetch() to post to /cart/add.js
                form.submit();
            }
        });
    });
}

// 3. Header Behavior
function initHeader() {
    const header = document.querySelector('.site-header[data-sticky="true"]');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('is-scrolled');
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
            header.style.padding = '0.5rem 0';
        } else {
            header.classList.remove('is-scrolled');
            header.style.boxShadow = 'none';
            header.style.padding = '1rem 0';
        }
    });
}
