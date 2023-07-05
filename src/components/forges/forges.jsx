import './forge.css'

import React from 'react'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import axios from 'axios'

import ForgeMouth from './forgeMouth'
import EditData from '../../data/editData'

import { useSelector } from 'react-redux'

import { manageState, addList, cleareState, allList, sortedAllList } from '../../store/stateSlice'
import { LuDice1 } from 'react-icons/lu'

const Forges = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.list)
    const forgeOne = [list.forgeOne]
    const forgeTwo = [list.forgeTwo]
    const forgeThere = [list.forgeThere]
    const forgeFour = [list.forgeFour]
    const forgeFive = [list.forgeFive]

    useEffect(() => {
      dispatch(sortedAllList('id'))
      console.log(list.sortedAllList)
    }, [])
    
    return (
      <div className='forgeContainer'>
        {list.forgeOne[0][0] && 
          <>

            <div className='forgeContent'>
              <p className='forgeName' > FA : قمیر</p>
              <div className="forgeTopBottom">
                <span className="forgeFlash1"></span>
                <div className='forgeMouthCon'>
                  <ForgeMouth index='1' info={forgeOne[0][0]}/>
                </div> 
              </div>
              <div className="forgeTopBottom">
                <div  className='forgeMouthCon'>
                  <ForgeMouth index='2' info={forgeOne[0][1]}/>
                </div> 
                <span className="forgeFlash2"></span>
              </div>
            </div>
            <div className='forgeSmallContent'>
              <p className='forgeSmallName'> FA : قمیر</p>
              <div className="forgeSmallTopBottom">
                <span className="forgeSmallFlash1"></span>
                <div className='forgeSmallMouthCon'>
                  <ForgeMouth index='1' info={forgeOne[0][0]}/>
                  <ForgeMouth index='2' info={forgeOne[0][1]}/>
                </div> 
                <span className="forgeSmallFlash2"></span>
              </div>
            </div>


            <div className='forgeContent'>
              <p className='forgeName' > FB : قمیر</p>
              <div className="forgeTopBottom">
                <span className="forgeFlash1"></span>
                <div className='forgeMouthCon'>
                  <ForgeMouth index='1' info={forgeTwo[0][0]}/>
                </div> 
              </div>
              <div className="forgeTopBottom">
                <div  className='forgeMouthCon'>
                  <ForgeMouth index='2' info={forgeTwo[0][1]}/>
                </div> 
                <span className="forgeFlash2"></span>
              </div>
            </div>
            <div className='forgeSmallContent'>
              <p className='forgeSmallName'> FB : قمیر</p>
              <div className="forgeSmallTopBottom">
                <span className="forgeSmallFlash1"></span>
                <div className='forgeSmallMouthCon'>
                  <ForgeMouth index='1' info={forgeTwo[0][0]}/>
                  <ForgeMouth index='2' info={forgeTwo[0][1]}/>
                </div> 
                <span className="forgeSmallFlash2"></span>
              </div>
            </div>


            <div className='forgeContent'>
              <p className='forgeName' > FC : قمیر</p>
              <div className="forgeTopBottom">
                <span className="forgeFlash1"></span>
                <div className='forgeMouthCon'>
                  <ForgeMouth index='1' info={forgeThere[0][0]}/>
                </div> 
              </div>
              <div className="forgeTopBottom">
                <div  className='forgeMouthCon'>
                  <ForgeMouth index='2' info={forgeThere[0][1]}/>
                </div> 
                <span className="forgeFlash2"></span>
              </div>
            </div>
            <div className='forgeSmallContent'>
              <p className='forgeSmallName'> FC : قمیر</p>
              <div className="forgeSmallTopBottom">
                <span className="forgeSmallFlash1"></span>
                <div className='forgeSmallMouthCon'>
                  <ForgeMouth index='1' info={forgeThere[0][0]}/>
                  <ForgeMouth index='2' info={forgeThere[0][1]}/>
                </div> 
                <span className="forgeSmallFlash2"></span>
              </div>
            </div>


            <div className='forgeContent'>
              <p className='forgeName' > FD : قمیر</p>
              <div className="forgeTopBottom">
                <span className="forgeFlash1"></span>
                <div className='forgeMouthCon'>
                  <ForgeMouth index='1' info={forgeFour[0][0]}/>
                </div> 
              </div>
              <div className="forgeTopBottom">
                <div  className='forgeMouthCon'>
                  <ForgeMouth index='2' info={forgeFour[0][1]}/>
                </div> 
                <span className="forgeFlash2"></span>
              </div>
            </div>
            <div className='forgeSmallContent'>
              <p className='forgeSmallName'> FD : قمیر</p>
              <div className="forgeSmallTopBottom">
                <span className="forgeSmallFlash1"></span>
                <div className='forgeSmallMouthCon'>
                  <ForgeMouth index='1' info={forgeFour[0][0]}/>
                  <ForgeMouth index='2' info={forgeFour[0][1]}/>
                </div> 
                <span className="forgeSmallFlash2"></span>
              </div>
            </div>


            <div className='forgeContent'>
              <p className='forgeName' > FE : قمیر</p>
              <div className="forgeTopBottom">
                <span className="forgeFlash1"></span>
                <div className='forgeMouthCon'>
                  <ForgeMouth index='1' info={forgeFive[0][0]}/>
                </div> 
              </div>
              <div className="forgeTopBottom">
                <div  className='forgeMouthCon'>
                  <ForgeMouth index='2' info={forgeFive[0][1]}/>
                </div> 
                <span className="forgeFlash2"></span>
              </div>
            </div>
            <div className='forgeSmallContent'>
              <p className='forgeSmallName'> FE : قمیر</p>
              <div className="forgeSmallTopBottom">
                <span className="forgeSmallFlash1"></span>
                <div className='forgeSmallMouthCon'>
                  <ForgeMouth index='1' info={forgeFive[0][0]}/>
                  <ForgeMouth index='2' info={forgeFive[0][1]}/>
                </div> 
                <span className="forgeSmallFlash2"></span>
              </div>
            </div>

          </>
          }
    </div>      
  )
}

export default Forges