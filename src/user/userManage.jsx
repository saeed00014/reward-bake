import React from 'react'

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


  return (
    <section className="user">
      <div className="userContainer">
          <div className='userTop'><p>Username</p> <p>Password</p> <div><p></p> actions </div></div>
        <div className="allUser">
          {user.allUser &&
            user.allUser.map((user, e) => {
              let styles1

              if(e.toString().at(-1) == '1') {
                styles1 = {
                  backgroundColor: 'gray'
                }
              }else if(e.toString().at(-1) == '3') {
                styles1 = {
                  backgroundColor: 'gray'
                }
              }else if(e.toString().at(-1) == '5') {
                styles1 = {
                  backgroundColor: 'gray'
                }
              }else if(e.toString().at(-1) == '7') {
                styles1 = {
                  backgroundColor: 'gray'
                }
              }else if(e.toString().at(-1) == '9') {
                styles1 = {
                  backgroundColor: 'gray'
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
                  backgroundColor: 'gray'
                }
              }
              console.log(e)
              return (
                <div style={styles1} className="userContent">
                  <div className="userDetails">
                    <p>{user.name}</p>
                    <p>{user.password}</p>
                    <div className="userOption">
                      <button style={styles2}>Save</button>
                      <button style={styles2} onClick={() => handleDelete(user)}>Delete</button>
                    </div>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </section>
  )
}

export default UserManage