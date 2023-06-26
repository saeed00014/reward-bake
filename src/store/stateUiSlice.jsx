import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomsList: '',
  roomsManage: '',
  usersList: '',
  usersManage: '',
  markedItems: localStorage.getItem('marked') ? localStorage.getItem('marked') : ['']
}

const stateUiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    controlPanel(state, action) {
      const showUi = action.payload

      if (showUi == 'لیست اتاقها') {
        state.roomsList = 'show'
        state.roomsManage = ''
        state.usersManage = ''
        state.usersList = ''
      }else if (showUi == 'مدیریت اتاقها') {
        state.roomsManage = 'show'
        state.roomsList = ''
        state.usersManage = ''
        state.usersList = ''
      }else if (showUi == 'لیست کاربرها') {
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
    setStateMark(state, action) {
      const markedItem = action.payload
      
      console.log(markedItem)

    }
  }
})

export const {controlPanel, setStateMark} = stateUiSlice.actions

export default stateUiSlice