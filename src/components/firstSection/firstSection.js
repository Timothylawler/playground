import React, { Component } from 'react';

import {
  HamburgerCross
} from '../';
import './firstSection.css';
class FirstSection extends Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="first-section">
        <div className="container">
          <h2>firstSection</h2>
          
          <HamburgerCross />
        </div>
      </div>
    );
  }
}

export {FirstSection};