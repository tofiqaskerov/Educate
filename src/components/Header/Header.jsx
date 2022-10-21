import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'
import './header.scss'

export default function Header() {
  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__container__logo">
                <img src="https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png" alt="" />
            </div>
            <div className="header__container__nav">
                   
                        <ul className='header__container__nav__list'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li> <Link to="/about">About</Link></li>
                            <li> <Link to="/course">Courses</Link></li>
                            <li>Pages</li>
                            <li>Contact</li>
                        </ul>
            </div>
            <div className="header__container__auth">
                    <Login/>
            </div>
        </div>
    </div>
  )
}
