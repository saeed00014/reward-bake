import React, { useEffect, useState } from 'react'

import './data.css'

import axios from 'axios'

import { useDispatch } from 'react-redux'
import { allList } from '../store/stateSlice'
import { useSelector } from 'react-redux'

import EditData from './editData'


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
        <div>
          <input onChange={(e) => setQuery(e.target.value)} type="text" />
          <button onClick={() => setShowDis(!showDis)}>show dis</button>
        </div>
      <div className="dataContainer">
        {list.allList && 
          list.allList.map((forge) => {
            let name = forge[0].name
            return (
              <div className="dataContent">
              <div className="dataInfoContainer">
                {forge[1].filter((info) => info.state.includes(query) || info.name.includes(query))
                  .map((info) => {
                    return (
                      <EditData info={info} fa={name} showDis={showDis}/>
                    )
                })}
                {forge[2].filter((info) => info.state.includes(query))
                  .map((info) => {
                    return (
                      <EditData info={info} fa={name}/>
                    )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DataPage