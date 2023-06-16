import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  allUser: [],
  signedUser: localStorage.getItem("signin")
  ? JSON.parse(localStorage.getItem("signin"))
  : ''
}

const userStateSlice = createSlice ({
  name: 'user',
  initialState,
  reducers: {
    allUser(state, action) {
      const newUser = action.payload

      newUser.map((user) => {
        state.allUser.push(
        {
          "id": uuidv4(),
          "name": `${user.name}`,
          "email": `${user.email}`,
          "password": `${user.password}`
        }    
        )})
    },
    addUser(state, action) {
      const newItem = action.payload
      console.log(newItem)

      state.allUser.push(newItem)

    },
    signedUser(state, action) {
      const newItem = action.payload
      console.log(newItem)

      state.signedUser = newItem
      localStorage.setItem("signin",JSON.stringify(state.signedUser));
    },
    deleteUser(state, action) {
      const id = action.payload.id

      state.allUser = 
        state.allUser.filter((user) => user.id !== id)
    },
    cleareUserState(state, action) {
      state.allUser = []
    }
  }
})

export const { allUser, addUser, deleteUser, cleareUserState, signedUser } = userStateSlice.actions

export default userStateSlice