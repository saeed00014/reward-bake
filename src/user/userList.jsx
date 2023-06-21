import React from 'react'

import { useSelector } from 'react-redux'

const UserList = () => {
  const user = useSelector((state) => state.user)

  return (
    <section className="user">
      <div className="userContainer">
          <div className='userTop'><p>Username</p> <p>Password</p></div>
        <div className="allUser">
          {user.allUser &&
            user.allUser.map((user) => {
              return (
                <div className="userContent">
                <div className="userDetails">
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