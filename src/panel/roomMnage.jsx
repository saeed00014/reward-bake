import React from 'react'
import { useSelector } from "react-redux"

import '../components/forges/forge.css'
import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { allList, sortedMergedAllList } from '../store/stateSlice'
import { SlMagnifier } from 'react-icons/sl'

import EditData from '../data/editData'

const RoomManage = () => {
  const list = useSelector((state) => state.list)
  const [query, setQuery] = useState('')
  const [showDis, setShowDis] = useState(false)

  return (
    <section className="data">
        <div className='dataHeder'>
          <div className='searchContainer'>
            <input className='mianInput' onChange={(e) => setQuery(e.target.value.toLowerCase())} id='search' type="text" placeholder='search' />
            <label className='mianLable' htmlFor='search'><SlMagnifier /></label>
          </div>
          <div className='dataShowDis'>
            <div>
              <label htmlFor="box"> discription</label>
              <input type='checkbox' id='box' onClick={() => setShowDis(!showDis)} />
            </div>
            <div>
              <label htmlFor="sort">Sort By</label>
              <select className='sortBy' name="" id="sort" onChange={(e) => dispatch(sortedMergedAllList(e.target.value))}>
                <option value='symbol'>Symbol</option>
                <option value='name'>Name</option>
                <option value="quantity">Quantity</option>
                <option value="state">State</option>
              </select>
            </div>
          </div>
        </div>
      <div className="dataContainer">
        <div className='topData'>
          <p>name</p> <p>symbol</p> <p>capacity</p> <p>state</p> <p>actions</p>
        </div>
        {(list.mergedAllList) && 
          (list.sortedMergedAllList ? list.sortedMergedAllList : list.mergedAllList).filter((info) => (info.symbol.toLowerCase().includes(query)))
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