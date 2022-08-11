import React from 'react';
import './app.css';
import SearchBar from './components/searchBar/SearchBar';
import VideoList from './components/video_list/VideoList';

const App = () => {
  return (
    <div className='App'>
      <SearchBar />
      <VideoList/>
    </div>
  );
};

export default App;
