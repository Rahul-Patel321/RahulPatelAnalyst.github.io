document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active'); // Close nav menu on link click (mobile)
            }
        });
    }
});
