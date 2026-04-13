/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ First Holy Communion website initialized', 'color:#d4af77; font-family:Georgia');

    // ====================== RECEPTION INVITE CODE LOGIC ======================
    function handleReceptionVisibility() {
        const urlParams = new URLSearchParams(window.location.search);
        const inviteCode = urlParams.get('invite')?.toLowerCase();

        // Internal invitation mapping (kept private behind non-readable codes)
        const inviteMap = {
            a7f2: 'lunch',
            b9k4: 'dinner',
            x3p8: 'both'
        };
        const invitationType = inviteMap[inviteCode] || 'both';

        const lunchCard = document.getElementById('lunch-card');
        const dinnerCard = document.getElementById('dinner-card');

        if (!lunchCard || !dinnerCard) return;

        if (invitationType === 'lunch') {
            lunchCard.style.display = 'block';
            dinnerCard.style.display = 'none';
        } 
        else if (invitationType === 'dinner') {
            lunchCard.style.display = 'none';
            dinnerCard.style.display = 'block';
        } 
        else {
            // default: both (missing/unknown invite code)
            lunchCard.style.display = 'block';
            dinnerCard.style.display = 'block';
        }
    }

    // ====================== SMOOTH SCROLLING ======================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                // reset hamburger
                const lines = document.querySelectorAll('.hamburger-line');
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight + 20;
                const offsetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ====================== MOBILE HAMBURGER ======================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
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

    // ====================== SCROLL FADE-IN ======================
    const fadeElements = document.querySelectorAll('.fade-in, .section, .blessing-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // ====================== SUBTLE NAVBAR SHADOW ======================
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.scrollY;
        
        navbar.style.boxShadow = (currentScroll > lastScroll && currentScroll > 80)
            ? '0 4px 20px rgba(0, 0, 0, 0.08)'
            : 'none';
        
        lastScroll = currentScroll;
    });

    // Initialize reception visibility
    handleReceptionVisibility();

    console.log('%c✅ Reception invite system ready (supports ?invite=<code>)', 'color:#d4af77; font-family:Georgia');
});