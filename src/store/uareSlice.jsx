import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  allUser: []
}

const userStateSlice = createSlice ({
  name: 'user',
  initialState,
  reducers: {
    allUser(state, action) {
      const newUser = action.payload
      state.allUser = newUser
    },
    addUser(state, action) {
      const newItem = action.payload
      state.allUser ? state.allUser.push({
        "id" : `${newItem.id}`,
        "name" : `${newItem.name}`,
        "password" : `${newItem.password}`
      }) : state.allUser = {
        "id" : `${newItem.id}`,
        "name" : `${newItem.name}`,
        "password" : `${newItem.password}`
      }
    },
    deleteUser(state, action) {
      const id = action.payload.id
      console.log(id)

      state.allUser = 
        current(state.allUser).filter((user) => user.id !== id)
    },
    changeUser(state, action) {
      const newItem = action.payload

      if(state.allUser.find((item) => item.id == newItem.id)){
        state.allUser.find((item) => item.id == newItem.id).id = newItem.id
        state.allUser.find((item) => item.id == newItem.id).name = newItem.name
        state.allUser.find((item) => item.id == newItem.id).password = newItem.password
      }
    }
    ,
    cleareUserState(state, action) {
      state.allUser = []
    }
  }
})

export const { allUser, addUser, deleteUser, cleareUserState, changeUser } = userStateSlice.actions

export default userStateSlice