// Smooth scrolling on links and buttons
export default function smoothScroll() {
  // btn
  document.getElementById('learn-more')?.addEventListener('click', () => {
    document.getElementById('idea')?.scrollIntoView({
      behavior: 'smooth'
    });
  });

  const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav ul li a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // We prevent the instant jump

      const targetId = link.getAttribute('href')?.substring(1); // We remove the #
      const targetEl = targetId ? document.getElementById(targetId) : null;

      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
