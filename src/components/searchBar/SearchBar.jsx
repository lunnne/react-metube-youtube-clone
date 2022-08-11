import React, { useRef } from 'react';
import logo from '../../asset/images/logo.png';
import search from '../../asset/images/search.png';

const SearchBar = () => {
  const inputRef = useRef();

  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <span>Youtube</span>
        <input ref={inputRef} type="text" className="search-input" placeholder="Search.." />
        <div className="search-icon-container">
          <img src={search} alt="search-icon" className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
