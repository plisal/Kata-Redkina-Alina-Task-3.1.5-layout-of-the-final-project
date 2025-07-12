let openButton = document.querySelector('#burger-button')
let bodyWrapper = document.querySelector('.body-wrapper')
let leftFloatMenu = document.querySelector('.left-float-menu')
let leftFloatMenuHeader = document.querySelector('.left-float-menu__header')

const handleHeaderButtonClick = () => {
  bodyWrapper.classList.add('body-wrapper--blur')
  leftFloatMenu.classList.add('left-float-menu--open')
  setTimeout(() => {
    bodyWrapper.addEventListener('click', closeButtonClick)
  }, 0)
}

openButton.addEventListener('click', handleHeaderButtonClick)

const closeButtonClick = () => {
  bodyWrapper.classList.remove('body-wrapper--blur')
  leftFloatMenu.classList.remove('left-float-menu--open')
  bodyWrapper.removeEventListener('click', closeButtonClick)
}

let closeButton = leftFloatMenuHeader.querySelector('.header__button')
closeButton.addEventListener('click', closeButtonClick)
