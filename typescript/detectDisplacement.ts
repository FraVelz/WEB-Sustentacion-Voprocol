// indicates the navigation link when scrolling in its section
export default function detectDisplacement() {
  const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
  const nav = document.querySelectorAll('nav a')

  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        nav.forEach(link => {
          link.classList.remove('text-accent');
          const href = link.getAttribute('href');
          if (href === '#' + section.id) {
            link.classList.add('text-accent');
          }
        });
      }
    });
  });
}
