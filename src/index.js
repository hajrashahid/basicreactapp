import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Age from './Age';
import Sons from './Sons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div><App name="Hajra Shahid" age={30-3}/><br/>
  <div><Age age={35}/></div><br/>
  <div><Sons name1="Wali" age1={4.5} name2="Hadi" age2={1.5}/></div>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
