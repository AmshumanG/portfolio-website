// Add the 'active' class to the nav items on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Toggle header menu in mobile view
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
document.querySelector('header').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    const header = document.querySelector('header');
    header.classList.toggle('active');
});

// Hide header on scroll down, show it on scroll up
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Scroll Down
        header.style.top = "-60px"; // Hide header
    } else {
        // Scroll Up
        header.style.top = "0"; // Show header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});
