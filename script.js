// Scroll effect

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hover effect

    const hoverElements = document.querySelectorAll('a, img');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.05)';
            el.style.transition = 'transform 0.3s ease';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
        });
    });
});
