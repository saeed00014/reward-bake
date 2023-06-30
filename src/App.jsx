import './App.css'

import axios from 'axios'

import { useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useDispatch } from 'react-redux'
import { manageState, addList, cleareState, allList } from './store/stateSlice'
import { allUser, cleareUserState } from './store/uareSlice'

import Header from './components/header/header'
import HomePage from './home/home'
import DataPage from './data/data'
import QomersPage from './qomers/qomers'
import PanelPage from './panel/manage.jsx'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cleareState())
    
    const handleGetForges = async () => {
      const ressponse = await axios.get('http://localhost:3004/forges') 
      const forges = ressponse.data

      dispatch(cleareState())
      forges.map((info) => {
        if(info.state == 'پخته شده') {
          dispatch(manageState('پخته شده'))
          dispatch(addList({state: 'پخته شده', num: info.symbol}))
        }else if (info.state == 'خالی') {
          dispatch(manageState('خالی'))
          dispatch( addList({state: 'خالی', num: info.symbol}))
        }else if (info.state == 'در حال پخت') {
          dispatch(manageState('در حال پخت'))
          dispatch(addList({state: 'در حال پخت', num: info.symbol}))
        }else {
          dispatch(manageState('خاموش'))
          dispatch(addList({state: 'خاموش', num: info.symbol}))
        }
      })

      dispatch(allList(forges))
    }
    handleGetForges()
    
    const handleGetUsers = async () => {
      const ressponse = await axios.get('http://localhost:3004/users') 
      const users = ressponse.data
      
      dispatch(cleareUserState())
      dispatch(allUser(users))
    }
    handleGetUsers()

    const handleHome = () => {
      
    handleHome()
  }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/panel' element={<PanelPage />} />
          <Route path='/data' element={<DataPage />} />
          <Route path='/Qomers' element={<QomersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
