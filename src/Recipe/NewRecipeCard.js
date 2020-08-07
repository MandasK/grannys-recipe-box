import React from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import NavBar from '../Navbar/Navbar'
import "./NewRecipeCard.css"



const RecipeCard = props => {

    const handleOnClick = event => {
        sessionStorage.setItem("noteRecipeId", event.target.id)
    }

    return ( 
   
            <Card className="recipeCard" style={{ width: "25rem", height: "38rem" }}>
                <Card.Img variant="top" src={(props.recipe.url)} alt="Recipe Image" className="recipeCardImage" />
                <Card.Body className="recipeCardBody">
                <Card.Title className="recipeCardTitle">{props.recipe.title}</Card.Title>
                <Card.Text className="recipeCardText">By: {props.recipe.user}</Card.Text>
                </Card.Body>
                <Link to={(`/recipes/${props.recipe.id}`)}>
                <Button variant="custom" className="goToRecipeButton" id={props.recipe.id} onClick={handleOnClick}>Go to Recipe</Button>
                </Link>
                
            </Card>
        
    )
}

export default RecipeCard;