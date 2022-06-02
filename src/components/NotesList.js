//Import the function component "Note"
import Note from "./Note";
//Create the function component "NotesList"
const NotesList = ({notes}) => {
    return (
        <div className="notes-list">
            {/*Use the "map" method of the "notes" variable to generate a dynamic list of notes*/}
            {/*Pass the "note.id", "note.text", "note.date" fields of the "note" variable to the "Note" function component by props*/}
            {notes.map((note) => 
                <Note id={note.id} text={note.text} date={note.date}/>
            )}
        </div>
    );
}
//Export the function component "NotesList"
export default NotesList;