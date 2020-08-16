import React from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager'
import "../Recipe/RecipeDetail.css"


const NoteCard = props => {

    const handleNoteDelete = evt => {
        APIManager.Delete("notes", evt.target.id).then(() => {
            APIManager.GetNotesWithRecipes()
        })
        .then((response) => {
            props.setNotes(response)
        })
        }
    
    return (
        
            <Row className="noteCard">
            <Card.Text className="noteText">By: {props.note.user}: </Card.Text>
                <p className="notetext2">{props.note.note}</p>
                {props.note.userId === parseInt(sessionStorage.activeUserID) ?  <Button type="button" className="displayNoteDelete" id={props.note.id} variant="custom" onClick={handleNoteDelete}> X </Button> : ""}
            </Row>
    )
}

export default NoteCard