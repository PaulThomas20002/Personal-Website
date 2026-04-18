/**
 * Paul Thomas PORTFOLIO — script.js
 * Loader, cursor, navbar, typed text, canvas particles,
 * scroll animations, counters, filter, form, theme toggle.
 */

'use strict';

/* ── Utility: debounce ── */
function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

/* ── 1. LOADER ── */
(function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 2200);
  });
  document.body.style.overflow = 'hidden';
})();

/* ── 2. CUSTOM CURSOR ── */
(function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  // Only on non-touch devices
  if (!window.matchMedia('(hover: hover)').matches) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Hover state
  const hoverTargets = document.querySelectorAll(
    'a, button, .project-card, .filter-tab, .skill-pill, .social-btn, .timeline-card'
  );
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ── 3. NAVBAR: scroll & active ── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu= document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!navbar) return;

  // Sticky style on scroll
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link based on scroll position
  function highlightActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  }

  // Hamburger menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.classList.toggle('show', isOpen);
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('show');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('show');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }
})();

/* ── 4. THEME TOGGLE ── */
(function initTheme() {
  const toggle  = document.getElementById('theme-toggle');
  const icon    = document.getElementById('theme-icon');
  const html    = document.documentElement;

  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }
})();

/* ── 5. HERO CANVAS: floating particles ── */
(function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animFrame;

  const COLORS = ['rgba(91,138,245,', 'rgba(167,139,250,', 'rgba(52,211,153,'];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  function initParticles() {
    resize();
    const count = Math.min(140, Math.floor((W * H) / 8000));
    particles = Array.from({ length: count }, randomParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(91,138,245,${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });

    animFrame = requestAnimationFrame(draw);
  }

  initParticles();
  draw();

  const onResize = debounce(() => {
    cancelAnimationFrame(animFrame);
    initParticles();
    draw();
  }, 300);

  window.addEventListener('resize', onResize);
})();

/* ── 6. TYPED TEXT EFFECT ── */
(function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const words = [
    'Web Experiences',
    'React Applications',
    'Scalable APIs',
    'Beautiful UIs',
    'Full-Stack Solutions',
    'Open Source Tools',
  ];

  let wordIdx = 0, charIdx = 0, deleting = false;
  const typeSpeed   = 80;
  const deleteSpeed = 45;
  const pauseAfter  = 1800;
  const pauseBefore = 300;

  function type() {
    const word = words[wordIdx];

    if (!deleting) {
      el.textContent = word.slice(0, ++charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(type, pauseAfter);
        return;
      }
      setTimeout(type, typeSpeed);
    } else {
      el.textContent = word.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx  = (wordIdx + 1) % words.length;
        setTimeout(type, pauseBefore);
        return;
      }
      setTimeout(type, deleteSpeed);
    }
  }

  // Start after loader
  setTimeout(type, 2600);
})();

/* ── 7. SCROLL ANIMATIONS (IntersectionObserver) ── */
(function initReveal() {
  const targets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Trigger proficiency bars when about section reveals
        if (entry.target.classList.contains('reveal-right')) {
          const bars = entry.target.querySelectorAll('.prof-fill');
          bars.forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => observer.observe(el));
})();

/* ── 8. COUNTER ANIMATION ── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  let started = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.count, 10);
          let current = 0;
          const step  = Math.ceil(target / 40);
          const tick  = () => {
            current = Math.min(current + step, target);
            counter.textContent = current;
            if (current < target) requestAnimationFrame(tick);
          };
          setTimeout(tick, 2600); // after loader
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);
})();

/* ── 9. PROJECT FILTER ── */
(function initFilter() {
  const tabs  = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.project-card');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Active tab
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;

        if (show) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = '';
            card.style.pointerEvents = '';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.92)';
          card.style.pointerEvents = 'none';
          setTimeout(() => {
            if (card.style.opacity === '0') card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Add transition to cards
  cards.forEach(card => {
    card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
  });
})();

/* ── 10. CONTACT FORM ── */
(function initForm() {
  const sendBtn    = document.getElementById('send-btn');
  const formInner  = document.getElementById('contact-form-inner');
  const formSuccess= document.getElementById('form-success');

  if (!sendBtn) return;

  sendBtn.addEventListener('click', () => {
    // Gather fields
    const name    = document.getElementById('name');
    const email   = document.getElementById('email');
    const message = document.getElementById('message');

    // Simple validation
    let valid = true;

    [name, email, message].forEach(field => {
      if (!field) return;
      if (!field.value.trim()) {
        field.style.borderColor = '#f87171';
        valid = false;
        field.addEventListener('input', () => {
          field.style.borderColor = '';
        }, { once: true });
      }
    });

    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#f87171';
      valid = false;
    }

    if (!valid) return;

    // Loading state
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

    // Simulate API call
    setTimeout(() => {
      if (formInner)  formInner.style.display = 'none';
      if (formSuccess) {
        formSuccess.removeAttribute('hidden');
        formSuccess.style.display = 'flex';
      }
    }, 1600);
  });
})();

/* ── 11. TILT EFFECT on project cards ── */
(function initTilt() {
  const cards = document.querySelectorAll('.project-card');

  if (!window.matchMedia('(hover: hover)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      const tiltX =  dy * 6;  // degrees
      const tiltY = -dx * 6;

      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ── 12. SMOOTH SCROLL for anchor links ── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();

/* ── 13. PROFICIENCY BARS (fallback for sticky about) ── */
(function initProfBars() {
  const bars = document.querySelectorAll('.prof-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
})();

/* ── 14. KEYBOARD ACCESSIBILITY: project cards ── */
(function initCardA11y() {
  document.querySelectorAll('.project-card[tabindex="0"]').forEach(card => {
    card.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        const primary = card.querySelector('.link-btn.primary');
        if (primary) primary.click();
      }
    });
  });
})();

/* ── 15. RIPPLE on buttons ── */
(function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect   = btn.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height) * 2;
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;
        left:${x}px; top:${y}px;
        width:${size}px; height:${size}px;
        background: rgba(255,255,255,0.15);
        border-radius:50%;
        transform:scale(0);
        animation:rippleAnim 0.55s linear;
        pointer-events:none;
      `;

      // Inject ripple keyframes once
      if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
          @keyframes rippleAnim {
            to { transform: scale(1); opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }

      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
})();

/* ── 16. HERO section: mouse parallax on orbs ── */
(function initParallaxOrbs() {
  const hero = document.getElementById('hero');
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');

  if (!hero || !orb1 || !orb2) return;
  if (!window.matchMedia('(hover: hover)').matches) return;

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width  - 0.5;
    const yPct = (e.clientY - rect.top)  / rect.height - 0.5;

    orb1.style.transform = `translate(${xPct * 30}px, ${yPct * 20}px)`;
    orb2.style.transform = `translate(${-xPct * 20}px, ${-yPct * 30}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    orb1.style.transform = '';
    orb2.style.transform = '';
  });
})();

console.log('%cPaul Thomas Portfolio', 'font-family:monospace;font-size:1.2rem;color:#5b8af5;font-weight:bold;');
console.log('%cBuilt with care. Let\'s connect! paul@example.com', 'color:#9aaac8;font-size:0.85rem;');
