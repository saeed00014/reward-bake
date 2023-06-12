import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  done: 0,
  cooking: 0,
  off: 0,
  empty: 0,
  allList: '',
  doneList: [''],
  cookingList: [''],
  offList: [''],
  emptyList: [''],
  findData: [''],
  editData: '',
}

const cookStateSlice = createSlice ({
  name: 'cookState',
  initialState,
  reducers: {
    manageState(state, action) {
      const newState = action.payload

      if(newState === 'green') {
        state.done = state.done + 1
      }else if(newState == 'orange') {
        state.cooking = state.cooking + 1
      }else if(newState == 'brown') {
        state.empty = state.empty + 1
      }else {
        state.off = state.off + 1
      }
    },
    allList(state, action) {
      const all = action.payload
      state.allList = all

    },
    addList(state, action) {
      const newState = action.payload.state
      const newNum = action.payload.num


      if(newState === 'green') {
        state.doneList.push({'state': `${newState}`, 'num': `${newNum}`})
      }else if(newState == 'orange') {
        state.cookingList.push({'state': `${newState}`, 'num': `${newNum}`})
      }else if(newState == 'brown') {
        state.emptyList.push({'state': `${newState}`,'num': `${newNum}`})
      }else {
        state.offList.push({'state': `${newState}`,'num': `${newNum}`})
      }
    },
    findData(state, action) {
      const value = action.payload
      value ? state.findData = value : state.findData = ''
      value.map((val) => {
        const name = val.name
        state.findData.push({'name': `gg`})
      })
      console.log(state.findData)
    },
    editData(state, action) {
      const isEdit = action.payload
      state.editData = isEdit
    },
    cleareState(state, action) {
      state.done = 0
      state.doneList = []
      state.empty = 0
      state.emptyList = []
      state.cooking = 0
      state.cookingList = []
      state.off = 0
      state.offList = []
    }
  }
})

export const {manageState, addList, cleareState, allList, findData, editData} = cookStateSlice.actions

export default cookStateSlice