/* ================================================
   script.js
   Gentle, handcrafted interactions for Emmanuel’s 
   First Holy Communion invitation.
   ================================================ */

// Fade-in on scroll
function initFadeIns() {
    const elements = document.querySelectorAll('.section, .message-card, .details-block, .reception-block, .blessing, .hero-content > *');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.13,
        rootMargin: "0px 0px -50px 0px"
    });
    
    elements.forEach(el => observer.observe(el));
}

// Smooth scrolling for navigation
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Subtle hover enhancement
function addHoverDepth() {
    const interactive = document.querySelectorAll('.location-btn, .rsvp-btn, .reception-block');
    interactive.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// Console message (for developers)
function showSignature() {
    console.log('%c✧ First Holy Communion Invitation for Emmanuel — crafted with warmth and reverence.', 
                'color:#d4af77; font-family:Georgia; font-size:13px;');
}

// Initialize
function initialize() {
    initFadeIns();
    enableSmoothScroll();
    addHoverDepth();
    showSignature();
    
    console.log('✅ Emmanuel’s invitation is ready. May this day be filled with blessings.');
}

window.addEventListener('load', initialize);