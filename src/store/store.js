import {configureStore} from '@reduxjs/toolkit'
import gymAppoinmentsReducer from '../features/gymAppoinmentsSlice'
export const store = configureStore({
    reducer:gymAppoinmentsReducer
})