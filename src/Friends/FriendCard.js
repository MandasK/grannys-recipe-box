import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import APIManager from '../DataCalls/APIManager';

const FriendCard = props => {


    return(
        <>
        <Card className="friendCard">
            <Card.Text className="friendCardText">{props.friend.user.userName}</Card.Text>
            <Link to={(`/recipes/RecipeBox/${props.friend.userId}`)}>
                <button className="goToRecipeButton">See all of </button>
                </Link>
        </Card>
        </>
    )
}

export default FriendCard