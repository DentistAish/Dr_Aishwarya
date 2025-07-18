// Lucide Icons initialization
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
});

// Make sure icons are created after any dynamic content is added
function refreshIcons() {
  lucide.createIcons();
}

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Data
const services = [
  {
    id: 1,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our complete range of cosmetic procedures including veneers, whitening, and smile makeovers.",
    image: "jonathan-borba-W9YEY6G8LVM-unsplash.jpg"
  },
  {
    id: 2,
    title: "Preventative Care",
    description: "Regular cleanings, exams, and early intervention to maintain optimal oral health and prevent future problems.",
    image: "diana-polekhina-fmB7IdFjhTM-unsplash.jpg"
  },
  {
    id: 3,
    title: "Restorative Dentistry",
    description: "Repair damaged teeth with crowns, bridges, implants, and more to restore both function and appearance.",
    image: "enis-yavuz-QT7ytJJwAnY-unsplash.jpg"
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Straighten your teeth with modern clear aligners and traditional braces optimized for comfort and results.",
    image: "kamal-hoseinianzade-RCQnbyQsnUg-unsplash.jpg"
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    description: "Child-friendly dental care in a comfortable environment designed to create positive dental experiences.",
    image: "jonathan-borba-v_2FRXEba94-unsplash.jpg"
  },
  {
    id: 6,
    title: "Emergency Dentistry",
    description: "Prompt attention for dental emergencies including toothaches, broken teeth, and other urgent dental needs.",
    image: "ozkan-guner-LO4HKJVyQjM-unsplash.jpg"
  }
];

const portfolio = [
  {
    id: 1,
    title: "Complete Smile Makeover",
    description: "Veneers, whitening, and contouring",
    image: "atikah-akhtar-XJptUS8nbhs-unsplash.jpg"
  },
  {
    id: 2,
    title: "Dental Implant Restoration",
    description: "Full-mouth rehabilitation with implants",
    image: "caroline-lm-JiBssiZVPZA-unsplash.jpg"
  },
  {
    id: 3,
    title: "Invisalign Transformation",
    description: "Clear aligner therapy for perfect alignment",
    image: "caroline-lm-ux18C551ghI-unsplash.jpg"
  },
  {
    id: 4,
    title: "Porcelain Crown Artistry",
    description: "Natural-looking crowns for damaged teeth",
    image: "quang-tri-nguyen-VxVO1zrY5F8-unsplash.jpg"
  },
  {
    id: 5,
    title: "Composite Bonding",
    description: "Artistic repairs for chips and gaps",
    image: "matthew-poetker-nWZs_SnBDmg-unsplash.jpg"
  },
  {
    id: 6,
    title: "Professional Whitening",
    description: "Dramatic brightening in just one visit",
    image: "bekky-bekks-sWudehHJXD4-unsplash.jpg"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Jennifer L.",
    title: "Smile Makeover Patient",
    quote: "Dr. Johnson completely transformed my smile and my confidence! Her attention to detail and gentle approach made the entire process comfortable. I couldn't be happier with my results!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael R.",
    title: "General Dentistry Patient",
    quote: "I've always been nervous about dental visits, but Dr. Johnson and her team make me feel at ease every time. The office is modern, clean, and they use the latest technology for virtually painless procedures.",
    rating: 5
  },
  {
    id: 3,
    name: "David T.",
    title: "Invisalign Patient",
    quote: "After years of hiding my smile, I finally decided to get Invisalign with Dr. Johnson. The results exceeded my expectations, and the entire process was so much easier than I anticipated. I should have done this years ago!",
    rating: 5
  },
  {
    id: 4,
    name: "Sarah M.",
    title: "Parent of Pediatric Patient",
    quote: "My daughter was terrified of the dentist until we found Dr. Johnson. She has a special way with kids that makes them feel comfortable and even excited about dental care. Now my daughter looks forward to her checkups!",
    rating: 5
  }
];

const hosts = [
  {
    id: 1,
    name: "Netlify",
    description: "Free hosting with custom domain support, form handling, and continuous deployment from Git.",
    logo: "https://www.netlify.com/v3/img/components/logomark.svg",
    url: "https://www.netlify.com"
  },
  {
    id: 2,
    name: "GitHub Pages",
    description: "Free hosting directly from your GitHub repository. Great for static websites like this one.",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    url: "https://pages.github.com"
  },
  {
    id: 3,
    name: "Vercel",
    description: "Free tier hosting with excellent performance, global CDN, and seamless Git integration.",
    logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    url: "https://vercel.com"
  }
];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const servicesGrid = document.querySelector('.services-grid');
const portfolioGrid = document.querySelector('.portfolio-grid');
const testimonialTrack = document.querySelector('.testimonial-track');
const sliderDots = document.querySelector('.slider-dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const hostingGrid = document.querySelector('.hosting-grid');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.getElementById('toastClose');

// Mobile Menu Toggle
if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    // Toggle hamburger animation
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileNav.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// Render Services
if (servicesGrid) {
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.title}" class="service-img" loading="lazy">
      <div class="service-content">
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
        <a href="https://example.com/services/${service.id}" target="_blank" class="service-link" onclick="event.preventDefault(); window.open('https://www.medanta.org/hospitals-near-me/gurugram-hospital/speciality/dentistry/doctor/dr-aishwarya-arya', '_blank'); setTimeout(() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'}), 100);">Learn more <i data-lucide="arrow-right"></i></a>
      </div>
    `;
    servicesGrid.appendChild(serviceCard);
  });
  refreshIcons(); // Reinitialize icons for dynamically added content
}

// Render Portfolio Items
if (portfolioGrid) {
  portfolio.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
      <div class="portfolio-overlay">
        <h3 class="portfolio-title">${item.title}</h3>
        <p class="portfolio-description">${item.description}</p>
      </div>
    `;
    portfolioGrid.appendChild(portfolioItem);
  });
}

// Testimonials Slider
let currentSlide = 0;
let slideWidth = getSlideWidth();

function getSlideWidth() {
  if (window.innerWidth >= 992) {
    return 33.333;
  } else if (window.innerWidth >= 768) {
    return 50;
  } else {
    return 100;
  }
}

function updateSliderSize() {
  slideWidth = getSlideWidth();
  if (testimonialTrack) {
    updateSlidePosition();
  }
}

function updateSlidePosition() {
  testimonialTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  updateActiveDot();
}

function updateActiveDot() {
  const dots = document.querySelectorAll('.slider-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Render Testimonial Slides and Dots
if (testimonialTrack && sliderDots) {
  testimonials.forEach((testimonial, index) => {
    // Create avatar placeholder
    const avatarUrl = `https://i.pravatar.cc/150?img=${index + 10}`;
    
    const slide = document.createElement('div');
    slide.className = 'testimonial-slide';
    
    const stars = Array(testimonial.rating).fill('').map(() => 
      '<i data-lucide="star" class="star-icon"></i>'
    ).join('');
    
    slide.innerHTML = `
      <div class="testimonial-card">
        <p class="testimonial-quote">${testimonial.quote}</p>
        <div class="testimonial-author">
          <img src="${avatarUrl}" alt="${testimonial.name}" class="testimonial-avatar">
          <div class="testimonial-info">
            <h4 class="testimonial-name">${testimonial.name}</h4>
            <p class="testimonial-title">${testimonial.title}</p>
            <div class="testimonial-rating">
              ${Array(testimonial.rating).fill('<i data-lucide="star"></i>').join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    testimonialTrack.appendChild(slide);
    
    // Create dot for this slide
    const dot = document.createElement('button');
    dot.className = index === 0 ? 'slider-dot active' : 'slider-dot';
    dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlidePosition();
      updateActiveDot();
    });
    
    sliderDots.appendChild(dot);
  });
  lucide.createIcons();  // Initialize testimonial slider
  updateSliderSize();
  
  // Add event listeners for slider controls
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
        updateActiveDot();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      const maxSlides = Math.ceil(testimonials.length / (slideWidth === 33.333 ? 3 : slideWidth === 50 ? 2 : 1));
      if (currentSlide < maxSlides - 1) {
        currentSlide++;
        updateSlidePosition();
        updateActiveDot();
      }
    });
  }
  
  // Refresh all icons after dynamic content is loaded
  refreshIcons();
}

// Render Hosting Options
if (hostingGrid) {
  hosts.forEach(host => {
    const hostCard = document.createElement('div');
    hostCard.className = 'host-card';
    hostCard.innerHTML = `
      <img src="${host.logo}" alt="${host.name} Logo" class="host-logo" loading="lazy">
      <h3 class="host-name">${host.name}</h3>
      <p class="host-description">${host.description}</p>
      <a href="${host.url}" target="_blank" rel="noopener noreferrer" class="host-link">Learn more →</a>
    `;
    hostingGrid.appendChild(hostCard);
  });
}

// Form Validation
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
    
    // Get form values
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // Simple validation
    let isValid = true;
    
    if (formValues.firstName.length < 2) {
      document.getElementById('firstNameError').textContent = 'First name must be at least 2 characters.';
      isValid = false;
    }
    
    if (formValues.lastName.length < 2) {
      document.getElementById('lastNameError').textContent = 'Last name must be at least 2 characters.';
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }
    
    if (formValues.phone.length < 10) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
      isValid = false;
    }
    
    if (!formValues.service) {
      document.getElementById('serviceError').textContent = 'Please select a service.';
      isValid = false;
    }
    
    if (formValues.message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }
    
    if (!formValues.consent) {
      document.getElementById('consentError').textContent = 'You must agree to the terms.';
      isValid = false;
    }
    
    if (isValid) {
      // In a real-world scenario, you would send the form data to a server here
      // Since we're creating a static site, we'll just simulate a successful submission
      
      // Reset form
      contactForm.reset();
      
      // Show success message
      showToast('Message sent!', 'We\'ll get back to you as soon as possible.', 'success');
    }
  });
}

// Toast Notification
function showToast(title, message, type = 'success') {
  if (toast && toastTitle && toastMessage) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    toast.className = 'toast show';
    if (type === 'success') {
      toast.classList.add('toast-success');
    } else if (type === 'error') {
      toast.classList.add('toast-error');
    }
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      hideToast();
    }, 5000);
  }
}

function hideToast() {
  if (toast) {
    toast.className = 'toast';
  }
}

if (toastClose) {
  toastClose.addEventListener('click', hideToast);
}

// Window resize event for responsive adjustments
window.addEventListener('resize', updateSliderSize);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize on document load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial slider position
  updateSlidePosition();
  
  // Add scroll event to change header style on scroll
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow-md)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
        header.style.background = 'var(--white)';
      }
    });
  }
});
