import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { Provider } from 'react-redux'
import { store } from './store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <App/>
  </Provider>
)
