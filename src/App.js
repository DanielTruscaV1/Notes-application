//Import CSS (Cascading Style Sheets)
import './App.css';
//Import the function component "NotesList"
import NotesList from './components/NotesList';
//Import the hook "useState"
import {useState} from "react";
import {nanoid} from "nanoid";
//Create a function component
const App = () => {
  //Create a variable of type onject and a variable of type function of type setter using the "useState" hook representing the notes
  const [notes, setNotes] = useState([
    {id:nanoid(), text:"This is my first note!", date:"15/04/2021"},
    {id:nanoid(), text:"This is my second note!", date:"15/04/2021"},
    {id:nanoid(), text:"This is my third note!", date:"15/04/2021"}
  ]);
  return (
    <div className="container">
      {/*Pass the "notes" variable to the "NotesList" function component by props*/}
      <NotesList notes={notes}/>
    </div>
  );
}
//Export the function component "App"
export default App;
