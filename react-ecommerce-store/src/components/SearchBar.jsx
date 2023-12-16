import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <SearcBar>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </SearcBar>
  );
};

const SearcBar = styled.div`
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  input {
    height: 30px;
    border-radius: 5px 0 0 5px;
    border: none;
    outline: none;
    box-sizing: border-box;
    width: max-content;
  }
  button {
    height: 30px;
    border-radius: 0 5px 5px 0;
    border: none
  }

`

export default SearchBar;