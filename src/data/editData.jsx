import '../components/forges/forge.css'

import React from 'react'
import { useState } from 'react'

import axios from 'axios'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { LuEdit } from 'react-icons/lu'


const EditData = ({fa, info, showDis, e}) => {
  const [bookMark, setBookMark] = useState(false)
  const [stateForgeOne, setStateForgeOne] = useState(false)
  const [dis, setDis] = useState(false)
  
  let stat

  if(info.state === "پخته شده") {
    stat = 'green'
  }else if (info.state === 'خاموش') {
    stat = 'brown'
  }else if (info.state === "در حال پخت") {
    stat = 'orange'
  }else {
    stat = 'gray'
  }

  const styles = {
    background: `${stat}`,
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
      <h3 className='infoEditTitle' > {fa} : قمیر دهانه</h3>
      <div className='infoEdit'>
        <div className='infoEditInput'>
          <div>
            <label htmlFor="name" > : آجر</label>
            <select name="" id="name">
              <option value="">انتخاب آجر</option>
              <option value="3.6">آجر 3.6</option>
              <option value="5.6">آجر 5.6</option>
              <option value="4.2">آجر 4.2</option>
              <option value="9.1">آجر 9.1</option>
            </select>
          </div>
          <div>
            <label htmlFor="name" > : اسم</label>
            <input type="text" placeholder={info.name} id='name' />  
          </div>
          <div>
            <label htmlFor="qty" > : ظرفیت</label>
            <input type="text" placeholder={info.quantity} id='qty' />  
          </div>
          <div>
          <label htmlFor="state" > : وظعیت</label>
          <select name="" id="state">
            <option value="">انتخاب وظعیت</option>  
            <option value="green">پخته شده</option>  
            <option value="orange">در حال پخت</option>  
            <option value='var(--color-table-backgroung)'>خاموش</option>  
            <option value="brown">خالی</option>  
          </select> 
          </div>
        </div> 
        <div className='infoEditBookmark'>
          <i>
            <AiFillStar className={bookMark ? 'infoBookMark' : 'infoNoBookMark'} />
            <AiOutlineStar className='bookMarkBorder'/>
          </i>
        </div>
      </div>
      <div className='editDetails'>
      <label htmlFor="area"> : اضافه کردن توضیحات</label>
      <textarea name="" id="area" cols="27" rows="6" placeholder={info.dis}></textarea>
      </div>
      <div className='editButton'>
        <div>
          <button onClick={() => setStateForgeOne(false)} after-show = {stateForgeOne.toString()}>لغو</button>
          <input type='submit' value='تایید' />
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
        <i onClick={() => setStateForgeOne(true)}><LuEdit />تغییر</i>
      </div>
        {(dis || showDis) && <div style={styles1} className='dataEdit'>
          <p>{info.dis}</p>
        </div>}
    </div>
  </>
)}


export default EditData