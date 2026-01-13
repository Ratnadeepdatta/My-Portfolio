// ---------------- HEADER ----------------
// const header = document.getElementById('header');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 20) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

const header = document.getElementById("header");
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      header.classList.toggle("scrolled", window.scrollY > 20);
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ---------------- MENU TOGGLE ----------------
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
});