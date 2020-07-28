import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import NewRecipeCard from './NewRecipeCard';
import "./NewRecipeCard.css"
import RecipeCard from './NewRecipeCard';

const RecipeList = props => {
    const[recipes, setRecipes] = useState([])

    const getRecipes = () => {
        return APIManager.GetAll("recipes").then(recipesFromAPI => {
            setRecipes(recipesFromAPI)
        })
    }
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <Row lg="3" className="recipeListContainer">
            {recipes.map(recipe => <RecipeCard 
                key={recipe.id}
                recipe={recipe}
                {...props}
            />)}
        </Row>
    )
}

export default RecipeList