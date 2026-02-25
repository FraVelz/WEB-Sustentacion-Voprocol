// Form submission
export default function formSubmission() {
  let contactForm = document.getElementById('contactForm') as HTMLFormElement
  if (!contactForm) return

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const button = this.querySelector('button');
    if (!button) return

    const originalText = button.textContent;

    button.textContent = '¡Mensaje Enviado!';
    button.classList.add('bg-green-600');
    button.classList.remove('bg-gradient-to-r', 'from-secondary', 'to-primary');

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('bg-green-600');
      button.classList.add('bg-gradient-to-r', 'from-secondary', 'to-primary');
      if (this) {
        contactForm.reset();
      }
    }, 3000);
  });
}

