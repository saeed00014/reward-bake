import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './header.css'

import { FaUser, FaDatabase } from 'react-icons/fa'
import { AiFillFire } from 'react-icons/ai'

const Header = () => {
  const [hambergar, setHambergar] = useState(false)

  return (
    <>
      <section className='HeaderMain'>
        <div className="headerMainContainer">
          <ul className="navLink">
            <li className="logo">
              <h1>
                <Link to='/'>
                  LiO
                </Link>
              </h1>
            </li>
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

      <section className={hambergar ? 'HeaderSmall' : 'HeaderSmallHide'}>
        <div className="headerSmallContainer">
          <ul className={hambergar ? 'hambergar' : 'nohambergar'}>
            <li show-hamb={hambergar.toString()} onClick={() => setHambergar(false)} className="logo">
              <h1>
                <Link to='/'>
                  LiO
                </Link>
              </h1>
            </li>
            <li onClick={() => setHambergar(false)}>
              <Link to='/Qomers'><AiFillFire /> Qomers</Link>
            </li>
            <li onClick={() => setHambergar(false)}>
              <Link to='/user'><FaUser /> Users</Link>
            </li>
            <li onClick={() => setHambergar(false)}>
              <Link to='/data'><FaDatabase /> Data</Link>
            </li>
            <li onClick={() => setHambergar(!hambergar)} className='hambMenue'>
              <i>
                <span></span>
                <span></span>
                <span></span>
              </i>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header