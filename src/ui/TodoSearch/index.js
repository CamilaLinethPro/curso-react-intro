import './TodoSearch.css';
import React from 'react';


function TodoSearch({searchValue, 
  setSearchValue, loading}) {
  
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      disabled={loading}
      onChange= {(event) =>{
        setSearchValue(event.target.value);
      }}
      
    />
  );
}

export { TodoSearch };