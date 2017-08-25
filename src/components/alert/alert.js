import React, { Component } from 'react';

import './alert.css';
class AlertComponent extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="alert">
        <div className="alert-box">
          <div className="alert-wave"></div>
          <div className="alert-wave"></div>
        </div>
      </div>
    );
  }
}
const Alert = AlertComponent;
export {Alert};