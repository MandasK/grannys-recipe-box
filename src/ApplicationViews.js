import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './DashBoard/dashboard';
import Registration from './UserAccess/registration';
import Login from './UserAccess/login';
import NewRecipeForm from "./Recipe/NewRecipeForm"
import RecipeDetail from './Recipe/RecipeDetail';
import EditRecipeForm from "./Recipe/EditRecipeForm"

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser

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
                return <Dashboard
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
        </>
    )
}

export default ApplicationViews