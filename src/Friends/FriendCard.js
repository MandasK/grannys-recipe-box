import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import APIManager from '../DataCalls/APIManager';

const FriendCard = props => {

    const handleOnClick = (event) => {
        sessionStorage.setItem("friendId", event.target.id)
        props.history.push(`/recipes/RecipeBox/${sessionStorage.friendId}`)
    } 

    return(
        <>
        <Card className="friendCard" style={{ width: "15rem", height: "3rem" }}>
        <Button variant="custom" className="goToFriendRecipeButton" onClick={handleOnClick} id={props.friend.userId}>
            {props.friend.user.userName}
        </Button>
        </Card>
        </>

    )
}

export default FriendCard