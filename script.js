
  // NAV SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

  // HAMBURGER
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  // REVEAL ON SCROLL
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // MENU TABS
  function switchTab(btn) {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  // RESERVATION FORM
  function handleReservation(btn) {
    btn.textContent = '✓ Reservation Confirmed!';
    btn.style.background = '#7a8c6e';
    btn.style.color = '#f5f0e8';
    setTimeout(() => {
      btn.textContent = 'Confirm Reservation';
      btn.style.background = '';
      btn.style.color = '';
    }, 3500);
  }