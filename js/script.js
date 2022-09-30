
const header = document.querySelector(".header");

console.log(header)

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add('header--hidden');
    lastScrollY = window.scrollY;
  } else {
    header.classList.remove('header--hidden');
    lastScrollY = window.scrollY;
  }


});