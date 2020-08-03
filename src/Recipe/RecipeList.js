import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormControl, Container } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import RecipeCard from './NewRecipeCard';
import "./RecipeList.css"

const RecipeList = props => {
    const[recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const getRecipes = () => {
        return APIManager.GetAll("recipes").then(recipesFromAPI => {
            setRecipes(recipesFromAPI)
        })
    }

    const getUserRecipesList = () => {
        return APIManager.GetUsersRecipes().then((response) => {
            setRecipes(response)
        })
    }

    const getRecipeUsername = () => {
        return APIManager.GetUserRecipesByUser(sessionStorage.friendId).then((response) => {
            setRecipes(response)
        })
        
    }

    useEffect(() => {
        if (props.userRecipes) {
             getUserRecipesList()
        } else if(props.recipeUserName) {
            getRecipeUsername()
        } else if (props.allRecipes) {
            getRecipes();
        }
    }, []);

    useEffect(() => {
        setFilteredRecipes(
            recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, recipes]);

   

    return (
            <>
            <Form className="dashForm recipeListSearch">
                <FormControl className="dashcontrol" type="text" placeholder="Search Recipes by Ingredient" onChange={event => setSearch(event.target.value)} className="mr-sm-2" />
            </Form>
            <Row sm={3}>
            {filteredRecipes.map(recipe =><Col ><RecipeCard 
                key={recipe.id}
                recipe={recipe}
                
                {...props}
            /> </Col>)}
            </Row>
        </>
    )
}

export default RecipeList