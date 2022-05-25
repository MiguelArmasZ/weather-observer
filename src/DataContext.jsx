/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const [city, setCity] = useState('')
  const [currentCity, setCurrentCity] = useState({})

  return (
    <DataContext.Provider
      value={{
        menu,
        setMenu,
        city,
        setCity,
        currentCity,
        setCurrentCity
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
