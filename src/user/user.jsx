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
    const email = e.target.email.value
    const data = {
      'id': uuidv4(),
      'name': name,
      'email': email,
      'password': 'gg'
    }

    axios.post('http://localhost:3004/users', data, {
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data);
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
        {user.allUser &&
          user.allUser.map((user) => {
          return (
            <div className="userContent">
              <div className="userDetails">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
              <div className="userOption">
                <button>Edit</button>
                <button onClick={() => handleDelete(user)}>Delete</button>
              </div>
            </div>
          )
        })}
        <form onSubmit={(e) => handleSubmit(e)} className='userForm'>
          <div>
            <label htmlFor="name">name</label>
            <input type="text" name="" id="name" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="text" name="" id="email" />
          </div>
          <input type="submit" name="" id="" value='ADD User' />
        </form>
        <div>
        </div>
      </div>
    </section>
  )
}

export default UserPage