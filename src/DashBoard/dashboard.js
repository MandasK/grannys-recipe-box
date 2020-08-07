import React from "react";
import { Container, Row, Col } from "reactstrap";
import RecipeList from "../Recipe/RecipeList"
import "./dashboard.css";
import FriendList from "../Friends/FriendList";
import { withRouter } from 'react-router'


const Dashboard = props => {

  

    return (
        <Container fluid className="dashboardContainer">
          
            {/* // Friends list andall recipe in this Row */}
            <Row className="friendsAndDashboardRow">
                {/* Firends List in thie Col */}
                <Col sm={2} className="friendsCol">
                    <FriendList {...props} />
                </Col>
                {/* all recipes in this  Col */}
                
                <Col sm={8} className="dashboardCol">
                   <RecipeList {...props} />
                </Col>
            </Row>
            </Container>
    )
}

export default Dashboard