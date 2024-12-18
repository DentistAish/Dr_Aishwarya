document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.hero-img');
    const colors = ['#D32F2F', '#388E3C', '#0288D1', '#7B1FA2', '#FBC02D', '#1976D2'];

    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            img.style.setProperty('--hover-border-color', randomColor);
            img.classList.add('active-border');
        });

        img.addEventListener('mouseleave', function() {
            img.classList.remove('active-border');
        });
    });
});
