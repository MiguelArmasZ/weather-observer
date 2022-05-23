/* eslint-disable space-before-function-paren */
import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
export const BtnMenu = () => {
  const { menu, setMenu } = useContext(DataContext)

  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <>
      <div
        className={`Btn-menu ${menu ? 'active' : ''}`}
        onClick={handleMenu}
      >
        <span className='Btn-line'></span>
        <span className='Btn-line'></span>
        <span className='Btn-line'></span>
      </div>
    </>
  )
}
