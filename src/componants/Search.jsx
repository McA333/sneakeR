import React from 'react';

const Search = () => {
  return (
    <>
    <div className="Search">
        <input 
        type="text" 
        name="SearchBar" 
        id="SearchBar" 
        placeholder="Rechercher" 
        />
    </div>
    <div className="Search-results">
        <div className="Search-results"></div>
    </div>
    </>
  );
}

export default Search;