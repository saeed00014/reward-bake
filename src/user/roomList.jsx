import React from 'react'
import { useSelector } from "react-redux"
import DataPage from "../data/data"

import '../components/forges/forge.css'
import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { allList, sortedMergedAllList } from '../store/stateSlice'
import { SlMagnifier } from 'react-icons/sl'

import EditData from '../data/editData'

const RoomList = () => {
  const list = useSelector((state) => state.list)
  const [query, setQuery] = useState('')
  const [showDis, setShowDis] = useState(false)
  const [small, setSmall] = useState(false)

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
              <label htmlFor="small">small size</label>
              <input type='checkbox' id='small' onClick={() => setSmall(!small)} />
            </div>
            <div>
              <label htmlFor="sort">sortby</label>
              <select name="" id="sort" onChange={(e) => dispatch(sortedMergedAllList(e.target.value))}>
                <option value="symbol">number</option>
                <option value="state">state</option>
                <option value="name">name</option>
                <option value="quantity">quantity</option>
              </select>
            </div>
          </div>
        </div>
      <div small-size={small.toString()} className="dataContainer">
        {(list.mergedAllList) && 
          (list.sortedMergedAllList ? list.sortedMergedAllList : list.mergedAllList).filter((info) => (info.symbol.toLowerCase().includes(query)))
          .map((info) => {
            return (
              <div small-size={small.toString()} className="dataContent">
                <div className="dataInfoContainer">
                  <EditData info={info} fa={info.symbol} showDis={showDis} small={small}/>  
                </div>
              </div>
            )
        })}
      </div>
    </section>
  )
}

export default RoomList