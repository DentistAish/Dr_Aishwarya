// Random Earthy Color Generator for the Circle Border
function getRandomEarthyColor() {
    const earthyColors = [
        "#8e4400", // Brown
        "#d4a200", // Mustard
        "#ffbc00", // Yellow
        "#ee5e00", // Orange
        "#4e7c7b", // Greenish
        "#5A4E43", // Dark Brown
        "#f3b447", // Light Gold
        "#7c5d3b"  // Sandy Brown
    ];

    const randomIndex = Math.floor(Math.random() * earthyColors.length);
    return earthyColors[randomIndex];
}

// Apply random colors to images' borders on hover
document.querySelectorAll('.hero-img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        const randomColor = getRandomEarthyColor();
        img.style.setProperty('--hover-border-color', randomColor); // Custom property for hover effect
    });
});
