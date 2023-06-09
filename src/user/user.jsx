import React from 'react'
import './user.css'

import { users } from '../users'

const UserPage = () => {
  return (
    <section className="user">
      <h1>Manage Users</h1>
      <div className="userContainer">
        {users.map((user) => {
          return (
            <div className="userContent">
              <div className="userDetails">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <div className="userOption">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          )
        })}
        <div>
          <button className='addUser'>
            ADD User
          </button>
        </div>
      </div>
    </section>
  )
}

export default UserPage