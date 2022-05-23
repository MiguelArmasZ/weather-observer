/* eslint-disable space-before-function-paren */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { linksForNavbar } from '../data/menu'
import { DataContext } from '../DataContext'

export const Menu = () => {
  const { menu, setMenu } = useContext(DataContext)

  function handleHideMenu() {
    setMenu(false)
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
    </nav>
  )
}
