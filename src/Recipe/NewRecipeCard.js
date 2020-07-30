import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./NewRecipeCard.css"


const RecipeCard = props => {
    return (
   
            <Card className="recipeCard m-3">
                <Card.Body className="recipeCardBody">
                <Card.Img variant="top" src={(props.recipe.url)} alt="Recipe Image" className="recipeCardImage" />
                <Card.Title className="recipeCardTitle">{props.recipe.title}</Card.Title>
                <Card.Text className="recipeCardText">By: {props.recipe.user}</Card.Text>
                <Link to={(`/recipes/${props.recipe.id}`)}>
                <button className="goToRecipeButton">Go to Recipe</button>
                </Link>
                </Card.Body>
            </Card>
        
    )
}

export default RecipeCard;