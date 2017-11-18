import React, { Component } from 'react';

import './ripple-button.css';
class RippleButtonComponent extends Component {
  render() {
    return (
      <div className="ripple-button">
        <button><div className="ripple"></div>RIPPLE</button>
      </div>
    );
  }
}
const RippleButton = RippleButtonComponent;
export {RippleButton};