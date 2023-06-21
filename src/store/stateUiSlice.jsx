import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomsList: '',
  roomsManage: '',
  usersList: '',
  usersManage: '',
  i: 0
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
        state.roomsManage = ''
        state.roomsList = ''
        state.usersManage = ''
      }else {
        state.usersManage = 'show'
        state.usersList = ''
        state.roomsManage = ''
        state.roomsList = ''
      }
    },
    controlColor(state, action) {
      state.i = state.i + 1
    }
  }
})

export const {controlPanel, controlColor} = stateUiSlice.actions

export default stateUiSlice