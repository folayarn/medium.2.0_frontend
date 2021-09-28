import React from 'react'
import classes from './index.module.scss'
import {Col,Image,Row} from "react-bootstrap"
import {Button} from "antd"
import {NavLink} from "react-router-dom"


const TopContent=()=>{






  return(
<Col md={12}>
<Row className={classes.section}>
<Col md={1} lg={1}></Col>
<Col md={6}  lg={7}>
<div className={classes.text}>
 <span className={classes.header} >
Space is a place to Write,Read and Connect
</span>
<p>its easy and free to post your thinking on any topic and connects with the millions of readers</p>

<NavLink to="/index/sign-up"><Button type="default" shape="round" >Start Writing</Button></NavLink>
</div>
</Col>
<Col md={5}  lg={4}>
  <div className={classes.img}>
<Image src="/index/images/vector.png" fluid />
</div>
</Col>
</Row>
</Col>

  )
}


export  default TopContent