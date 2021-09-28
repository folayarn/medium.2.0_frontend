import React from 'react'
import{Container,Row,Col} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {signout} from '../../Slice/auth'
import {useHistory} from "react-router-dom"
import {Card, Avatar } from 'antd';
import { SettingOutlined,LockOutlined } from '@ant-design/icons';
const { Meta } = Card;


const DashBoard=()=>{
  const dispatch =useDispatch()
  const history=useHistory()

const logOut=()=>{

  dispatch(signout()).unwrap().then(()=>{
    history.push("/index/login")
})
}

  return(
<>
<Container fluid>
<Row style={{marginTop:"40px"}}>
<Col md={1}>
</Col>
<Col md={2}>
<Card
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <LockOutlined key="edit"  onClick={logOut} style={{color:"red"}}/>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Folayan Adesola"
      description="This is the description"
    />
  </Card>
</Col>
<Col md={5}>

</Col>
<Col md={2}>


</Col>

<Col md={2}>


</Col>
</Row>



</Container>
</>
  )
}


export default DashBoard