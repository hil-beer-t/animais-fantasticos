const doc = document;
const w = window;
export default function initDropdownMenu() {

}
const dropdownMenus = doc.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((menu) => {
  ['touchstart', 'click'].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
}