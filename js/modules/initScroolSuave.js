const doc = document;
const w = window;
export default function initScroolSuave() {

  const linksInternos = doc.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    console.log(href);
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      // block: 'start',
    });

    // forma 1
    // const topo = section.offsetTop;
    // w.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}