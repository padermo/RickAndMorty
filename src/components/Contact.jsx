import React, {useState} from 'react'
import {connect} from 'react-redux'
import { addContact } from '../redux/action'
import '../stylesheets/Contact.css'

function Contact({contact}) {

  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  function onChange(e) {
    e.preventDefault()
    addContact({
      firstName: setFirst(e.target.value),
      lastName: setLast(e.target.value),
      email: setEmail(e.target.value),
      comment: setComment(e.target.value)
    })
  }

  console.log(contact);
  return (
    <form type='submit' onSubmit={() => onChange} className='formulario'>
      <h1 className='contact-us'>Contact Us</h1>
      <div className='contenedor-formulario'>
        <div className='contenedor-names'>
          <label htmlFor="firstName">First Name</label>
          <input id='firstName' type="text" className='input-form' placeholder='First Name...' />
          <label htmlFor="lastName">Last Name</label>
          <input id='lastName' type="text" className='input-form' placeholder='Last Name...' />
        </div>
        <div className='contenedor-email'>
          <label htmlFor="email">Email</label>
          <input id='email' type="email" className='input-form' placeholder='Email...' />
          <label htmlFor="comment">Comment</label>
          <textarea id='comment' name="" cols="30" rows="10" className='text-form' placeholder='Comment...' ></textarea>
        </div>  
        <div className="contenedor-button">
          <button className='btn-submit-form' type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    contact: state.contact
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: () => dispatch(addContact())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)