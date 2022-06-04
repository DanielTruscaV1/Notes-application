//Import React Icons
import {MdDeleteForever} from "react-icons/md";
//Import the "useState" hook
import {useState} from "react";
//Create the function component "Note"
const Note = ({id, text, date, handleDeleteNote}) => {
    const [colors, setColors] = useState([
        "Colors",
        "Red",
        "Green",
        "Blue"
    ]);
    const [input, setInput] = useState("");
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <div className={input === "" || input === "Colors" ? "note" : input}>
            <div className="inline">
                {text}
                <select value={input} onChange={handleChange}>
                    {colors.map(element => <option>{element}</option>)}
                </select>
            </div>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em"/>
            </div>
        </div>
    );
}
//Export the function component "Note"
export default Note;