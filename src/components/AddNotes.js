//Import the "useState" hook
import {useState} from "react";
//Create the "AddNote" function component
const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("");
    //Create an arrow function of type handler to handle the onchange event
    const handleChange = (event) => {
        setNoteText(event.target.value);
    }
    //Create an arrow function of type handler to handle the submit event
    const handleSaveClick = (event) => {
        if(noteText.trim().length > 0)
        {
            handleAddNote(noteText);   
            setNoteText("");
        } 
    }
    return (
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}
//Export the "AddNote" function component
export default AddNote;