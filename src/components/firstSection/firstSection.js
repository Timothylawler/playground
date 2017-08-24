import React, { Component } from 'react';

import {
  HamburgerCross,
  ExpandingCircles,
  TextCarousel,
  ChatBox,
  FloatingBox,
  Hexagon
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
          
          <div className="item">
            <FloatingBox />
          </div>
          
          <div className="item">
            <Hexagon />
          </div>
        </div>
      </div>
    );
  }
}

export {FirstSection};