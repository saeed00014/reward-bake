import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { useState } from 'react'

import './forge.css'

const ForgeMouth = ({forge, index, fa}) => {
  const [dis, setDis] = useState(false)

  return (
    <>
    {forge.map((info) => {
      const [stateForgeOne, setStateForgeOne] = useState(false)
      const [edit, setEdit] = useState(false)
      const [tick, setTick] = useState(false)
      const [bookMark, setBookMark] = useState(false)

      console.log(info.state)

      const styles = {
        backgroundColor: `${info.state}`,
      }

      return (
        <div key={info.num} className='infoCon'>
          <span onClick={() => setStateForgeOne(!stateForgeOne)} after-show = {stateForgeOne.toString()}  data-content={info.num} style={styles}>
            {info.num}
          </span>
          {/*{stateForgeOne && 
            <div className='infoContent'>
              <div className="info">
                <p>name: {info.name}</p>
                <p>Qty: {info.quantity}</p>
                <p>state: {info.state}</p>
                <h4 onClick={() => setStateForgeOne(!stateForgeOne)} after-show= {stateForgeOne.toString()}>Close</h4>
              </div>
              <div className="state">
                <div className="quantity">
                  <i>
                    <AiOutlineMinusCircle />
                  </i>
                  <i>
                    <AiOutlinePlusCircle />
                  </i>
                </div>
                <div className='bookMark'>
                  <i onClick={() => setBookMark(!bookMark)}>
                    <AiFillStar className={bookMark ? 'ibookMark' : 'inoBookMark'} />
                    <AiOutlineStar className='bokkMarkBorder'/>
                  </i>
                  <i onClick={() => setTick(!tick)}>
                    {tick && <TiTick />}
                  </i>
                </div>
                <div className="discription">
                  <p onClick={() => setDis(!dis)}>Details</p>
                </div>
              </div>
                {dis && <p onClick={() => setDis(!dis)} className='infoDis'>{info.dis}</p>}
          </div>
          }*/}
          {stateForgeOne && 
          <div className='infoEditContainer'>
            <div className='infoEditContent'>
              <h3 className='infoEditTitle'>Forge Mouth : {fa}{info.num}</h3>
              <div className='infoEdit'>
                <div className='infoEditInput'>
                  <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" value={info.name} id='name' />  
                  </div>
                  <div>
                    <label htmlFor="qty">Quantity : </label>
                    <input type="text" value={info.quantity} id='qty' />  
                  </div>
                  <div>
                    <label htmlFor="state">State : </label>
                    <input type="text" value={info.state} id='state' />  
                  </div>
                </div> 
                <div className='infoEditBookmark'>
                  <i onClick={() => setBookMark(!bookMark)}>
                    <p>Mark</p>
                    <AiFillStar className={bookMark ? 'infoBookMark' : 'infoNoBookMark'} />
                    <AiOutlineStar className='bookMarkBorder'/>
                  </i>
                  <i onClick={() => setTick(!tick)}>
                    <p>Checked</p>
                    {tick && <TiTick />}
                  </i>
                </div>
              </div>
              <div className='editDetails'>
              <label htmlFor="area">add details :</label>
              <textarea name="" id="area" cols="27" rows="6"></textarea>
              </div>
              <div className='editButton'>
                <small className='editLeadDatabase'>find in database</small>
                <div>
                  <button onClick={() => setStateForgeOne(!stateForgeOne)} after-show = {stateForgeOne.toString()}>cancel</button>
                  <button>save</button>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      )})}
    </>
  )
}

export default ForgeMouth