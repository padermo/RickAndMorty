import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-regular-svg-icons'
import '../stylesheets/Footer.css'

function Footer() {
  return (
    <div className='contenedor-footer'>
      <div className="contenedor-interno-footer">
        <div className='rick-font'>
          <h3>Rick & Morty - API</h3>
          <FontAwesomeIcon icon={faRegistered} />
        </div>
        <h3>2022</h3>
      </div>
    </div>
  )
}

export default Footer