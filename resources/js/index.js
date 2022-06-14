const mobileMenu = document.querySelector('.mobile-menu');
const burguer = document.querySelector('.hamburguer-menu');
const xmenu = document.querySelector('.x-mobile');
const menulist = document.querySelector('.link-1');
const menulist2 = document.querySelector('.link-2');
const menulist3 = document.querySelector('.link-3');

function close1() {
  mobileMenu.style.top = '-100%';
}

function close() {
  mobileMenu.style.top = '-100%';
}

function show() {
  mobileMenu.style.display = 'flex';
  mobileMenu.style.top = '0';
}

burguer.addEventListener('click', show);
xmenu.addEventListener('click', close);
menulist.addEventListener('click', close1);
menulist2.addEventListener('click', close1);
menulist3.addEventListener('click', close1);
