let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselInner = document.querySelector('.carousel-inner');

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
});

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
}
updateSlidePosition();

