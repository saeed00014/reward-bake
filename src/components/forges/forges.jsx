import React from 'react'
import { useState } from 'react'
import './forge.css'
import ForgeMouth from './forgeMouth'
import { allList } from '../../store/stateSlice'
import { useSelector } from 'react-redux'

const Forges = () => {
  const list = useSelector((state) => state.list)

  return (
    <div className='forgeContainer'>
    {list.allList &&
      list.allList.map((forge) => {
        console.log(forge[0])
      return (
          <div className='forgeContent'>
            <p className='forgeName'>Forge : {forge[0][0].symbol.slice(0, 2)}</p>
            <div className="forgeTopBottom">
              <span className="forgeFlash1"></span>
              <div className='forgeMouthCon'>
                <ForgeMouth index='1' forge={forge[0]}/>
              </div> 
            </div>
            <div className="forgeTopBottom">
              <div  className='forgeMouthCon'>
                <ForgeMouth index='2' forge={forge[1]}/>
              </div> 
              <span className="forgeFlash2"></span>
            </div>
          </div>
        )
      })}
    </div>      
  )
}

export default Forges