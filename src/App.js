import React, { Component } from 'react';

// import Jokes from './jokesStore';
import './App.css';
import  upperCase, { text1, text2, text3, person } from './dataStore1';
// import uCase from './dataStore1';
const {fName, email} = person;
import Cars from './carsStore';

class App extends Component {
  render() {
    return (
      <div >
        <header>
          <h1>A warm welcome from React</h1>
        </header>
        <div className="App-intro">
          <p>{text1}</p>
          <p>{text2}</p>                  
          <p>{text3}</p>                  
          <p>{fName}, {email}</p>
          <p>{upperCase('please uppercase me')}</p>
          <p>{Cars.getCar(3)}</p>                                      
        </div>
      </div>
    );
  }
}

export default App;
