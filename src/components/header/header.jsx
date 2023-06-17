import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './header.css'

import { FaUser, FaDatabase } from 'react-icons/fa'
import { AiFillFire } from 'react-icons/ai'

const Header = () => {
  const [hambergar, setHambergar] = useState(false)

  return (
    <section className={hambergar ? 'Header' : 'HeaderHide'   }>
      <div className="headerContainer">
        <ul className={hambergar ? "hambergar" : "navLink"}>
          <li onClick={() => setHambergar(!hambergar)} className="logo">
            <h1>
              <Link to='/'>
                LiO
              </Link>
            </h1>
          </li>
          <li onClick={() => setHambergar(!hambergar)}>
            <Link to='/Qomers'><AiFillFire /> Qomers</Link>
          </li>
          <li onClick={() => setHambergar(!hambergar)}>
            <Link to='/user'><FaUser /> Users</Link>
          </li>
          <li onClick={() => setHambergar(!hambergar)}>
            <Link to='/data'><FaDatabase /> Data</Link>
          </li>
        </ul>
        <i onClick={() => setHambergar(!hambergar)} className='hambMenue'>
          <span></span>
          <span></span>
          <span></span>
        </i>
      </div>
    </section>
  )
}

export default Header