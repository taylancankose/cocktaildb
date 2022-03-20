import React from 'react'
import {AiFillFacebook,AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <footer className="text-center text-white">
    <div className="container pt-4">
      <section className="mb-4">
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><AiFillFacebook /></a>
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><AiFillTwitterCircle /></a>
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><AiFillInstagram /></a>
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><AiFillLinkedin /></a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><AiFillGithub /></a>
      </section>
    </div>
  
    <div className="text-center text-dark p-3" >
      © 2020 Copyright: <br/>
      <p className="text-dark" >It is a React based project for self learn of Tecosama. <br/>
      This project is taking cocktail details from <a href='https://www.thecocktaildb.com/' target='_blank'>TheCocktailDB API</a> </p>
    </div>
  </footer>
  )
}

export default Footer