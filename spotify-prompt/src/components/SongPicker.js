import React, { useState } from 'react';

const SongPicker = (props) => {
  const generate = () => {
    return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [songs, setSong] = useState(() => generate())

  return (
    <div>
      <iframe src={songs} width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
      <p></p><button class="button1" onClick={() => setSong(generate())}><span>Change</span></button>
    </div>
  );
}

export default SongPicker;