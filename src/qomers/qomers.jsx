import React from 'react'

import './qomers.css'

import Forges from '../components/forges/forges'

const QomersPage = ({homeEdition}) => {
  console.log(homeEdition)
  return (
    <section className='qomers'>
      {!homeEdition && <h1>Qomers State</h1>}
      <div className="qomersContainer">
        <Forges />
      </div>
    </section>
  )
}

export default QomersPage