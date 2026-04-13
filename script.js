/* ================================================
   script.js
   Preserves all original functionality:
   - Scroll fade-in animations
   - Smooth scrolling
   - Section anchors
   ================================================ */

// Fade-in on scroll (lightweight)
function initFadeIns() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Smooth scrolling for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
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

function initialize() {
    initFadeIns();
    initSmoothScroll();
    console.log('%c✅ First Holy Communion Invitation - Fully Featured & Well Organized', 
                'color:#d4af77; font-family:Georgia; font-size:13px;');
}

window.addEventListener('load', initialize);