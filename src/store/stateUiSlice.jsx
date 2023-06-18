import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomsList: '',
  roomsManage: '',
  usersList: '',
  usersManage: ''
}

const stateUiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    controlPanel(state, action) {
      const showUi = action.payload

      if (showUi == 'roomsList') {
        state.roomsList = 'show'
        state.roomsManage = ''
        state.usersManage = ''
        state.usersList = ''
      }else if (showUi == 'roomsManage') {
        state.roomsManage = 'show'
        state.roomsList = ''
        state.usersManage = ''
        state.usersList = ''
      }else if (showUi == 'usersList') {
        state.usersList = 'show'
        state.roomSManage = ''
        state.roomsList = ''
        state.usersManage = ''
      }else {
        state.usersManage = 'show'
        state.usersList = ''
        state.roomsManage = ''
        state.roomsList = ''
      }
    }
  }
})

export const {controlPanel} = stateUiSlice.actions

export default stateUiSlice