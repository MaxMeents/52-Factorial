// Floating card suits in background
(function spawnCards() {
  const field = document.querySelector('.card-field');
  const suits = ['♠', '♣', '♥', '♦', '🂡', '🂮', '🂽', '🃋', '🃎', '🂱'];
  const redSuits = new Set(['♥', '♦']);
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const suit = suits[Math.floor(Math.random() * suits.length)];
    el.className = 'floating-card' + (redSuits.has(suit) ? ' red' : '');
    el.textContent = suit;
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (24 + Math.random() * 48) + 'px';
    const duration = 25 + Math.random() * 40;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = (-Math.random() * duration) + 's';
    field.appendChild(el);
  }
})();

// Reveal steps on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.step').forEach(el => io.observe(el));
