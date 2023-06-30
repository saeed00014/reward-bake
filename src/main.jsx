import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import cookStateSlice from './store/stateSlice.jsx'
import userStateSlice from './store/uareSlice.jsx'
import stateUiSlice from './store/stateUiSlice.jsx'

import App from './App.jsx'

const store = configureStore({
  reducer: {
    cookState: cookStateSlice.reducer,
    list: cookStateSlice.reducer,
    user: userStateSlice.reducer,
    ui: stateUiSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
