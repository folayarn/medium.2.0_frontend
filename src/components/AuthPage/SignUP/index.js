import React,{useState} from "react"
import {Form, Input, Button,message,Layout} from "antd"
import ExtendDiv from "../../ExtendDiv";
import {NavLink,Redirect,useHistory} from 'react-router-dom'
import {useDispatch,useSelector, shallowEqual} from "react-redux"
import {signup} from '../../../Slice/auth'
import Spinner from  "../../Spinner"

const SignUP=()=>{
  const [form]=Form.useForm()
  const [loading,setLoading]=useState(false)
  const {token} = useSelector((state) => state.auth, shallowEqual)
const islogged = token?true:false
    const dispatch =useDispatch()
    const history=useHistory()
    
const onSubmit=()=>{
  let user=form.getFieldsValue()
  setLoading(true)
  dispatch(signup(user)).unwrap().then(()=>{
    history.push("/index/dashboard")
    setLoading(false)
}).catch((err)=>{
setLoading(false)
message.error("SignUp Errors Occured")
})
}

  return(
    loading ?(
      <Spinner tip="Registering..."/>
      ):(
      islogged? <Redirect to="/index/dashboard"/>
      :
(
<ExtendDiv hidden={true} title={"Sign Up"}>
<Form
     form={form}
     name="basic"
      
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    initialValues={
      {
        "role":'user'
      }
    }
      autoComplete="off"
    >
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Full name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="role"
        hidden={true}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Register
        </Button> 

        <NavLink to="/index/login"> Login here</NavLink>
      </Form.Item>
    </Form>

</ExtendDiv>

)
      )


  )
}

export default SignUP