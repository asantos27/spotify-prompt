import React, { useState } from 'react';
import { songs } from '../assets/songs';

const Generator = (props) => {
  const generate = () => {
    return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [prompt, setPrompt] = useState(() => generate())

  return (
    <div>
      <button class="button" onClick={() => setPrompt(generate())}><span>New Prompt </span></button>
      <p id="prompt">{prompt}</p>
    </div>
  );
}

export default Generator;