import './roomManage.css'
import '../components/forges/forge.css'

import React from 'react'
import  { useState } from 'react'

import { useSelector } from "react-redux"

import { SlMagnifier } from 'react-icons/sl'

import { sortedAllList } from '../store/stateSlice'

import EditData from '../data/editData'

const RoomManage = () => {
  const list = useSelector((state) => state.list)
  const [query, setQuery] = useState('')
  const [showDis, setShowDis] = useState(false)

  return (
    <section className="data">
        <div className='dataHeder'>
          <div className='searchContainer'>
            <label className='mianLable' htmlFor='search'><SlMagnifier /></label>
            <input className='mianInput' onChange={(e) => setQuery(e.target.value.toLowerCase())} id='search' type="text" placeholder='جست و جو' />
          </div>
          <div className='dataShowDis'>
            <div>
              <label htmlFor="box"> توضیحات</label>
              <input type='checkbox' id='box' onClick={() => setShowDis(!showDis)} />
            </div>
            <div>
              <label htmlFor="sort">ترتیب بر اساس</label>
              <select className='sortBy' name="" id="sort" onChange={(e) => dispatch(sortedAllList(e.target.value))}>
                <option value='symbol'>نماد</option>
                <option value='name'>اسم</option>
                <option value="quantity">ظرفیت</option>
                <option value="state">وظعیت</option>
              </select>
            </div>
          </div>
        </div>
      <div className="dataContainer">
        <div className='topData'>
          <p>نماد</p> <p>اسم</p> <p>ظرفیت</p> <p>وظعیت</p> <p>رفتارها</p>
        </div>
        {(list.allList) && 
          (list.sortedAllList ? list.sortedAllList : list.allList).filter((info) => (info.symbol.toLowerCase().includes(query)))
          .map((info, e) => {
            return (
              <div className="dataContent">
                <div className="dataInfoContainer"> 
                  <EditData info={info} fa={info.symbol} showDis={showDis} e={e}/>  
                </div>
              </div>
            )
        })}
      </div>
    </section>
  )
}

export default RoomManage