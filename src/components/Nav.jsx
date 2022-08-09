import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/Nav.css'

function Nav() {
  return (
    <div className='contenedor-nav'>
      <div className='contenedor-interno-nav'>
        <Link to="/home" className='link'><span>Home</span></Link>
        <Link to="/favorites" className='link'><span>Favorites</span></Link>
        <Link to="/contact" className='link'><span>Contact</span></Link>
        <Link exact to="/" className='link'><span>About Us</span></Link>
      </div>
    </div>
  )
}

export default Nav