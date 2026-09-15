/**
 * Hi-tech Dental Hospital - Main JavaScript
 * Handles: WhatsApp widget, mobile menu, forms, dynamic features
 * Respects prefers-reduced-motion for accessibility
 */

// Check if animations should be reduced
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// WhatsApp configuration
const WHATSAPP_NUMBER = '918462318437';
const WHATSAPP_MESSAGE = 'Hello, I would like to book an appointment at Hi-tech Dental Hospital.';

/**
 * Initialize WhatsApp floating widget
 */
function initWhatsAppWidget() {
  if (document.querySelector('.whatsapp-float')) return;

  const link = document.createElement('a');
  link.className = 'whatsapp-float';
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Chat with us on WhatsApp');

  const bubble = document.createElement('span');
  bubble.className = 'whatsapp-float__bubble';
  bubble.textContent = 'Chat on WhatsApp';

  const btn = document.createElement('span');
  btn.className = 'whatsapp-float__btn';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.011 2.906a9.825 9.825 0 012.893 7.038c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  link.append(bubble, btn);
  document.body.appendChild(link);
}

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (!toggle || !nav) return;

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:999;opacity:0;pointer-events:none;transition:opacity 0.3s';
  document.body.appendChild(overlay);

  function closeNav() {
    nav?.classList.remove('open');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    overlay.style.opacity = isOpen ? '1' : '0';
    overlay.style.pointerEvents = isOpen ? 'auto' : 'none';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
}

/**
 * Form handling with thank-you feedback
 */
function initFormHandling() {
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Thank you! We will contact you soon.';
      btn.disabled = true;
      btn.style.background = '#00A651';
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  });
}

/**
 * Hero image slider/crossfade
 */
function initHeroSlider() {
  const heroContainer = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');
  
  if (!heroContainer || !heroBg || prefersReducedMotion) return;

  // Hero images from config or fallback
  const images = [
    'assets/images/hero-clinic.jpg',
    'assets/images/about-clinic.jpg',
    'assets/images/about-dentist.jpg'
  ];

  let currentIndex = 0;

  function changeHeroImage() {
    currentIndex = (currentIndex + 1) % images.length;
    heroBg.style.backgroundImage = `url('${images[currentIndex]}')`;
  }

  // Change image every 5 seconds
  setInterval(changeHeroImage, 5000);
}

/**
 * Testimonial rotation
 */
function initTestimonialRotation() {
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  if (!testimonialsGrid || prefersReducedMotion) return;

  const testimonials = Array.from(testimonialsGrid.children);
  if (testimonials.length <= 3) return; // No need to rotate if 3 or fewer

  let currentSet = 0;
  const itemsToShow = window.innerWidth >= 900 ? 3 : 1;

  function rotateTestimonials() {
    testimonials.forEach(t => t.style.display = 'none');
    
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSet * itemsToShow + i) % testimonials.length;
      testimonials[index].style.display = 'block';
    }
    
    currentSet = (currentSet + 1) % Math.ceil(testimonials.length / itemsToShow);
  }

  rotateTestimonials(); // Initial display
  setInterval(rotateTestimonials, 8000); // Rotate every 8 seconds
}

/**
 * FAQ accordion functionality
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item, index) => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('p');
    
    if (!question || !answer) return;

    // Wrap for better control
    const wrapper = document.createElement('div');
    wrapper.className = 'faq-answer-wrapper';
    answer.parentNode.insertBefore(wrapper, answer);
    wrapper.appendChild(answer);

    // Start collapsed except first one
    if (index !== 0) {
      wrapper.style.maxHeight = '0';
      wrapper.style.overflow = 'hidden';
      wrapper.style.transition = 'max-height 0.3s ease';
      item.classList.add('collapsed');
    } else {
      wrapper.style.maxHeight = answer.scrollHeight + 'px';
      item.classList.add('expanded');
    }

    // Make question clickable
    question.style.cursor = 'pointer';
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    question.setAttribute('tabindex', '0');

    // Add toggle icon
    const icon = document.createElement('span');
    icon.className = 'faq-icon';
    icon.textContent = index === 0 ? '−' : '+';
    icon.style.cssText = 'float:right;font-size:1.5rem;font-weight:bold;color:var(--purple);';
    question.appendChild(icon);

    function toggle() {
      const isExpanded = item.classList.contains('expanded');
      
      if (isExpanded) {
        wrapper.style.maxHeight = '0';
        item.classList.remove('expanded');
        item.classList.add('collapsed');
        icon.textContent = '+';
        question.setAttribute('aria-expanded', 'false');
      } else {
        wrapper.style.maxHeight = answer.scrollHeight + 'px';
        item.classList.remove('collapsed');
        item.classList.add('expanded');
        icon.textContent = '−';
        question.setAttribute('aria-expanded', 'true');
      }
    }

    question.addEventListener('click', toggle);
    question.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
  if (prefersReducedMotion) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe only smaller elements for fade-in effect (NOT large content containers like .section)
  const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .doctor-card, .feature-item, .benefit-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Failsafe: force visibility after 500ms to prevent blank pages if observer doesn't fire
  setTimeout(() => {
    animatedElements.forEach(el => {
      if (!el.classList.contains('animate-in')) {
        el.classList.add('animate-in');
      }
    });
  }, 500);

  // Add animation class styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Animated stat counters
 */
function initStatCounters() {
  if (prefersReducedMotion) return;

  const statsRow = document.querySelector('.stats-row');
  if (!statsRow) return;

  const stats = statsRow.querySelectorAll('.stat strong');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        stats.forEach(stat => {
          const text = stat.textContent;
          const match = text.match(/(\d+)/);
          if (match) {
            const target = parseInt(match[1]);
            animateCounter(stat, 0, target, 2000);
          }
        });
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsRow);
}

function animateCounter(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  const suffix = element.textContent.replace(/\d+/g, '').trim();

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 16);
}

/**
 * Sticky mobile CTA
 */
function initStickyCTA() {
  if (window.innerWidth > 768) return; // Desktop only shows regular nav CTA

  const stickyCTA = document.createElement('div');
  stickyCTA.className = 'sticky-mobile-cta';
  stickyCTA.innerHTML = `
    <a href="contact.html" class="btn btn-primary">📅 Book Appointment</a>
  `;
  stickyCTA.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 16px;
    right: 16px;
    z-index: 900;
    padding: 12px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(102, 45, 145, 0.2);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
  `;

  document.body.appendChild(stickyCTA);

  // Show when scrolled past hero
  let hasShown = false;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400 && !hasShown) {
      stickyCTA.style.opacity = '1';
      stickyCTA.style.transform = 'translateY(0)';
      stickyCTA.style.pointerEvents = 'auto';
      hasShown = true;
    } else if (window.scrollY <= 400 && hasShown) {
      stickyCTA.style.opacity = '0';
      stickyCTA.style.transform = 'translateY(20px)';
      stickyCTA.style.pointerEvents = 'none';
      hasShown = false;
    }
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Lazy load images
 */
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.src = img.src; // Trigger loading
    });
  } else {
    // Fallback for older browsers
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Initialize all features when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppWidget();
  initMobileMenu();
  initFormHandling();
  initHeroSlider();
  initTestimonialRotation();
  initFAQAccordion();
  initScrollAnimations();
  initStatCounters();
  initStickyCTA();
  initSmoothScroll();
  initLazyLoading();
});

// Export for testing if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initWhatsAppWidget,
    initMobileMenu,
    initFormHandling
  };
}
