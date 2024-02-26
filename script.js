//nav bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector('header nav a[href*="'+ id +'"]');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const inputEmail = document.getElementById('email');
const labelEmail = document.querySelector('.input-field label[for="email"]');

inputEmail.addEventListener('focus', () => {
    labelEmail.classList.add('active');
});

inputEmail.addEventListener('blur', () => {
    if (inputEmail.value === '') {
        labelEmail.classList.remove('active');
    }
});


