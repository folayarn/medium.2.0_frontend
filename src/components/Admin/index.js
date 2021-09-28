import React from 'react'
import {useDispatch} from "react-redux"
import {signout} from '../../Slice/auth'
import {useHistory} from "react-router-dom"
import { Button } from 'antd'


const Admin=()=>{
  const dispatch =useDispatch()
  const history=useHistory()
const logOut=()=>{

  dispatch(signout()).unwrap().then(()=>{
    history.push("/index/login")
})
}


  return(
<>
<span>welcome to admin dashboard</span>
<span>user is logged in</span>
<Button type="primary" onClick={logOut}>Logout</Button>
</>
  )
}


export default Admin