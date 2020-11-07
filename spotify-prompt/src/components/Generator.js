import React, { useState } from 'react';

const Generator = (props) => {

  const generate = () => {
    return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [prompt, setPrompt] = useState(() => generate())


  return (
    <div>
      <p id="prompt">{prompt}</p>
      <button class="button" onClick={() => setPrompt(generate())}><span>Next </span></button>
    </div>
  );
}

export default Generator;