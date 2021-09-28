import React from "react";
import { Col,Row } from "react-bootstrap";
import {Switch , Route} from "react-router-dom"
import Header from '../Header'
import HomePage from "../Homepage";
import Login from "../AuthPage/Login"
import SignUp from "../AuthPage/SignUP"
import DashBoard from "../Dashboard";
import ImageUpload from "../ImageUpload";
import Admin from "../Admin";
import ProtectedRoute from "../../shared/ProtectedRoute"
import {useRouteMatch,Redirect} from 'react-router-dom'
import {useSelector, shallowEqual} from "react-redux"

function PageIndex() {
  
  const {token,role} = useSelector((state) => state.auth, shallowEqual);
  const {path}=useRouteMatch()

const roles=()=>{
if((role ==="user") && (token)){
return (<DashBoard/>)
}else if ((role ==="admin")&& (token)){
  return (<Admin/>)
}else{
  return(<Redirect to="/index/login"/>)
}
}

  const routes=(
<Switch>
<Route exact  path={`${path}/image`} component={ImageUpload}/>
<Route exact  path={`${path}/login`} component={Login}/>
<Route exact path={`${path}/sign-up`} component={SignUp}/>
<ProtectedRoute exact path={`${path}/dashboard`}> 
{roles()}
</ProtectedRoute>
<Route  path={`${path}/`}>
  <HomePage/>
</Route>
</Switch>

  )
  return (
<Col md={12}>
<Header/>
      <Row >
                {routes}
      </Row>
</Col>
       
    
  );
}

export default PageIndex;
