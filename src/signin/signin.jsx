import React from 'react'
import './signin.css'

import { AiFillFire } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { allUser, signedUser } from '../store/uareSlice'

const SigninPage = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleSignin = (e) => {
    e.preventDefault()
    console.log(e.target.name.value, e.target.password.value)
    const name = e.target.name.value
    const password = e.target.password.value

    const userr = user.allUser.find((user) => user.name == name && user.password == password)
    console.log(userr)
    dispatch(signedUser(userr))
  }

  console.log(user.signedUser)

  return (
    <section className='signin'>
      <div className='signinContainer'>
        <form onSubmit={(e) => handleSignin(e)} className='signinContent'>
          <div className='signinTitle'><h1>LiO</h1><h1>Sign in</h1></div>
          <div>
            <label htmlFor="name">username</label>
            <input type="username" id='name'/>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" id='password'/>
          </div>
          <input type="submit" value='signin' />
        </form>
      </div>
    </section>
  )
}

export default SigninPage