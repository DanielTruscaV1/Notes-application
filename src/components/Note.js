//Import React Icons
import {MdDeleteForever} from "react-icons/md";
//Create the function component "Note"
const Note = () => {
    return (
        <div className="note">
            <span>Hello! This is our first note! Hurray!</span>
            <div className="note-footer">
                <small>13/04/2021</small>
                <MdDeleteForever className="delete-icon" size="1.3em"/>
            </div>
        </div>
    );
}
//Export the function component "Note"
export default Note;