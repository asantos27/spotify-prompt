import React, { useState } from 'react';
import RefreshButton from '../assets/refresh.png'

const SongPicker = (props) => {
  const generate = () => {
    return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [songs, setSong] = useState(() => generate())

  return (
    <div>
      <iframe src={songs} width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
      <img src={RefreshButton} width="60" padding="2" onClick={() => setSong(generate())}></img>
    </div>
  );
}

export default SongPicker;