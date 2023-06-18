import React from 'react'
import ManageBox from './manageBox'
import manage from './manage'

import './manage.css'
import UserPage from './user'

import { useSelector } from 'react-redux'
import UserList from './userList'

const PanelPage = () => {
  const ui = useSelector((state) => state.ui)

  return (
    <section className='panel'>
      <h1 className='panelTitle'>Manage Panel</h1>
      <div className='panelContainer'> 
        {manage.map((box) => {
          return (
            <ManageBox title={box.title} discription={box.discription} name={box.name} />
          )
        })}
      </div>
      <div className="panelShowContainer">
        {ui.usersList && <UserList />}
        {ui.usersManage && <UserPage />}
        {ui.roomsList && <UserPage />}
        {ui.roomsManage && <UserPage />}
      </div>
    </section>
  )
}

export default PanelPage