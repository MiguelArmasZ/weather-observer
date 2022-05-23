/* eslint-disable space-before-function-paren */
export function addFade() {
  const home = document.getElementById('home')
  setTimeout(() => {
    home.classList.add('active')
  }, 1000)
}
