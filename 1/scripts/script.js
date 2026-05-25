const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close');
const openModalButton = document.querySelector('.hotels__button');

openModalButton.addEventListener('click', () => {
    modal.classList.add('modal--opened');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal--opened');
});
