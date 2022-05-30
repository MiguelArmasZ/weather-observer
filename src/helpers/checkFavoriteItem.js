/* eslint-disable space-before-function-paren */
export function checkFavoriteItem(city) {
  const favorites = window.localStorage.getItem('favorites')

  const star = document.querySelector('.City-favorite')

  if (favorites) {
    const extractArr = JSON.parse(favorites)

    extractArr.includes(city) && star.classList.add('active')
  }
}
