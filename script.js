$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('show');
    });
});







const carrossel = document.querySelector('.carrossel');

        function nextSlide() {
            carrossel.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                carrossel.appendChild(carrossel.firstElementChild);
                carrossel.style.transition = 'none';
                carrossel.style.transform = 'translateX(0)';
                setTimeout(() => {
                    carrossel.style.transition = 'transform 2s ease-in-out';
                });
            }, 2000);
        }

        setInterval(nextSlide, 1000);

    