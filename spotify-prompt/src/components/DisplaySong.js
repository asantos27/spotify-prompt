//prompt page (home screen)
import React from 'react';
import SongPicker from './SongPicker';
import {songs} from '../assets/songs';
const PromptPage = () => {
  return (
    <div className="topic">
      <SongPicker dataset={songs}/>
    </div>
  );
}

export default PromptPage;