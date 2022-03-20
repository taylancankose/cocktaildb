import React from 'react'
import notfound from '../../images/notfound.png'

function NotFound() {
  return (
    <div>
        <img 
        src={notfound} 
        height={"400px"}
        className='d-flex justify-content-center align-items-center mx-auto'
        />
        <h4 className='text-center '>Sorry! We do not have that cocktail. :( </h4>
    </div>
  )
}

export default NotFound