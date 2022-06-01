//Import CSS (Cascading Style Sheets)
import './App.css';
//Import the function component "NotesList"
import NotesList from './components/NotesList';
//Create a function component
const App = () => {
  return (
    <div className="container">
      <NotesList/>
    </div>
  );
}
//Export the function component "App"
export default App;
