import React, { Component } from 'react';

import './floating-box.css';
class FloatingBoxComponent extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

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