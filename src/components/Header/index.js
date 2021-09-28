import React from 'react'
import {Nav,Navbar,Container} from "react-bootstrap"
import {Button} from "antd" 
import {NavLink} from "react-router-dom"

const Header=(props)=>{






  return(
<>
<Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand><NavLink to="/index">Community</NavLink></Navbar.Brand>
    <Nav >
      <Nav.Link href="#home">Resources</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
      <NavLink to="/index/sign-up"><Button type="primary" shape="round">Get Started</Button></NavLink>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}


export  default Header