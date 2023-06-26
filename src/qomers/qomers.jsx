import React from 'react'

import './qomers.css'

import Forges from '../components/forges/forges'
import { useSelector } from 'react-redux'

const QomersPage = ({homeEdition}) => {
  const list = useSelector((state) => state.list)

  return (
    <section className='qomers'>
      {!homeEdition && <h1>وظعیت قمیرها</h1>}
      <div className='markedList'><p>اتاقهای نشان شده</p><div>{list.markedItems &&
        list.markedItems.map((item) => item.symbol)}</div></div>
      <div className="qomersContainer">
        <Forges />
      </div>
    </section>
  )
}

export default QomersPage