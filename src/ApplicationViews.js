import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './DashBoard/dashboard';
import Registration from './UserAccess/registration';
import Login from './UserAccess/login';
import NewRecipeForm from "./Recipe/NewRecipeForm"
import RecipeDetail from './Recipe/RecipeDetail';
import EditRecipeForm from "./Recipe/EditRecipeForm";
import RecipeList from './Recipe/RecipeList';
import RecipeCard from './Recipe/NewRecipeCard';

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser

    const allRecipes=true;
    const userRecipes =true;
    const recipeUserName=true;

    return (
        <>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Login
             setUser={setUser} 
             {...props} />;
          }}
        />
        <Route
          exact
          path="/Registration"
          render={(props) => {
            return <Registration
             setUser={setUser}
              {...props} />;
          }}
        />
         <Route
                exact
                path="/Dashboard"
                render={props => {
                    if(hasUser){
                       return <Dashboard
                         allRecipes={allRecipes}
                        {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
         <Route
             exact path="/recipes" 
             render={(props) => {
            if (hasUser) {   
                return <RecipeList
                allRecipes={allRecipes}
                 {...props} />
            } else {
                return <Redirect to="/" />  
            }
            }} 
            />    
        <Route 
            path="/recipes/New" 
            render={(props) => {
              return <NewRecipeForm
               {...props} />
            }} 
            />   
        <Route
          exact 
          path="/recipes/:recipeId(\d+)" 
          render={(props) => {
            return <RecipeDetail 
            recipeId={props.match.params.recipeId} 
            {...props} />
          }} 
          />   
          <Route
          path="/recipes/:recipeId(\d+)/edit"
          render={props => {
              return <EditRecipeForm 
              {...props} />
          }} 
          />
          <Route 
          exact
          path="/recipes/MyRecipeBox/:userId(\d+)"
          render = {props => {
            return <RecipeList
                    userRecipes={userRecipes}
            {...props} />
          }}
          />
          <Route 
          
          path="/recipes/RecipeBox/:userId(\d+)"
          render = {props => {
            return <RecipeList
            recipeUserName={recipeUserName}
            {...props} />
          }}
          />
        </>
    )
}

export default ApplicationViews