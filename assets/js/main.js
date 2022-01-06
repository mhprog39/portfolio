const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });

        // burger animate
        burger.classList.toggle('toggle');
    });


}

navSlide();
//...................... slider................................
const slides = document.querySelectorAll('.slide');
const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // check for next slide
    if (current.prevtElementSibling) {
        // Add current to next sibling
        current.prevElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Auto slide
if ((auto)) {
    // Run next slide
    slideInterval = setInterval(nextSlide, intervalTime);
}