import React from 'react'
import { HashRouter } from 'react-router-dom'
import { DataProvider } from './DataContext'
import { Routing } from './Routing'

export const App = () => {
  return (
    <HashRouter>
      <DataProvider>
        <Routing />
      </DataProvider>
    </HashRouter>
  )
}
