import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './Principal'
import CreateAccount from './CreateAccount'
import MainPage from '../src/MainPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='principal' element={<Principal />}/>
          <Route path='CreateAccount' element={<CreateAccount/>}/>
          <Route path='MainPage' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App