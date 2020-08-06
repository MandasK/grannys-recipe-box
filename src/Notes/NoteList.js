import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import NoteCard from '../Notes/NoteCard';
import NoteForm from '../Notes/NoteForm';
import RecipeList from '../Recipe/RecipeList';

const NotesList = props => {
    const [notes, setNotes] = useState([]);
   

    const getNotes = () => {
        return APIManager.GetNotesWithRecipes().then(notesFromAPI => {
            setNotes(notesFromAPI)
        });
    };


    useEffect (() => {
        getNotes()
    }, [])

    if (parseInt(sessionStorage.noteRecipeId) == props.recipeId) {
    return(

        <div className="notesListContainer">
            
                {notes.map(note => <NoteCard
                key={note.id}
                note={note}
                {...props}
                />)}
            
        </div>
    )
        } else {
            console.log("Storage", parseInt(sessionStorage.noteUserId), "props", props.recipeId)
        }
}

export default NotesList