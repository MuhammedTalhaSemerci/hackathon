

import '../App.css';
import React from 'react'

import {ReactFlvPlayer} from 'react-flv-player'


function live() {
    return (
        <div class="livestrm" >

          
          
          <ReactFlvPlayer
          url = "ws://tr.smtl.me:8081/live/deneme.flv"
          heigh = "100%"
          width = "100%"
          isMuted={true}
        
        />
          
        </div>
    )
}

export default live