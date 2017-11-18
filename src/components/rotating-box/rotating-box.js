import React, { Component } from 'react';

import './rotating-box.css';
class RotatingBoxComponent extends Component {
  render() {
    return (
      <div className="rotating-box">
        <div className="box"></div>
      </div>
    );
  }
}
const RotatingBox = RotatingBoxComponent;
export {RotatingBox};