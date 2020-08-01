import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import RecipeCard from './NewRecipeCard';
import RecipeDetail from './RecipeDetail'

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
        return APIManager.GetUserRecipesByUser(recipes.userId).then((response) => {
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
            <Form className="dashForm" inline>
                <FormControl className="dashcontrol" type="text" placeholder="Search" onChange={event => setSearch(event.target.value)} className="mr-sm-2" />
            </Form>
        <Row lg="3" className="recipeListContainer">
            {filteredRecipes.map(recipe => <RecipeCard 
                key={recipe.id}
                recipe={recipe}
                
                {...props}
            />)}
        </Row>
        </>
    )
}

export default RecipeList