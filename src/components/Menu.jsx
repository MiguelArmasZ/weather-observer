/* eslint-disable space-before-function-paren */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { linksForNavbar } from '../data/menu'
import { DataContext } from '../DataContext'
import { useCountries } from '../hooks/useCountries'

export const Menu = () => {
  const { menu, setMenu } = useContext(DataContext)
  const countries = useCountries()

  function handleHideMenu() {
    setMenu(false)
  }

  function randomCity() {
    let randomPlace = ''
    const randomNumber = Math.floor(Math.random() * countries.length)
    const randomCity = countries[randomNumber].capital_city[0]

    if (randomCity === 'kyiv') {
      randomPlace = 'madrid'
    } else {
      randomPlace = randomCity
    }

    window.localStorage.setItem(
      'city',
      JSON.stringify({ city: randomPlace })
    )
  }

  return (
    <nav className={`Navbar ${menu ? 'active' : ''}`}>
      {linksForNavbar.map((link) => (
        <Link
          onClick={handleHideMenu}
          key={link.text}
          style={link.delay}
          to={link.to}
          className='Navbar-link'
        >
          {link.text}
        </Link>
      ))}
      <a
        onClick={() => {
          handleHideMenu()
          randomCity()
        }}
        href='https://weather-observer.vercel.app/city'
        style={{ '--delay': '2.5' }}
        className='Navbar-link'
      >
        random
      </a>
    </nav>
  )
}
