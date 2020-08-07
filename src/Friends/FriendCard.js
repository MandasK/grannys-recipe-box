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
        <Card className="friendCard" style={{ width: "15rem", height: "3rem" }}>
        <Row>
            <Card.Text className="friendCardText">{props.friend.user.userName}</Card.Text>
            <Button variant="custom" className="goToFriendRecipeButton" onClick={handleOnClick} id={props.friend.userId}>Recipes</Button>
        </Row>
        </Card>

    )
}

export default FriendCard