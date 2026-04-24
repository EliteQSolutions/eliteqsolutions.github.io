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

    // 2. Form Submission Handling (Non-Joinder Protocol)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            // Simulate secure submission
            btn.textContent = "Encrypting & Sending...";
            btn.style.background = "var(--glass-border)";
            btn.style.color = "var(--text-main)";
            
            setTimeout(() => {
                btn.textContent = "Data Received. We will contact you.";
                btn.style.background = "#27c93f"; // Success green
                btn.style.color = "#000";
                form.reset();
                
                // Reset button after 4 seconds
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = "var(--primary-gradient)";
                    btn.style.color = "#000";
                }, 4000);
            }, 1500);
        });
    }

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
