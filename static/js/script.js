// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Observe service items with staggered delay
document.querySelectorAll('.services li').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Number counter animation function (for index.html)
function animateNumber(element, target, duration = 1500) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe track items with staggered delay and animate numbers (for index.html)
const trackItemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('visible', 'counted');
            const numberElement = entry.target.querySelector('.number');
            if (numberElement) {
                const target = parseInt(numberElement.getAttribute('data-target'));
                animateNumber(numberElement, target);
            }
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});

document.querySelectorAll('.track-item').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    trackItemObserver.observe(el);
});

// Observe client logos with staggered delay (for index.html)
document.querySelectorAll('.client-logo').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Observe timeline items with staggered delay (for about.html)
document.querySelectorAll('.timeline-item').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Helper function to convert YouTube URLs to embed format (for about.html)
function convertYouTubeUrls() {
    document.querySelectorAll('.timeline-video[data-youtube-url]').forEach(videoDiv => {
        const url = videoDiv.getAttribute('data-youtube-url');
        let embedUrl = url;
        
        // Convert watch URL to embed URL
        if (url.includes('youtube.com/watch?v=')) {
            const videoId = url.split('v=')[1].split('&')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1].split('?')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
        
        videoDiv.innerHTML = `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
    });
}

// Run YouTube URL conversion on page load (for about.html)
convertYouTubeUrls();

// Highlight observer
const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});

// Observe all highlight elements
document.querySelectorAll('.highlight').forEach(el => {
    highlightObserver.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const nav = document.getElementById('main-nav');
            const menuToggle = document.querySelector('.menu-toggle');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMenu() {
    if (nav) nav.classList.toggle('active');
    if (menuToggle) menuToggle.classList.toggle('active');
    if (menuOverlay) {
        menuOverlay.classList.toggle('active');
    }
}

function closeMenu() {
    if (nav) nav.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('active');
    if (menuOverlay) {
        menuOverlay.classList.remove('active');
    }
}

if (menuToggle && nav) {
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking outside
    const logoContainer = document.querySelector('.logo-container');
    const tabSwitcher = document.querySelector('.tab-switcher');
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        const isClickOnLogo = logoContainer && logoContainer.contains(event.target);
        const isClickOnTabButton = tabSwitcher && tabSwitcher.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && !isClickOnLogo && !isClickOnTabButton && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on window resize if it becomes desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when clicking nav links
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
}

// Tab switcher functionality (for services.html)
const tabButtons = document.querySelectorAll('.tab-button');
const serviceBlocks = document.querySelectorAll('.service-block');

if (tabButtons.length > 0 && serviceBlocks.length > 0) {
    // Check if mobile
    const isMobileInitial = window.innerWidth <= 768;
    
    // Observe service blocks with staggered delay (only active ones)
    document.querySelectorAll('.service-block.active').forEach((el, index) => {
        if (!isMobileInitial) {
            el.style.transitionDelay = `${index * 0.15}s`;
            observer.observe(el);
        } else {
            el.classList.add('visible');
        }
    });

    // Observe service items with staggered delay (only in active block)
    document.querySelectorAll('.service-block.active .services li').forEach((el, index) => {
        if (!isMobileInitial) {
            el.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(el);
            // If already in viewport, trigger visible after a short delay
            setTimeout(() => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible');
                }
            }, 200);
        } else {
            el.classList.add('visible');
        }
    });

    // Function to handle tab switching
    function switchTab(button) {
        const targetTab = button.getAttribute('data-tab');
        const isMobile = window.innerWidth <= 768;
        
        // Remove active class from all buttons and blocks
        tabButtons.forEach(btn => btn.classList.remove('active'));
        serviceBlocks.forEach(block => {
            block.classList.remove('active');
            block.classList.remove('visible');
            // Reset all timeline items in hidden blocks
            block.querySelectorAll('.services li').forEach(li => {
                li.classList.remove('visible');
                if (observer) observer.unobserve(li);
            });
            if (observer) observer.unobserve(block);
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding block
        const targetBlock = document.getElementById(`${targetTab}-tab`);
        if (targetBlock) {
            // Force a reflow to ensure CSS applies
            targetBlock.offsetHeight;
            targetBlock.classList.add('active');
            
            // Reset and observe the block
            targetBlock.classList.remove('visible');
            
            // Reset all timeline items to initial state
            const timelineItems = targetBlock.querySelectorAll('.services li');
            
            if (isMobile) {
                // On mobile, just show items immediately without animation
                timelineItems.forEach((el) => {
                    el.classList.add('visible');
                    el.style.opacity = '';
                    el.style.transform = '';
                });
            } else {
                // On desktop, use animations
                timelineItems.forEach((el, index) => {
                    el.classList.remove('visible');
                    el.style.opacity = '';
                    el.style.transform = '';
                    el.style.transitionDelay = `${index * 0.1}s`;
                });
                
                // Trigger animation after a short delay to ensure DOM is updated
                setTimeout(() => {
                    if (observer) observer.observe(targetBlock);
                    timelineItems.forEach((el) => {
                        if (observer) observer.observe(el);
                        // If already in viewport, manually trigger visible
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            setTimeout(() => {
                                el.classList.add('visible');
                            }, 50);
                        }
                    });
                }, 100);
            }
        }
    }

    // Add event listeners for tab switching
    tabButtons.forEach(button => {
        // Handler function
        const handleTabClick = function(e) {
            e.stopPropagation();
            switchTab(this);
        };
        
        // Add multiple event types for better mobile compatibility
        button.addEventListener('click', handleTabClick, { passive: false });
        button.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        }, { passive: true });
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            switchTab(this);
        }, { passive: false });
        
        // Make sure button is focusable and clickable
        button.setAttribute('role', 'tab');
        button.setAttribute('tabindex', '0');
    });
}

