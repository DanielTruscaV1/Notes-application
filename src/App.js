//Import CSS (Cascading Style Sheets)
import './App.css';
//Import the function component "NotesList"
import NotesList from './components/NotesList';
//Import the hook "useState"
import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
//Import the "Search" function component
import Search from "./components/Search";
//Import the "Header" function component
import Header from "./components/Header";
//Create a function component
const App = () => {
  //Create a variable of type onject and a variable of type function of type setter using the "useState" hook representing the notes
  const [notes, setNotes] = useState([
    {id:nanoid(), text:"This is my first note!", date:"15/04/2021"},
    {id:nanoid(), text:"This is my second note!", date:"15/04/2021"},
    {id:nanoid(), text:"This is my third note!", date:"15/04/2021"},
    {id:nanoid(), text:"This is my new note!", date:"15/04/2021"}
  ]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
  //Create an arrow function to create a new note
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  //Create an arrow function to delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        {/*Pass the "notes" variable to the "NotesList" function component by props*/}
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  );
}
//Export the function component "App"
export default App;
