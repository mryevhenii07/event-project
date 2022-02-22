import fetchEvent from './fetchEvent';

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', backDropClick);

function onCloseModal() {
  refs.modal.classList.add('visually-hidden');
}
function backDropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
