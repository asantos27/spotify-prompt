import React from 'react';
import './pretty.css';
import Spot from './assets/Spotify_Logo_RGB_Green.png';
import PromptPage from './components/PromptPage';
import DisplaySong from './components/DisplaySong';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="title">
      <h2>powered by <a href="http://api.spotify.com"><img src={Spot} height={18}/></a></h2>
      <h1> Writing Prompt Generator </h1>
      </div>
      <PromptPage/>
      <DisplaySong/>
     </div>
  );
}

export default App;
