document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // AOS (Animate on Scroll) setup
  // Converting all .fade-in elements to use AOS for Framer Motion-like smoothness
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    // Keep custom transition delay if it has one, otherwise map it to AOS delay
    const delay = element.style.transitionDelay;
    if (delay) {
      const delayMs = parseFloat(delay) * 1000;
      element.setAttribute('data-aos-delay', delayMs);
      element.style.transitionDelay = ''; // Clear inline so AOS can handle it
    }
    
    element.classList.remove('fade-in'); // Remove custom class
    element.setAttribute('data-aos', 'fade-up');
  });

  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
