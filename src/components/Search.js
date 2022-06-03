//Import React
import React from "react";
//Import React icons
import {MdSearch} from "react-icons/md";
//Create the "Search" function component
const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3rem"/>
            <input onChange={(event) => handleSearchNote(event.target.value)}type="text" placeholder="type to search..."/>
        </div>
    );
}
//Export the "Search" function component
export default Search;