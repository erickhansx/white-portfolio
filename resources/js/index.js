const mobileMenu = document.querySelector(".mobile-menu");
const burguer = document.querySelector(".hamburguer-menu");
const xmenu = document.querySelector(".x-mobile");
burguer.addEventListener("click", show);
xmenu.addEventListener("click", close);
function close() {
  mobileMenu.style.top = "-100%";
}
function show() {
  mobileMenu.style.display = "block";
}