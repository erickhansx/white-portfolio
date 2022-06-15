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

// Modal Window

let worksInfo = [
  {
    title: 'Tonic',
    list: ['Canopy', 'Back End Dev', '2015'],
    Paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project1.png',
  },
  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back End Dev', '2015'],
    Paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project2.png',
  },
  {
    title: 'Tonic',
    list: ['Canopy', 'Back End Dev', '2015'],
    Paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project3.png',
  },
  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back End Dev', '2015'],
    Paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project4.png',
  },
];
