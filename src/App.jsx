import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './DataContext'
import { Routing } from './Routing'

export const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routing />
      </DataProvider>
    </BrowserRouter>
  )
}
