import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './DashBoard/dashboard';
import Registration from './UserAccess/registration';
import Login from './UserAccess/login';
import NewRecipeForm from "./Recipe/NewRecipeForm"

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser

    return (
        <>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Login setUser={setUser} {...props} />;
          }}
        />
        <Route
          exact
          path="/Registration"
          render={(props) => {
            return <Registration setUser={setUser} {...props} />;
          }}
        />
         <Route
                exact
                path="/Dashboard"
                render={props => {
                    if(hasUser){
                       return <Dashboard {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
        <Route 
            path="/Recipes/New" 
            render={(props) => {
                return <NewRecipeForm {...props} />
            }} 
            />    
        </>
    )
}

export default ApplicationViews