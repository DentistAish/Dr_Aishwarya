document.addEventListener("DOMContentLoaded", function() {
  // Image cycling functionality
  const cyclingImage = document.getElementById('cyclingImage');
  if (cyclingImage) {
    const images = cyclingImage.querySelectorAll('img');
    const indicators = cyclingImage.querySelectorAll('.image-indicator');
    const progressBar = cyclingImage.querySelector('.image-progress-bar');
    let currentIndex = 0;
    let cycleInterval;
    let progressInterval;
    const cycleTime = 4000; // 4 seconds per image
    let progressWidth = 0;
    
    // Find the active image index
    images.forEach((img, index) => {
      if (img.classList.contains('active')) {
        currentIndex = index;
        updateIndicators(index);
      }
    });
    
    // Function to update indicators
    function updateIndicators(index) {
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
    
    // Function to cycle to the next image
    function cycleToNextImage() {
      // Reset progress bar
      progressWidth = 0;
      progressBar.style.width = '0%';
      
      // Hide current image
      images[currentIndex].classList.remove('active');
      
      // Move to next image
      currentIndex = (currentIndex + 1) % images.length;
      
      // Show next image
      images[currentIndex].classList.add('active');
      
      // Update indicators
      updateIndicators(currentIndex);
    }
    
    // Function to update progress bar
    function updateProgressBar() {
      progressWidth += (100 / (cycleTime / 100)); // Increase by percentage points each 100ms
      if (progressWidth > 100) progressWidth = 100;
      progressBar.style.width = progressWidth + '%';
    }
    
    // Start automatic cycling
    function startCycling() {
      // Clear any existing intervals
      clearInterval(cycleInterval);
      clearInterval(progressInterval);
      
      // Reset progress
      progressWidth = 0;
      progressBar.style.width = '0%';
      
      // Start progress bar update interval
      progressInterval = setInterval(updateProgressBar, 100); // Update every 100ms
      
      // Start image cycling interval
      cycleInterval = setInterval(cycleToNextImage, cycleTime);
    }
    
    // Stop cycling
    function stopCycling() {
      clearInterval(cycleInterval);
      clearInterval(progressInterval);
    }
    
    // Click on indicators to jump to specific image
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering parent click events
        
        // Stop current cycling
        stopCycling();
        
        // Hide current image
        images[currentIndex].classList.remove('active');
        
        // Set new index
        currentIndex = index;
        
        // Show new image
        images[currentIndex].classList.add('active');
        
        // Update indicators
        updateIndicators(currentIndex);
        
        // Reset and restart cycling
        startCycling();
      });
    });
    
    // Start cycling immediately
    startCycling();
    
    // Pause cycling on hover (optional - comment out if you want continuous cycling)
    cyclingImage.addEventListener('mouseenter', () => {
      stopCycling();
    });
    
    // Resume cycling when mouse leaves
    cyclingImage.addEventListener('mouseleave', () => {
      startCycling();
    });
  }

    // Add hover effect to service cards with subtle tilt
    const serviceCards = document.querySelectorAll('.service-card');
  
    serviceCards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (y - centerY) / 20;
        const tiltY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
        this.style.transition = 'transform 0.1s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        this.style.transition = 'transform 0.5s ease';
      });
    });
  
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 7px 14px rgba(0,0,0,0.1)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
      });
    });
  
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
