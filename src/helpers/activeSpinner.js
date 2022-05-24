/* eslint-disable space-before-function-paren */
export function activeSpinner() {
  const spinner = document.querySelector('.spinner')
  const spinnerBody = document.querySelector('.lds-ellipsis')
  const btnMenu = document.querySelector('.Btn-menu')

  btnMenu.style.display = 'none'

  setTimeout(() => {
    spinnerBody.classList.add('active')
    btnMenu.style.display = 'flex'
  }, 1000)

  setTimeout(() => {
    spinner.classList.add('active')
  }, 1500)

  setTimeout(() => {
    spinner.classList.add('hide')
  }, 2500)
}
