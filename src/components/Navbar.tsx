import React from 'react'
import { NavLink } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper black darken-2">
        <ul id="idnavbar">
          <li cy-data="home-nav-link">
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li cy-data="home-nav-link">
            <NavLink to="/germandistricts">Germany</NavLink>
          </li>
          <li>
            <NavLink to="/world">World</NavLink>
          </li>
          <li>
            <NavLink to="/live">Live</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
