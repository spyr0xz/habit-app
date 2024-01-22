import React from 'react'
import Sidebar from 'widgets/Sidebar/ui/Sidebar'
import AppRouter from './providers/router/ui/AppRouter'

export const App = () => {
  return (
    <div className='app'>
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
