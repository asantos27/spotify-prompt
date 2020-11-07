//prompt page (home screen)
import React from 'react';
import Generator from './Generator';
import {prompts} from '../assets/prompts';

const PromptPage = () => {
  return (
    <div>
      <p>Write about:</p>
      <Generator dataset={prompts}/>
    </div>
  );
}

export default PromptPage;