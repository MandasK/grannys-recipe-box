import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Col, Row, CardImg } from 'reactstrap';
import APIManager from '../DataCalls/APIManager';
import './login.css'

const Login = (props) => {
    const [credentials, setCredentials] = useState({userId: 0});
    const [users, setUsers] = useState([]); 

    useEffect (() => {
        APIManager.GetAll("users")
        .then((response) => {
            setUsers(response)
        })

}, [])

    const handleLogin = (evt) => {
        evt.preventDefault();
        const userNameValue = document.getElementById("userName").value
        const userPasswordValue = document.getElementById("password").value
        let userNameCheck = false
        let passwordCheck = false
       

        users.forEach( user => {

            if (user.userName === userNameValue) {
                userNameCheck = true;

               if (user.password === userPasswordValue) {
                passwordCheck = true;
                credentials.userId = user.id
                props.setUser(credentials)
                props.history.push("/Dashboard")
                }
            }
        })
            if (userNameCheck === true) {
                if (passwordCheck === false) {
                  alert("Password is incorrect")
                }
            } else {
                alert("Username is incorrect")
            }
    }

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
    }

    return (
        <div className="loginContainer">
          <Card className="loginCard">
            <CardBody>
            <CardImg 
            className="loginLogo" 
            src={require("../logo.png")} 
            alt="imgLogo" />
           <CardTitle className="loginWelcome"> 
           Welcome to Granny's Recipe Box.
           </CardTitle>  
            <Form onSubmit={handleLogin}>
            <Row>
              <Col>
              <FormGroup>
                <Label className="loginLabel">Username</Label>
                <Input className="loginForm"
                  onChange={handleFieldChange}
                  type="text"
                  id="userName"
                  placeholder="Enter Username"
                />
              </FormGroup>
              <FormGroup>
                <Label className="loginLabel">Password</Label>
                <Input className="loginForm"
                  onChange={handleFieldChange}
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </FormGroup>
              <Button 
              className = "loginButton"
              color="custom" 
              type="submit">
                Login
              </Button>
              </Col>
              <Col>
              <Button
                className = "registerButton"
                color= "custom"
                onClick={() => props.history.push("/Registration")}
                type="submit">
                Register New Account
              </Button>
              </Col>
              </Row>
            </Form>
            </CardBody>
          </Card>
        </div>
      );

}


export default Login