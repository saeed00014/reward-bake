import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { useState } from 'react'

import './forge.css'
import axios from 'axios'

const ForgeMouth = ({forge}) => {

  return (
    <>
    {forge.map((info) => {
      const [stateForgeOne, setStateForgeOne] = useState(false)
      const [mark, setMark] = useState(false)
      const [tick, setTick] = useState(false)
      const [bookMark, setBookMark] = useState(false)

      const styles = {
        backgroundColor: `${info.state}`,
      }

      const handleSubmit = async (e, id) => {
        e.preventDefault()
        await axios.delete('http://localhost:3004/forges')
      }

      return (
        <div key={info.num} className='infoCon'>
          <span onClick={() => setStateForgeOne(!stateForgeOne)} after-show = {stateForgeOne.toString()}  data-content={info.num} style={styles}>
            {info.num}
            <p>
              {mark && <AiFillStar />}
            </p>
          </span>
          {stateForgeOne && 
          <div className='infoEditContainer'>
            <form onSubmit={(e) => handleSubmit(e, info.symbol)} className='infoEditContent'>
              <h3 className='infoEditTitle'>Forge Mouth : {info.symbol}</h3>
              <div className='infoEdit'>
                <div className='infoEditInput'>
                  <div>
                    <label htmlFor="name">Brick : </label>
                    <select name="" id="name">
                      <option value="">Choose Brick</option>
                      <option value="3.6">Brick 3.6</option>
                      <option value="5.6">Brick 5.6</option>
                      <option value="4.2">Brick 4.2</option>
                      <option value="9.1">Brick 9.1</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" placeholder={info.name} id='name' />  
                  </div>
                  <div>
                    <label htmlFor="qty">Quantity : </label>
                    <input type="text" placeholder={info.quantity} id='qty' />  
                  </div>
                  <div>
                    <label htmlFor="state">State : </label>
                    <select name="" id="state">
                      <option value="">Choose state</option>  
                      <option value="green">Done</option>  
                      <option value="orange">Cooking</option>  
                      <option value="gray">Off</option>  
                      <option value="brown">Empty</option>  
                    </select> 
                  </div>
                </div> 
                <div className='infoEditBookmark'>
                  <i onClick={() => {
                     setBookMark(!bookMark)
                     setMark(!mark)
                     }}>
                    <AiFillStar className={bookMark ? 'infoBookMark' : 'infoNoBookMark'} />
                    <AiOutlineStar className='bookMarkBorder'/>
                  </i>
                </div>
              </div>
              <div className='editDetails'>
              <label htmlFor="area">add details :</label>
              <textarea placeholder={info.dis} name="" id="area" cols="27" rows="6"></textarea>
              </div>
              <div className='editButton'>
                <small className='editLeadDatabase'>find in database</small>
                <div>
                  <button onClick={() => setStateForgeOne(!stateForgeOne)} after-show = {stateForgeOne.toString()}>cancel</button>
                  <button>save</button>
                </div>
              </div>
            </form>
          </div>
          }
        </div>
      )})}
    </>
  )
}

export default ForgeMouth