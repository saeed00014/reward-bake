import React from 'react'
import { useState } from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { LuEdit } from 'react-icons/lu'

import '../components/forges/forge.css'

const EditData = ({fa, info, showDis}) => {
  const [tick, setTick] = useState(false)
  const [bookMark, setBookMark] = useState(false)
  const [stateForgeOne, setStateForgeOne] = useState(false)
  const [dis, setDis] = useState(false)

  const styles = {
    backgroundColor: `${info.state}`
  }

  const symbol =  fa + info.num
  console.log(symbol)

  return (
  <>
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
      <textarea name="" id="area" cols="27" rows="6" value={info.dis}></textarea>
      </div>
      <div className='editButton'>
        <small className='editLeadDatabase'>find in database</small>
        <div>
          <button onClick={() => setStateForgeOne(false)} after-show = {stateForgeOne.toString()}>cancel</button>
          <button>save</button>
        </div>
        </div>
      </div>
    </div>
    }
    <div onClick={() => setDis(!dis)} style={styles} className="dataInfoContent">
      <div className='dataInfo'>
        <h3>{symbol}</h3>
        <h3>{info.name}</h3>
        <h3>{info.quantity}</h3>
        <h3>{info.state}</h3>
        <i onClick={() => setStateForgeOne(true)}><LuEdit />Edit</i>
      </div>
      {(dis || showDis) && <div className='dataEdit'>
        <p>{info.dis}</p>
      </div>}
    </div>
  </>
)}


export default EditData