import React from 'react'
import morty from '../images/morty.png'
import rick from '../images/rick.jpg'
import '../stylesheets/AboutUs.css'

function AboutUs() {
  return (
    <div className='contenedor-padre-about'>
      <h1 className='title-about'>About Us</h1>
      <div className='contenedor-interno-about'>
        <div className="first">
          <img src={morty} alt='Imagen de morty' className='imagenes-contenedor' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a cras. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit ut. Senectus et netus et malesuada fames ac turpis egestas maecenas. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Dolor purus non enim praesent. Duis at consectetur lorem donec. Netus et malesuada fames ac turpis egestas integer eget. Ultricies integer quis auctor elit sed vulputate mi sit. Libero id faucibus nisl tincidunt eget nullam non nisi. Amet consectetur adipiscing elit ut aliquam purus sit amet. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Euismod in pellentesque massa placerat duis ultricies lacus sed. Mauris a diam maecenas sed enim ut sem viverra. Egestas purus viverra accumsan in nisl nisi scelerisque.</p>
        </div>
        <div className="second">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a cras. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit ut. Senectus et netus et malesuada fames ac turpis egestas maecenas. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Dolor purus non enim praesent. Duis at consectetur lorem donec. Netus et malesuada fames ac turpis egestas integer eget. Ultricies integer quis auctor elit sed vulputate mi sit. Libero id faucibus nisl tincidunt eget nullam non nisi. Amet consectetur adipiscing elit ut aliquam purus sit amet. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Euismod in pellentesque massa placerat duis ultricies lacus sed. Mauris a diam maecenas sed enim ut sem viverra. Egestas purus viverra accumsan in nisl nisi scelerisque.</p>
          <img src={rick} alt="Imagen de rick" className='imagenes-contenedor' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs