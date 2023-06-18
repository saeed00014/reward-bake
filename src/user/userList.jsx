import React from 'react'

import { useSelector } from 'react-redux'

const UserList = () => {
  const user = useSelector((state) => state.user)

  return (
    <section className="user">
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
      </div>
    </section>
  )
}

export default UserList