import React from 'react';
import './App.css';
import PromptPage from './components/PromptPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Spotify Prompt Generator </h1>
      <PromptPage/> 
    </div>
  );
}

export default App;
