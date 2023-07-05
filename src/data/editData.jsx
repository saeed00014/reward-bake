import '../components/forges/forge.css'

import React, { useEffect } from 'react'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import { addChangedList, setStateMark } from '../store/stateSlice'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { LuEdit } from 'react-icons/lu'

const EditData = ({fa, info, showDis, e, value}) => {
  const [bookMark, setBookMark] = useState(false)
  const [stateForgeOne, setStateForgeOne] = useState(false)
  const [dis, setDis] = useState(false)
  const [state, setState] = useState(info.state)
  const [stateBrick, setStateBrick] = useState(info.brick)

  const list = useSelector((state) => state.list)
  const dispatch = useDispatch()
  
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
  useEffect(() => {
    setBookMark(false)
    if(list.markedItems.find((item) => item.id == info.id )) {
      setBookMark(true)
    }else {
      setBookMark(false)
    }
  }, [value])  

  const handleSave = async (e, info, id) => {
    e.preventDefault()
    console.log(e)
    const data = {
      "id": id,
      "num": info.num,
      "symbol": info.symbol,
      "name": e.target.name.value ? e.target.name.value : info.name,
      "quantity": e.target.qty.value ? e.target.qty.value : info.quantity,
      "state": e.target.state.value ? e.target.state.value : info.state,
      "brick": e.target.stateBrick.value ? e.target.stateBrick.value : info.brick,
      "dis": e.target.area.value ? e.target.area.value : info.dis
    }
    setStateForgeOne(false)
    dispatch(addChangedList(data))
    await axios.delete(`http://localhost:3004/forges/${id}`)
    await axios.post('http://localhost:3004/forges', data)
    
  }

  
  const handleBookMark = (info) => {
    dispatch(setStateMark(info))
    setBookMark(!bookMark)
  }
  let markedData = JSON.parse(localStorage.getItem('marked'))
  const marked = markedData && markedData.find((marked) => marked.id == info.id)

  const handleState = (info, e) => {
    setState(e.target.value)
  }

  const handleStateBrick = (info, e) => {
    setStateBrick(e.target.value)
  }

  return (
  <>
  {stateForgeOne && 
  <form onSubmit={(e) => handleSave(e, info, info.id)} className='infoEditContainer'>
      <div className='infoEditContent'>
      <h3 className='infoEditTitle' > {fa} : قمیر دهانه</h3>
      <div className='infoEdit'>
        <div className='infoEditInput'>
          <div>
            <label htmlFor="stateBrick" > : آجر</label>
            <select name=""  id="stateBrick" value={stateBrick} onChange={(e) => handleStateBrick(info, e)} >
              <option value="انتخاب آجر">انتخاب آجر</option>
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
          <select name="" id="state" value={state} onChange={(e) => handleState(info, e)}>
            <option value="پخته شده">پخته شده</option>  
            <option value="در حال پخت">در حال پخت</option>  
            <option value='خاموش'>خاموش</option>  
            <option value="خالی">خالی</option>  
          </select> 
          </div>
        </div> 
        <div onClick={() => handleBookMark(info)} className='infoEditBookmark'>
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
          <h3>
            {info.symbol}
            {marked && 
              <p>
                <AiFillStar />
              </p>
            }
          </h3>
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