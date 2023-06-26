import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import './userManage.css'
import { Link } from 'react-router-dom'

const UserManage = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleDelete = (user) => {
    console.log(user.id)
    axios.delete(`http://localhost:3004/users/${user.id}`)
    dispatch(deleteUser(user))
  }


  return (
    <section className="userManage">
      <div className="userManageContainer">
          <div className='userManageTop'><p>نام کاربری</p> <p>رمز عبور</p> <div><p>رفتارها </p> </div></div>
        <div className="allUser">
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
              let styles2

              if(e.toString().at(-1) == '1') {
                styles2 = {
                  backgroundColor: 'white'
                }
              }else if(e.toString().at(-1) == '3') {
                styles2 = {
                  backgroundColor: 'white'
                }
              }else if(e.toString().at(-1) == '5') {
                styles2 = {
                  backgroundColor: 'white'
                }
              }else if(e.toString().at(-1) == '7') {
                styles2 = {
                  backgroundColor: 'white'
                }
              }else if(e.toString().at(-1) == '9') {
                styles2 = {
                  backgroundColor: 'white'
                }
              }
              else {
                styles2 = {
                  backgroundColor: 'var(--color-table-background)'
                }
              }
              console.log(e)
              return (
                <div style={styles1} className="userManageContent">
                  <div className="userManageDetails">
                    <p>{user.name}</p>
                    <p>{user.password}</p>
                    <div className="userManageOption">
                      <button style={styles2}>ذخیره</button>
                      <button style={styles2} onClick={() => handleDelete(user)}>حذف</button>
                    </div>
                  </div>
                </div>
              )
          })}
          <div className='addUser'>
            <Link to='/'>اضافه کردن کاربر</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserManage