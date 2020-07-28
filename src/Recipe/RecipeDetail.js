import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import Navbar from '../Navbar/Navbar';
import './RecipeDetail.css';

const RecipeDetail = props => {
    const [recipe, setRecipe] = useState({title: "", url: "", recipe: ""});
    const [isLoading, setisLoading] = useState(true);

    

    useEffect(() => {
        APIManager.Get("recipes", props.recipeId)
            .then(recipe => {
                setRecipe({
                   title: recipe.title,
                   url: recipe.url,
                   recipe: recipe.recipe.replace("/n", "<br>") 
                })
                setisLoading(false)
            })


    }, [props.recipeId]);

    const handleDelete = () => {
        setisLoading(true);
        APIManager.Delete("recipes", props.recipeId). then(() => 
            props.history.push("/Dashboard")
        );
    }
    let newText = recipe.recipe.split("\n").map((item, i) => {
        return <p key={i}>{item}</p>;
        });

        return (
            <>
            <Navbar />
            <Card className="displayRecipeCard">
                <Card.Body className="displayCardBody">
                <Card.Img src={(recipe.url)} alt="Recipe Image" className="displayRecipeCardImage" />
                <Card.Title className="displayRecipeCardTitle">{recipe.title}</Card.Title>
                <Card.Text>{newText}</Card.Text>
                <Button className="displayRecipeDelete" variant="custom" disabled={isLoading} onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
            </>
        )

    }


    export default RecipeDetail