const burger = document.querySelector('.burger');
const headerBox = document.querySelector('.header__box');
const wholeHTML = document.querySelector('html');
const wholeBody = document.querySelector('body');
burger.addEventListener('click', toggleActive);

function toggleActive() {
	burger.classList.toggle('_active');
	headerBox.classList.toggle('_active');
	wholeHTML.classList.toggle('_lock');
	wholeBody.classList.toggle('_lock');
}