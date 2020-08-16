import React, { useState, useEffect } from 'react';
import APIManager from '../DataCalls/APIManager';
import NoteCard from '../Notes/NoteCard';


const NotesList = props => {
    const [notes, setNotes] = useState([]);
   

    const getNotes = () => {
        return APIManager.GetNotesWithRecipes().then(response => {
            setNotes(response)
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
                setNotes={getNotes}
                {...props}
                />)}
            
        </div>
    )
        } else {
            console.log("Storage", parseInt(sessionStorage.noteUserId), "props", props.recipeId)
        }
}

export default NotesList