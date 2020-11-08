import React from 'react';
import './pretty.css';
import Spot from './assets/Spotify_Logo_RGB_Green.png';
import PromptPage from './components/PromptPage';
import DisplaySong from './components/DisplaySong';


function App() {
  return (
    <div id="container">
      <div className="title">
      <h2>powered by <a href="http://api.spotify.com"><img src={Spot} alt="Spotify" height={18}/></a></h2>
      <h1> Writing Prompt Generator </h1>
      <p3> Music-inspired writing prompts to help beat writer's block </p3>
      </div>
      <div id="promptbox">
      <PromptPage/>
      </div>
      <div id="songbox"><DisplaySong/></div>
     </div>
  );
}

export default App;
