/* eslint-disable space-before-function-paren */
export function addActiveClass(element, class$) {
  const selector = document.querySelector(element)

  selector.classList.toggle(class$)
}
