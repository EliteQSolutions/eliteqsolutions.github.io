// script.js - Elite Q Solutions Interactions

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a, .hero-actions a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only prevent default if it's an anchor link on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Smooth scroll to the target, offsetting for the sticky nav
                    const navHeight = document.querySelector('.glass-nav').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navHeight - 20;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 2. Form submission is handled by the dedicated inline script in index.html.
    //    This handler has been removed to prevent conflicts with the Formspree integration.

    // 3. Header Scroll Effect (Glass morphing intensity)
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(7, 9, 15, 0.85)';
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(7, 9, 15, 0.7)';
            nav.style.boxShadow = 'none';
        }
    });
});
