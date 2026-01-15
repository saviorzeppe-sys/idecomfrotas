const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const toggle = document.getElementById('menu-toggle');
  

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

 const carrossel = document.getElementById('carrossel');
let scrollValor = 0;

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) { // só em telas pequenas
      navMenu.classList.remove('show');
    }
  });
});

function moverSlide(direcao) {
  const slideWidth = carrossel.querySelector('.slide').offsetWidth + 20; // inclui margem
  scrollValor += direcao * slideWidth;
  carrossel.scrollTo({
    left: scrollValor,
    behavior: 'smooth'
  });
}