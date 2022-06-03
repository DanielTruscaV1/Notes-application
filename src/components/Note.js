//Import React Icons
import {MdDeleteForever} from "react-icons/md";
//Create the function component "Note"
const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em"/>
            </div>
        </div>
    );
}
//Export the function component "Note"
export default Note;