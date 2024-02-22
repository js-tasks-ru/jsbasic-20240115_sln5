function initCarousel() {
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const slideBox = document.querySelector('.carousel__inner');
  const slide = document.querySelector('.carousel__slide');
  const slideWidth = slide.offsetWidth;
  let slideWidthNew = 0;
  let maxWidth = slideWidth * 3;

  arrowLeft.style.display = 'none';

  arrowRight.onclick = () => {

    arrowLeft.style.display = '';     

    slideWidthNew = slideWidthNew - slideWidth;

    slideBox.style.transform = `translateX(${slideWidthNew}px)`;    
 
    if (slideWidthNew == -maxWidth) { 
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }

  }

  arrowLeft.onclick = () => {

    arrowRight.style.display = '';

    slideWidthNew = slideWidthNew + slideWidth;

    slideBox.style.transform = `translateX(${(slideWidthNew)}px)`;  
   
    if (slideWidthNew == 0) { 
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
  }
} 


