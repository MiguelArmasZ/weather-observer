/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Star from '../assets/star_delete.png'

export const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem('favorites'))
  )

  const navigate = useNavigate()

  async function deleteItem(e) {
    const favoritesFiltered = favorites.filter(
      (item) => item !== e.target.name
    )
    setFavorites(favoritesFiltered)

    window.localStorage.setItem(
      'favorites',
      JSON.stringify(favoritesFiltered)
    )
  }

  function goToCity(e) {
    window.localStorage.setItem(
      'city',
      JSON.stringify({ city: e.target.innerText })
    )

    navigate('/city')
  }

  return (
    <section className='Favorites'>
      <h2 className='heading'>your favorites list</h2>

      <ul className='Favorites-list'>
        {favorites?.map((item) => (
          <li key={item} className='Favorites-list-item'>
            <p className='Favorites-city' onClick={goToCity}>
              {item}
            </p>

            <img
              name={item}
              onClick={deleteItem}
              className='Favorites-star'
              src={Star}
              alt='star delete'
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
