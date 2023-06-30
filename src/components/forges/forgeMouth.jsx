import './forge.css'

import React, { useEffect } from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import axios from 'axios'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { setStateMark } from '../../store/stateSlice'

const ForgeMouth = ({info}) => {
  const dispatch = useDispatch()
  let forgeInfo = info

  return (
    forgeInfo.map((mouth) => {
      const [stateForgeOne, setStateForgeOne] = useState(false)
      const [marked, setMarked] = useState(false)
      const [mark, setMark] = useState(false)
      const [bookMark, setBookMark] = useState(false)
        {/*useEffect(() => {
          let items = list.markedItems && list.markedItems
          let item = false
          if(items == '') {
            item = false
          }else {
            item = true
          }
          console.log(items)
          console.log(item)
          
          let founded = ''
          if(item == true) {
            founded = items.find((item) => item.symbol == info.symbol)
          } else (
            founded = ''
            )
            console.log(founded)
            
            
            founded == '' ? setMarked(false) :  setMarked(true)
            
          }, [mark])*/}
  
  
        const handleBookMark = (id) => {
          setBookMark(!bookMark)
          setMark(!mark)
          dispatch(setStateMark(id))
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
  
        const handleSubmit = async (e, id) => {
          e.preventDefault()
          await axios.delete('http://localhost:3004/forges')
        }
  
        return (
          <div className='infoCon'>
            <span onClick={() => setStateForgeOne(!stateForgeOne)} after-show = {stateForgeOne.toString()}  data-content={info.num} style={styles}>
              {mouth.num}
              <p>
              {marked && <AiFillStar />}
              </p>
            </span>
            {stateForgeOne && 
            <div className='infoEditContainer'>
              <form onSubmit={(e) => handleSubmit(e, mouth.symbol)} className='infoEditContent'>
                <h3 className='infoEditTitle'> {mouth.symbol} : قمیر دهانه</h3>
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
                      <input type="text" placeholder={mouth.name} id='name' />  
                    </div>
                    <div>
                      <label htmlFor="qty"> : ظرفیت</label>
                      <input type="text" placeholder={mouth.quantity} id='qty' />  
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