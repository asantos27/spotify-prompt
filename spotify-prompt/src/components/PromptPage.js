//prompt page (home screen)
import React from 'react';
import Generator from './Generator';
import {prompts} from '../assets/prompts';
const PromptPage = () => {
  return (
    <div className="topic">
      <p2><Generator dataset={prompts}/></p2>
    </div>
  );
}

export default PromptPage;