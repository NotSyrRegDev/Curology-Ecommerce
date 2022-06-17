
let slidePostion = 0;
const slides = document.getElementsByClassName('single--product__feature');
const totalSlides = slides.length;

document.getElementById('product--carousel__next').addEventListener('click' , function() { moveToNextFeatureSlide() } );

document.getElementById('product--carousel__prev').addEventListener('click' , function() { moveToPrevFeatureSlide() } );

 function updatingSlidePostion() {
   // LOOPING AND INCREMTING
   for (let slide of slides ) {
    slide[slidePostion].classList.remove('single--product__feature--visible');
    slide[slidePostion].classList.add('single--product__feature--hidden');
   }
//    slides[slidePostion].classList.remove('single--product__feature--visible');
//    slides[slidePostion].classList.add('single--product__feature--hidden');

 }

function moveToNextFeatureSlide() {
    // WHEN REACHING THE END
   if ( slidePostion === totalSlides - 1   ) {
        slidePostion = 0;
   } else {
    // OTHWISE INCREMENT IT
    slidePostion++;

   }
   updatingSlidePostion();
   console.log(slidePostion);
}
function moveToPrevFeatureSlide() {
    // WHEN REACHING THE START
    if ( slidePostion === 0   ) {
        slidePostion = totalSlides - 1
   } else {
    // OTHWISE DECREMNT IT
    slidePostion--;
   }
   updatingSlidePostion();
   console.log(slidePostion);
}