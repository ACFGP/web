prevBtn.addEventListener('click', () => {
    rotateSlides('prev');
});

nextBtn.addEventListener('click', () => {
    rotateSlides('next');
});


let currentIndex = 0;
const carruselInner = document.querySelector('.carrusel-inner');
const totalItems = document.querySelectorAll('.carrusel-item').length;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarrusel();
}

function updateCarrusel() {
    const offset = -currentIndex * 100;
    carruselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(moveToNextSlide, 3000); // Cambia de imagen cada 3 segundos