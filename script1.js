document.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById('hero');
    const navbar = document.getElementById('navbar');

    // Event listener for scrolling
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Fade out the hero section when scrolled
        if (scrollY > 100) {
            hero.classList.add('fade-out');
        }

        // Show the navbar after scrolling a bit more
        if (scrollY > 200) {
            navbar.style.display = "block";
            navbar.style.animation = "fadeIn 2s ease-out";
        }
    });
});
