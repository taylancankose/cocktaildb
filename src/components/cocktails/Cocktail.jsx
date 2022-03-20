import React from 'react'
import {Link } from 'react-router-dom'

function Cocktail({idDrink,strDrink,strDrinkThumb,strAlcoholic}) {

  return (
    <>
    <div className="container">
      <div className="row">
  
      <div className='card mb-5 col-8 cocktail-card  mx-auto d-flex justify-content-center align-items-center text-center'>
            <img src={strDrinkThumb} width={"200px"} className='rounded mt-3' />
            <figcaption className='mb-2 mt-2 text-secondary'>{strAlcoholic.toUpperCase()}</figcaption>
            <h4 className='drink-name '>{strDrink.toUpperCase()}</h4>
            <Link 
            to={`/cocktail/${idDrink}`} 
            className='btn btn-orange px-4 mb-3 shadow-light'
            >
            Go recipe
            </Link>
        </div>
        </div>
        </div>
    </>
  )
}

export default Cocktail


