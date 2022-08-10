import React from 'react';
import './app.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const App = () => {
  return (
    <>
      <SearchBar />
      <VideoList/>
    </>
  );
};

export default App;
