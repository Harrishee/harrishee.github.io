const hanburger = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.nav-menu');

hanburger.addEventListener('click', () => {
	nav_menu.classList.toggle('open');
	hanburger.classList.toggle('active');
});

const show_items = document.querySelectorAll('.nav-item');   

function linkAction(){
  show_items.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('open')
}
show_items.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '25px',
    duration: 1500,
});

sr.reveal('.home-links',{ interval: 200});
sr.reveal('.card-info',{interval: 200}); 