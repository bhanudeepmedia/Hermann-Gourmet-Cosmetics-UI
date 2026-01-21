document.addEventListener('DOMContentLoaded', () => {
    // Parallax Effect for Visual Break
    const visualBreak = document.querySelector('.visual-break');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const speed = 0.5;
        if (visualBreak) {
            // Simple background position shift
            visualBreak.style.backgroundPosition = `center ${-(scrolled * speed) * 0.1}px`;
        }
    });

    // Fade Up Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element comes into view
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.split-content, .product-card, .footer-brand');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        fadeInObserver.observe(el);
    });

    // Custom Cursor (Optional - for that "Haptic" visual feel)
    /* 
    const cursor = document.createElement('div');
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '1px solid #000';
    cursor.style.borderRadius = '50%';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'transform 0.1s ease';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    */
});
