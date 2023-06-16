import React, { useEffect, useState } from 'react'

import './data.css'

import axios from 'axios'

import { useDispatch } from 'react-redux'
import { allList, sortedMergedAllList } from '../store/stateSlice'
import { useSelector } from 'react-redux'

import EditData from './editData'

import { SlMagnifier } from 'react-icons/sl'

const DataPage = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [showDis, setShowDis] = useState(false)
  
  const list = useSelector((state) => state.list)
  
  useEffect (() => {
    const handleGetForges = async () => {
      const ress = await axios.get('http://localhost:3004/forges') 
      
      dispatch(allList(ress.data))
    }
    
    handleGetForges()
    
  }, [])

  
  return (
    <section className="data">
        <h1 className='dataTitle'>DataBase</h1>
        <div className='dataHeder'>
          <input className='mianInput' onChange={(e) => setQuery(e.target.value.toLowerCase())} id='search' type="text" placeholder='search' />
          <label className='mianLable' htmlFor='search'><SlMagnifier /></label>
          <div className='dataShowDis'>
            <div>
              <label htmlFor="box"> discription</label>
              <input type='checkbox' id='box' onClick={() => setShowDis(!showDis)} />
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
      <div className="dataContainer">
        {(list.mergedAllList) && 
          (list.sortedMergedAllList ? list.sortedMergedAllList : list.mergedAllList).filter((info) => (info.symbol.toLowerCase().includes(query)))
          .map((info) => {
            return (
              <div className="dataContent">
                <div className="dataInfoContainer">
                  <EditData info={info} fa={info.symbol} showDis={showDis}/>  
                </div>
              </div>
            )
        })}
      </div>
    </section>
  )
}

export default DataPage