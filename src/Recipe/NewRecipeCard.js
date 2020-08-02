import React from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./NewRecipeCard.css"


const RecipeCard = props => {
    return (
   
            <Card className="recipeCard">
                <Image src={(props.recipe.url)} alt="Recipe Image" className="recipeCardImage" />
                <Card.Body className="recipeCardBody">
                <Card.Title className="recipeCardTitle">{props.recipe.title}</Card.Title>
                <Card.Text className="recipeCardText">By: {props.recipe.user}</Card.Text>
                <Link to={(`/recipes/${props.recipe.id}`)}>
                <Button className="goToRecipeButton">Go to Recipe</Button>
                </Link>
                </Card.Body>
            </Card>
        
    )
}

export default RecipeCard;