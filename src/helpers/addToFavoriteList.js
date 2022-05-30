/* eslint-disable space-before-function-paren */
export function addToFavoriteList(city) {
  const cityLower = city.toLowerCase()
  const LS = window.localStorage
  const addItemLS = (key, element) =>
    LS.setItem(key, JSON.stringify(element))

  const getItemLS = (key) => JSON.parse(LS.getItem(key))

  const favoritesArr = getItemLS('favorites')

  const star = document.querySelector('.City-favorite')
  star.classList.toggle('active')

  if (!star.classList.contains('active')) {
    star.classList.remove('show')
  }
  if (star.classList.contains('active')) {
    star.classList.add('show')
  }

  const setArr = new Set([...favoritesArr, cityLower])
  addItemLS('favorites', [...setArr])

  if (favoritesArr.includes(cityLower)) {
    const arrFiltered = favoritesArr.filter(
      (item) => item !== cityLower
    )
    addItemLS('favorites', [...arrFiltered])
  }
}
