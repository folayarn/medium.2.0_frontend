import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/auth'
import messageReducer from '../Slice/message'

export default configureStore({
  reducer: {
    auth:authReducer,
    message:messageReducer
  },
  devTools: true,
})
