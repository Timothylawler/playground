import React, { Component } from 'react';

import './jumping-balls.css';
class JumpingBallsComponent extends Component {


  render() {
    return (
      <div className="jumping-balls" >
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
      </div>
    );
  }
}
const JumpingBalls = JumpingBallsComponent;
export {JumpingBalls};