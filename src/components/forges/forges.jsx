import React from 'react'
import { forges } from '../../forges'

import { useState } from 'react'
import './forge.css'
import ForgeMouth from './forgeMouth'

const Forges = () => {
  
  return (
    <div className='forgeContainer'>
    {forges.map((forge) => {
      return (
          <div className='forgeContent'>
            <p className='forgeName'>{forge[0].name}</p>
            <div className="forgeTopBottom">
              <span className="forgeFlash1"></span>
              <div className='forgeMouthCon'>
                <ForgeMouth index='1' forge={forge[1]} fa={forge[0].name}/>
              </div> 
            </div>
            <div className="forgeTopBottom">
              <div  className='forgeMouthCon'>
                <ForgeMouth index='2' forge={forge[2]} fa={forge[0].name}/>
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