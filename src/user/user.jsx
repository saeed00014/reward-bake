import React from 'react'
import './user.css'
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { allUser, addUser, deleteUser } from '../store/uareSlice'

const UserPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.password.value
    const data = {
      'id': uuidv4(),
      'name': name,
      'password': email
    }

    axios.post('http://localhost:3004/users', data, {
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      dispatch(addUser(response.data))
    });
  }

  const handleDelete = (user) => {
    console.log(user.id)
    axios.delete(`http://localhost:3004/users/${user.id}`)
    dispatch(deleteUser(user))
  }

  return (
    <section className="user">
      <h1 className='userTitle'>Manage Users</h1>
      <div className="userContainer">
        <div className="allUser">
          {user.allUser &&
            user.allUser.map((user) => {
            return (
              <div className="userContent">
                <div className="userDetails">
                  <p>Username: {user.name}</p>
                  <p>Password: {user.password}</p>
                </div>
                <div className="userOption">
                  <button>Edit</button>
                  <button onClick={() => handleDelete(user)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className='adduserContent'>
          <div className='adduserTitle'></div>
          <div>
            <label htmlFor="name">username</label>
            <input type="username" id='name'/>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" id='password'/>
          </div>
          <input type="submit" value='add user' />
        </form>
      </div>
    </section>
  )
}

export default UserPage