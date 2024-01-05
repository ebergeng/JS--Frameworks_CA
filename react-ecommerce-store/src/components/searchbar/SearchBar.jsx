import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <SearcBar onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type='submit' onClick={handleSearch}><SearchIcon className="searchIcon" /></button>
    </SearcBar>
  );
};

const SearcBar = styled.form`
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  border: 4px solid #2e2e2e;
  border-radius: 5px;
 
  display: flex;
  input {
    height: 30px;
    border: none;
    outline: none;
    width: max-content;
    box-sizing: border-box;
    background-color: #c9c8c8;
  }
  button {
    height: 30px;
    border: none;
    border-left: 4px solid #2e2e2e;
    background-color: #2e2e2e;
    :hover {
      cursor: pointer;
      .searchIcon:hover {
        fill: #27e027;
      }
      
    }

    
    
  }
  :focus-within {
    box-shadow: 2px 2px 5px #313131;
  }

`

export default SearchBar;