const deliveryLink = document.querySelector('.delivery-info');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');
const bullitList = document.querySelector('.slider-pagination');
const bullits = document.querySelectorAll('.slider-pagination-button');
const sliderList = document.querySelector('.slider-list');
const slides = document.querySelectorAll('.slider-item');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const termsButtonList = document.querySelector('.terms-button-container');
const termsButtons = document.querySelectorAll('.terms-button .button');
const termsButtonsItems = document.querySelectorAll('.terms-button');
const termsScreens = document.querySelectorAll('.terms-item');

if (deliveryLink) {
  deliveryLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-container-close');
  });

  modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-container-close');
  });
}


if (sliderList) {
  const setTabindex = () => {
    slides.forEach((item) => {
      item.querySelectorAll('a').forEach((link) => {
        link.tabIndex = -1
      })
    });

    document.querySelector('.slider-current').querySelectorAll('a').forEach((link) => {
      link.tabIndex = 0;
    })
  }

  setTabindex();

  const setActiveBullet = (index) => {
    document.querySelector('.slider-pagination-current').classList.remove('slider-pagination-current');
    Array.from(bullits)[index].classList.add('slider-pagination-current');
  };

  const shiftSlider = (index) => {
    sliderList.style.transform = `translateX(${-1160 * index}px)`;
  };

  const setActiveScreen = (index) => {
    document.querySelector('.slider-current').classList.remove('slider-current');
    Array.from(slides)[index].classList.add('slider-current');
    setTabindex();
  };

  bullitList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('slider-pagination-button')) {
      const activeBullit = evt.target;
      const indexCurrentBullit = Array.from(bullits).indexOf(activeBullit);
      setActiveScreen(indexCurrentBullit);
      shiftSlider(indexCurrentBullit);
      setActiveBullet(indexCurrentBullit);
    }
  });

  sliderPrev.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider-current');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
  });

  sliderNext.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider-current');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : slides.length;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
  });
}

if (termsButtonList) {

  const setActiveButton = (index) => {
    document.querySelector('.terms-button-active').classList.remove('terms-button-active');
    termsButtonsItems[index].classList.add('terms-button-active');
  };

  const setActiveScreen = (index) => {
    document.querySelector('.terms-item-current').classList.remove('terms-item-current');
    Array.from(termsScreens)[index].classList.add('terms-item-current');
  }

  termsButtonList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('button')) {
      const currentButton = evt.target;
      const index = Array.from(termsButtons).indexOf(currentButton);
      setActiveButton(index);
      setActiveScreen(index)
    }
  })
}
