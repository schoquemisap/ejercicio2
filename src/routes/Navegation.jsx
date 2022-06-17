import React from 'react'
import {BrowserRouter, Route, Routes, NavLink, Navigate} from 'react-router-dom'
import{ Home } from "../Components/Home"
import{ About } from "../Components/About"
import{ Dashboard } from "../Components/Dashboard"
import{ Header } from "../Components/Header"

import logo from '../logo.svg';

function Navegation() {
  return (
    <BrowserRouter>
        <nav>
            <img src={logo} alt="" />
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
                    Students
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/header' className={({ isActive }) => isActive ? 'nav-active' : ''}>
                    Students
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