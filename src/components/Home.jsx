import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/action';
import Card from './Card';
import '../stylesheets/Home.css'

function Home() {

  const store = useSelector(store => store.personajes) 
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  
  return (
    <div className='contenedor-cartas'>
      {
        store.map(e => (
          <div key={e.id} className="home-card">
            <Card id={e.id} name={e.name} image={e.image} />
          </div>
        ))
      }
      {
        console.log('soy home', store)
      }
    </div>
  )
}

export default Home