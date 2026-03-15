// ===== ハンバーガーメニュー =====
document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menuToggle');
  var navMenu = document.getElementById('navMenu');
  var menuOverlay = document.getElementById('menuOverlay');

  if (!menuToggle || !navMenu || !menuOverlay) return;

  function toggleMenu() {
    var isOpen = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuOverlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    menuOverlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    menuOverlay.style.pointerEvents = isOpen ? 'auto' : 'none';
  }

  menuToggle.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('active')) toggleMenu();
    });
  });

  // ===== Hero slider（index.htmlのみ動作）=====
  var slides = document.querySelectorAll('.hero-slider .hero-slide');
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('is-active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('is-active');
    }, 4500);
  }
});

// ===== スクロールフェードイン =====
const fadeEls = document.querySelectorAll('.fade-hidden');
if (fadeEls.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('is-visible');
        observer.unobserve(el.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
}