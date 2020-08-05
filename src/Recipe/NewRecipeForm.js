import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import APIManager from "../DataCalls/APIManager";
import RecipeToOcr from './RecipeToOcr'
import "./NewRecipeForm.css"


const NewRecipeForm = props => {
 const [recipe, setRecipe] = useState({userId:parseInt(sessionStorage.activeUserID), title: "", recipe: "", url: "", user: sessionStorage.activeUser});
 const [isLoading, setIsLoading] = useState(false);

const handleFieldChange = event => {
    const stateToChange = {...recipe}
    stateToChange[event.target.id] = event.target.value;
    setRecipe(stateToChange)
};

        
        


const constructNewRecipe = event => {
    event.preventDefault();
    if (recipe.title === "" || recipe.url === "") {
        alert("Please complete all fields")
    } else {
        setIsLoading(true);
        APIManager.Post("recipes", recipe)
        .then(() => props.history.push("/Dashboard"))
    }
}
    return (
        <div className="recipeFormContainer">
        <Form className="newRecipeForm">
        <Form.Group className="newRecipeTitleGroup" controlId="title">
            <Form.Label className="newRecipeTitleLabel">Recipe Name</Form.Label>
            <Form.Control className="newRecipeTitleControl"
             type="text" 
            placeholder="Enter name of recipe."
            onChange={handleFieldChange}
             />
        </Form.Group>
        <Form.Group className="newRecipeImageGroup" controlId="url">
            <Form.Label className="newRecipeImageLabel">Recipe Photo URL</Form.Label>
            <Form.Control className="newRecipeImageControl" 
            type="text" 
            placeholder="Enter URL to photo of recipe"
            onChange={handleFieldChange}
             />
        </Form.Group>
        {/* <Form.Group className="bigRecipeForm" controlId="recipe">
            <Form.Label className="bigRecipeLabel">Recipe</Form.Label>
            <Form.Control className="bigRecipeControl" 
            as="textarea"
            type="text"
            placeholder="Enter Recipe Image URL Here"
            onChange={handleFieldChange}
             />
        </Form.Group> */}
        <RecipeToOcr {...props}/>
        
        
        <Button 
            className="newRecipeFormButton" 
            variant="custom" 
            onClick={constructNewRecipe}
            type="submit">
            Submit
        </Button>
        </Form>
        </div>
    )
}

export default NewRecipeForm