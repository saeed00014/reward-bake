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

      state.allUser.push(newItem)

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

export const { allUser, addUser, deleteUser, cleareUserState } = userStateSlice.actions

export default userStateSlice