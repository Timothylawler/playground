import React, { Component } from 'react';

import {
  HamburgerCross,
  ExpandingCircles,
  TextCarousel,
  ChatBox
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
          <h2>Playground</h2>
        <div className="container">
          <div className="item">
            <HamburgerCross />
          </div>
          <div className="item">
            <ExpandingCircles />
          </div>

          <div className="item">
            <TextCarousel />
          </div>

          <div className="item">
            <ChatBox />
          </div>
        </div>
      </div>
    );
  }
}

export {FirstSection};