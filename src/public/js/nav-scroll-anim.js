/* jshint esversion: 11 */

// NavBar Animation
const navSlide = () => {
	const burger = document.querySelector('#burger');
	const nav = document.querySelector('.nav-links');

	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('open');
		// Burger Animation
		burger.classList.toggle('toggle');
	});
};
navSlide();


// NavBar Scroll Animation
window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 0);
});
