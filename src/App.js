import React, { Component } from 'react';
import {
  FirstSection,
} from './components'
import {Route} from 'react-router';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        
        <div className="">
          {
            this.props.children || <FirstSection/>
          }
        </div>
        
      </div>
    );
  }
}

export default App;
