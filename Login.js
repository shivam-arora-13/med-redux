import React , {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

import {connect} from "react-redux";
import * as userActions from "../../redux/actions/userActions";

const Login = (props) => {

  const [loginCred, setLoginCred] = useState({
    email : "",
    password : ""
  })

  const changeHandler = (event)=>{
    setLoginCred((prev)=>{
      return {
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <Form className="Login">

            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email"
                value = {loginCred.email} onChange = {changeHandler} />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter Password"
                value = {loginCred.password} onChange = {changeHandler}  />
            </FormGroup>

      <Button className = 'butto' onClick = {()=>{
        props.loginInit(loginCred)
        console.log(loginCred)
      }} >Sign in</Button>
      <br />
      <Button className = 'butto'>New User? Signup</Button>
    </Form>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
    loginInit : (loginCred)=>dispatch(userActions.LoginInit(loginCred))
  }
}

export default connect(null, mapDispatchToProps)(Login);