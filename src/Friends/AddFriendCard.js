import React, { useState, useEffect } from 'react';
import { Card, Button, Form, FormControl } from "react-bootstrap";
import APIManager from '../DataCalls/APIManager';

const AddFriendCard = props => {
    const [addFriends, setAddFriends] = useState({userId:0, activeUserId:parseInt(sessionStorage.activeUserID)});
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    let update = props.friendUpdate;
    
    const getUsers = () => {
        return APIManager.GetAll("users").then(usersFromAPI => {
            setAddFriends(usersFromAPI)
        })
    }

    const handleFriendAdd = (event) => {
        addFriends.userId = parseInt(event.target.id)
        APIManager.Push("friends", addFriends).then(() => {

        APIManager.GetAll("users").then((response) => props.setFriends(response)).then(() => {
            APIManager.GetUsersFriends().then((response) => props.setAddFriends(response)).then(() => props.setFilteredFriends([]))
            .then(() => update()).then(() => props.clear).then(() => props.newFriends)
        })
    })
    }
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        setFilteredUsers(
            addFriends.filter( addFriend =>
                addFriend.userName.toLowerCase().includes(search.toLowerCase()))
        )
    })

        return (
            <>
            <Form className="dashForm addFriendSearchForm" inline>
                <FormControl className="dashcontrol addFriendSearchBox" type="text" placeholder="Search" onChange={event => setSearch(event.target.value)} className="mr-sm-2" />
            </Form>
            <Card className="addFriendCard">
                <Card.Text className="addFriendCardText">{addFriends.userName}</Card.Text>
                <Button className="addFriendCardButton"
                    variant="custom"
                    id={props.friends.id}
                    onchange="disabled"
                    onCLick={handleFriendAdd}
                    type="submit"> + </Button>
            </Card>
            </>
        )
    
}

export default AddFriendCard