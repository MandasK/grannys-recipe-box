import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import NavBar from "../Navbar/Navbar";
import RecipeList from "../Recipe/RecipeList"
import "./dashboard.css";


const Dashboard = props => {

    const clearUser= () => {
        sessionStorage.clear();
        localStorage.clear();
    }

    return (
        <Container fluid className="dashboardContainer">
            {/* user welcome and Navbar in this row */}
            <Row className="userAndNavRow">
                {/* User info in this Col */}
                <Col md={2} className="userCol">
                    Welcome, {sessionStorage.activeUser}  
                    {/* <Image className="userIcon" src={require("../birdimg.png")} roundedCircle />                   */}
                </Col>
                {/* Navbar in this col */}
                <Col className="navbarCol">
                    <NavBar clearUser={clearUser} {...props} />
                {/* <Navbar clearUser={clearUser} {...props} /> */}
                </Col>
            </Row>
            {/* // Friends list andall recipe in this Row */}
            <Row className="friendsAndDashboardRow">
                {/* Firends List in thie Col */}
                <Col md={3} className="friendsCol">
                    Friends List
                </Col>
                {/* all recipes in this  Col */}
                <Col>
                <Container className="dashboardCol">
                   <RecipeList />
                </Container>
                
                </Col>
            </Row>
            </Container>
    )
}

export default Dashboard