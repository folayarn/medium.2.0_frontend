import React from 'react'
import {Col} from 'react-bootstrap'
import classes from "./index.module.scss"
import {Layout} from "antd"


const ExtendDiv =({...props})=>{


const { Header, Footer, Sider, Content } = Layout;
  return(
<>
<Col md={4}></Col>
<Col md={4} >
  <Layout className={classes.Section}>
      {props.hidden?(<Header><span style={{color:'white', 
      fontWeight:'300',
      fontSize:'20pt',
      textAlign:"left"}}>{props.title}</span>
      </Header>):null}
      <Content style={{padding:'5%'}}>
{props.children}
</Content>
    </Layout>
</Col>
<Col md={4}></Col>
</>
  
  )
}

export default ExtendDiv