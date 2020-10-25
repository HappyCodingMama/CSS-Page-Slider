const imgBx = document.querySelector('.imgBx');
const slides = imgBx.getElementsByTagName('img');
var i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function PrevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}





const contentBx = document.querySelector('.contentBx');
const slidesText = contentBx.getElementsByTagName('div');
var k = 0;

function nextSlideText(){
    slidesText[k].classList.remove('active');
    k = (k + 1) % slidesText.length;
    slidesText[k].classList.add('active');
}

function PrevSlideText(){
    slidesText[k].classList.remove('active');
    k = (k - 1 + slidesText.length) % slidesText.length;
    slidesText[k].classList.add('active');
}
