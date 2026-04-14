/* ============================================
   INTERACTIVE FUNCTIONALITY
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeScrollAnimations();
  initializeCountUp();
  initializeMobileMenu();
  initializeCourseTabs();
});

/* ============================================
   NAVIGATION
   ============================================ */

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Close mobile menu if open
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
}
const departmentInfo = {
  computer: {
    title: 'B.E. Computer Engineering',
    link: 'https://vcet.edu.in/computer-engineering/',
    html: `<p>Established in 1999, the Department of Computer Engineering offers a 4-year B.E. program with an intake of 180 seats. The department is NBA accredited and permanently affiliated with the University of Mumbai. It emphasizes programming, database management, operating systems, web development, networking, artificial intelligence, machine learning, and deep learning.</p>
      <ul>
        <li>180-seat undergraduate program</li>
        <li>NBA accredited from 2012–2015 and reaccredited through 2025</li>
        <li>Strong focus on AI, ML, and cutting-edge software development</li>
        <li>Student chapters including CSI, CodeChef, and Microsoft Learn Students Club</li>
        <li>Industry exposure through internships, MoUs, and e-Yantra Robotics collaboration</li>
        <li>Research, IPR, newsletters, and student innovation activities</li>
      </ul>
      <p><a href="https://vcet.edu.in/computer-engineering/" target="_blank" rel="noopener" class="text-primary">View official VCET Computer Engineering page →</a></p>`
  },
  csds: {
    title: 'B.E. Computer Science & Engineering (Data Science)',
    link: 'https://vcet.edu.in/computer-science-and-engineering-data-science/',
    html: `<p>Started in 2019, the CSE-DS department offers a 4-year B.E. program with 180 seats. It focuses on transforming raw structured and unstructured data into meaningful insights using programming, analytics, and statistical modeling.</p>
      <ul>
        <li>180-seat program in Data Science</li>
        <li>Training in machine learning, big data, and data visualization</li>
        <li>Focus on data intuition, statistics, and programming skills</li>
        <li>Prepares students for roles such as Data Scientist, Data Analyst, and Data Engineer</li>
        <li>Emphasizes analytics tools, Python, R, Hadoop, and Spark</li>
        <li>Strong industry relevance and data-driven career preparation</li>
      </ul>
      <p><a href="https://vcet.edu.in/computer-science-and-engineering-data-science/" target="_blank" rel="noopener" class="text-primary">View official VCET CSE-DS page →</a></p>`
  },
  it: {
    title: 'B.E. Information Technology',
    link: 'https://vcet.edu.in/information-technology/',
    html: `<p>Established in 2000, the Department of Information Technology offers a 4-year B.E. program with 60 seats. It is NBA accredited from July 2022 to June 2025 and affiliated to the University of Mumbai.</p>
      <ul>
        <li>60-seat IT program</li>
        <li>Modern labs with high-speed internet, Wi-Fi, and licensed software</li>
        <li>Strong emphasis on software development, networking, and practical IT applications</li>
        <li>Focus on personality development through extra-curricular activities</li>
        <li>Experienced faculty with industry-institution interaction</li>
        <li>Prepares students for competitive IT roles and placement success</li>
      </ul>
      <p><a href="https://vcet.edu.in/information-technology/" target="_blank" rel="noopener" class="text-primary">View official VCET IT page →</a></p>`
  },
  ai: {
    title: 'B.E. Artificial Intelligence & Data Science',
    link: 'https://vcet.edu.in/artificial-intelligence-and-data-science/',
    html: `<p>Launched in 2020, the AI & DS department offers a 4-year B.E. program with 120 seats. It focuses on building skilled AI and data science professionals through modern pedagogy and research-centred learning.</p>
      <ul>
        <li>120-seat AI & DS program</li>
        <li>State-of-the-art software and modern teaching-learning facilities</li>
        <li>Emphasis on research, IPR, copyrights, and patents</li>
        <li>Outcome-based education and strong co-curricular support</li>
        <li>Student-driven activities, workshops, and chapter events</li>
        <li>Prepares graduates for AI and analytics careers in industry and research</li>
      </ul>
      <p><a href="https://vcet.edu.in/artificial-intelligence-and-data-science/" target="_blank" rel="noopener" class="text-primary">View official VCET AI & DS page →</a></p>`
  },
  mechanical: {
    title: 'B.E. Mechanical Engineering',
    link: 'https://vcet.edu.in/mechanical-engineering/',
    html: `<p>Established in 1994, the Mechanical Engineering department offers a 4-year B.E. program with 60 seats. It is NBA accredited and permanently affiliated with the University of Mumbai.</p>
      <ul>
        <li>60-seat mechanical program</li>
        <li>Strong labs and infrastructure with modern software tools</li>
        <li>Focus on design, thermal sciences, manufacturing, and renewable energy</li>
        <li>Hands-on projects like Formula Car, Quad Bike, Solar Car, and Aero design</li>
        <li>Active student chapters such as SAE, ISHRAE, and VMEA</li>
        <li>Industry internships, expert lectures, seminars, and consultancy support</li>
      </ul>
      <p><a href="https://vcet.edu.in/mechanical-engineering/" target="_blank" rel="noopener" class="text-primary">View official VCET Mechanical page →</a></p>`
  },
  electronics: {
    title: 'B.E. Electronics & Telecommunication Engineering',
    link: 'https://vcet.edu.in/electronics-and-telecommunication-engineering/',
    html: `<p>Established in 1994, the Electronics and Telecommunication Engineering department offers a 4-year B.E. program with 60 seats. It is NBA accredited and permanently affiliated to the University of Mumbai.</p>
      <ul>
        <li>60-seat EXTC program</li>
        <li>Focus on communication systems, digital signal processing, and embedded systems</li>
        <li>Texas Instruments supported labs and advanced electronics facilities</li>
        <li>Active IEEE and IETE student chapters for technical engagement</li>
        <li>Industry internships, projects, and regular industrial visits</li>
        <li>Strong placement support with national and international recruiters</li>
      </ul>
      <p><a href="https://vcet.edu.in/electronics-and-telecommunication-engineering/" target="_blank" rel="noopener" class="text-primary">View official VCET EXTC page →</a></p>`
  },
  civil: {
    title: 'B.E. Civil Engineering',
    link: 'https://vcet.edu.in/civil-engineering/',
    html: `<p>Established in 2013, the Civil Engineering department offers a 4-year B.E. program with 60 seats. It is designed to develop professional civil engineers with strong technical knowledge and industry skills.</p>
      <ul>
        <li>60-seat civil engineering program</li>
        <li>Industry collaborations, project showcases and VNPS participation</li>
        <li>Focus on technical, professional, and leadership skills</li>
        <li>Encourages participation in co-curricular and extra-curricular events</li>
        <li>Strong faculty guidance and practical learning opportunities</li>
      </ul>
      <p><a href="https://vcet.edu.in/civil-engineering/" target="_blank" rel="noopener" class="text-primary">View official VCET Civil page →</a></p>`
  },
  firstyear: {
    title: 'First Year Engineering',
    link: 'https://vcet.edu.in/first-year-engineering/',
    html: `<p>Established in 1994, the First Year Engineering department offers foundational training in Engineering Physics, Chemistry, Mathematics, and Professional Communication. It supports students across all VCET engineering branches.</p>
      <ul>
        <li>Core foundation for all branches including CSE-DS, IT, AI&DS, Mechanical, EXTC and Civil</li>
        <li>Mentoring and induction programs for new students</li>
        <li>State-of-the-art labs, workshops, and faculty support</li>
        <li>Focus on holistic student development and academic transition</li>
        <li>Programs include engineering basics, ethics, communication, and mathematics</li>
      </ul>
      <p><a href="https://vcet.edu.in/first-year-engineering/" target="_blank" rel="noopener" class="text-primary">View official VCET First Year page →</a></p>`
  }
};

/* ============================================
   MOBILE MENU
   ============================================ */

function initializeMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

function initializeCourseTabs() {
  const tabs = document.querySelectorAll('.course-tab');
  const panels = document.querySelectorAll('.tab-panel');

  if (tabs.length === 0 || panels.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;

      tabs.forEach(btn => btn.classList.toggle('active', btn === tab));
      panels.forEach(panel => panel.classList.toggle('active', panel.id === targetId));
    });
  });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe cards and stat elements
  document.querySelectorAll('.card, .stat, .achievement-item').forEach(el => {
    observer.observe(el);
  });
}

/* ============================================
   COUNT UP ANIMATION
   ============================================ */

function initializeCountUp() {
  const counters = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.hasAttribute('data-counted')) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-target')) || parseInt(target.innerText);
        
        target.setAttribute('data-counted', 'true');
        animateCounter(target, 0, finalValue, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, start, end, duration) {
  const range = end - start;
  const increment = end > 999 ? Math.ceil(range / (duration / 16)) : range / (duration / 16);
  let current = start;
  
  const interval = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(interval);
    }
    element.innerText = current.toLocaleString();
  }, 16);
}

/* ============================================
   FORM HANDLING
   ============================================ */

function initializeFormHandling() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ef4444';
          isValid = false;
        } else {
          input.style.borderColor = '';
        }
      });
      
      if (isValid) {
        showNotification('Form submitted successfully!', 'success');
        // Here you would typically send the form data to the server
        form.reset();
      } else {
        showNotification('Please fill all required fields', 'error');
      }
    });
  });
}

/* ============================================
   NOTIFICATIONS
   ============================================ */

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  const style = document.createElement('style');
  style.innerHTML = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 8px;
      font-weight: 500;
      z-index: 9999;
      animation: slideIn 0.3s ease-out;
      max-width: 400px;
    }
    
    .notification-success {
      background: #10b981;
      color: white;
    }
    
    .notification-error {
      background: #ef4444;
      color: white;
    }
    
    .notification-info {
      background: #3b82f6;
      color: white;
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

/* ============================================
   LAZY LOADING
   ============================================ */

function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }
}

initializeLazyLoading();
initializeFormHandling();

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle function
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func.apply(this, args);
      lastCall = now;
    }
  };
}
