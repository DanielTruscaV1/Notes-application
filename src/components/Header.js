//import React
import React from "react";
//Create the "Header" function component
const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="save">Toggle Mode</button>
        </div>
    );
}
//Export the "Header" function component
export default Header;