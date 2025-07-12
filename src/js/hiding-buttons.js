export const getHidingButtons = (
  section,
  visibleCount,
  visibleCount1120,
  visibleCount768
) => {
  let buttonManagement = section.querySelector('.services__button-management')

  let buttonManagementText = section.querySelector(
    '.services__button-management-text'
  )
  let buttonManagementIcon = buttonManagement.querySelector('svg')
  let servicesContainer = section.querySelector('.services__container')
  let servicesButtons = servicesContainer.querySelectorAll('.service-button')

  let visibleButtonsCount = visibleCount

  const updateVisibleButtonsCount = () => {
    console.log('resize')
    if (window.innerWidth >= 1120) {
      visibleButtonsCount = visibleCount1120
      return
    }

    if (window.innerWidth >= 768) {
      visibleButtonsCount = visibleCount768
      console.log(visibleButtonsCount)
      return
    }
    visibleButtonsCount = 1
  }

  updateVisibleButtonsCount()

  window.addEventListener('resize', updateVisibleButtonsCount)

  const handleToggleButtons = () => {
    buttonManagement.classList.add('services__button-management--hidden')
    buttonManagementText.innerHTML = 'Показать все'
    buttonManagementIcon.style.rotate = '180deg'
    for (let i = 0; i < servicesButtons.length; i++) {
      if (i >= visibleButtonsCount) {
        servicesButtons[i].classList.add('services__button--hidden')
      } else {
        servicesButtons[i].classList.remove('services__button--hidden')
      }
    }
  }

  const handleShowAllButtons = () => {
    buttonManagement.classList.remove('services__button-management--hidden')
    buttonManagementText.innerHTML = 'Скрыть'
    buttonManagementIcon.style.rotate = '0deg'
    for (let i = 0; i < servicesButtons.length; i++) {
      servicesButtons[i].classList.remove('services__button--hidden')
    }
  }

  const handleButtonManagementClick = () => {
    if (
      buttonManagement.classList.contains('services__button-management--hidden')
    ) {
      handleShowAllButtons()
    } else {
      handleToggleButtons()
    }
  }

  handleToggleButtons()
  window.addEventListener('resize', handleToggleButtons)
  buttonManagement.addEventListener('click', handleButtonManagementClick)
}
