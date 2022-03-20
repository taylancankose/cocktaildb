import React from 'react'
import error from '../../images/404.png'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div>
        <Link to='/' className='btn btn-primary mt-5 ml-5 '> Back To Home </Link>
        <img 
        src={error} 
        className='d-flex mx-auto justify-content-center align-items-center'
        height={"500px"}
        />

    </div>
  )
}

export default Error