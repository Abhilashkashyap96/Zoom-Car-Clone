// 4th Section Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) { 
  var slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// 8th Section Carousel
var sceondSlideIndex = 1;

function secondPlusSlides(n){
    showSlidesSceond((sceondSlideIndex += n));
}

function secondCurrentSlide(n){
    showSlidesSceond((sceondSlideIndex = n));
}

function showSlidesSceond(n) {
    var sectionEightSlides = document.getElementsByClassName("testimony");
    if (n > sectionEightSlides.length) {
        sceondSlideIndex = 1;
    }
    if (n < 1) {
        sceondSlideIndex = sectionEightSlides.length;
    }
    for (var i = 0; i < sectionEightSlides.length; i++) {
        sectionEightSlides[i].style.display = "none";
    }
    sectionEightSlides[sceondSlideIndex-1].style.display = "block";
}

// Section eight second carousel

var index = 0;
var x = document.getElementsByClassName("press_img");

function carousel(n) {
  index = index + n;

  if (index >= x.length) {
    index = 0;
  } else if (index < 0) {
    index = x.length - 1;
  }
  for(var i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }

  x[index].style.display = "block";
}
setInterval(() => carousel(1), 1500);