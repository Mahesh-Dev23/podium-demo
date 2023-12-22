import { configureStore } from '@reduxjs/toolkit'
import uiSlice from '../features/ui/uiSlice'
import authReducer from '../features/auth/authSlice'
import eventReducer from '../features/event/eventSlice'

export const store = configureStore({
  reducer: {
    ui : uiSlice,
    auth: authReducer,
    events: eventReducer,
  },
})