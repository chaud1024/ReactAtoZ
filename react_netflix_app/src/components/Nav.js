import React from 'react'

import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
        <img
            src="./asset/img/netflix_logo.png" alt="Netflix logo"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img
            src="./asset/img/netflix_avatar.png"
            alt="User logged"
            className="nav__avatar"
        />
    </nav>
  )
}

export default Nav