import React from 'react'
import rick from '../../assets/rick.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <figure className='footer__picture'>
          <img src={rick} alt="image logo" className='footer__img' />
        </figure>
        <div className='footer__texts'>
          <h3 className='footer__text'>All rights reserved &copy;</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer