/* script.js */
/* ============================================= */
/* Lightweight JavaScript for:                 */
/* - Smooth scrolling navigation               */
/* - Scroll fade-in animations                 */
/* - Mobile hamburger menu                     */
/* - No heavy libraries – pure vanilla JS      */
/* ============================================= */

// Smooth scrolling for all navigation links
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ First Holy Communion website initialized – clean, elegant & performant', 'color:#d4af77; font-family:Georgia');

    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight + 20;
                
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger lines
        const lines = hamburger.querySelectorAll('.hamburger-line');
        if (mobileMenu.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });

    // Scroll animations – fade-in + slight lift
    const fadeElements = document.querySelectorAll('.fade-in, .section, .blessing-section');
    
    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        observer.observe(el);
    });

    // Optional: very subtle navbar shadow on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 80) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    });

    console.log('%c✅ All animations & interactions ready. Website is fully responsive and optimized for GitHub Pages.', 'color:#d4af77; font-family:Georgia');
});