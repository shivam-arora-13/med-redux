import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Signup.css';

import {connect} from "react-redux";
import * as userActions from "../../redux/actions/userActions";

const Signup = (props) => {

  const [signupCred, setSignupCred] = useState({
    name : "",
    username : "",
    role : "donor",
    password : "",
    description : ""
  })

  const changeHandler = (event)=>{
    setSignupCred((prev)=>{
      return {
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <Form className='Signup'>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email/Username</Label>
            <Input type="text" name="name" id="exampleEmail" placeholder="Enter name" 
             onChange={changeHandler} value={signupCred.name}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" 
             onChange={changeHandler} value={signupCred.password}/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className='usernamebox'>
        <Label for="exampleUsername">Name</Label>
        <Input type="text" name="username" id="name" placeholder="Enter Your UserName"
         onChange={changeHandler} value={signupCred.username}/>
      </FormGroup>

      <FormGroup className='usernamebox'>
      <Label for="exampleRole">Role</Label>
      <Input type="select" name="role" id="exampleRole"
       onChange={changeHandler} value={signupCred.role}>
          <option>donor</option>
          <option>ngo</option>
          <option>admin</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description" value={signupCred.description} 
        onChange={changeHandler}/>
      </FormGroup>

      <Button className='butto' onClick={()=>{
        console.log(signupCred)
        props.signupInit(signupCred)
      }}>Sign Up</Button>
    </Form>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signupInit : (signupCred)=>dispatch(userActions.signupInit(signupCred))
  }
}


export default connect(null, mapDispatchToProps)(Signup);