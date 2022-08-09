import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { removeFavorite } from '../redux/action';
import { connect } from 'react-redux'
import '../stylesheets/Favorites.css';

function Favorites({favoritos, removeFavorite, contact }) {
  return (
    <div className='contenedor-favoritos'>
      {
        favoritos.map(e => (
          <div className="contenedor-map-fav" key={e.id}>
            <div className="contenedor-interno-fav">

              <div className='contenedor-imagen-fav'>
                <Link to={`/detail/${e.id}`}>
                  <img className='imagen-fav' src={e.image} alt={`Imagen de ${e.name}`} />
                </Link>
              </div>

              <div className="eliminar-fav">
                <h1 className='name-fav'>{e.name}</h1>
                <FontAwesomeIcon icon={faTrash} className="eliminar-fav-btn" onClick={() => removeFavorite(e)} />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    favoritos: state.favoritos
  }
}

export default connect(mapStateToProps, {removeFavorite})(Favorites)