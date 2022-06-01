//Import the function component "Note"
import Note from "./Note";
//Create the function component "NotesList"
const NotesList = () => {
    return (
        <div className="notes-list">
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </div>
    );
}
//Export the function component "NotesList"
export default NotesList;