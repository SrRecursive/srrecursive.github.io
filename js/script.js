// Cambiar el tema a oscuro
let themeToggle = document.getElementById('theme-toggle');
let moonIcon = document.getElementById('moon');
let sunIcon = document.getElementById('sun');
let overlays = document.querySelectorAll('.overlay'); // Selecciona todos los elementos con la clase "overlay"

moonIcon.style.display = 'none';

themeToggle.addEventListener('click', function () {
	let html = document.getElementsByTagName('html')[0];
	if (html.getAttribute('data-theme') === 'dark') {
		html.setAttribute('data-theme', 'light');
		moonIcon.style.display = 'inline';
		sunIcon.style.display = 'none';
		themeToggle.style.backgroundColor = '#FFFFB3'
		overlays.forEach((overlay) => {
			overlay.classList.remove('overlay');
			overlay.classList.add('overlay-light');
		});
	} else {
		html.setAttribute('data-theme', 'dark');
		moonIcon.style.display = 'none';
		sunIcon.style.display = 'inline';
		themeToggle.style.backgroundColor = '#212533'
		overlays.forEach((overlay) => {
			overlay.classList.remove('overlay-light');
			overlay.classList.add('overlay');
		});
	}
});


// Función para desplazamiento suave
function smoothScroll(target, duration) {
	var targetElement = document.querySelector(target);
	var targetPosition = targetElement.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration) + 1;
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	// Función para suavizar la animación
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

// Manejador de eventos para el clic en los enlaces
document.addEventListener('DOMContentLoaded', function () {
	var links = document.querySelectorAll('nav ul li a');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function (e) {
			e.preventDefault();
			var target = this.getAttribute('href');
			smoothScroll(target, 1000); // Cambia la duración según tus preferencias
		});
	}
});
