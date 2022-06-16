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

// Inner HTML

const worksSection = document.querySelector('.works');
worksSection.innerHTML = `<article class="works__tonic-mps">
<div class="works__image-container--1"></div>
<div class="works__text-container">
  <h3 class="works__heading">Tonic</h3>
  <ul class="works__list--1">
    <li class="canopy">Canopy</li>
    <li><span class="dot"></span></li>
    <li>Back End Dev</li>
    <li><span class="dot"></span></li>
    <li>2015</li>
  </ul>
  <p class="works__paragraph">
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
  </p>
  <ul class="works__list--2">
    <li class="works__list--2-item">html</li>
    <li class="works__list--2-item">css</li>
    <li class="works__list--2-item">javaScript</li>
  </ul>
  <div class="btn btn1">
    <a class="btn-primary works__btn" href="#">See Project</a>
  </div>
</div>
</article>
<article class="works__tonic-mps">
<div class="works__image-container--2"></div>
<div class="works__text-container">
  <h3 class="works__heading">Multi-Post Stories</h3>
  <ul class="works__list--1">
    <li class="canopy">Canopy</li>
    <li><span class="dot"></span></li>
    <li>Back End Dev</li>
    <li><span class="dot"></span></li>
    <li>2015</li>
  </ul>
  <p class="works__paragraph">
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
  </p>
  <ul class="works__list--2">
    <li class="works__list--2-item">html</li>
    <li class="works__list--2-item">css</li>
    <li class="works__list--2-item">javaScript</li>
  </ul>
  <div class="btn btn2">
    <a class="btn-primary works__btn" href="#">See Project</a>
  </div>
</div>
</article>
<article class="works__tonic-mps">
<div class="works__image-container--3"></div>
<div class="works__text-container">
  <h3 class="works__heading">Tonic</h3>
  <ul class="works__list--1">
    <li class="canopy">Canopy</li>
    <li><span class="dot"></span></li>
    <li>Back End Dev</li>
    <li><span class="dot"></span></li>
    <li>2015</li>
  </ul>
  <p class="works__paragraph">
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
  </p>
  <ul class="works__list--2">
    <li class="works__list--2-item">html</li>
    <li class="works__list--2-item">css</li>
    <li class="works__list--2-item">javaScript</li>
  </ul>
  <div class="btn btn3">
    <a class="btn-primary works__btn" href="#">See Project</a>
  </div>
</div>
</article>
<article class="works__tonic-mps">
<div class="works__image-container--4"></div>
<div class="works__text-container">
  <h3 class="works__heading">Multi-Post Stories</h3>
  <ul class="works__list--1">
    <li class="canopy">Canopy</li>
    <li><span class="dot"></span></li>
    <li>Back End Dev</li>
    <li><span class="dot"></span></li>
    <li>2015</li>
  </ul>
  <p class="works__paragraph">
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
  </p>
  <ul class="works__list--2">
    <li class="works__list--2-item">html</li>
    <li class="works__list--2-item">css</li>
    <li class="works__list--2-item">javaScript</li>
  </ul>
  <div class="btn btn4">
    <a class="btn-primary works__btn" href="#">See Project</a>
  </div>
</div>
</article>`;

// Modal Window

const worksInfo = [
  {
    title: 'Tonic',
    list: ['Canopy', 'Back End Dev', '2015'],
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project1.svg',
    urlLive: 'https://github.com/erickhansx',
    urlSource: 'https://github.com/erickhansx/white-portfolio',
  },
  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back End Dev', '2015'],
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project2.png',
    urlLive: 'https://github.com/erickhansx',
    urlSource: 'https://github.com/erickhansx/white-portfolio',
  },
  {
    title: 'Tonic',
    list: ['Canopy', 'Back End Dev', '2015'],
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project3.png',
    urlLive: 'https://github.com/erickhansx',
    urlSource: 'https://github.com/erickhansx/white-portfolio',
  },
  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back End Dev', '2015'],
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: ['html', 'css', 'javaScript'],
    button: 'See Project',
    image: './resources/img/project4.png',
    urlLive: 'https://github.com/erickhansx',
    urlSource: 'https://github.com/erickhansx/white-portfolio',
  },
];

const openPopup = document.querySelector('.btn1');
const openPopup2 = document.querySelector('.btn2');
const openPopup3 = document.querySelector('.btn3');
const openPopup4 = document.querySelector('.btn4');
const body = document.querySelector('body');

function openBtn(num) {
  const cardPopupOverlay = document.createElement('div');
  cardPopupOverlay.classList.add('cardoverlay');
  const cardPopup = document.createElement('div');
  document.body.appendChild(cardPopup);
  cardPopup.classList.add('cardPopup');
  const cardHeader = document.createElement('h3');
  cardHeader.classList.add('works__heading', 'popupheading');
  const cardList = document.createElement('ul');
  cardList.classList.add('cardlist');
  const cardTop = document.createElement('div');
  cardTop.classList.add('cardtop');
  cardTop.append(cardHeader, cardList);
  const cardImage = document.createElement('img');
  cardImage.classList.add('cardimage');
  const cardText = document.createElement('p');
  cardText.classList.add('works__paragraph', 'popup-paragraph');
  const cardWorksList = document.createElement('ul');
  cardWorksList.classList.add('cardworkslist');
  const cardButtonDiv = document.createElement('div');
  cardButtonDiv.classList.add('cardbuttondiv');
  const cardButtonLive = document.createElement('a');
  cardButtonLive.classList.add('btn-live');
  cardButtonLive.innerHTML = 'See Live';
  const cardButtonImg = document.createElement('img');
  cardButtonImg.classList.add('livebtnimg');
  cardButtonImg.setAttribute('src', 'resources/img/export.svg');
  cardButtonLive.appendChild(cardButtonImg);
  const cardButtonSource = document.createElement('a');
  cardButtonSource.classList.add('btn-source');
  cardButtonSource.innerHTML = 'See Source';
  const cardButtonImg2 = document.createElement('img');
  cardButtonImg2.classList.add('sourcebtnimg');
  cardButtonImg2.setAttribute('src', 'resources/img/gitbutton.svg');
  cardButtonSource.appendChild(cardButtonImg2);
  const cardWorksButtons = document.createElement('div');
  cardWorksButtons.classList.add('cardworksbuttons');
  cardWorksButtons.append(cardWorksList, cardButtonDiv);
  const xContainer = document.createElement('div');
  const cardXButton = document.createElement('a');
  cardXButton.innerHTML = '&times;';
  cardXButton.classList.add('close');

  cardPopup.append(
    cardTop,
    xContainer,
    cardXButton,
    cardImage,
    cardText,
    cardWorksButtons
  );

  xContainer.appendChild(cardXButton);
  cardPopupOverlay.appendChild(cardPopup);
  cardButtonDiv.append(cardButtonLive, cardButtonSource);
  body.appendChild(cardPopupOverlay);

  cardHeader.textContent = worksInfo[num].title;
  cardImage.src = worksInfo[num].image;
  cardText.textContent = worksInfo[num].paragraph;
  cardButtonLive.href = worksInfo[num].urlLive;
  cardButtonSource.href = worksInfo[num].urlSource;
 
  let childNode;
  for (let i = 0; i < worksInfo[num].list.length; i += 1) {
    childNode = document.createElement('li');
    childNode.innerHTML = worksInfo[num].list[i];
    cardList.append(childNode);
  }
  for (let i = 0; i < worksInfo[num].languages.length; i += 1) {
    childNode = document.createElement('li');
    childNode.innerHTML = worksInfo[num].languages[i];
    cardWorksList.append(childNode);
  }

  const closePopup = document.querySelector('.close');

  closePopup.addEventListener('click', () => {
    body.removeChild(cardPopupOverlay);
  });
}

openPopup.addEventListener('click', () => {
  openBtn(0);
});

openPopup2.addEventListener('click', () => {
  openBtn(1);
});

openPopup3.addEventListener('click', () => {
  openBtn(2);
});

openPopup4.addEventListener('click', () => {
  openBtn(3);
});
