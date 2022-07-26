import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Nav.css';


const Nav = () => {

    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      window.addEventListener("scroll", () => {
        // console.log('window.scrollY', window.scrollY)
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
      })
    
      return () => {
        window.removeEventListener("scroll", () => {});
      }
    }, []);
    
    const handleChange = (e) => {
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`);
    }

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            src="./asset/img/netflix_logo.png" alt="Netflix logo"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />

        <input value={searchValue} onChange={handleChange} className="nav__input" type="text" placeholder='영화를 검색해 주세요.' />

        <img
            src="./asset/img/netflix_avatar.png"
            alt="User logged"
            className="nav__avatar"
        />
    </nav>
  )
}

export default Nav