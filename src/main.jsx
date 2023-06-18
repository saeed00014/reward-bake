import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import cookStateSlice from './store/stateSlice.jsx'
import { configureStore } from '@reduxjs/toolkit'

import userStateSlice from './store/uareSlice.jsx'
import stateUiSlice from './store/stateUiSlice.jsx'

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
