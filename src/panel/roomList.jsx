import '../components/forges/forge.css'

import React, {useState} from 'react'

import { useSelector, useDispatch } from "react-redux"

import { sortedAllList } from '../store/stateSlice'
import { SlMagnifier } from 'react-icons/sl'

import EditData from '../data/editData'

const RoomList = () => {
  const dispatch = useDispatch()

  const [query, setQuery] = useState('')
  const [showDis, setShowDis] = useState(false)

  const list = useSelector((state) => state.list)
  
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
                <option value="quantity">ظرفیت</option>
                <option value="state">وظعیت</option>
                <option value="marked">نشان شده</option>
              </select>
            </div>
          </div>
        </div>
      <div className="dataContainer">
        <div className='topData'>
          <p>نماد</p> <p>اسم</p> <p>ظرفیت</p> <p>وظعیت</p> <p>رفتارها</p>
        </div>
        {list.allList && 
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

export default RoomList