import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/cocktail.png'

function Navbar() {
  return (
      <nav className='navbar navbar-light bg-light justify-content-between sticky-top'>
        <div className='container-fluid'>
            <div className='navbar-header'>
            <Link to="/">
              <img height={"100px"} src={logo} />
            <h3 className='text-white logo d-inline ml-3'>Cocktail LAB</h3>
            </Link>
            </div>
        <div className='nav navbar-nav d-inline nav-text'>
            <Link to="/" className='mr-5  text-white'>
              Home
            </Link>
            <Link to="/about" className='mr-5 text-white'>
              About
            </Link>
        </div>
        </div>
      </nav>
    )
}

export default Navbar