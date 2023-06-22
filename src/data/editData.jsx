import React from 'react'
import { useState, useEffect } from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { LuEdit } from 'react-icons/lu'

import '../components/forges/forge.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { controlColor } from '../store/stateUiSlice'

const EditData = ({fa, info, showDis, e}) => {
  const [bookMark, setBookMark] = useState(false)
  const [stateForgeOne, setStateForgeOne] = useState(false)
  const [dis, setDis] = useState(false)

  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)

  const styles = {
    background: `${info.state}`,
    backgroundSize: '10%',
  }

  let styles1

  if(e.toString().at(-1) == '1') {
    styles1 = {
      backgroundColor: 'var(--color-table-background)'
    }
  }else if(e.toString().at(-1) == '3') {
    styles1 = {
      backgroundColor: 'var(--color-table-background)'
    }
  }else if(e.toString().at(-1) == '5') {
    styles1 = {
      backgroundColor: 'var(--color-table-background)'
    }
  }else if(e.toString().at(-1) == '7') {
    styles1 = {
      backgroundColor: 'var(--color-table-background)'
    }
  }else if(e.toString().at(-1) == '9') {
    styles1 = {
      backgroundColor: 'var(--color-table-background)'
    }
  }
  else {
    styles1 = {
      backgroundColor: 'white'
    }
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
            <option value='var(--color-table-backgroung)'>Off</option>  
            <option value="brown">Empty</option>  
          </select> 
          </div>
        </div> 
        <div className='infoEditBookmark'>
          <i onClick={() => setBookMark(!bookMark)}>
            <AiFillStar className={bookMark ? 'infoBookMark' : 'infoNoBookMark'} />
            <AiOutlineStar className='bookMarkBorder'/>
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
      <div style={styles1} className='dataInfo'>
        <div>
          <h3>{info.symbol}</h3>
        </div>
        <div>
          <h3>{info.name}</h3>
        </div>
        <div>
          <h3>{info.quantity}</h3>
        </div>
        <div>
          <h3>{info.state}</h3>
          <h3 style={styles}></h3>
        </div>
        <i onClick={() => setStateForgeOne(true)}><LuEdit />Edit</i>
      </div>
        {(dis || showDis) && <div style={styles1} className='dataEdit'>
          <p>{info.dis}</p>
        </div>}
    </div>
  </>
)}


export default EditData