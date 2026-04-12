/* ================================================
   script.js
   Gentle, handcrafted interactions – no bloat.
   Made with love for a special day.
   ================================================ */

// Fade-in on scroll – feels natural and alive
function initScrollAnimations() {
    const elements = document.querySelectorAll('.section, .hero-content > *');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target); // once is enough
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });
    
    elements.forEach((el) => observer.observe(el));
}

// Subtle hover micro-interaction on cards
function addCardHovers() {
    const cards = document.querySelectorAll('.event-card, .reception-card, .map-btn');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transitionDuration = '280ms';
        });
    });
}

// Smooth scrolling for nav links
function enableSmoothScroll() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Console signature – because real developers leave their mark
function showSignature() {
    console.log('%c❤️ First Holy Communion invitation for Emmanuel – handcrafted with warmth and care. May this day be filled with blessings.', 
                'color:#d4af77; font-family:Georgia; font-size:13px; padding:2px 6px; border:1px solid #d4af77; border-radius:3px;');
}

// Initialize everything when the page is ready
function initialize() {
    initScrollAnimations();
    addCardHovers();
    enableSmoothScroll();
    showSignature();
    
    console.log('✅ Invitation loaded – ready to celebrate Emmanuel’s special day.');
}

// Fire it up
window.addEventListener('load', initialize);