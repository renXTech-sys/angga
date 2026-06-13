const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id') || '';
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

const mobileMenu = document.getElementById('lewatHP');
const navContainer = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    
    const icon = mobileMenu.querySelector('i');
    if (navContainer.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
});

const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navContainer.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    });
});
