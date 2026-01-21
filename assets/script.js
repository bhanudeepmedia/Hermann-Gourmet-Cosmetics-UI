/* 
   Hermann Luxury Interactions 
   Handles: Reveal transitions, Sorting, Custom UI events
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. REVEAL ANIMATIONS (Zielinski Style)
    // Elements fade in and slide up slowly as they enter viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve after revealing
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target sections and cards
    const revealElements = document.querySelectorAll('.shopify-section, .product-card, .testimonial-card, h1, h2, p, .btn-primary');
    revealElements.forEach(el => {
        el.classList.add('reveal-element');
        revealObserver.observe(el);
    });


    // 2. COLLECTION SORTING (Fix)
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const value = e.target.value;
            const url = new URL(window.location);
            url.searchParams.set('sort_by', value);
            window.location.href = url.toString();
        });
    }

    // 3. MAGICAL CURSOR (Refined)
    const cursor = document.querySelector('.cursor-ring');
    if (cursor && !window.matchMedia("(pointer: coarse)").matches) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });

        // Hover effects
        document.querySelectorAll('a, button, input').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover-active'));
        });
    }

});
