import './userList.css'

import React from 'react'

import { useSelector } from 'react-redux'

const UserList = () => {
  const user = useSelector((state) => state.user)

  return (
    <section className="userList">
      <div className="userListContainer">
          <div className='userListTop'><p>نام کاربری</p> <p>رمز عبور</p></div>
        <div className="allUserList">
          {user.allUser &&
            user.allUser.map((user, e) => {
              let styles1

              if(e.toString().at(-1) == '1') {
                styles1 = {
                  backgroundColor: 'var(--color-table-background)'
                }
              }else if(e.toString().at(-1) == '3') {
                styles1 = {
                  backgroundColor: 'var(--color-table-background)'
                }
              }else if(e.toString().at(-1) == '5') {
                styles1 = {
                  backgroundColor: 'var(--color-table-background)'
                }
              }else if(e.toString().at(-1) == '7') {
                styles1 = {
                  backgroundColor: 'var(--color-table-background)'
                }
              }else if(e.toString().at(-1) == '9') {
                styles1 = {
                  backgroundColor: 'var(--color-table-background)'
                }
              }
              else {
                styles1 = {
                  backgroundColor: 'white'
                }
              }
              return (
                <div style={styles1} className="userListContent">
                <div className="userListDetails">
                  <p type="text">{user.name}</p>
                  <p type="text">{user.password}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UserList