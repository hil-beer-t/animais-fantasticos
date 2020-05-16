const doc = document;
const w = window;
export default function initAccordion() {
  const accordionList = doc.querySelectorAll('.js-accordion dt');

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion(event) {

      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
      // var panel = this.nextElementSibling;
      // if (panel.style.maxHeight) {
      //   panel.style.maxHeight = null;
      // } else {
      //   panel.style.maxHeight = panel.scrollHeight + "px";
      // }

      // if (this.classList.contains('ativo')) {
      //   this.classList.remove('ativo');
      //   this.nextElementSibling.classList.remove('ativo');
      //   this.classList.add('desativo');
      //   this.nextElementSibling.classList.remove('desativo');
      // } else {
      //   this.classList.add('ativo');
      //   this.nextElementSibling.classList.add('ativo');
      //   //this = event.currentTarget faz referencia ao item
      // }
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}