const burger = document.querySelector('.burger');
const headerBox = document.querySelector('.header__box');
burger.addEventListener('click', toggleActive);

function toggleActive() {
	burger.classList.toggle('_active');
	headerBox.classList.toggle('_active');
}