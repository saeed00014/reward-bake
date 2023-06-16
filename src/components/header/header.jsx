import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

import { FaUser, FaDatabase } from 'react-icons/fa'
import { AiFillFire } from 'react-icons/ai'

const Header = () => {
  return (
    <section className='Header'>
      <div className="headerContainer">
        <div className="logo">
          <Link to='/'>
            <h1>LiO</h1>
          </Link>
        </div>
        <ul className="navLink">
          <li>
            <Link to='/Qomers'><AiFillFire /> Qomers</Link>
          </li>
          <li>
            <Link to='/user'><FaUser /> Users</Link>
          </li>
          <li>
            <Link to='/data'><FaDatabase /> Data</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header