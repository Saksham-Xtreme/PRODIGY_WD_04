// script.js for Royal Developer Landing Page

// This script can be used for smooth scrolling to sections when navigation links are clicked.
document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links that point to sections within the page
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior

            const targetId = this.getAttribute('href'); // Get the href attribute (e.g., "#skills")
            const targetElement = document.querySelector(targetId); // Find the target element

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Enable smooth scrolling
                });
            }
        });
    });

    // Optional: Add a "reveal on scroll" effect for sections
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to make the section visible or animate it
                entry.target.classList.add('is-visible');
                // Stop observing once it's visible to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add a CSS rule for the 'is-visible' class in style.css or dynamically
    // For this example, we'll assume a simple fade-in for sections.
    // You would typically add this to your style.css:
    /*
    .section-hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .section-hidden.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
    // To implement the above, you'd add 'section-hidden' class to all sections in HTML
    // and then the JS would remove it and add 'is-visible'.
    // For simplicity, the current HTML animations are only for the header.
    // This JS is primarily for smooth scrolling.
});