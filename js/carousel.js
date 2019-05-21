
class SlideCarousel {
  constructor(carouselEls) {
    this.carouselEls = carouselEls;
    this.carouselImgs = Array.from(document.querySelectorAll('.carousel-container .carousel-cell'));
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
      this.showImg(previousID, "previous");
  }

  nextImg() {
      let nextID = parseInt(this.getCurrentImgID()) + 1;
      if(nextID === this.numberOfImgs) { nextID = 0; }
      this.showImg(nextID, "next");
  }

  setupCarousel() {
      this.showImg(this.currentImgId);
  }
}

let carousel = document.querySelector('.carousel-container');
const imageCarousel = new SlideCarousel(carousel);