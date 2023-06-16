import React from 'react'
import { useState } from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { LuEdit } from 'react-icons/lu'

import '../components/forges/forge.css'
import axios from 'axios'

const EditData = ({fa, info, showDis}) => {
  const [tick, setTick] = useState(false)
  const [bookMark, setBookMark] = useState(false)
  const [stateForgeOne, setStateForgeOne] = useState(false)
  const [dis, setDis] = useState(false)

  const styles = {
    backgroundColor: `${info.state}`
  }

  const handleSave = async (e, id, num, symbol) => {
    e.preventDefault()
    console.log(e.target.name.value, id)
    const data = {
      "id": id,
      "num": num,
      "symbol": symbol,
      "name": e.target.name.value,
      "quantity": e.target.quantity.value,
      "state": e.target.state.value,
      "dis": e.target.dis.value
    }

    await axios.delete(`http://localhost:3004/forges/${id}`)
    await axios.post('http://localhost:3004/forges', data)
  }

  return (
  <>
  {stateForgeOne && 
  <form onSubmit={(e) => handleSave(e, info.id. info.num, info.symbol)} className='infoEditContainer'>
    <div className='infoEditContent'>
      <h3 className='infoEditTitle'>Forge Mouth : {fa}</h3>
      <div className='infoEdit'>
        <div className='infoEditInput'>
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
            <input type="text" placeholder={info.state} id='state' />  
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
      <textarea name="" id="area" cols="27" rows="6" placeholder={info.dis}></textarea>
      </div>
      <div className='editButton'>
        <small className='editLeadDatabase'>find in database</small>
        <div>
          <button onClick={() => setStateForgeOne(false)} after-show = {stateForgeOne.toString()}>cancel</button>
          <input type='submit' value='save' />
        </div>
        </div>
      </div>
    </form>
    }
    <div onClick={() => setDis(!dis)} className="dataInfoContent">
      <div style={styles} className='dataInfo'>
        <h3>{info.symbol}</h3>
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