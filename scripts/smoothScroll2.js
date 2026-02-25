// Smooth scroll
export default function smoothScroll2() {
    document.getElementById('learn-more')?.addEventListener('click', () => {
        document.getElementById('idea')?.scrollIntoView({
            behavior: 'smooth'
        });
    });
}
//# sourceMappingURL=smoothScroll2.js.map