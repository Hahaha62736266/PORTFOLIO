/**
 * ===================================================================
 * PORTFOLIO JAVASCRIPT LOGIC & INTERACTIONS
 * Client: CHRISTIAN DAVE OBIASADA
 * Specialization: Software Development
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initProjectFiltering();
  initContactForm();
  initBackToTop();
  initModalViewer();
});

/* -------------------------------------------------------------------
   1. NAVBAR SCROLL EFFECT
   ------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------------
   2. MOBILE NAVIGATION HAMBURGER MENU
   ------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileNav) return;

  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !hamburger.classList.contains('is-active');
    hamburger.classList.toggle('is-active', shouldOpen);
    mobileNav.classList.toggle('is-open', shouldOpen);
    hamburger.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  };

  hamburger.addEventListener('click', () => toggleMenu());

  // Close mobile menu when clicking any nav item
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbarContains(e.target) && mobileNav.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });

  function navbarContains(target) {
    const nav = document.querySelector('.navbar');
    return (nav && nav.contains(target)) || (mobileNav && mobileNav.contains(target));
  }
}

/* -------------------------------------------------------------------
   3. SCROLLSPY / ACTIVE NAV LINK HIGHLIGHT
   ------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-menu .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveNav(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  function updateActiveNav(activeId) {
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/* -------------------------------------------------------------------
   4. SCROLL REVEAL ANIMATIONS
   ------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* -------------------------------------------------------------------
   5. PROJECT CATEGORY FILTERING
   ------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button style
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* -------------------------------------------------------------------
   6. CONTACT FORM VALIDATION & FEEDBACK
   ------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Real-time error clearance on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (!field) return;
    field.addEventListener('input', () => {
      field.classList.remove('is-invalid');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput);
      isValid = false;
    }

    // Validate Email
    const emailVal = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      showError(emailInput);
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput);
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
      showError(messageInput);
      isValid = false;
    }

    if (!isValid) {
      displayAlert('Please check the highlighted fields and provide valid information.', 'error');
      return;
    }

    // Display sending state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      Sending...
    `;

    // Simulate reliable front-end submission feedback
    setTimeout(() => {
      displayAlert(`Thank you, ${nameInput.value.trim()}! Your message has been sent successfully. I will get back to you soon.`, 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Auto-hide alert after 8 seconds
      setTimeout(() => {
        if (alertBox) alertBox.style.display = 'none';
      }, 8000);
    }, 900);
  });

  function showError(input) {
    input.classList.add('is-invalid');
    input.focus();
  }

  function displayAlert(message, type) {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `form-status-alert ${type}`;
    alertBox.style.display = 'flex';
  }
}

/* -------------------------------------------------------------------
   7. BACK TO TOP BUTTON
   ------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* -------------------------------------------------------------------
   8. MODAL / LIGHTBOX VIEWER
   ------------------------------------------------------------------- */
function initModalViewer() {
  const modalBackdrop = document.getElementById('info-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop || !modalBody || !closeBtn) return;

  const closeModal = () => {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  const openModal = (htmlContent) => {
    modalBody.innerHTML = htmlContent;
    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  closeBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Attach modal trigger for "View Project" buttons
  const viewProjectBtns = document.querySelectorAll('.js-view-project');
  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.project-card');
      if (!card) return;

      const title = card.querySelector('.project-title')?.textContent || 'Project Details';
      const category = card.querySelector('.project-category-badge')?.textContent || '';
      const desc = card.querySelector('.project-desc')?.textContent || '';
      const tags = card.querySelector('.project-tech-tags')?.innerHTML || '';
      const img = card.querySelector('.project-img')?.getAttribute('src') || '';

      const modalContent = `
        <div style="margin-bottom: 20px;">
          <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--accent);">${category}</span>
          <h2 style="font-size: 1.6rem; color: var(--text-main); margin-top: 4px; margin-bottom: 14px;">${title}</h2>
          <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
            <img src="${img}" alt="${title}" style="width: 100%; height: auto; display: block;" />
          </div>
          <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 8px;">About the Project</h4>
          <p style="font-size: 0.98rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px;">${desc}</p>
          <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 10px;">Technologies Utilized</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">${tags}</div>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="#contact" onclick="document.getElementById('modal-close-btn').click();" class="btn btn-primary" style="flex: 1;">
              Inquire About Project
            </a>
            <button onclick="document.getElementById('modal-close-btn').click();" class="btn btn-outline" style="flex: 1;">
              Close Details
            </button>
          </div>
        </div>
      `;
      openModal(modalContent);
    });
  });

  // Attach modal trigger for "View Certificate" buttons
  const viewCertBtns = document.querySelectorAll('.js-view-cert');
  viewCertBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.achievement-card');
      if (!card) return;

      const title = card.querySelector('.achieve-title')?.textContent || 'Certificate';
      const desc = card.querySelector('.achieve-desc')?.textContent || '';
      const certImg = card.querySelector('.cert-preview-img')?.getAttribute('src') || 'images/certificates/certificate-sample.jpg';

      const modalContent = `
        <div style="text-align: center;">
          <h2 style="font-size: 1.5rem; color: var(--text-main); margin-bottom: 8px;">${title}</h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 20px;">${desc}</p>
          <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
            <img src="${certImg}" alt="${title}" style="width: 100%; height: auto; display: block;" />
          </div>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <a href="${certImg}" download="Certificate-${encodeURIComponent(title)}.jpg" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Certificate
            </a>
            <button onclick="document.getElementById('modal-close-btn').click();" class="btn btn-outline">Close</button>
          </div>
        </div>
      `;
      openModal(modalContent);
    });
  });
}
