import React from 'react';
import Home from './Home';
import Detail from './Detail';
import Favorites from './Favorites';
import Nav from './Nav';
import Contact from './Contact';
import AboutUs from './AboutUs';
import { Route } from 'react-router-dom';
import '../stylesheets/App.css';
import Footer from './Footer';

function App() {

  return (
    <div className='contenedor-padre-global'>
      <Nav />
      <Route exact path="/" render={() => <AboutUs />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/favorites" render={()=> <Favorites />} />
      <Route path="/contact" render={()=> <Contact />} />
      <Route path="/detail/:id" render={({ match }) => <Detail match={match} />} />
      <Footer />
    </div>
  )
}

export default App