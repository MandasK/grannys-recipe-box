import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import APIManager from "../DataCalls/APIManager";
import "../Recipe/RecipeDetail.css"

const NoteForm = props => {
    const [note, setNote] = useState({userId:parseInt(sessionStorage.activeUserID), recipeId: parseInt(sessionStorage.noteRecipeId), note:"", user: sessionStorage.activeUser, date:Date.now()});
    

    const handleFieldChange = event => {
        const stateToChange = {...note}
        stateToChange[event.target.id] = event.target.value;
        setNote(stateToChange)
    };

    const clearInput = () => {
        document.getElementById("note").value=""
    }

    const constructNewNote = () => {
        if (note.note === "") {
            alert("Please complete all fields")
        } else {
            APIManager.Post("notes", note)
            .then(() => APIManager.GetAll("notes")).then(setNote());
            clearInput();
        }
    }

        return (
            <div className="noteFormContainer">
                
              <Form className="newNoteForm">
              <Row>
              <Form.Group className="newNoteGroup" controlId="note">
                <Form.Control className="newNoteControl"
                type="text" 
                placeholder="How'd you like this recipe?"
                onChange={handleFieldChange}
                />
              </Form.Group>   
              <Button 
                className="newNoteButton" 
                variant="custom" 
                onClick={constructNewNote}
                type="submit">
                Submit
              </Button>
              </Row>
              </Form>  
              
            </div>
        )

}

export default NoteForm