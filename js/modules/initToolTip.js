const doc = document;
const w = window;
export default function initTooltip() {
  const toolTip = doc.querySelectorAll('[data-tooltip]');

  toolTip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });

  function onMouseOver(event) {
    const toolTipBox = criarToolTipBox(this);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + 'px';
      this.toolTipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  function criarToolTipBox(element) {
    const toolTipBox = doc.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    doc.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}