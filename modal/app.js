let btnApr = document.querySelector('.btn-apr');
let modal = document.querySelector('.modal');
let btnClose = document.querySelector('.btn-close');

btnApr.addEventListener('click', () => modal.showModal());
btnClose.addEventListener('click', () => modal.close());

const openMenu = document.querySelector('.nav-icon-open');
const closeMenu = document.querySelector('.nav-icon-close');
const nav = document.querySelector('nav');

openMenu.addEventListener('click', () => {
  nav.setAttribute('data-nav-opened', 'true');
});
closeMenu.addEventListener('click', () => {
  nav.setAttribute('data-nav-opened', 'false');
  //   nav.toggleAttribute('data-nav-opened', 'true' ? 'false');
});
