import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
  allList: '',
  sortedAllList: '',
  forgeOne: [[],[]],
  forgeTwo: [[],[]],
  forgeThere: [[],[]],
  forgeFour: [[],[]],
  forgeFive: [[],[]],
  all: 0,
  done: 0,
  cooking: 0,
  off: 0,
  empty: 0,
  doneList: [''],
  cookingList: [''],
  offList: [''],
  emptyList: [''],
  findData: [''],

  editData: '',

  markedItems: localStorage.getItem('marked') 
    ? JSON.parse(localStorage.getItem('marked')) : []
}

const cookStateSlice = createSlice ({
  name: 'cookState',
  initialState,
  reducers: {
    manageState(state, action) {
      const newState = action.payload
      state.all = state.all + 1
      
      if(newState == 'پخته شده') {
        state.done = state.done + 1
      }else if(newState == 'در حال پخت') {
        state.cooking = state.cooking + 1
      }else if(newState == 'خاموش') {
        state.empty = state.empty + 1
      }else {
        state.off = state.off + 1
      }
    },
    allList(state, action) {
      const all = action.payload
      state.allList = all
      state.sortedAllList = [...state.allList].sort((a, b) => a['id'] - b['id'])

      state.sortedAllList.map((mouth) => {
        let id = mouth.id
        if (id <= 19) {
          !state.forgeOne[0].find((info) => mouth.id == info.id) && 
          state.forgeOne[0].push(mouth)  
          
        }else if ( 19 < id && id <= 38 ) {
          !state.forgeOne[1].find((info) => mouth.id == info.id) && 
          state.forgeOne[1].push(mouth)  
          
        }else if ( 38 < id && id <= 59 ) {
          !state.forgeTwo[0].find((info) => mouth.id == info.id) && 
          state.forgeTwo[0].push(mouth)  
          
        }else if ( 59 < id && id <= 81 ) {
          !state.forgeTwo[1].find((info) => mouth.id == info.id) && 
          state.forgeTwo[1].push(mouth)  
          
        }else if ( 81 < id && id <= 98 ) {
          !state.forgeThere[0].find((info) => mouth.id == info.id) && 
          state.forgeThere[0].push(mouth)  
          
        }else if ( 98 < id && id <= 114 ) {
          !state.forgeThere[1].find((info) => mouth.id == info.id) && 
          state.forgeThere[1].push(mouth)  
          
        }else if ( 114 < id && id <= 142 ) {
          !state.forgeFour[0].find((info) => mouth.id == info.id) && 
          state.forgeFour[0].push(mouth)  
          
        }else if ( 142 < id && id <= 167 ) {
          !state.forgeFour[1].find((info) => mouth.id == info.id) && 
          state.forgeFour[1].push(mouth)  
          
        }else if ( 167 < id && id <= 192 ) {
          !state.forgeFive[0].find((info) => mouth.id == info.id) && 
          state.forgeFive[0].push(mouth)  

        }else {
          !state.forgeFive[1].find((info) => mouth.id == info.id) && 
          state.forgeFive[1].push(mouth) 
        } 
      })
    },
    sortedAllList(state, action) {
      const newSort = action.payload 
      
      if(newSort == 'id') {
        state.sortedAllList = [...state.allList].sort((a, b) => a[newSort] - b[newSort])
      }else if(newSort == 'marked') {
        state.sortedAllList = []
        current(state.allList).map((item) =>  { 
          current(state.markedItems).map((marked) => {
            if(item.id == marked.id) {
              state.sortedAllList.push(item)
            }
          })
        })

      }
      else {
        state.sortedAllList = [...state.allList].sort((a, b) => a[newSort].localeCompare(b[newSort]))
      }
    }
    ,
    addList(state, action) {
      const newState = action.payload.state
      const newNum = action.payload.num

      if(newState == 'پخته شده') {
        state.doneList.push({'state': `${newState}`, 'num': `${newNum}`})
      }else if(newState == 'در حال پخت') {
        state.cookingList.push({'state': `${newState}`, 'num': `${newNum}`})
      }else if(newState == 'خاموش') {
        state.emptyList.push({'state': `${newState}`,'num': `${newNum}`})
      }else {
        state.offList.push({'state': `${newState}`,'num': `${newNum}`})
      }
    },
    addChangedList(state, action) {
      const newItem = action.payload
      if(state.sortedAllList.find((item) => item.id == newItem.id)) {
        state.sortedAllList.find((item) => item.id == newItem.id).id = newItem.id
        state.sortedAllList.find((item) => item.id == newItem.id).name = newItem.name
        state.sortedAllList.find((item) => item.id == newItem.id).dis = newItem.dis
        state.sortedAllList.find((item) => item.id == newItem.id).num = newItem.num
        state.sortedAllList.find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.sortedAllList.find((item) => item.id == newItem.id).state = newItem.state
        state.sortedAllList.find((item) => item.id == newItem.id).quantity = newItem.quantity
      }
    },
    addChangedForge(state, action) {
      const newItem = action.payload
      if(state.forgeOne[0].find((item) => item.id == newItem.id)){
        state.forgeOne[0].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeOne[0].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeOne[0].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeOne[0].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeOne[0].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeOne[0].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeOne[0].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeOne[1].find((item) => item.id == newItem.id)) {
        state.forgeOne[1].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeOne[1].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeOne[1].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeOne[1].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeOne[1].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeOne[1].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeOne[1].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeTwo[0].find((item) => item.id == newItem.id)) {
        state.forgeTwo[0].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeTwo[0].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeTwo[0].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeTwo[0].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeTwo[0].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeTwo[0].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeTwo[0].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeTwo[1].find((item) => item.id == newItem.id)) {
        state.forgeTwo[1].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeTwo[1].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeTwo[1].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeTwo[1].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeTwo[1].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeTwo[1].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeTwo[1].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeThere[0].find((item) => item.id == newItem.id)) {
        state.forgeThere[0].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeThere[0].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeThere[0].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeThere[0].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeThere[0].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeThere[0].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeThere[0].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeThere[1].find((item) => item.id == newItem.id)) {
        state.forgeThere[1].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeThere[1].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeThere[1].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeThere[1].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeThere[1].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeThere[1].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeThere[1].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeFour[0].find((item) => item.id == newItem.id)) {
        state.forgeFour[0].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeFour[0].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeFour[0].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeFour[0].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeFour[0].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeFour[0].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeFour[0].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeFour[1].find((item) => item.id == newItem.id)) {
        state.forgeFour[1].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeFour[1].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeFour[1].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeFour[1].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeFour[1].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeFour[1].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeFour[1].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeFive[0].find((item) => item.id == newItem.id)) {
        state.forgeFive[0].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeFive[0].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeFive[0].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeFive[0].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeFive[0].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeFive[0].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeFive[0].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }else if(state.forgeFive[1].find((item) => item.id == newItem.id)) {
        state.forgeFive[1].find((item) => item.id == newItem.id).id = newItem.id
        state.forgeFive[1].find((item) => item.id == newItem.id).name = newItem.name
        state.forgeFive[1].find((item) => item.id == newItem.id).dis = newItem.dis
        state.forgeFive[1].find((item) => item.id == newItem.id).num = newItem.num
        state.forgeFive[1].find((item) => item.id == newItem.id).symbol = newItem.symbol
        state.forgeFive[1].find((item) => item.id == newItem.id).state = newItem.state
        state.forgeFive[1].find((item) => item.id == newItem.id).quantity = newItem.quantity
      }
    },
    setStateMark(state, action) {
      const markedItem = action.payload

      const markedLocal = localStorage.getItem('marked')
      if(current(state.markedItems).find((item) => item.id == markedItem.id)) {
        const deletedId = current(state.markedItems).filter((item) => item.id != markedItem.id)
        localStorage.setItem('marked', JSON.stringify(deletedId))
      }else {
        state.markedItems.push({'id' : markedItem.id})
        let markedId = state.markedItems
        localStorage.setItem('marked', JSON.stringify(markedId))
      }
    },
    findData(state, action) {
      const value = action.payload
      value ? state.findData = value : state.findData = ''
      value.map((val) => {
        const name = val.name
        state.findData.push({'name': `gg`})
      })
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

export const {manageState, addList, cleareState, allList, findData, editData, sortedAllList, setStateMark, addChangedList, addChangedForge} = cookStateSlice.actions

export default cookStateSlice