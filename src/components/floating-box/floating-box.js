import React, { Component } from 'react';

import './floating-box.css';
class FloatingBoxComponent extends Component {
  render() {
    return (
      <div className="floating-box">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    );
  }
}
const FloatingBox = FloatingBoxComponent;
export {FloatingBox};