import React, { useState, useEffect } from 'react';
import { Row, Button, Form } from "react-bootstrap";
import APIManager from '../DataCalls/APIManager';

const FriendForm = props => {
    const [addFriend,setAddFriend] = useState({currentUserId: sessionStorage.activeUserID});
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getUsers =() => {
        APIManager.GetAll("users").then(usersFromAPI => {
            setUsers(usersFromAPI)
        })
    }

    const handleFieldChange = event => {
        const stateToChange = {...addFriend}
        stateToChange[event.target.id] = event.target.value;
        setAddFriend(stateToChange)
    };
    
    const addFriends = event => {
        event.preventDefault();
        setIsLoading(true);
        APIManager.Post("friends", addFriend)
        .then(() => {
            props.getFriends()
        })
    }


    useEffect(() => {
        getUsers();
    }, []);


   

    return (
        <>
        <Row className="addFriendRow">
            <Form className="dashForm ">
            <Form.Group controlId="userId" className="friendFormUserDrop" onChange={handleFieldChange}>
                    <Form.Control as="select">
                        {users.map(user => <option key={user.id} value={user.id}>{user.userName}</option>)}  
                    </Form.Control>
            </Form.Group>
            </Form>
            <Button
              className = "addFriendButton"
              variant= "custom"
              onClick={addFriends}
              type="submit"
            >
            Add
            </Button>
            </Row>
        </>
    )
}

export default FriendForm