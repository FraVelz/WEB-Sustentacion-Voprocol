// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.add('hidden');
  });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const button = this.querySelector('button');
  const originalText = button.textContent;

  button.textContent = '¡Mensaje Enviado!';
  button.classList.add('bg-green-600');
  button.classList.remove('bg-gradient-to-r', 'from-secondary', 'to-primary');

  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('bg-green-600');
    button.classList.add('bg-gradient-to-r', 'from-secondary', 'to-primary');
    this.reset();
  }, 3000);
});

// Smooth scroll active nav link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('text-accent');
        const href = link.getAttribute('href');
        if (href === '#' + section.id) {
          link.classList.add('text-accent');
        }
      });
    }
  });
});
