import './qomers.css'

import React from 'react'

import { useSelector } from 'react-redux'

import Forges from '../components/forges/forges'

const QomersPage = ({homeEdition}) => {
  return (
    <section className='qomers'>
      {!homeEdition && <h1>وظعیت قمیرها</h1>}
      <div className="qomersContainer">
        <Forges />
      </div>
    </section>
  )
}

export default QomersPage