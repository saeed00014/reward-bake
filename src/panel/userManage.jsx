import './userManage.css'

import React from 'react'
import { Link } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import axios from 'axios'
import { addUser, deleteUser, changeUser } from '../store/uareSlice';

const UserManage = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleDelete = async (e, id, user) => {
    e.preventDefault()
    dispatch(deleteUser(user))
    await axios.delete(`http://localhost:3004/users/${id}`)
  }
  
  const handleAddUser = async (e) => {
    e.preventDefault()
    const data = {
      "id" : uuidv4(),
      "name" : e.target.nameAdd.value,
      "password" : e.target.passwordAdd.value
    }
    if(!user.allUser.find((item) => item.name == e.target.nameAdd.value)
      && e.target.nameAdd.value && e.target.passwordAdd.value  
    ) {
    dispatch(addUser(data))
    await axios.post(`http://localhost:3004/users`, data)
    }
  }

  const handlePatchUser = async (e, id, user1) => {
    e.preventDefault()
    console.log(e)
    const data = {
      "id" : id,
      "name" : e.target.nameAdd.value ? e.target.nameAdd.value : user1.name,
      "password" : e.target.passwordAdd.value ? e.target.passwordAdd.value : user1.password
    }
    if(!user.allUser.find((item) => item.name == e.target.nameAdd.value)) {
      dispatch(changeUser(data))
      await axios.delete(`http://localhost:3004/users/${id}`)
      await axios.post(`http://localhost:3004/users`, data)
    }
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
              return (
                <div style={styles1} className="userManageContent">
                  <form onSubmit={(e) => handlePatchUser(e, user.id, user)} className="userManageDetails">
                    <input style={styles2} type="text" id='nameAdd' placeholder={user.name} />
                    <input style={styles2} type="text" id='passwordAdd' placeholder={user.password} />
                    <div className="userManageOption">
                      <input style={styles2} value='ذخیره' type='submit'/>
                      <button style={styles2} onClick={(e) => handleDelete(e, user.id, user)}>حذف</button>
                    </div>
                  </form>
                </div>
              )
          })}
          <form onSubmit={(e) => handleAddUser(e)} className='addUser'>
            <div>
              <label htmlFor="nameAdd">نام کاربری</label>
              <input id='nameAdd' style={{background : 'var(--color-table-background)' }} type="text" />
            </div>
            <div>
              <label htmlFor="passwordAdd">رمز عبور</label>
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