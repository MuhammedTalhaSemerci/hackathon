import React, { Component } from 'react';
import {ReactFlvPlayer} from 'react-flv-player'

import './App.css';

function App() {
  return (
    <div>
        <ReactFlvPlayer
          url = "ws://tr.smtl.me:8081/live/deneme.flv"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
      </div>
  );
}

export default App;










