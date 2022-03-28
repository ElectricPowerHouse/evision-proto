import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Draggable from 'react-draggable';




function App() {
  return (
    <div className="App">
      <div className = "Navbar">
      </div>
      <header className="App-header">
      <Draggable>
      <div className="Overlay-Window">
      This is the overlay video

      <video className="Video2" width='1000' height='2000' controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        video not work
      </video>
      </div>
       </Draggable>

      <video className="Video" width='1000' height='2000' controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        video not work
      </video>

        <p>
        The merchant of Venice
        </p>

      </header>

    </div>
  );
}

export default App;
