import logo from './logo.svg';
import './App.css';
import './Video.css';
import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Draggable from 'react-draggable';
import {Player} from 'video-react';

import "/node_modules/video-react/dist/video-react.css";
<link rel="stylesheet" href="/css/video-react.css"/>

function App() {

  const player1Ref = React.createRef();
  const player2Ref = React.createRef();
  const [played, setPlayed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [isPlaying] = useState(false);

  const vidRef = React.createRef(true);

  function doPause(vidRef) {
    if (vidRef != null) {

      let p = vidRef.current.paused;
      console.log(isPlaying);

      {/*if(isPlaying==true){

      }*/
      }
      if (p == true) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  }
  return (<div className="App">
    <div className="Navbar"></div>
    <div className="Main-content">
      <ModuleVideo/>
      <OverlayVideo/>
      <p>
        The merchant of Venice
      </p>

      <input style={{
          width: "100%"
        }} type="range" min={0} max={0.999999} step="any" value={played} onMouseDown={() => {
          setSeeking(true);
        }} onChange={({target: {
            value
          }}) => {
          setPlayed(parseFloat(value));
        }} onMouseUp={({target: {
            value
          }}) => {
          setSeeking(false);
          player1Ref.current.seekTo(parseFloat(value));
          player2Ref.current.seekTo(parseFloat(value));
        }}/>
      <button onClick={() => {
          setPlaying(false);
          player1Ref.current.seekTo(0);
          player2Ref.current.seekTo(0);
        }}>
        Reset
      </button>
      <button onClick={() => {
          setPlaying(true);
        }}>
        Play
      </button>
      <button onClick={() => {
          setPlaying(false);
        }}>
        Pause
      </button>

    </div>

  </div>);

}

class ModuleVideo extends React.Component {
  render() {
    return (<div className="Video-container">
      <Player src="https://www.w3schools.com/html/mov_bbb.mp4"/>

    </div>)
  };
}
function OverlayVideo() {

  return (<Draggable>
    <div className="Overlay-window">
      This is the overlay video

      <Player src=" https://www.w3schools.com/html/mov_bbb.mp4" playsInline={true}/>
      <div className="Bottom-Bar"></div >
    </div>
  </Draggable>);
}

function OldVideo(props) {

  return (<div>

    <Draggable>
      <div className="Overlay-Window">
        This is the overlay video

        <video className="Video2" controls="controls">
          <source src="https://www.w3schools.com/html / mov_bbb.mp4 " type=" video / mp4 "/>
          < source src="movie.ogg" type="video/ogg"/>
          video not work < /video>
          <div className="Bottom-Bar"></div >
        </div>
      </Draggable>

      <button className="button">Play</button >
      <button className="button">
        Pause
      </button>

      <button className="button">
        Switch
      </button >
      <video ref={props.vidRef} className="Video" controls="controls">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
        <source src="movie.ogg" type="video/ogg"/>
        video not work
      </video>

      <p>
        The merchant of Venice
      </p>

    </div>);
}

    export default App;