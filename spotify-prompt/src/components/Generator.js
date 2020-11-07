import React, { useState } from 'react';

const Generator = (props) => {

  const generate = () => {
    return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [prompt, setPrompt] = useState(() => generate())


  return (
    <div>
      <p id="prompt">{prompt}</p>
      <button onClick={() => setPrompt(generate())}>Generate</button>
    </div>
  );
}

export default Generator;