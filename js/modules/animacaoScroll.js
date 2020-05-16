const doc = document;
const w = window;
export function initAnimacaoScroll() {
  const sections = doc.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = w.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        }
      });
    }
    animaScroll();
    w.addEventListener('scroll', animaScroll);
  }
}