const doc = document;
const w = window;

export default function initModal() {
  const botaoAbrir = doc.querySelector('[data-modal="abrir"]')
  const botaoFechar = doc.querySelector('[data-modal="fechar"]')
  const containerModal = doc.querySelector('[data-modal="container"]')

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
      console.log(event);
    }
    function clickFora(event) {
      if (event.target === this)
        toggleModal(event);
    }

    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickFora);
  }
}
