import React, { useEffect } from 'react';
import { detailUsers } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/Detail.css'

function Detail({match}) {
  const state = useSelector(state => state.detail)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailUsers(match.params.id))
  },[dispatch])

  console.log(state);
  return (
    <div className='contenedor-detail'>
      <div className="image-detail">
        <img src={state.image} alt={`Imagen de ${state.name}`} />
      </div>
      <div className="contenedor-datos-detail">
        <h1>{state.name}</h1>
        <ul className='info-detail'>
          <li>Especie: <span>{state.species}</span></li>
          <li>Genero: <span>{state.gender}</span></li>
          <li>Estado: <span>{state.status}</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Detail