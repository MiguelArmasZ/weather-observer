import React from 'react'
import { Outlet } from 'react-router-dom'
import { BtnMenu } from './BtnMenu'
import { Menu } from './Menu'

export const Layout = () => {
  return (
    <main className='layout'>
      <BtnMenu />
      <Menu />
      <Outlet />
    </main>
  )
}
