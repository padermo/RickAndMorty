import React from 'react'

function Card({id, name, image}) {
  return (
    <div className='card'>
      <figure className='card__picture'>
        <img src={image} alt={`Image de ${name}`} className='card__img' />
      </figure>
      <h2 className='card__text'>{name}</h2>
    </div>
  )
}

export default Card