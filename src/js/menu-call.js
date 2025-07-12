let openButtons = document.querySelectorAll('.menu-call-button')
let bodyWrapper = document.querySelector('.body-wrapper')
let callBack = document.querySelector('.call-back')

const handleHeaderButtonClick = () => {
  bodyWrapper.classList.add('body-wrapper--blur')
  callBack.classList.add('menu-call--open')
  setTimeout(() => {
    bodyWrapper.addEventListener('click', closeButtonClick)
  }, 0)
}

openButtons.forEach((openButton) => {
  openButton.addEventListener('click', handleHeaderButtonClick)
})

const closeButtonClick = () => {
  bodyWrapper.classList.remove('body-wrapper--blur')
  callBack.classList.remove('menu-call--open')
  bodyWrapper.removeEventListener('click', closeButtonClick)
}

let closeButton = callBack.querySelector('.menu-call__close-button')
closeButton.addEventListener('click', closeButtonClick)
