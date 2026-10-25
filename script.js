// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Smooth reveal on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles to elements
document.querySelectorAll('.project-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        submitButton.textContent = 'Message Sent!';
        submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
            submitButton.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;

    if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Dynamic typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    // Uncomment to enable typing effect:
    // setTimeout(typeWriter, 500);
}
