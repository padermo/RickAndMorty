import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { addFavorite } from '../redux/action.js';
import '../stylesheets/Card.css'

function Card({ name, image, id, addFavorite }) {

  const agregar = () => {
    addFavorite({ id: id, name: name, image: image })
  }

  return (
    <div className='contenedor--card'>
      <div className='contenedor--interno-card'>
        
        <div className='contenedor-imagen-card'>
          <Link to={`/detail/${id}`}>
            <img className='imagen-card' src={image} alt={`Imagen de ${name}`} />
          </Link>
        </div>

        <div className='contenedor-doble'>
          <h1 className='name-link-card'>{name}</h1>
          <FontAwesomeIcon icon={faStar} className='agregar-favorito' onClick={() => agregar()} />
        </div>

      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: name => dispatch(addFavorite(name))
  }
}

export default connect(null, mapDispatchToProps)(Card)