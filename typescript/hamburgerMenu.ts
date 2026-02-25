
// Hamburger menu
export default function hamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.add('hidden');
    });
  });
}
