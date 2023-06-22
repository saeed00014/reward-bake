import { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/header/header'
import HomePage from './home/home'
import DataPage from './data/data'
import QomersPage from './qomers/qomers'
import SigninPage from './signin/signin'
import PanelPage from './panel/manage.jsx'


import { useDispatch, useSelector } from 'react-redux'

import { manageState, addList, cleareState, allList } from './store/stateSlice'
import { allUser, cleareUserState } from './store/uareSlice'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.list)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(cleareState())
    
    const handleGetForges = async () => {
      const ress = await axios.get('http://localhost:3004/forges') 
      const res = ress.data

      dispatch(cleareState())
      res.map((forge) => {
        forge[0].map((info) => {
          if(info.state == 'green') {
            dispatch(manageState('green'))
            dispatch(addList({state: 'green', num: info.symbol}))
          }else if (info.state == 'brown') {
            dispatch(manageState('brown'))
            dispatch( addList({state: 'brown', num: info.symbol}))
          }else if (info.state == 'orange') {
            dispatch(manageState('orange'))
            dispatch(addList({state: 'orange', num: info.symbol}))
          }else {
            dispatch(manageState('gray'))
            dispatch(addList({state: 'gray', num: info.symbol}))
          }
        })
        forge[1].map((info) => {
          if(info.state == 'green') {
            dispatch(manageState('green'))
            dispatch(addList({state: 'green', num: info.symbol}))
          }else if (info.state == 'brown') {
            dispatch(manageState('brown'))
            dispatch( addList({state: 'brown', num: info.symbol}))
          }else if (info.state == 'orange') {
            dispatch(manageState('orange'))
            dispatch(addList({state: 'orange', num: info.symbol}))
          }else {
            dispatch(manageState('gray'))
            dispatch(addList({state: 'gray', num: info.symbol}))
          }
        })
      })

      dispatch(allList(res))
    }
    handleGetForges()
    
    const handleGetUsers = async () => {
      const ress = await axios.get('http://localhost:3004/users') 
      const res = ress.data
      
      dispatch(cleareUserState())
      dispatch(allUser(res))
    }
    handleGetUsers()

    const handleHome = () => {
      
    handleHome()
  }
  }, [])

  return (
    <>
      {!user.signedUser && <SigninPage />}
      {user.signedUser && 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/panel' element={<PanelPage />} />
          <Route path='/data' element={<DataPage />} />
          <Route path='/Qomers' element={<QomersPage />} />
        </Routes>
      </BrowserRouter>}
    </>
  )
}

export default App
