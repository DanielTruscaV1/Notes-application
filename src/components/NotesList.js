//Import the function component "Note"
import Note from "./Note";
//Import the "AddNote" function component
import AddNote from "./AddNotes";
//Create the function component "NotesList"
const NotesList = ({notes, handleAddNote}) => {
    return (
        <div className="notes-list">
            {/*Use the "map" method of the "notes" variable to generate a dynamic list of notes*/}
            {/*Pass the "note.id", "note.text", "note.date" fields of the "note" variable to the "Note" function component by props*/}
            {notes.map((note) => 
                <Note id={note.id} text={note.text} date={note.date}/>
            )}
            {/*Pass the "handleAddNote" function to the "AddNote" function component by props*/}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}
//Export the function component "NotesList"
export default NotesList;