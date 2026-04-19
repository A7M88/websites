const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const year = document.getElementById('year');
const offerBtn = document.getElementById('offer-btn');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});

year.textContent = new Date().getFullYear();

offerBtn?.addEventListener('click', () => {
  offerBtn.textContent = 'Offer Added ✓';
  offerBtn.disabled = true;
});
