const doc = document;
const w = window;
export default function initTabMenu() {
  const tabMenu = doc.querySelectorAll('.js-tabmenu li');
  const tabContent = doc.querySelectorAll('.js-tabcontent section');
  //--------------
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(i) {
      tabContent.forEach((item) => {
        item.classList.remove('ativo');
      });
      tabContent[i].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {
        activeTab(index);
      });
    });
  }
}