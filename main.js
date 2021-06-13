const hamburger = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
	nav_menu.classList.toggle('open');
	hamburger.classList.toggle('active');
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '25px',
    duration: 1500,
});

sr.reveal('.home-links',{ interval: 200});
sr.reveal('.card-info',{interval: 200}); 