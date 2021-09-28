import React,{useState} from "react"
import {Form,Input, Button,message} from "antd"
import ExtendDiv from "../../ExtendDiv";
import {NavLink,Redirect,useHistory} from 'react-router-dom'
import {useDispatch,useSelector, shallowEqual} from "react-redux"
import {signin} from '../../../Slice/auth'
import Spinner from  "../../Spinner"

const Login=(props)=>{
const [form]=Form.useForm()
const [loading,setLoading]=useState(false)
const {token} = useSelector((state) => state.auth, shallowEqual)
const islogged = token?true:false
  const dispatch =useDispatch()
  const history=useHistory()

  const onSubmit=()=>{
    let user=form.getFieldsValue()
    setLoading(true)
    dispatch(signin(user)).unwrap().then(()=>{
      history.push("/index/dashboard")
      setLoading(false)
  }).catch((err)=>{
setLoading(false)
message.error("Login Errors Occured")
  })
  }
  
  return(
loading ?(
<Spinner tip={"Logging..."}/>
):(
islogged? <Redirect to="/index/dashboard"/>
:
<ExtendDiv hidden={true} title={'Login'}>

<Form 
form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
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
          span: 18,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Login
        </Button> 

        <NavLink to="/index/sign-up" style={{ marginLeft:"15px"}}> Create Account here</NavLink>
      </Form.Item>
    </Form>



</ExtendDiv>
)

      


  )
}

export default Login