const deliveryLink = document.querySelector('.delivery-info');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

deliveryLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-container-close');
});

modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-container-close');
});
