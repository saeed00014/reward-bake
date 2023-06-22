import React from 'react'
import ManageBox from './manageBox'
import manage from './manage'

import './manage.css'
import UserPage from './user'

import { useSelector } from 'react-redux'
import UserList from './userList'
import RoomList from './roomList'
import UserManage from './userManage'
import RoomManage from './roomMnage'

const PanelPage = () => {
  const ui = useSelector((state) => state.ui)

  return (
    <>
    <section className='panel'>
      <h1 className='panelTitle'>Manage Panel</h1>
      <div className='panelContainer'> 
        {manage.map((box) => {
          return (
            <ManageBox title={box.title} discription={box.discription} name={box.name} icon={box.icon} />
          )
        })}
      </div>
    </section>
      <div className="panelShowContainer">
        {ui.usersList && <UserList />}
        {ui.usersManage && <UserManage/>}
        {ui.roomsList && <RoomList />}
        {ui.roomsManage && <RoomManage />}
      </div>
    </>
  )
}

export default PanelPage