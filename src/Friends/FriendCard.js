import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import APIManager from '../DataCalls/APIManager';

const FriendCard = props => {


    return(
        <>
        <Card className="friendCard">
            <Card.Text className="friendCardText">{props.friend.user.userName}</Card.Text>
            <Link to={(`/recipes/MyRecipeBox${props.friend.user.userId}`)}>
                <button className="goToRecipeButton">Go to Recipe</button>
                </Link>
        </Card>
        </>
    )
}

export default FriendCard