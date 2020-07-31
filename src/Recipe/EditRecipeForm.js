import React, { useState, useEffect } from 'react';
import APIManager from '../DataCalls/APIManager';
import { Form, Button } from 'react-bootstrap';
import "./NewRecipeForm.css"

const EditRecipeForm = props => {
    const [recipe, setRecipe] = useState({userId:parseInt(sessionStorage.activeUserID), title:"", url:"", recipe:"", user: sessionStorage.activeUser});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = { ...recipe };
        stateToChange[event.target.id] = event.target.value;
        setRecipe(stateToChange);
    };

    const updateExistingRecipe = event => {
        event.preventDefault()
        setIsLoading(true);

    const editedRecipe = {
        userId: parseInt(sessionStorage.activeUserID),
        id: props.match.params.recipeId,
        title: recipe.title,
        url: recipe.url,
        recipe: recipe.recipe,
        user: sessionStorage.activeUser
    };

    APIManager.Update("recipes", editedRecipe)
    .then(() => props.history.push(`/recipes/${props.match.params.recipeId}`))

    }

    useEffect(() => {
        APIManager.Get("recipes", props.match.params.recipeId)
        .then(recipe => {
        setRecipe(recipe);
        setIsLoading(false);
    })
    }, []);

    return (
    <div className="recipeFormContainer">
        <Form className="newRecipeForm">
        <Form.Group className="newRecipeTitleGroup" controlId="title">
            <Form.Label className="newRecipeTitleLabel">Recipe Name</Form.Label>
            <Form.Control className="newRecipeTitleControl"
             type="text" 
             value={recipe.title}
            placeholder="Enter name of recipe."
            onChange={handleFieldChange}
             />
        </Form.Group>
        <Form.Group className="newRecipeImageGroup" controlId="url">
            <Form.Label className="newRecipeImageLabel">Recipe Photo URL</Form.Label>
            <Form.Control className="newRecipeImageControl" 
            type="text" 
            value={recipe.url}
            placeholder="Enter URL to photo of recipe"
            onChange={handleFieldChange}
             />
        </Form.Group>
        <Form.Group className="bigRecipeForm" controlId="recipe">
            <Form.Label className="bigRecipeLabel">Recipe</Form.Label>
            <Form.Control className="bigRecipeControl" 
            as="textarea"
            type="text"
            value={recipe.recipe}
            placeholder="Enter Recipe Here"
            onChange={handleFieldChange}
             />
        </Form.Group>
        <Button 
            className="newRecipeFormButton" 
            variant="custom" 
            onClick={updateExistingRecipe}
            type="submit">
            Submit
        </Button>
        </Form>
        </div>
    )
}


export default EditRecipeForm