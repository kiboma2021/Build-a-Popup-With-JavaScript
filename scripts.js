const openModalButtons=document.querySelectorAll('[data-modal-target]')
const closeModalButtons=document.querySelectorAll('[data-close-button]')
const overlay=document.getElementById('overlay')

openModalButtons.forEach(button () => {
  button.addEventListner('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget)
  openModal(modal)
})
})