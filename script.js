document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const closeNav = document.querySelector('.close-nav');
  
  // Abrir menú
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('open');
    mainNav.classList.toggle('nav-open');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = 'hidden';
  });
  
  // Cerrar menú al hacer clic en el overlay
  navOverlay.addEventListener('click', function() {
    menuToggle.classList.remove('open');
    mainNav.classList.remove('nav-open');
    this.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Cerrar menú con el botón ×
  closeNav.addEventListener('click', function() {
    menuToggle.classList.remove('open');
    mainNav.classList.remove('nav-open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Cerrar menú al hacer clic en un enlace (opcional)
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        menuToggle.classList.remove('open');
        mainNav.classList.remove('nav-open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});