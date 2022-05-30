/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const [city, setCity] = useState('')
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({
    heading: '',
    description: ''
  })

  return (
    <DataContext.Provider
      value={{
        menu,
        setMenu,
        city,
        setCity,
        modal,
        setModal,
        modalInfo,
        setModalInfo
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
