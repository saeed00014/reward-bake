import './forge.css'
import React from 'react'

import Forge from './forges'

import { useSelector } from 'react-redux'

const Forges11 = () => {
  const list = useSelector((state) => state.list)
  console.log(list.forgeOne)
  
  return (
    <div className='forgeContainer'>
      {list.forgeOne &&
        list.forgeOne.map((info) => {
          return (
              <>
                {info.map((gg) => {
                  console.log(gg)
                  return (
                    <h1>{gg.id}</h1>
                  )
                })}
              </>
            )
      })}
    </div>      
  )
}

export default Forges11