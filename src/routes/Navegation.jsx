import React from 'react'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import{ Home } from "../componentes/Home"
import{ About } from "../componentes/About"
import{ Dashboard } from "../componentes/Dashboard"
import{ Header } from "../componentes/Header"

function Navegation() {
  return (
    <BrowserRouter>
        <nav>
            
            <ul>
                <li>
                  <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-active' : ''}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'nav-active' : ''}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/header' className={({ isActive }) => isActive ? 'nav-active' : ''}>
                    Header
                  </NavLink>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='about' element={ <About/> } />
            <Route path='dashboard' element={ <Dashboard/> } />
            <Route path='home' element={ <Home/> } />
            <Route path='header' element={ <Header/> } />
        </Routes>
      {/* <div>Navegation</div>  */}
    </BrowserRouter>
  )
}
export {Navegation}