import './manage.css'

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { controlPanel } from '../store/stateUiSlice'

import { FaUser } from 'react-icons/fa'
import { BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs'

const ManageBox = ({title, discription, name, icon}) => {
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  
  return (
    <div className='box'>
      <div className='boxContainer'>
        <h1>{title}</h1>
        <p>{discription}</p>
        <div className='boxButton'>
          <button onClick={() => dispatch(controlPanel(`لیست ${name}`))}>لیست {name}</button>
          <button onClick={() => dispatch(controlPanel(`مدیریت ${name}`))}>مدیریت {name}</button>
          <i className='boxIcon'>
            {icon == 'FaUser' ? <FaUser /> : <BsFillFileEarmarkSpreadsheetFill />}
          </i> 
        </div>
      </div>
    </div>
  )
}

export default ManageBox