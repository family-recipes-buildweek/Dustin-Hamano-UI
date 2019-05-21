console.log('function.js loaded');

class SlideCarousel {
  constructor(carouselEls) {
    this.carouselEls = carouselEls;
    console.log(`hello, we're in the class constructor`);
    this.carouselImgs = Array.from(document.querySelectorAll('.carousel-container .carousel-cell'));
    console.log('this.carouselImgs',this.carouselImgs);
    this.carouselImgsNum = this.carouselImgs.map( (slideEl, i) => {
      slideEl.setAttribute("data-img",i);
      return i;
    });
    this.currentImgId = document.querySelector('.carousel-container .carousel-cell[data-default]').dataset.img;
    this.numberOfImgs = this.carouselImgsNum.length;
    this.setupCarousel();
    this.interval = setInterval(this.nextImg.bind(this), 8000);
  }
  setCurrentImg(id) {
      this.currentImgId = id;
  }

  showImg(id, direction) {
      document.querySelector(`.carousel-container [data-img="${this.currentImgId}"]`).classList.remove('current');
      document.querySelector(`.carousel-container [data-img="${id}"]`).classList.add('current');
      this.setCurrentImg(id);
  }

  getCurrentImgID() {
      let currentID = document.querySelector('.carousel-container .carousel-cell.current').dataset.img;
      return currentID;
  }

  previousImg() {
      let previousID = this.getCurrentImgID() - 1;
      if(previousID < 0) { previousID = parseInt(this.numberOfImgs) - 1; }
      /*document.querySelector(`.carousel-container [data-img="${previousID}`).animate([
          { transform: 'translate3D(-100%, 0, 0)' }, 
          { transform: 'translate3D(0, 0, 0)' }
        ], {
          duration: 750,
          iterations: 1
        })//*/
      this.showImg(previousID, "previous");
  }

  nextImg() {
      let nextID = parseInt(this.getCurrentImgID()) + 1;
      if(nextID === this.numberOfImgs) { nextID = 0; }
     /* document.querySelector(`.carousel-container [data-img="${nextID}`).animate([
          { transform: 'translate3D(100%, 0, 0)' }, 
          { transform: 'translate3D(0, 0, 0)' }
        ], {
          duration: 750,
          iterations: 1
        })//*/
      this.showImg(nextID, "next");
  }

  setupCarousel() {
      // let btnLeft = document.querySelector('.carousel .left-button');
      // let btnRight = document.querySelector('.carousel .right-button');
      // btnLeft.addEventListener('click', () => { this.previousImg(); });
      // btnRight.addEventListener('click', () => { this.nextImg(); });
      this.showImg(this.currentImgId);
  }
}

let carousel = document.querySelector('.carousel-container');
const imageCarousel = new SlideCarousel(carousel);

$(document).foundation()