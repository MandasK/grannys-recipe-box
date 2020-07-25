import React, { useState, useEffect } from "react";
import { Form,FormGroup, Label, Input, CardBody, CardSubtitle, Button, Card } from "reactstrap";
import APIManager from "../DataCalls/APIManager";

const Register = (props) => {
  
    const [credentials, setCredentials] = useState({ email: "", userName: "", password: ""});
    const [users, setUsers] = useState([])
    useEffect(()=> {
      APIManager.GetAll("users")
      .then((response) => {
        setUsers(response)
      })
    }, [])
    const handleRegister = (event) => {
        event.preventDefault();
        const userEmailInputValue = document.getElementById("email").value
        const userNameInputValue = document.getElementById("userName").value
        const userPasswordValue = document.getElementById("password").value
        const userConfirmPasswordValue = document.getElementById("confirmedPassword").value
        let userNameCheck = true;
        let userEmailCheck = true;
        users.forEach(user => {
            if (user.email === userEmailInputValue ) {
                userEmailCheck = false;
                if (user.userName === userNameInputValue){
                    userNameCheck = false;
                } 
            }   
        })
            if (userEmailCheck === true && userEmailInputValue !== "") {
                if (userNameCheck === true && userNameInputValue !== "") {
                    if (userPasswordValue === userConfirmPasswordValue && userPasswordValue !== "" ) {
                        
                        APIManager.Post("users", credentials) .then(() => {
                          APIManager.GetAll("users").then((response) => {
                            response.forEach(user => {
                              if(user.userName === userNameInputValue){
                                credentials.userId = user.id
                                props.setUser(credentials)
                              }
                            })
                          })
                        })
                        props.history.push("/Dashboard")
                    } else {
                       return (
                              alert("Retry password")
                              )
                    }
                } else {
                   return (
                          alert("Retry username")
                          )
                }
            } else {
               return (
                      alert("Retry email")
                      )
            }
        
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }
    return (
      <div className="registerContainer">
        <Card className="registrationCard">
        <CardBody>         
          <CardSubtitle className="registerWelcome">
            Please register below.
          </CardSubtitle>
          <Form className="registerForm" onSubmit={handleRegister}>
            <FormGroup>
              <Label className="registerLabel">Email address</Label>
              <Input
                className="registerLogin"
                onChange={handleFieldChange}
                type="email"
                id="email"
                placeholder="Enter Email"
              />
            </FormGroup>
            <FormGroup>
              <Label className="registerLabel">Username</Label>
              <Input
                className="registerLogin"
                onChange={handleFieldChange}
                type="userName"
                id="userName"
                placeholder="Enter Username"
              />
            </FormGroup>
            <FormGroup>
              <Label className="registerLabel">Password</Label>
              <Input
                className="registerLogin"
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </FormGroup>
            <FormGroup>
              <Label className="registerLabel">
                Confirm Password
              </Label>
              <Input
                className="registerLogin"
                type="password"
                id="confirmedPassword"
                placeholder="Confirm Password"
              />
            </FormGroup>
            <Button
              className="registrationButton"
              onClick={handleRegister}
              variant="custom"
              type="submit"
            >
              Register
            </Button>
          </Form>
          </CardBody>
        </Card>
      </div>
    );
}
export default Register
