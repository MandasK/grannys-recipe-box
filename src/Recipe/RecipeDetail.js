import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, Row } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import NotesList from '../Notes/NoteList'
import NoteForm from '../Notes/NoteForm'
import './RecipeDetail.css';
import NavBar from '../Navbar/Navbar'


const RecipeDetail = props => {
    const [recipe, setRecipe] = useState({title: "", url: "", recipe: "", userId: "", id:""});
    const [comment, setComment] = useState({recipe: parseInt(sessionStorage.noteRecipeId)})
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        APIManager.Get("recipes", props.recipeId)
            .then(recipe => {
                setRecipe({
                   title: recipe.title,
                   url: recipe.url,
                   recipe: recipe.recipe, 
                   userId: recipe.userId,
                   id: recipe.id
                });
                setisLoading(false);
            });
    }, [props.recipeId]);


    const handleDelete = () => {
        setisLoading(true);
        APIManager.Delete("recipes", props.recipeId).then(() => 
            props.history.push("/Dashboard")
        );
    };
    
   
        if (recipe.title !== undefined) {
        return (
            <>
            
            <div className="displayRecipeContainer">
            <Card className="displayRecipeCard">
                <Card.Body className="displayCardBody">
                <Card.Img src={(recipe.url)} alt="Recipe Image" className="displayRecipeCardImage" />
                <Card.Title className="displayRecipeCardTitle">{recipe.title}</Card.Title>
                <Card.Text className="displayRecipeText">{recipe.recipe}</Card.Text>
                <Row>
                {recipe.userId === parseInt(sessionStorage.activeUserID) ? <Button className="displayRecipeDelete" variant="custom" disabled={isLoading} onClick={handleDelete}>Delete</Button> : ""}
                {recipe.userId === parseInt(sessionStorage.activeUserID) ? <Button className="displayRecipeEdit" variant="custom" disabled={isLoading} onClick={() => props.history.push(`/recipes/${props.recipeId}/edit`)}>Edit Recipe</Button> : ""}
                </Row>
                <Card.Footer className="noteFooter">
                <h5 className="noteHeadText">Notes</h5>
                {parseInt(props.recipeId) === comment.recipe  ?
                    <NotesList {...props} />
                     : ""}
                {recipe.userId === parseInt(sessionStorage.friendId) ? <NoteForm /> : ""}
               </Card.Footer>
                </Card.Body>
                
            </Card>
            </div>
            </>
        );
        } else {
            return <Redirect to="/Dashboard" />
        }

    }


    export default RecipeDetail