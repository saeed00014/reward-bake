import './forge.css'

import React, { useEffect } from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import axios from 'axios'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { setStateMark, addChangedForge } from '../../store/stateSlice'

const ForgeMouth = ({info}) => {
  const dispatch = useDispatch()
  let forgeInfo = info

  return (
    forgeInfo.map((mouth) => {
      const list = useSelector((state) => state.list)
      const [stateForgeOne, setStateForgeOne] = useState(false)
      const [mark, setMark] = useState(false)
      const [bookMark, setBookMark] = useState(false)
      const [state, setState] = useState(mouth.state)

      let markedData = JSON.parse(localStorage.getItem('marked'))

      const marked = markedData && markedData.find((marked) => marked.id == mouth.id)

      const handleBookMark = (info) => {
        setMark(!mark)
        dispatch(setStateMark(info))
        setBookMark(!bookMark)
      }
      
      let stat = ''
      if(mouth.state === "پخته شده") {
        stat = 'green'
      }else if (mouth.state === 'خاموش') {
        stat = 'brown'
      }else if (mouth.state === "در حال پخت") {
        stat = 'orange'
      }else {
        stat = 'gray'
      }
      
      const styles = {
        background: `${stat}`,
      }
      
      const handleSave = async (e, info, id) => {
        e.preventDefault()
        const data = {
          "id": id,
          "num": info.num,
          "symbol": info.symbol,
          "name": e.target.name.value ? e.target.name.value : info.name,
          "quantity": e.target.qty.value ? e.target.qty.value : info.quantity,
          "state": e.target.state.value ? e.target.state.value : info.state,
          "dis": e.target.area.value ? e.target.area.value : info.dis
        }
        setStateForgeOne(false)
        dispatch(addChangedForge(data))
        await axios.delete(`http://localhost:3004/forges/${id}`)
        await axios.post('http://localhost:3004/forges', data)
      }

      const handleState = (e) => {
        setState(e.target.value)
      }
  
        return (
          <div className='infoCon'>
            <span onClick={() => setStateForgeOne(!stateForgeOne)} after-show = {stateForgeOne.toString()}  data-content={mouth.num} style={styles}>
              {mouth.num}
              {marked && 
                <p>
                  <AiFillStar />
                </p>
              }
            </span>
            {stateForgeOne && 
            <div className='infoEditContainer'>
              <form onSubmit={(e) => handleSave(e, mouth, mouth.id)} className='infoEditContent'>
                <h3 className='infoEditTitle'> {mouth.symbol} : قمیر دهانه</h3>
                <div className='infoEdit'>
                  <div className='infoEditInput'>
                    <div>
                      <label htmlFor="nameb"> : آجر</label>
                      <select name="" id="nameb">
                        <option value="">انتخاب آجر</option>
                        <option value="3.6">آجر 3.6</option>
                        <option value="5.6">آجر 5.6</option>
                        <option value="4.2">آجر 4.2</option>
                        <option value="9.1">آجر 9.1</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="name"> : اسم</label>
                      <input type="text" placeholder={mouth.name} id='name' />  
                    </div>
                    <div>
                      <label htmlFor="qty"> : ظرفیت</label>
                      <input type="text" placeholder={mouth.quantity} id='qty' />  
                    </div>
                    <div>
                    <label htmlFor="state" > : وظعیت</label>
                    <select name="" value={state} onChange={(e) => handleState(e)} id="state">
                      <option value="پخته شده">پخته شده</option>  
                      <option value="در حال پخت">در حال پخت</option>  
                      <option value='خاموش'>خاموش</option>  
                      <option value="خالی">خالی</option>  
                    </select> 
                    </div>
                  </div> 
                  <div className='infoEditBookmark'>
                    <i after-show = {bookMark.toString()} onClick={() => handleBookMark(mouth)}>
                      <AiFillStar className={bookMark ? 'infoBookMark' : 'infoNoBookMark'} />
                      <AiOutlineStar className='bookMarkBorder'/>
                    </i>
                  </div>
                </div>
                <div className='editDetails'>
                <label htmlFor="area"> : اضافه کردن توضیحات</label>
                <textarea placeholder={mouth.dis} name="" id="area" cols="27" rows="6"></textarea>
                </div>
                <div className='editButton'>
                  <small className='editLeadDatabase'>پیداکردن در داده ها</small>
                  <div>
                    <button onClick={() => setStateForgeOne(!stateForgeOne)} after-show = {stateForgeOne.toString()}>لغو</button>
                    <input type='submit' value='تایید' />
                  </div>
                </div>
              </form>
            </div>
            }
          </div>
        )
  
      })

  )
  
}

export default ForgeMouth