import './userManage.css'

import React from 'react'
import { Link } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import axios from 'axios'

const UserManage = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleDelete = (user) => {
    console.log(user.id)
    axios.delete(`http://localhost:3004/users/${user.id}`)
    dispatch(deleteUser(user))
  }
  
  const handleAddUser = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3004/users`, e)
  }

  const handlePatchUser = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3004/users`, e)
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
                  <form onSubmit={(e) => handlePatchUser(e)} className="userManageDetails">
                    <input style={styles2} type="text" value={user.name} />
                    <input style={styles2} type="text" value={user.password} />
                    <div className="userManageOption">
                      <input style={styles2} value='ذخیره' type='submit'/>
                      <button style={styles2} onClick={() => handleDelete(user)}>حذف</button>
                    </div>
                  </form>
                </div>
              )
          })}
          <form onSubmit={(e) => handleAddUser(e)} className='addUser'>
            <div>
              <label htmlFor="nameAdd">رمز عبور</label>
              <input id='nameAdd' style={{background : 'var(--color-table-background)' }} type="text" />
            </div>
            <div>
              <label htmlFor="passwordAdd">نام کاربری</label>
              <input id='passwordAdd' style={{background : 'var(--color-table-background)' }} type="text" />
            </div>
            <input type="submit" value='اضافه کردن کاربر' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserManage