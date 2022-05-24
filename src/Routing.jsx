import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { City } from './pages/City'

export const Routing = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='city' element={<City />} />
      </Route>
    </Routes>
  )
}
