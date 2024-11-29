document.addEventListener("DOMContentLoaded", () => {
    // Show the navigation bar after the fade animations are complete
    setTimeout(() => {
        const navbar = document.getElementById("navbar");
        navbar.style.display = "block";
        navbar.style.animation = "fadeIn 2s ease-out";
    }, 7000); // 7-second delay to match the fade animation
});
