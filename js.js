const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function rotateSlides(direction) {
    slides.forEach((slide) => {
        const currentPosition = slide.getAttribute('data-position');

        if (direction === 'next') {
            // Rotar hacia la derecha
            if (currentPosition === 'left') {
                slide.setAttribute('data-position', 'center');
            } else if (currentPosition === 'center') {
                slide.setAttribute('data-position', 'right');
            } else if (currentPosition === 'right') {
                slide.setAttribute('data-position', 'left');
            }
        } else if (direction === 'prev') {
            // Rotar hacia la izquierda
            if (currentPosition === 'left') {
                slide.setAttribute('data-position', 'right');
            } else if (currentPosition === 'center') {
                slide.setAttribute('data-position', 'left');
            } else if (currentPosition === 'right') {
                slide.setAttribute('data-position', 'center');
            }
        }
    });
}

