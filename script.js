document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
      navMenu.classList.toggle('active');
      
      // Optional: Body scroll lock
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
// Add this inside your existing form submit handler
const feedback = document.querySelector('.form-feedback');
feedback.style.display = 'block';
feedback.textContent = 'Message sent successfully!';
feedback.style.color = 'var(--secondary)';

    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.dataset.filter;
        
        // Filter items
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.dataset.category === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Blog category filtering
    const blogFilters = document.querySelectorAll('.filter');
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        // Update active filter
        blogFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const filterValue = filter.textContent.trim();
        
        // Filter cards (simplified - in real implementation you'd need data attributes)
        if (filterValue === 'All Topics') {
          blogCards.forEach(card => card.style.display = 'block');
        } else {
          // This is a simplified version - you'd need to implement actual filtering logic
          console.log(`Filter by ${filterValue}`);
        }
      });
    });
    
    // Testimonial carousel (simplified version)
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
      });
    }
    
    // Initialize
    showTestimonial(0);
    
    // Auto-rotate (optional)
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        
        let isValid = true;
        
        // Simple validation
        if (!nameInput.value.trim()) {
          isValid = false;
          nameInput.style.borderColor = 'red';
        } else {
          nameInput.style.borderColor = '#ddd';
        }
        
        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
          isValid = false;
          emailInput.style.borderColor = 'red';
        } else {
          emailInput.style.borderColor = '#ddd';
        }
        
        if (!messageInput.value.trim()) {
          isValid = false;
          messageInput.style.borderColor = 'red';
        } else {
          messageInput.style.borderColor = '#ddd';
        }
        
        if (isValid) {
          // In a real implementation, you would send the form data to a server
          alert('Thank you for your message! I will get back to you soon.');
          this.reset();
        } else {
          alert('Please fill in all required fields correctly.');
        }
      });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate__animated');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          const animationClass = element.dataset.animation || 'fadeIn';
          element.classList.add(animationClass);
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Flip cards in services section
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    expertiseCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(0)';
      });
    });
