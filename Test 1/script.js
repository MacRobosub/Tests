// Submarine Animation
window.onload = () => {
    const submarine = document.querySelector('.submarine');

    // Animate the submarine from left to right
    submarine.style.transition = 'left 5s linear'; // Animation duration and style
    submarine.style.left = '100%'; // Moves the submarine to the right of the screen
};

// Additional functionality for other page elements can go here
console.log("Website loaded successfully!");
