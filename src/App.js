import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return <div>
          Hello from App.js file
          <div><br/>
            Tree banching in App.js updated by {props.name} age = {props.age}
            </div>
          </div>

}

export default App;

