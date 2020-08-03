import React from 'react';
import { Card, Row } from 'react-bootstrap';
import "../Recipe/RecipeDetail.css"


const NoteCard = props => {
    return (
        
            <Row className="noteCard">
            <Card.Text className="noteText">By: {props.note.user}: </Card.Text>
                <p className="notetext2">{props.note.note}</p>
            </Row>
    )
}

export default NoteCard