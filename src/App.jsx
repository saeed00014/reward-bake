import { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/header/header'
import HomePage from './home/home'
import UserPage from './user/user'
import DataPage from './data/data'
import QomersPage from './qomers/qomers'

import { forges } from './forges'
import { useDispatch } from 'react-redux'

import { manageState, addList, cleareState } from './store/stateSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cleareState())

    forges.map((forge) => {
      const forgeName = forge[0].name

      forge[1].map((info) => {
        if(info.state == 'green') {
          dispatch(manageState('green'))
          dispatch(addList({state: 'green', num: forgeName + info.num}))
        }else if (info.state == 'brown') {
          dispatch(manageState('brown'))
          dispatch( addList({state: 'brown', num: forgeName + info.num}))
        }else if (info.state == 'orange') {
          dispatch(manageState('orange'))
          dispatch(addList({state: 'orange', num: forgeName + info.num}))
        }else {
          dispatch(manageState('gray'))
          dispatch(addList({state: 'gray', num: forgeName + info.num}))
        }
      })

      forge[2].map((info) => {
        if(info.state == 'green') {
          dispatch(manageState('green'))
          dispatch(addList({state: 'green', num: forgeName + info.num}))
        }else if (info.state == 'brown') {
          dispatch(manageState('brown'))
          dispatch( addList({state: 'brown', num: forgeName + info.num}))
        }else if (info.state == 'orange') {
          dispatch(manageState('orange'))
          dispatch(addList({state: 'orange', num: forgeName + info.num}))
        }else {
          dispatch(manageState('gray'))
          dispatch(addList({state: 'gray', num: forgeName + info.num}))
        }
      })
    })
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/data' element={<DataPage />} />
        <Route path='/Qomers' element={<QomersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
