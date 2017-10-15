import React, { Component } from 'react';

import './App.css';
import person from './dataStore2';
const {firstName, lastName} = person;

class App2 extends Component {
  render() {
    return (
      <div >
        <header>
          <h1>Ex-2</h1>
        </header>
        <div className="App-intro">
            <p>{firstName}</p>                           
            {/* <p>{person.lastName}</p> */}
            <p>{lastName}</p>                           
        </div>
      </div>
    );
  }
}

export default App2;
