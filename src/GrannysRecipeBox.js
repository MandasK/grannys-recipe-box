import React, { useState } from "react";
import ApplicationViews from './ApplicationViews';
import NavBar from "./Navbar/Navbar";




const GrannysRecipeBox = (props) => {
  
  
    const isAuthenticated = () => {
      if (
        sessionStorage.getItem("activeUser") !== null ||
        localStorage.getItem("activeUser") !== null
      ) {
        return true;
      } else {
        return false;
      }
    };

    
    const [hasUser, setHasUser] = useState(isAuthenticated());
    const setUser = (user) => {
      sessionStorage.setItem("activeUserID", JSON.stringify(user.userId));
      sessionStorage.setItem("activeUser", user.userName)
      setHasUser(isAuthenticated())
    }
    
    
    return (
        <>
         {sessionStorage.activeUserID ? <NavBar {...props} /> : null}
        <ApplicationViews setUser={setUser} hasUser={hasUser} />
         
        </>
    )
}

export default GrannysRecipeBox