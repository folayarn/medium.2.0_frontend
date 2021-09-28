import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {login,register,logout} from "../services/auth_service";

const user = JSON.parse(localStorage.getItem("user"))

export const signup = createAsyncThunk(
  "auth/register",
  async ({name, email, role,password }, thunkAPI) => {
    try {
      const res = await register(name, email,role, password);
      return{user:res}
    } catch (err){
      return thunkAPI.rejectWithValue();
    }
  }
)

export const signin = createAsyncThunk(
  "auth/login",
  async({ email, password }, thunkAPI)=>{
    try{
      const data = await login(email, password)
      return { user: data }
    }catch(err){
    return thunkAPI.rejectWithValue()
    }
  }
)

export const signout = createAsyncThunk("auth/logout", async()=>{
  await logout();
});

const initialState = user
  ? {user,role:user.role,token:user.token }
  : {user: null ,role:null,token:null}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.role=action.payload.user.role
      state.user = action.payload.user;
      state.token = action.payload.user.token
    },
    [signup.rejected]: (state, action) => {
      state.token= null
      state.user = null;
      state.role=null
    },
    [signin.fulfilled]: (state, action) => {
      state.role=action.payload.user.role
      state.user = action.payload.user;
      state.token = action.payload.user.token
    },
    [signin.rejected]: (state, action) => {
      state.token= null
      state.user = null;
      state.role=null
    },
    [signout.fulfilled]: (state, action) => {
      state.token= null
      state.user = null;
      state.role=null
    },
  },
});

const { reducer } = authSlice
export default reducer