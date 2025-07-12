let openButtons = document.querySelectorAll('.menu-chat-button')
let bodyWrapper = document.querySelector('.body-wrapper')
let menuFeedback = document.querySelector('.menu-feedback')

const handleHeaderButtonClick = () => {
  bodyWrapper.classList.add('body-wrapper--blur')
  menuFeedback.classList.add('menu-call--open')
  setTimeout(() => {
    bodyWrapper.addEventListener('click', closeButtonClick)
  }, 0)
}

openButtons.forEach((openButton) => {
  openButton.addEventListener('click', handleHeaderButtonClick)
})

const closeButtonClick = () => {
  bodyWrapper.classList.remove('body-wrapper--blur')
  menuFeedback.classList.remove('menu-call--open')
  bodyWrapper.removeEventListener('click', closeButtonClick)
}

let closeButton = menuFeedback.querySelector('.menu-call__close-button')
closeButton.addEventListener('click', closeButtonClick)
