import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Age.css';

function Age(props) {
    return <div className="myname">
      This is a function for deducting age by 8 years. Xeeshan's age is 35 and My Age is {props.age-8}
    </div>
}
export default Age;