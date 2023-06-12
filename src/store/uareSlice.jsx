import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  allUser: []
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
          "id": `${user.id}`,
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
    deleteUser(state, action) {
      const id = action.payload.id

      state.allUser = 
        state.allUser.filter((user) => user.id !== id)
    }
    ,
    cleareUserState(state, action) {
      state.allUser = []
    }
  }
})

export const { allUser, addUser, deleteUser, cleareUserState } = userStateSlice.actions

export default userStateSlice