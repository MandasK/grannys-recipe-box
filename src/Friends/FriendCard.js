import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import APIManager from '../DataCalls/APIManager';

const FriendCard = props => {

    const handleOnClick = (event) => {
        sessionStorage.setItem("friendId", event.target.id)
        props.history.push(`/recipes/RecipeBox/${sessionStorage.friendId}`)
    } 

    return(
        <>
        <Card className="friendCard">
            <Card.Text className="friendCardText">{props.friend.user.userName}</Card.Text>
            <Button className="goToRecipeButton" onClick={handleOnClick} id={props.friend.userId}>See all Recipes</Button>
                
        </Card>
        </>
    )
}

export default FriendCard