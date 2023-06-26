import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { useState } from 'react'

import './forge.css'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { setStateMark } from '../../store/stateSlice'

const ForgeMouth = ({forge}) => {
  
  return (
    <>
    {forge.map((info) => {
      const [stateForgeOne, setStateForgeOne] = useState(false)
      const [mark, setMark] = useState(false)
      const [tick, setTick] = useState(false)
      const [bookMark, setBookMark] = useState(false)
      const dispatch = useDispatch()

      const handleBookMark = (id) => {
        setBookMark(!bookMark)
        setMark(!mark)
        dispatch(setStateMark(id))
      }
      
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
              <h3 className='infoEditTitle'> {info.symbol} : قمیر دهانه</h3>
              <div className='infoEdit'>
                <div className='infoEditInput'>
                  <div>
                    <label htmlFor="name"> : آجر</label>
                    <select name="" id="name">
                      <option value="">انتخاب آجر</option>
                      <option value="3.6">آجر 3.6</option>
                      <option value="5.6">آجر 5.6</option>
                      <option value="4.2">آجر 4.2</option>
                      <option value="9.1">آجر 9.1</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name"> : اسم</label>
                    <input type="text" placeholder={info.name} id='name' />  
                  </div>
                  <div>
                    <label htmlFor="qty"> : ظرفیت</label>
                    <input type="text" placeholder={info.quantity} id='qty' />  
                  </div>
                  <div>
                    <label htmlFor="state"> : وظعیت</label>
                    <select name="" id="state">
                      <option value="">انتخاب وظعیت</option>  
                      <option value="green">پخته شده</option>  
                      <option value="orange">در حال پخت</option>  
                      <option value="gray">خاموش</option>  
                      <option value="brown">خالی</option>  
                    </select> 
                  </div>
                </div> 
                <div className='infoEditBookmark'>
                  <i after-show = {bookMark.toString()} onClick={() => handleBookMark(info.symbol)}>
                    <AiFillStar className={bookMark ? 'infoBookMark' : 'infoNoBookMark'} />
                    <AiOutlineStar className='bookMarkBorder'/>
                  </i>
                </div>
              </div>
              <div className='editDetails'>
              <label htmlFor="area"> : اضافه کردن توضیحات</label>
              <textarea placeholder={info.dis} name="" id="area" cols="27" rows="6"></textarea>
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
      )})}
    </>
  )
}

export default ForgeMouth