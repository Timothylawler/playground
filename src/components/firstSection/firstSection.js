import React, { Component } from 'react';

import {
  HamburgerCross,
  ExpandingCircles,
  TextCarousel,
  ChatBox,
  FloatingBox,
  HexagonBox,
  RotatingBox,
  ButtonMenu,
  RippleButton,
  Alert,
  PopoutMenu,
  JumpingBalls
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
            <HexagonBox />
          </div>
          
          <div className="item">
            <RotatingBox />
          </div>

          <div className="item">
            <ButtonMenu />
          </div>
          
          <div className="item">
            <RippleButton />
          </div>

          <div className="item">
            <Alert />
          </div>
          <div className="item">
            <PopoutMenu />
          </div>
          
          <div className="item">
            <JumpingBalls />
          </div>
        </div>
      </div>
    );
  }
}

export {FirstSection};