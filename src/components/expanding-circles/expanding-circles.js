import React, { Component } from 'react';

import './expanding-circles.css';
class ExpandingCirclesComponent extends Component {
  render() {
    return (
      <div className="expanding-circles">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    );
  }
}
const ExpandingCircles = ExpandingCirclesComponent;
export {ExpandingCircles};